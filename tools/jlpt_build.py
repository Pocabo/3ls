"""JLPT 단어장(packs/jlpt-n*.json) 생성기 — 서재에서 골라 받는 팩

낱말 목록 : Jonathan Waller JLPT 어휘 목록 (CC BY)
            https://github.com/stephenmk/yomitan-jlpt-vocab  original_data/n1~n5.csv (CC BY-SA 4.0)
한국어 뜻 : 국립국어원 한국어기초사전 (CC BY-SA 2.0 KR)
            「사전 전체 내려받기」 XML — https://github.com/spellcheck-ko/korean-dict-nikl 의 krdict/ 와 같다
            사전으로 못 찾은 낱말은 tools/jlpt_manual.tsv (사람이 적음)
영어 뜻   : Waller 목록의 영어 뜻

한국어 뜻은 이 스크립트가 만들지 않는다. 한국어기초사전 표제어의 일본어 대역어 중
목록 낱말과 표기가 맞는 것을 찾아, 그 한국어 표제어를 그대로 적는다.
  1등급  대역어의 표기·요미가 목록과 모두 같다.
         な형용사는 사전이 「明らかだ」처럼 적으므로 だ 를 붙여서도 본다.
         「我慢する」만 있으면 뜻 앞에 (〜する) 를 붙인다.
  2등급  한자 둘 이상인 표기가 같고 요미만 다르거나(上下 うえした/じょうげ),
         목록이 가나로만 적은 낱말이 사전에 한자 표기로 있다.
         동음이의가 섞이므로 같은 뜻의 영어 대역어가 Waller 영어 뜻과
         낱말 하나 이상 겹칠 때만 쓴다.
  3등급  한자어의 원어(정자)가 목록 표기와 같고 영어 뜻이 겹친다 — 愛憎 → 애증.
  직접   tools/jlpt_manual.tsv — 셋 다 못 찾은 낱말, 그리고 사전 매칭이 틀려 사람이 고친 낱말.
         여기 적은 뜻이 사전보다 우선한다. 어디에도 없으면 싣지 않고 --todo 파일로 뽑는다.

  python tools/jlpt_build.py <krdict XML 폴더> <Waller csv 폴더> [등급 …] [--todo 파일]
  예) python tools/jlpt_build.py ../nikl/krdict ../yomitan-jlpt-vocab/original_data 3 1
"""
import sys, os, re, io, csv, glob, collections
import xml.etree.ElementTree as ET
sys.stdout.reconfigure(encoding='utf-8')

args = sys.argv[1:]
TODO = args[args.index('--todo') + 1] if '--todo' in args else None     # 못 찾은 낱말 목록을 쓸 파일
if TODO: del args[args.index('--todo'):args.index('--todo') + 2]
KRDICT, WALLER = args[0], args[1]
BUILD = [int(x) for x in args[2:]] or [3, 1]
HERE = os.path.dirname(os.path.abspath(__file__))
OUTDIR = os.path.join(HERE, '..', 'packs')

# ── 1. 한국어기초사전 → 일본어 대역어 역색인 ───────────────────────────
CTRL = re.compile(rb'[\x00-\x08\x0b\x0c\x0e-\x1f]')   # 아랍어 뜻풀이에 섞인 제어문자 — XML 파서가 멈춘다
ITEM = re.compile(r'^(?P<kana>[^【】]*?)\s*(?:【(?P<kanji>[^】]+)】)?$')

def feats(el):
    return {f.get('att'): f.get('val') for f in el.findall('feat')}

def split_ja(s):
    """'はし【端】。ふち【縁】' → [('はし','端'), ('ふち','縁')]"""
    out = []
    for part in re.split(r'[。;；]', s):
        part = part.replace('　', ' ').strip()
        if not part or '対訳語無し' in part: continue
        m = ITEM.match(part)
        if not m: continue
        kana, kanji = m['kana'].strip(), (m['kanji'] or '').strip()
        for kj in (re.split(r'[・／/]', kanji) if kanji else ['']):   # 【端・縁】
            out.append((kana, kj.strip()))
    return out

