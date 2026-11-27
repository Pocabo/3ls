"""서재·언어 목록(index.json) 갱신 — 버전을 올리기 전에 한 번 돌린다.

  python tools/catalog.py

library/ · packs/ · languages/ 의 index.json 을 읽어, 항목마다 실제 파일에서 다시 잰다.
  size   파일 크기 ("18 KB")
  rev    파일 내용 해시 앞 12자리 — 받아 둔 판과 다르면 앱이 [업데이트] 를 띄운다
  words  낱말 수 (단어장·언어만)
  bases  뜻이 들어 있는 base 목록 — 언어 선택 화면이 받기 전에도 base 로 거른다 (단어장·언어만)
  flag · nativeName · names   언어 카드에 쓰는 표시 정보 (언어만, 팩에 있을 때)
나머지 필드(id·file·target·name·desc·lines …)와 항목 순서는 그대로 둔다.
jlpt_build.py 는 JLPT 항목을 통째로 다시 쓰므로, 그걸 돌린 뒤에도 이걸 다시 돌린다.
"""
import sys, os, json, hashlib
sys.stdout.reconfigure(encoding='utf-8')
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')

def bases_of(pack):
    s = set(pack.get('bases') or [])
    for L in pack.get('levels') or []:
        for w in L.get('words') or []:
            s |= {k for k, v in (w.get('m') or {}).items() if str(v).strip()}
    return sorted(s, key=lambda b: (b != 'kr', b))

assert bases_of({'levels': [{'words': [{'m': {'en': 'a', 'kr': 'b'}}, {'m': {'ja': ''}}]}]}) == ['kr', 'en']

for shelf, rich in (('library', False), ('packs', True), ('languages', True)):
    path = os.path.join(ROOT, shelf, 'index.json')
    idx = json.load(open(path, encoding='utf-8'))
    for d in idx['docs']:
        raw = open(os.path.join(ROOT, shelf, d['file']), 'rb').read()
        d['size'] = f"{max(1, round(len(raw) / 1024))} KB"
        d['rev'] = hashlib.sha1(raw).hexdigest()[:12]
        if rich:
            pack = json.loads(raw)
            d['words'] = sum(len(L.get('words') or []) for L in pack['levels'])
            d['bases'] = bases_of(pack)
            if shelf == 'languages':
                for k in ('flag', 'nativeName', 'names'):
                    if pack.get(k): d[k] = pack[k]
    open(path, 'w', encoding='utf-8', newline='\n').write(json.dumps(idx, ensure_ascii=False, indent=1) + '\n')
    print(f'{shelf}/index.json  {len(idx["docs"])}개  ' + ' '.join(f'{d["id"]}:{d["size"]}' for d in idx['docs']))
