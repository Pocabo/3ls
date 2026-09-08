#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
평문 원서(.txt / .md) → 3Ls 서재 언어팩(JSON) 변환기.

3Ls 엔진은 언어를 모르고, 읽기 자료도 그냥 언어팩이다. 이 스크립트는
평문 텍스트를 그 언어팩 모양으로 바꿔준다.

작성법은 tools/원서-작성법.md 를 보라. 요약하면:

    # 불가타 — 창세기            <- (선택) '# '로 시작하면 글 전체 제목
    ## 1장                       <- '## '로 시작하면 새 편(장). 목차 항목이 된다
    1:1  In principio ...        <- '표지<공백 2칸 이상 또는 탭>본문'
    1:2  Terra autem ...
    In principio ...             <- 표지 없이 본문만 써도 된다
                                 <- 빈 줄은 문단 나눔(p:true)

줄 쪼개는 방식(--split)
-----------------------
    line      한 줄이 곧 한 줄 (기본). 성경·시처럼 이미 절 단위로 나뉜 파일
    sentence  문단을 문장 단위로 쪼갬. 소설처럼 문단이 여러 줄에 걸친 파일
    para      문단 하나가 한 줄. 편지·수필처럼 문단이 짧은 글

    ⚠️ sentence 는 반드시 틀리는 데가 있다(약어·대화문). 결과를 눈으로 확인하라.
       tools/mkreading_gui.pyw 를 쓰면 미리보기에서 줄을 합치고 나눌 수 있다.

번역·주석은 이 스크립트가 만들지 않는다(지어내면 안 되므로).
필요하면 나온 JSON의 각 줄에 m:{...} / note:[...] 를 직접 얹으면 된다.

사용
----
    python tools/mkreading.py 원문.txt \
        --id la-vulgata-genesis --target la --name "불가타 — 창세기" \
        --source "Biblia Sacra Vulgata (public domain)" \
        --tts it-IT --out library/la-vulgata-genesis.json