assert split_ja('はし【端】。ふち【縁】') == [('はし', '端'), ('ふち', '縁')]
assert split_ja('ほとり。へり　') == [('ほとり', ''), ('へり', '')]

SKIP_POS = {'접사', '어미', '조사'}
by_pair, by_kanji, by_kana = (collections.defaultdict(list) for _ in range(3))
by_origin = collections.defaultdict(list)       # 한자어 원어(정자) → 표제어
variants = collections.Counter()                 # (일본 신자체, 한국 정자) — 같은 낱말의 원어와 일본어 대역어를 글자끼리 맞대어 모은다
HANJA = re.compile(r'^([一-鿿々]+)([가-힣]*)$')
files = sorted(glob.glob(os.path.join(KRDICT, '*.xml')))
if not files: sys.exit(f'XML 이 없다: {KRDICT}')
for path in files:
    raw = CTRL.sub(b'', open(path, 'rb').read())
    for _, el in ET.iterparse(io.BytesIO(raw), events=('end',)):
        if el.tag != 'LexicalEntry': continue
        f = feats(el)
        lemma = el.find('Lemma')
        ko = feats(lemma).get('writtenForm', '') if lemma is not None else ''
        if f.get('partOfSpeech') in SKIP_POS or ko.startswith('-') or ko.endswith('-'):
            el.clear(); continue
        om = HANJA.match(f.get('origin', ''))
        sense_en = []
        for si, sense in enumerate(el.findall('Sense'), 1):
            eqs = [feats(e) for e in sense.findall('Equivalent')]
            en = ' '.join(e.get('lemma', '') + ' ' + e.get('definition', '') for e in eqs if e.get('language') == '영어')
            sense_en.append(en)
            if om:
                for e in eqs:
                    if e.get('language') != '일본어': continue
                    for _, kj in split_ja(e.get('lemma', '')):
                        if len(kj) == len(om[1]) and kj != om[1]:
                            variants.update((a, b) for a, b in zip(kj, om[1]) if a != b)
            for e in eqs:
                if e.get('language') != '일본어' or not e.get('lemma'): continue
                for ri, (kana, kanji) in enumerate(split_ja(e['lemma'])):
                    r = {'kana': kana, 'kanji': kanji, 'ko': ko.replace('^', ' '),
                         'lvl': f.get('vocabularyLevel', ''), 'sense': si, 'rank': ri, 'en': en}
                    by_pair[(kana, kanji)].append(r)
                    if kanji: by_kanji[kanji].append(r)
                    if kana: by_kana[kana].append(r)
        if om:
            by_origin[om[1]].append({'ko': ko.replace('^', ' '), 'suffix': om[2], 'en': sense_en,
                                     'lvl': f.get('vocabularyLevel', '')})
        el.clear()
# 글자 변환표(学→學, 労→勞 …). 같은 길이의 다른 낱말끼리 맞대어진 잡음(心→念)을 거르려고
# 한국 원어에 거의 안 쓰이는 일본 글자만, 그리고 글자마다 가장 많이 맞대어진 짝 하나만 쓴다.
ko_chars = collections.Counter(c for o in by_origin for c in o)
KYU = {}
for (a, b), c in variants.most_common():
    if c >= 2 and ko_chars[a] <= 2 and a not in KYU: KYU[a] = {b}
print(f'한국어기초사전 XML {len(files)}개 읽음 — 일본어 대역어 {sum(map(len, by_pair.values()))}개')

# ── 2. 맞춰 보기 ─────────────────────────────────────────────────
STOP = set('the and for with from that this one ones something someone thing things being have make made into onto '
           'not out off over under its about very more most such than then when what which who whom whose your '
           'his her their our are was were been can will would used use way kind state act etc'.split())
def words(s):
    return {w for w in re.findall(r'[a-z]{3,}', s.lower()) if w not in STOP}

CJK = re.compile(r'[一-鿿々]')
LVL = {'초급': 0, '중급': 1, '고급': 2}

