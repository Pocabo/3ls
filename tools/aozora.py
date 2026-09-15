#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
青空文庫 텍스트 → 3Ls 서재 언어팩(JSON) 변환기.

청공문고(aozora.gr.jp) 파일은 Shift-JIS 로 저장되고 고유한 표기 규칙을 씁니다.
이 스크립트는 그 규칙을 풀어 읽기 자료로 바꿉니다.

  漢字《かんじ》        루비(후리가나)
  ｜長い言葉《ながい》   루비가 붙는 범위를 못박는 기호
  ［＃…］              입력자 주 (외자 설명·방점 위치 등)

무엇을 어디에 넣는가
--------------------
  본문(t)    루비를 떼어낸 원문 — 실제로 책에 인쇄된 모양
  발음(say)  루비를 **대신 끼워 넣은** 문장 — TTS 가 어려운 한자를 바로 읽는다
  용어집     한자 → 요미 표 — 본문에서 낱말을 더블클릭하면 읽는 법이 뜬다

번역은 만들지 않습니다(지어낼 수 없으므로). 나온 JSON 의 각 줄에
m:{"kr": "..."} 를 직접 얹으면 줄을 눌렀을 때 번역이 펼쳐집니다.

사용
----
    python tools/aozora.py 원문.txt --id ja-akutagawa-agni \\
        --name "芥川龍之介 — アグニの神" --out library/ja-akutagawa-agni.json \\
        --index library/index.json