--gloss 로 낱말 용어집 TSV(낱말<TAB>뜻)를 붙이면 원문에서 낱말을 더블클릭했을 때
굴절형까지 뜻이 뜬다. 없어도 동작한다(그 경우 사전 표제어와 정확히 맞는 낱말만 뜬다).
"""
import argparse
import json
import os
import re
import sys

# 윈도우 기본 콘솔(cp949)에서도 진행 메시지가 깨지지 않게 한다
try:
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')
except Exception:
    pass

SPLIT_MARK = re.compile(r'^(\S{1,16}?)(?:\t| {2,})\s*(.+)$')   # '1:3  본문' 또는 '1:3<TAB>본문'

# 마크다운 인라인 표기 벗기기 — 읽기 화면은 원문 글자만 필요하다
MD_RULES = [
    (re.compile(r'!\[[^\]]*\]\([^)]*\)'), ''),             # 이미지
    (re.compile(r'\[([^\]]*)\]\([^)]*\)'), r'\1'),         # 링크 → 글자만
    (re.compile(r'\*\*([^*]+)\*\*'), r'\1'),
    (re.compile(r'__([^_]+)__'), r'\1'),
    (re.compile(r'(?<!\*)\*([^*]+)\*(?!\*)'), r'\1'),
    (re.compile(r'(?<!_)_([^_]+)_(?!_)'), r'\1'),
    (re.compile(r'`([^`]+)`'), r'\1'),
    (re.compile(r'^\s{0,3}>\s?'), ''),                     # 인용
    (re.compile(r'^\s{0,3}[-*+]\s+'), ''),                 # 목록 기호
]
MD_RULE = re.compile(r'^\s{0,3}([-*_])(?:\s*\1){2,}\s*$')  # --- *** ___ 구분선

# 문장 끝: 서양 종결부호 + 뒤따르는 닫는 따옴표/괄호 + 공백, 또는 CJK 종결부호
SENT_END = re.compile(
    r'(?:[.!?…]+["\'”’»)\]]*\s+|[。！？]+["」』）]*\s*)')

# 이 낱말 뒤의 마침표는 문장 끝이 아니다
ABBREV = {
    'mr', 'mrs', 'ms', 'dr', 'prof', 'st', 'sr', 'jr', 'vs', 'etc', 'cf',
    'vol', 'no', 'fig', 'ch', 'chap', 'p', 'pp', 'al', 'ca', 'ibid', 'op',
    'inc', 'ltd', 'co', 'approx', 'est', 'min', 'max', 'i.e', 'e.g',
}


def clean_md(line):
    """마크다운 인라인 표기를 벗긴다. 구분선이면 None."""
    if MD_RULE.match(line):
        return None
    for pat, sub in MD_RULES:
        line = pat.sub(sub, line)
    return line.strip()


def split_sentences(text):
    """문단 하나를 문장 목록으로. 약어·이니셜 뒤에서는 끊지 않는다.

    완벽하지 않다 — 자동 분할은 늘 틀리는 데가 있으니 결과를 눈으로 봐야 한다.
    """
    out, start = [], 0
    for m in SENT_END.finditer(text):
        end = m.end()
        head = text[start:end].strip()
        if not head:
            continue
        # 마지막 낱말이 약어이거나 한 글자 이니셜(J. R. R.)이면 문장이 안 끝난 것
        w = re.search(r'([\w.]+)[.!?…]+["\'”’»)\]]*\s*$', head)
        if w:
            token = w.group(1).rstrip('.').lower()
            if token in ABBREV or (len(token) == 1 and w.group(1)[0].isupper()):
                continue
        # 다음 글자가 소문자면 아직 문장 중간(라틴문자권에서만 유효한 신호)
        nxt = text[end:end + 1]
        if nxt and nxt.isalpha() and nxt.islower():
            continue
        out.append(head)
        start = end
    tail = text[start:].strip()
    if tail:
        out.append(tail)
    return out


def parse(path, mode='line'):
    """텍스트 파일 → (전체 제목, [ {title, lines:[{n,t,p}]} ])

    mode: 'line' 한 줄이 한 줄 / 'sentence' 문장 단위 / 'para' 문단 단위
    """
    with open(path, encoding='utf-8') as f:
        raw_lines = f.read().split('\n')
    return parse_lines(raw_lines, mode, os.path.basename(path))


def parse_lines(raw_lines, mode='line', fallback_title='원문'):
    title, docs, cur = None, [], None
    buf = []          # mode != 'line' 일 때 모으는 중인 문단
    gap = False       # 직전에 빈 줄이 있었나

    def ensure_doc():
        nonlocal cur
        if cur is None:
            cur = {'title': title or fallback_title, 'lines': []}
            docs.append(cur)
        return cur

    def flush():
        """모아둔 문단을 mode 에 맞게 줄로 바꿔 현재 편에 넣는다."""
        nonlocal buf
        if not buf:
            return
        text = ' '.join(buf).strip()
        buf = []
        if not text:
            return
        d = ensure_doc()
        parts = split_sentences(text) if mode == 'sentence' else [text]
        for i, part in enumerate(parts):
            item = {'t': part}
            if i == 0 and d['lines']:
                item['p'] = True         # 문단이 바뀌는 자리
            d['lines'].append(item)

    for raw in raw_lines:
        line = clean_md(raw.rstrip())
        if line is None:                 # 구분선
            continue
        if not line:
            flush()
            gap = True
            continue
        if line.startswith('## '):
            flush()
            cur = {'title': line[3:].strip(), 'lines': []}
            docs.append(cur)
            gap = False
            continue
        if line.startswith('# ') and title is None and not docs and not buf:
            title = line[2:].strip()
            continue

        if mode == 'line':
            d = ensure_doc()
            m = SPLIT_MARK.match(line)
            item = {'n': m.group(1), 't': m.group(2).strip()} if m else {'t': line}
            if gap and d['lines']:
                item['p'] = True
            gap = False
            d['lines'].append(item)
        else:
            buf.append(line)
    flush()
    return title, docs


def load_gloss(path):
    """낱말 용어집 TSV (낱말<TAB>뜻) → dict"""
    g = {}
    with open(path, encoding='utf-8') as f:
        for raw in f:
            if not raw.strip() or raw.startswith('#'):
                continue
            parts = raw.rstrip('\n').split('\t')
            if len(parts) >= 2 and parts[0].strip():
                g[parts[0].strip()] = parts[1].strip()
    return g


def build_pack(docs, pack_id, target, name, source='', tts='', flag='📜',
               base='kr', gloss=None):
    """편 목록 → 3Ls 언어팩 dict"""
    for i, d in enumerate(docs):
        d.setdefault('id', '%s-%d' % (pack_id, i + 1))
        if source:
            d.setdefault('source', source)

    pack = {
        'id': pack_id,
        'target': target,
        'name': name,
        'extra': True,              # 같은 target 카드의 ▾ 로 들어간다
        'menuLabel': name,
        'flag': flag,
        'bases': [base],            # 번역이 아직 없어도 이 base에서 보이게 한다
        'desc': source or name,
        'specialChars': [],
        'levels': [{
            'level': 1,
            'title': name,
            'desc': '%d편 · %d줄' % (len(docs), sum(len(d['lines']) for d in docs)),
            'words': [],
            'reading': docs,
        }],
    }
    if gloss:
        # 팩 단위로 한 번만 둔다 — 편마다 복사하면 50장짜리에서 같은 표가 50번 들어간다.
        # 특정 편에만 다른 뜻을 주고 싶으면 그 편에 gloss 를 직접 넣으면 먼저 적용된다.
        pack['gloss'] = gloss
    if tts:
        pack['tts'] = tts
    return pack


def write_pack(pack, out_path):
    os.makedirs(os.path.dirname(out_path) or '.', exist_ok=True)
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(pack, f, ensure_ascii=False, indent=1)
    return os.path.getsize(out_path) / 1024


def index_entry(pack, out_path, kb):
    """library/index.json 에 넣을 항목"""
    docs = pack['levels'][0]['reading']
    return {
        'id': pack['id'],
        'file': os.path.basename(out_path),
        'name': pack['name'],
        'target': pack['target'],
        'lines': sum(len(d['lines']) for d in docs),
        'size': '%.0f KB' % kb,
        'desc': pack.get('desc', ''),
    }


def update_index(index_path, entry):
    """library/index.json 에 항목을 넣거나 갱신한다. 손으로 옮겨 적을 필요를 없앤다."""
    data = {'docs': []}
    if os.path.exists(index_path):
        with open(index_path, encoding='utf-8') as f:
            data = json.load(f)
    docs = data.setdefault('docs', [])
    for i, d in enumerate(docs):
        if d.get('id') == entry['id']:
            docs[i] = {**d, **entry}       # 사람이 손본 desc 등은 남기고 수치만 갱신
            break
    else:
        docs.append(entry)
    with open(index_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=1)
        f.write('\n')


def main():
    ap = argparse.ArgumentParser(description='평문 원서를 3Ls 서재 언어팩(JSON)으로 바꾼다.')
    ap.add_argument('src')
    ap.add_argument('--id', required=True, help="팩 id (예: la-vulgata-genesis)")
    ap.add_argument('--target', required=True, help="학습 언어 코드 (예: la)")
    ap.add_argument('--name', help='카드/메뉴에 뜰 이름 (없으면 파일 첫 줄의 # 제목)')
    ap.add_argument('--source', default='', help='출처 한 줄')
    ap.add_argument('--tts', default='', help='Web Speech 로케일. 비우면 발음 버튼이 숨는다')
    ap.add_argument('--flag', default='📜')
    ap.add_argument('--base', default='kr', help='이 팩을 노출할 설명 언어 (기본 kr)')
    ap.add_argument('--gloss', help='낱말 용어집 TSV (낱말<TAB>뜻)')
    ap.add_argument('--split', choices=['line', 'sentence', 'para'], default='line',
                    help='줄 쪼개는 방식 (기본 line)')
    ap.add_argument('--index', help='갱신할 library/index.json 경로 (생략하면 항목만 출력)')
    ap.add_argument('--out', required=True)
    a = ap.parse_args()

    title, docs = parse(a.src, a.split)
    if not docs:
        sys.exit('본문이 없습니다: ' + a.src)

    pack = build_pack(docs, a.id, a.target, a.name or title or a.id,
                      a.source, a.tts, a.flag, a.base,
                      load_gloss(a.gloss) if a.gloss else None)
    kb = write_pack(pack, a.out)
    entry = index_entry(pack, a.out, kb)

    print('%s — %d편 %d줄, %.0f KB' % (a.out, len(docs), entry['lines'], kb))
    if a.index:
        update_index(a.index, entry)
        print('%s 갱신함' % a.index)
    else:
        print('library/index.json 에 넣을 항목:')
        print(json.dumps(entry, ensure_ascii=False, indent=1))


if __name__ == '__main__':
    main()