def candidates(kana, kanji, en):
    exact = list(by_pair.get((kana, kanji), []))
    exact += by_pair.get((kana + 'だ', kanji + 'だ' if kanji else ''), [])
    if exact: return [(1, '', r) for r in exact]
    suru = by_pair.get((kana + 'する', kanji + 'する' if kanji else ''), [])
    if suru: return [(1, '(〜する) ', r) for r in suru]
    if kanji:
        loose = [r for r in by_kanji.get(kanji, []) if len(CJK.findall(kanji)) >= 2]
    else:
        loose = [r for r in by_kana.get(kana, []) if r['kanji']]
    ew = words(en)
    return [(2, '', r) for r in loose if ew & words(r['en'])]

def by_hanja(kanji, en, k=3):
    """3등급: 목록 표기가 한국어 표제어의 원어(한자)와 같고, 영어 뜻이 겹친다 — 愛憎 → 애증"""
    if len(kanji) < 2 or not all(CJK.match(c) for c in kanji): return ''
    ew, forms = words(en), ['']
    for c in kanji:
        forms = [f + v for f in forms for v in ({c} | KYU.get(c, set()))][:64]
    hits = [r for f in forms for r in by_origin.get(f, []) if any(ew & words(e) for e in r['en'])]
    hits.sort(key=lambda r: (r['suffix'] != '', LVL.get(r['lvl'], 3)))      # 「명백」 이 「명백하다」 보다 먼저
    return ', '.join(list(dict.fromkeys(r['ko'] for r in hits))[:k])

# 사전 셋 다 못 찾은 낱말의 뜻 — 사람이 적고 검수한다 (표기 TAB 요미 TAB 뜻 [TAB 영어 덮어쓰기])
MANUAL = {}
for line in open(os.path.join(HERE, 'jlpt_manual.tsv'), encoding='utf-8'):
    if line.strip() and not line.startswith('#'):
        kj, kn, ko, *en = line.rstrip('\n').split('\t')
        if ko or en: MANUAL[(kj, kn)] = (ko, en[0] if en else '')     # 뜻 칸이 비면 영어만 덮어쓴다

def gloss(cands, en, k=3):
    """사전 표제어 셋까지 — 앞 대역어·앞 뜻·쉬운 등급·영어 뜻이 겹치는 것 순"""
    ew, best = words(en), {}
    for tier, pre, r in cands:
        score = r['rank'] * 10 + (r['sense'] - 1) * 3 + LVL.get(r['lvl'], 3) * 2 - (8 if ew & words(r['en']) else 0)
        if r['ko'] not in best or score < best[r['ko']][0]: best[r['ko']] = (score, tier, pre)
    top = sorted(best.items(), key=lambda x: x[1][0])[:k]
    if not top: return '', None
    return top[0][1][2] + ', '.join(ko for ko, _ in top), min(t for _, (_, t, _) in top)

# 같은 등급 안 같은 JMdict 항목은 한 줄로, 등급끼리 겹치면 쉬운 등급에만
seen, result = set(), {}
for n in (5, 4, 3, 2, 1):
    groups = collections.OrderedDict()
    for r in csv.DictReader(open(os.path.join(WALLER, f'n{n}.csv'), encoding='utf-8')):
        if r['jmdict_seq']: groups.setdefault(r['jmdict_seq'], []).append(r)   # ID 없는 행은 「依 い」 같은 조각
    out = []
    for seq, rows in groups.items():
        if seq in seen: continue
        seen.add(seq)
        en = ', '.join(dict.fromkeys(d for r in rows if (d := r['waller_definition'].strip())))
        en = ', '.join(dict.fromkeys(re.sub(r',(?=\S)', ', ', en).split(', ')))   # 「to bear, to endure, to bear」
        # 표기가 둘이면(옛 표기·고친 표기) 사전에 걸리는 쪽 — 같으면 뒤에 오는 고친 표기
        scored = []
        for i, r in enumerate(rows):
            ko, tier = gloss(candidates(r['kana'], r['kanji'], en), en)
            scored.append((tier or 9, -i, r, ko))
        tier, _, r, ko = min(scored, key=lambda x: (x[0], x[1]))
        if not ko:
            for x in rows:
                if (ko := by_hanja(x['kanji'], en)): tier, r = 3, x; break
        man = next(((x, MANUAL[(x['kanji'], x['kana'])]) for x in rows if (x['kanji'], x['kana']) in MANUAL), None)
        if man and man[1][1]: en = man[1][1]                   # Waller 영어 뜻이 비었거나 요미와 안 맞음
        if man and man[1][0]:                                   # 사람이 적은 뜻이 사전 매칭보다 우선
            r, (ko, _) = man
            tier = 4
            if ko == '-': ko, tier = '', 'x'                    # 조각 행 — 싣지도, 할 일로 뽑지도 않는다
        out.append({'kana': r['kana'], 'kanji': r['kanji'], 'en': en, 'ko': ko,
                    'tier': tier if ko or tier == 'x' else None})
    result[n] = out
    c = collections.Counter(x['tier'] for x in out)
    print(f'N{n}: {len(out):5}개 — 사전 1등급 {c[1]} · 2등급 {c[2]} · 3등급 {c[3]} · 직접 {c[4]} · 뺌 {c["x"]} · 못 찾음 {c[None]}')