"""
import argparse
import io
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mkreading as MK

try:
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')
except Exception:
    pass

SEP = '-' * 20                      # 머리말을 감싸는 구분선
FOOT = ('底本：', '底本:', '青空文庫作成ファイル')
NOTE = re.compile(r'［＃[^］]*］')    # 입력자 주 — 본문이 아니므로 버린다
RUBY = re.compile(r'《([^》]*)》')

# 루비가 붙는 범위를 되짚을 때 쓰는 문자 부류
CLASSES = [
    re.compile(r'[一-鿿々〆ヵヶ豈-﫿]'),  # 한자
    re.compile(r'[ァ-ヺー]'),                                  # 가타카나
    re.compile(r'[ぁ-ゖ]'),                                        # 히라가나
    re.compile(r'[0-9A-Za-z０-９Ａ-ｚ]'),                  # 숫자·라틴
]
# 장 제목: 전각 공백만 앞에 오고 짧은 표지 하나 (一 · １ · 10 등)
HEAD = re.compile(r'^[　 ]{2,}([一-鿿0-9０-９]{1,3})[　 ]*$')
# 문장 끝: 。！？ 뒤에 닫는 따옴표가 붙을 수 있다
SENT = re.compile(r'(?<=[。！？])(?![」』）、。])')


def _class_of(ch):
    for i, c in enumerate(CLASSES):
        if c.match(ch):
            return i
    return -1


def split_ruby(line):
    """한 줄 → (루비 뗀 본문, 루비 끼운 발음용, [(한자, 요미), …])"""
    plain, spoken, pairs = [], [], []
    pos = 0
    for m in RUBY.finditer(line):
        head = line[pos:m.start()]
        yomi = m.group(1)
        if '｜' in head:                       # 범위가 명시된 경우
            before, base = head.rsplit('｜', 1)
        else:                                  # 앞쪽에서 같은 부류가 이어지는 만큼
            k = len(head)
            if k == 0:
                before, base = head, ''
            else:
                cls = _class_of(head[-1])
                i = k
                while i > 0 and _class_of(head[i - 1]) == cls and cls >= 0:
                    i -= 1
                before, base = head[:i], head[i:]
        before = before.replace('｜', '')
        plain.append(before + base)
        spoken.append(before + (yomi if base else ''))
        if base and yomi:
            pairs.append((base, yomi))
        pos = m.end()
    tail = line[pos:].replace('｜', '')
    plain.append(tail)
    spoken.append(tail)
    return ''.join(plain), ''.join(spoken), pairs


def parse(path):
    """청공문고 파일 → (제목, 지은이, [ {title, lines:[{n,t,say,p}]} ], 용어집)"""
    raw = io.open(path, encoding='shift_jis', errors='replace').read()
    lines = raw.replace('\r\n', '\n').split('\n')

    # ── 머리말 걷어내기: 구분선 두 줄 사이가 기호 설명이다
    seps = [i for i, l in enumerate(lines) if l.startswith(SEP)]
    title = lines[0].strip() if lines else os.path.basename(path)
    author = ''
    for l in lines[1:(seps[0] if seps else 4)]:
        if l.strip() and not l.startswith('―'):
            author = l.strip()
            break
    body = lines[seps[1] + 1:] if len(seps) >= 2 else lines[1:]

    # ── 꼬리말 걷어내기
    for i, l in enumerate(body):
        if l.startswith(FOOT):
            body = body[:i]
            break

    docs, cur, gloss = [], None, {}
    gap = False

    def doc(name):
        d = {'title': name, 'lines': []}
        docs.append(d)
        return d

    for raw_line in body:
        line = NOTE.sub('', raw_line).rstrip()
        if not line.strip():
            gap = True
            continue
        h = HEAD.match(line)
        if h:
            cur = doc(h.group(1))
            gap = False
            continue
        if cur is None:
            cur = doc(title)
        text, spoken, pairs = split_ruby(line.strip())
        for base, yomi in pairs:
            gloss.setdefault(base, yomi)
        # 대사(「…」)는 한 덩이로 두고, 지문만 문장 단위로 쪼갠다
        if text.startswith('「'):
            chunks = [(text, spoken)]
        else:
            t_parts = [x for x in SENT.split(text) if x.strip()]
            s_parts = [x for x in SENT.split(spoken) if x.strip()]
            chunks = list(zip(t_parts, s_parts)) if len(t_parts) == len(s_parts) \
                else [(text, spoken)]
        for i, (t, s) in enumerate(chunks):
            item = {'t': t.strip(), 'say': s.strip()}
            if i == 0 and gap and cur['lines']:
                item['p'] = True
            cur['lines'].append(item)
        gap = False

    return title, author, docs, gloss


def fill_say(docs, gloss):
    """루비는 첫 등장에만 붙는다. 같은 한자가 뒤에 다시 나오면 발음이 비어 버리므로
    용어집으로 메운다. 다만 **두 글자 이상**만 — 한 글자는 다른 낱말 속에 섞여 들어가
    엉뚱하게 바뀐다(反 → かえ 를 적용하면 反対가 かえ対가 된다)."""
    table = sorted(((k, v) for k, v in gloss.items() if len(k) >= 2),
                   key=lambda kv: -len(kv[0]))
    n = 0
    for d in docs:
        for ln in d['lines']:
            s2 = ln.get('say', ln['t'])
            for k, v in table:
                if k in s2:
                    s2 = s2.replace(k, v)
                    n += 1
            ln['say'] = s2
    return n


def flatten(docs, title):
    """장면이 잘게 쪼개진 글(시나리오 등)을 한 편으로 합친다.
    목차 드롭다운에 세 줄짜리 항목이 수십 개 뜨는 것을 막는다.
    장면 번호는 그 장면 첫 줄의 표지로 남긴다."""
    lines = []
    for d in docs:
        for i, ln in enumerate(d['lines']):
            if i == 0:
                ln['n'] = d['title']
                if lines:
                    ln['p'] = True
            else:
                ln.pop('n', None)
            lines.append(ln)
    return [{'title': title, 'lines': lines}]


def number(docs):
    """편 안에서 1부터 줄 번호를 붙인다(글 안 검색·이어읽기의 표지)."""
    for d in docs:
        for i, ln in enumerate(d['lines']):
            ln['n'] = str(i + 1)


def main():
    ap = argparse.ArgumentParser(description='青空文庫 텍스트를 3Ls 서재 언어팩으로 바꾼다.')
    ap.add_argument('src')
    ap.add_argument('--id', required=True)
    ap.add_argument('--target', default='ja')
    ap.add_argument('--name')
    ap.add_argument('--source')
    ap.add_argument('--tts', default='ja-JP')
    ap.add_argument('--flag', default='📖')
    ap.add_argument('--base', default='kr')
    ap.add_argument('--out', required=True)
    ap.add_argument('--index')
    ap.add_argument('--flat', action='store_true',
                    help='장면이 잘게 나뉜 글을 한 편으로 합친다 (시나리오 등)')
    a = ap.parse_args()

    title, author, docs, gloss = parse(a.src)
    if not docs:
        sys.exit('본문이 없습니다: ' + a.src)
    filled = fill_say(docs, gloss)
    if a.flat:
        docs = flatten(docs, title)
    else:
        number(docs)
    name = a.name or ('%s — %s' % (author, title) if author else title)
    source = a.source or '青空文庫 (%s・%s) · 공유 저작물' % (author, title)

    pack = MK.build_pack(docs, a.id, a.target, name, source,
                         a.tts, a.flag, a.base, gloss)
    kb = MK.write_pack(pack, a.out)
    entry = MK.index_entry(pack, a.out, kb)
    n = entry['lines']
    print('%s — %d편 %d줄, %.0f KB · 용어집 %d · 발음 보강 %d곳'
          % (a.out, len(docs), n, kb, len(gloss), filled))
    if a.index:
        MK.update_index(a.index, entry)
        print('%s 갱신함' % a.index)


if __name__ == '__main__':
    main()