if TODO:
    with open(TODO, 'w', encoding='utf-8') as f:
        for n in BUILD:
            for x in result[n]:
                if x['tier'] is None: f.write(f"{x['kanji']}\t{x['kana']}\t\t# N{n} {x['en']}\n")
    print('못 찾은 낱말 →', TODO)

# ── 3. 팩 쓰기 — 오십음도 10행 ─────────────────────────────────────
ROWS = [('あ', 'あ행 (a·i·u·e·o)', 'あいうえおぁぃぅぇぉゔ'), ('か', 'か행 (ka·ga)', 'かきくけこがぎぐげご'),
        ('さ', 'さ행 (sa·za)', 'さしすせそざじずぜぞ'), ('た', 'た행 (ta·da)', 'たちつてとだぢづでど'),
        ('な', 'な행 (na)', 'なにぬねの'), ('は', 'は행 (ha·ba·pa)', 'はひふへほばびぶべぼぱぴぷぺぽ'),
        ('ま', 'ま행 (ma)', 'まみむめも'), ('や', 'や행 (ya)', 'やゆよゃゅょ'), ('ら', 'ら행 (ra)', 'らりるれろ'),
        ('わ', 'わ행 (wa·n)', 'わをん')]
def hira(s):
    return ''.join(chr(ord(c) - 0x60) if 'ァ' <= c <= 'ヶ' else c for c in s)
def row_of(kana):
    c = hira(kana)[:1]
    for i, (_, _, chars) in enumerate(ROWS):
        if c in chars: return i
    raise ValueError(f'오십음도 행을 모른다: {kana}')

assert row_of('ガム') == 1 and row_of('ぱん') == 5 and hira('ヨーロッパ') == 'よーろっぱ'


import json

LICENSE = 'CC BY-SA 4.0'
def source(n):
    return (f'낱말 목록·영어 뜻: Jonathan Waller JLPT N{n} 어휘 목록(CC BY), stephenmk/yomitan-jlpt-vocab 정리본(CC BY-SA 4.0). '
            '한국어 뜻: 국립국어원 「한국어기초사전」 일본어 대역어(CC BY-SA 2.0 KR), '
            '사전에 없는 낱말은 tools/jlpt_manual.tsv. 이 팩은 위 자료를 가공한 것으로 CC BY-SA 4.0 을 따른다.')

index_path = os.path.join(OUTDIR, 'index.json')
index = json.load(open(index_path, encoding='utf-8')) if os.path.exists(index_path) else {'docs': []}
index['_comment'] = ('3Ls 서재의 「단어장」 목록. 서재 화면을 열 때 이 파일만 읽고, 본문은 [받기]를 누른 것만 내려받는다. '
                     'service-worker.js 의 APP_SHELL 에 packs/ 를 넣지 말 것. JLPT 항목은 tools/jlpt_build.py 가 고쳐 쓴다(순서는 그대로 둔다).')

for n in BUILD:
    items = [x for x in result[n] if x['ko']]
    rows = [[] for _ in ROWS]
    for x in sorted(items, key=lambda x: (hira(x['kana']), x['kanji'])):
        rows[row_of(x['kana'])].append(x)
    levels = []
    for i, ((_, title, _), ws) in enumerate(zip(ROWS, rows), 1):
        words = []
        for x in ws:
            w = {'w': x['kanji'] or x['kana'], 'ipa': x['kana'] if x['kanji'] else ''}
            if x['kanji']: w['say'] = x['kana']
            w['m'] = {'kr': x['ko'], **({'en': x['en']} if x['en'] else {})}
            words.append(w)
        levels.append({'level': i, 'title': {'kr': title, 'en': title.replace('행', ' row')},
                       'sub': {'kr': f'{len(ws)}단어', 'en': f'{len(ws)} words'}, 'words': words})
    pack = {'id': f'jlpt-n{n}', 'target': 'ja', 'extra': True,
            'menuLabel': {'kr': f'N{n} 단어', 'en': f'N{n} vocabulary'},
            'name': {'kr': f'JLPT N{n} 단어 사전', 'en': f'JLPT N{n} Vocabulary'},
            'nativeName': f'N{n} 単語', 'flag': '🇯🇵', 'tts': 'ja-JP', 'dictionary': True,
            'desc': {'kr': f'JLPT N{n} 어휘 {len(items)}단어 — 오십음도 순',
                     'en': f'{len(items):,} JLPT N{n} words in gojūon order'},
            'source': source(n), 'license': LICENSE,      # 엔진은 읽지 않는다 — 출처 표기용
            'specialChars': [], 'columnLabels': {'ipa': {'kr': '읽기', 'en': 'Reading'}},
            'columnOrder': ['word', 'ipa', 'meaning', 'speak'], 'levels': levels}
    text = json.dumps(pack, ensure_ascii=False, separators=(',', ':'))
    path = os.path.join(OUTDIR, f'jlpt-n{n}.json')
    open(path, 'w', encoding='utf-8', newline='\n').write(text)

    manual = sum(1 for x in items if x['tier'] == 4)
    lower = '·'.join(f'N{k}' for k in range(n + 1, 6))
    lower_en = ', '.join(f'N{k}' for k in range(n + 1, 6))
    doc = {'id': pack['id'], 'file': f'jlpt-n{n}.json', 'name': pack['name'], 'flag': '🇯🇵', 'target': 'ja',
           'words': len(items), 'size': f'{round(len(text.encode()) / 1024)} KB',
           'desc': {'kr': (f'JLPT N{n} 어휘를 오십음도(あ~わ행) 순으로 모은 열람용 사전. 읽기·한국어 뜻·영어 뜻이 붙어 있습니다. '
                           + (f'{lower}에도 나오는 낱말은 그쪽 등급에 맡겼습니다. ' if lower else '')
                           + f'낱말 목록은 Waller JLPT 목록, 뜻은 한국어기초사전({len(items) - manual}단어)과 직접 작성({manual}단어). '
                           + LICENSE + '.'),
                    'en': (f'A browse-only Japanese–English dictionary of the JLPT N{n} vocabulary in gojūon order, with readings. '
                           + (f'Words also listed at {lower_en} are left to those levels. ' if lower else '')
                           + f'Word list and English glosses: Jonathan Waller\'s JLPT lists. ' + LICENSE + '.')}}
    i = next((k for k, d in enumerate(index['docs']) if d['id'] == doc['id']), None)
    if i is None: index['docs'].append(doc)
    else: index['docs'][i] = doc                                   # 목록 순서는 그대로 둔다
    print(f'→ {os.path.normpath(path)}  {len(items)}단어 {doc["size"]}  ' + ' '.join(f'{t[0]}{len(ws)}' for t, ws in zip(ROWS, rows)))

json.dump({'_comment': index.pop('_comment'), **index}, open(index_path, 'w', encoding='utf-8', newline='\n'),
          ensure_ascii=False, indent=1)
