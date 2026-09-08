#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
3Ls 원서 만들기 — 평문 텍스트(.txt/.md)를 서재 언어팩(JSON)으로 바꾸는 창.

  · 더블클릭으로 실행하면 검은 콘솔 없이 창만 뜬다 (.pyw 확장자)
  · 콘솔에서 열려면:  python tools/mkreading_gui.pyw

쪼개기 로직은 mkreading.py 를 그대로 쓴다. 여기서 더해지는 것은 세 가지다.
  1) 미리보기에서 줄을 눈으로 확인하고 합치기·나누기·고치기
     — 자동 문장 분할은 반드시 틀리는 데가 있어서, 이게 이 창의 존재 이유다
  2) library/index.json 자동 갱신 (손으로 줄 수·용량을 옮겨 적지 않아도 된다)
  3) 용어집 점검 — 본문 낱말 중 뜻이 안 붙는 것을 세고, 빈 표를 뽑아준다

표준 라이브러리(tkinter)만 쓴다. 설치할 것 없다.
"""
import json
import os
import re
import sys
import unicodedata

import tkinter as tk
from tkinter import filedialog, messagebox, ttk

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mkreading as MK                                    # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LIBRARY = os.path.join(ROOT, 'library')

SPLIT_LABELS = [
    ('line',     '한 줄이 곧 한 줄 — 성경·시처럼 이미 나뉜 파일'),
    ('sentence', '문장 단위로 쪼갬 — 소설처럼 문단이 여러 줄인 파일'),
    ('para',     '문단 하나가 한 줄 — 편지·수필'),
]


def norm_word(s):
    """용어집 조회와 같은 방식으로 낱말을 정규화 (index.html 의 rdNorm 과 맞춤)"""
    s = unicodedata.normalize('NFD', str(s or '').lower())
    return ''.join(c for c in s if unicodedata.category(c) != 'Mn' and c.isalnum())


class App(tk.Frame):
    def __init__(self, master):
        super().__init__(master, padx=12, pady=12)
        self.pack(fill='both', expand=True)
        self.src_path = ''
        self.gloss_path = ''
        self.gloss = None
        self.title_from_file = None
        self.docs = []                 # [{title, lines:[{n,t,p}]}]
        self._build()

    # ── 화면 ────────────────────────────────────────────────
    def _build(self):
        self.master.title('3Ls 원서 만들기')
        self.master.geometry('1040x680')
        self.master.minsize(980, 660)   # 더 줄이면 왼쪽 입력칸이 잘린다

        top = tk.LabelFrame(self, text=' 1. 원문 파일 ', padx=10, pady=8)
        top.pack(fill='x')
        self.src_var = tk.StringVar(value='(선택 안 됨)')
        tk.Label(top, textvariable=self.src_var, anchor='w', fg='#333').grid(
            row=0, column=0, sticky='we', padx=(0, 8))
        tk.Button(top, text='파일 열기…', command=self.pick_src, width=12).grid(row=0, column=1)
        top.columnconfigure(0, weight=1)

        self.split_var = tk.StringVar(value='line')
        row = tk.Frame(top)
        row.grid(row=1, column=0, columnspan=2, sticky='w', pady=(8, 0))
        tk.Label(row, text='쪼개기').pack(side='left', padx=(0, 8))
        for key, label in SPLIT_LABELS:
            tk.Radiobutton(row, text=label, value=key, variable=self.split_var,
                           command=self.reload_src).pack(anchor='w')

        # 아래쪽(만들기·상태줄)을 먼저 자리잡게 한다. 가운데를 expand 로 먼저 팩하면
        # 창이 좁을 때 아래 칸이 눌려 사라진다.
        self.status = tk.StringVar(value='원문 파일을 열어 주세요.')
        tk.Label(self, textvariable=self.status, anchor='w', fg='#555').pack(
            side='bottom', fill='x', pady=(8, 0))
        out = tk.LabelFrame(self, text=' 4. 만들기 ', padx=10, pady=8)
        out.pack(side='bottom', fill='x')

        mid = tk.Frame(self)
        mid.pack(fill='both', expand=True, pady=10)

        # 왼쪽: 팩 정보
        form = tk.LabelFrame(mid, text=' 2. 팩 정보 ', padx=10, pady=8)
        form.pack(side='left', fill='y')
        self.fields = {}
        specs = [
            ('id',     '팩 id',        'la-vulgata-genesis'),
            ('target', '학습 언어 코드', 'la'),
            ('name',   '이름',          ''),
            ('source', '출처',          ''),
            ('tts',    'TTS 로케일',    ''),
            ('flag',   '아이콘',        '📜'),
            ('base',   '설명 언어',     'kr'),
        ]
        hints = {
            'target': '카드가 묶이는 기준. 새 코드를 지어도 됨',
            'tts': '비우면 발음 버튼이 숨는다 (예: it-IT)',
            'base': '뜻을 보여줄 언어 (kr / en)',
        }
        for i, (key, label, default) in enumerate(specs):
            tk.Label(form, text=label, anchor='w').grid(row=i * 2, column=0, sticky='w')
            var = tk.StringVar(value=default)
            tk.Entry(form, textvariable=var, width=28).grid(row=i * 2, column=1, pady=(0, 2))
            self.fields[key] = var
            if key in hints:
                tk.Label(form, text=hints[key], fg='#888', font=('', 8), anchor='w').grid(
                    row=i * 2 + 1, column=0, columnspan=2, sticky='w', pady=(0, 4))

        g = tk.LabelFrame(form, text=' 용어집 (선택) ', padx=6, pady=6)
        g.grid(row=99, column=0, columnspan=2, sticky='we', pady=(10, 0))
        self.gloss_var = tk.StringVar(value='(없음)')
        tk.Label(g, textvariable=self.gloss_var, fg='#333', wraplength=200,
                 justify='left').pack(anchor='w')
        tk.Button(g, text='TSV 열기…', command=self.pick_gloss).pack(fill='x', pady=(4, 2))
        tk.Button(g, text='적중률 점검', command=self.check_gloss).pack(fill='x')

        # 오른쪽: 미리보기
        prev = tk.LabelFrame(mid, text=' 3. 미리보기 — 잘못 끊긴 줄을 여기서 고친다 ',
                             padx=10, pady=8)
        prev.pack(side='left', fill='both', expand=True, padx=(10, 0))

        bar = tk.Frame(prev)
        bar.pack(fill='x')
        tk.Label(bar, text='편').pack(side='left')
        self.doc_box = ttk.Combobox(bar, state='readonly', width=32)
        self.doc_box.pack(side='left', padx=6)
        self.doc_box.bind('<<ComboboxSelected>>', lambda e: self.fill_tree())
        self.count_var = tk.StringVar(value='')
        tk.Label(bar, textvariable=self.count_var, fg='#666').pack(side='left', padx=8)

        wrap = tk.Frame(prev)
        wrap.pack(fill='both', expand=True, pady=6)
        self.tree = ttk.Treeview(wrap, columns=('n', 't'), show='headings', height=18)
        self.tree.heading('n', text='표지')
        self.tree.heading('t', text='본문  (더블클릭하면 고칠 수 있습니다)')
        self.tree.column('n', width=70, anchor='w', stretch=False)
        self.tree.column('t', width=560, anchor='w')
        sb = ttk.Scrollbar(wrap, orient='vertical', command=self.tree.yview)
        self.tree.configure(yscrollcommand=sb.set)
        self.tree.pack(side='left', fill='both', expand=True)
        sb.pack(side='left', fill='y')
        self.tree.bind('<Double-1>', lambda e: self.edit_line())

        btns = tk.Frame(prev)
        btns.pack(fill='x')
        for text, cmd in [('고치기 · 나누기…', self.edit_line),
                          ('윗줄과 합치기', self.merge_up),
                          ('문단 나눔 ⇄', self.toggle_para),
                          ('줄 삭제', self.delete_line)]:
            tk.Button(btns, text=text, command=cmd).pack(side='left', padx=(0, 6))

        # 아래: 저장 (칸 자체는 위에서 이미 팩했다)
        self.out_var = tk.StringVar(value='')
        tk.Label(out, text='저장 위치').grid(row=0, column=0, sticky='w')
        tk.Entry(out, textvariable=self.out_var).grid(row=0, column=1, sticky='we', padx=6)
        tk.Button(out, text='…', width=3, command=self.pick_out).grid(row=0, column=2)
        out.columnconfigure(1, weight=1)
        self.index_var = tk.BooleanVar(value=True)
        tk.Checkbutton(out, text='library/index.json 도 함께 갱신',
                       variable=self.index_var).grid(row=1, column=1, sticky='w', padx=6)
        tk.Button(out, text='JSON 만들기', command=self.make, width=16,
                  font=('', 10, 'bold')).grid(row=0, column=3, rowspan=2, padx=(10, 0))

    # ── 파일 ────────────────────────────────────────────────
    def pick_src(self):
        p = filedialog.askopenfilename(
            title='원문 파일',
            filetypes=[('텍스트·마크다운', '*.txt *.md *.markdown'), ('모든 파일', '*.*')])
        if not p:
            return
        self.src_path = p
        self.src_var.set(p)
        self.reload_src(first=True)

    def reload_src(self, first=False):
        if not self.src_path:
            return
        try:
            title, docs = MK.parse(self.src_path, self.split_var.get())
        except Exception as e:
            messagebox.showerror('읽지 못했습니다', str(e))
            return
        self.title_from_file = title
        self.docs = docs
        if first:
            stem = os.path.splitext(os.path.basename(self.src_path))[0]
            if not self.fields['id'].get() or self.fields['id'].get() == 'la-vulgata-genesis':
                self.fields['id'].set(re.sub(r'[^A-Za-z0-9_-]+', '-', stem).strip('-').lower())
            if title and not self.fields['name'].get():
                self.fields['name'].set(title)
        self.sync_out()
        self.refresh_docs()

    def pick_gloss(self):
        p = filedialog.askopenfilename(title='용어집 TSV',
                                       filetypes=[('TSV', '*.tsv *.txt'), ('모든 파일', '*.*')])
        if not p:
            return
        try:
            self.gloss = MK.load_gloss(p)
        except Exception as e:
            messagebox.showerror('읽지 못했습니다', str(e))
            return
        self.gloss_path = p
        self.gloss_var.set('%s\n%d항목' % (os.path.basename(p), len(self.gloss)))
        self.check_gloss()

    def pick_out(self):
        p = filedialog.asksaveasfilename(title='저장 위치', defaultextension='.json',
                                         initialdir=LIBRARY, filetypes=[('JSON', '*.json')])
        if p:
            self.out_var.set(p)

    def sync_out(self):
        pid = self.fields['id'].get().strip() or 'reading'
        if not self.out_var.get():
            self.out_var.set(os.path.join(LIBRARY, pid + '.json'))

    # ── 미리보기 ────────────────────────────────────────────
    def refresh_docs(self):
        names = ['%d. %s (%d줄)' % (i + 1, d.get('title', ''), len(d['lines']))
                 for i, d in enumerate(self.docs)]
        self.doc_box['values'] = names
        if names:
            self.doc_box.current(0)
        self.fill_tree()
        total = sum(len(d['lines']) for d in self.docs)
        self.status.set('%d편 · %d줄 읽었습니다. 미리보기에서 확인하세요.'
                        % (len(self.docs), total))

    def cur_doc(self):
        i = self.doc_box.current()
        return self.docs[i] if 0 <= i < len(self.docs) else None

    def fill_tree(self):
        self.tree.delete(*self.tree.get_children())
        d = self.cur_doc()
        if not d:
            self.count_var.set('')
            return
        for i, ln in enumerate(d['lines']):
            mark = ('¶ ' if ln.get('p') else '') + (ln.get('n') or '')
            self.tree.insert('', 'end', iid=str(i), values=(mark, ln['t']))
        self.count_var.set('%d줄' % len(d['lines']))

    def sel(self):
        s = self.tree.selection()
        return int(s[0]) if s else None

    def after_edit(self, keep):
        self.refresh_docs()
        kids = self.tree.get_children()
        if kids:
            i = str(min(max(keep, 0), len(kids) - 1))
            self.tree.selection_set(i)
            self.tree.see(i)

    def edit_line(self):
        d, i = self.cur_doc(), self.sel()
        if d is None or i is None:
            return
        ln = d['lines'][i]
        dlg = tk.Toplevel(self)
        dlg.title('줄 고치기')
        dlg.geometry('660x300')
        dlg.transient(self.master)
        dlg.grab_set()

        tk.Label(dlg, text='표지 (없으면 비워 두세요)').pack(anchor='w', padx=12, pady=(12, 2))
        nvar = tk.StringVar(value=ln.get('n', ''))
        tk.Entry(dlg, textvariable=nvar, width=20).pack(anchor='w', padx=12)

        tk.Label(dlg, text='본문 — 줄바꿈을 넣으면 그 자리에서 여러 줄로 나뉩니다',
                 fg='#555').pack(anchor='w', padx=12, pady=(10, 2))
        txt = tk.Text(dlg, height=8, wrap='word')
        txt.pack(fill='both', expand=True, padx=12)
        txt.insert('1.0', ln['t'])
        txt.focus_set()

        def ok():
            parts = [p.strip() for p in txt.get('1.0', 'end-1c').split('\n') if p.strip()]
            if not parts:
                messagebox.showwarning('빈 줄', '본문이 비었습니다.', parent=dlg)
                return
            first = dict(ln)
            first['t'] = parts[0]
            n = nvar.get().strip()
            if n:
                first['n'] = n
            else:
                first.pop('n', None)
            rest = [{'t': p} for p in parts[1:]]      # 나뉜 뒷줄엔 표지를 붙이지 않는다
            d['lines'][i:i + 1] = [first] + rest
            dlg.destroy()
            self.after_edit(i)

        bar = tk.Frame(dlg)
        bar.pack(fill='x', padx=12, pady=10)
        tk.Button(bar, text='확인', command=ok, width=10).pack(side='right')
        tk.Button(bar, text='취소', command=dlg.destroy, width=10).pack(side='right', padx=6)

    def merge_up(self):
        d, i = self.cur_doc(), self.sel()
        if d is None or not i:                      # 첫 줄(0)은 합칠 윗줄이 없다
            return
        prev, cur = d['lines'][i - 1], d['lines'][i]
        prev['t'] = (prev['t'].rstrip() + ' ' + cur['t'].lstrip()).strip()
        del d['lines'][i]
        self.after_edit(i - 1)

    def toggle_para(self):
        d, i = self.cur_doc(), self.sel()
        if d is None or i is None:
            return
        ln = d['lines'][i]
        if ln.get('p'):
            ln.pop('p')
        else:
            ln['p'] = True
        self.after_edit(i)

    def delete_line(self):
        d, i = self.cur_doc(), self.sel()
        if d is None or i is None:
            return
        del d['lines'][i]
        if not d['lines']:
            self.docs.remove(d)
        self.after_edit(i)

    # ── 용어집 점검 ─────────────────────────────────────────
    def check_gloss(self):
        if not self.docs:
            messagebox.showinfo('용어집 점검', '먼저 원문 파일을 열어 주세요.')
            return
        gl = {norm_word(k) for k in (self.gloss or {})}
        total, hit, miss = 0, 0, {}
        for d in self.docs:
            for ln in d['lines']:
                for w in re.findall(r'[^\W\d_]+', ln['t'], re.UNICODE):
                    total += 1
                    if norm_word(w) in gl:
                        hit += 1
                    else:
                        miss[w.lower()] = miss.get(w.lower(), 0) + 1
        if not total:
            messagebox.showinfo('용어집 점검', '본문에 낱말이 없습니다.')
            return
        pct = hit * 100 // total
        msg = ('본문 낱말 %d연 중 %d개에 뜻이 붙습니다 (%d%%).\n'
               '뜻이 없는 형태: %d개\n\n'
               '굴절이 많은 언어는 용어집 없이 20~50%%에 그칩니다.\n'
               '빠진 형태를 빈 표(TSV)로 뽑아 채워 넣으시겠습니까?'
               % (total, hit, pct, len(miss)))
        if not miss:
            messagebox.showinfo('용어집 점검',
                                '본문 낱말 %d연 전부에 뜻이 붙습니다 (100%%).' % total)
            return
        if not messagebox.askyesno('용어집 점검', msg):
            return
        p = filedialog.asksaveasfilename(
            title='빠진 낱말 표 저장', defaultextension='.tsv',
            initialfile=(self.fields['id'].get() or 'gloss') + '-missing.tsv',
            filetypes=[('TSV', '*.tsv')])
        if not p:
            return
        with open(p, 'w', encoding='utf-8') as f:
            f.write('# 낱말<TAB>뜻 — 오른쪽 칸을 채운 뒤 용어집으로 다시 불러오세요\n')
            f.write('# 빈도순. 뜻을 비워 두면 그 낱말은 그냥 건너뜁니다\n')
            for w, c in sorted(miss.items(), key=lambda x: (-x[1], x[0])):
                f.write('%s\t\t# %d번\n' % (w, c))
        self.status.set('빠진 낱말 %d개를 %s 에 저장했습니다.' % (len(miss), p))

    # ── 만들기 ──────────────────────────────────────────────
    def make(self):
        if not self.docs:
            messagebox.showwarning('만들 수 없습니다', '먼저 원문 파일을 열어 주세요.')
            return
        pid = self.fields['id'].get().strip()
        target = self.fields['target'].get().strip()
        if not pid or not target:
            messagebox.showwarning('만들 수 없습니다', '팩 id 와 학습 언어 코드는 반드시 필요합니다.')
            return
        out = self.out_var.get().strip() or os.path.join(LIBRARY, pid + '.json')

        docs = [{'title': d.get('title', ''), 'lines': d['lines']} for d in self.docs]
        pack = MK.build_pack(
            docs, pid, target,
            self.fields['name'].get().strip() or self.title_from_file or pid,
            self.fields['source'].get().strip(), self.fields['tts'].get().strip(),
            self.fields['flag'].get().strip() or '📜',
            self.fields['base'].get().strip() or 'kr', self.gloss)
        try:
            kb = MK.write_pack(pack, out)
            entry = MK.index_entry(pack, out, kb)
            note = ''
            if self.index_var.get():
                idx = os.path.join(os.path.dirname(out), 'index.json')
                MK.update_index(idx, entry)
                note = '\n%s 도 갱신했습니다.' % idx
        except Exception as e:
            messagebox.showerror('저장하지 못했습니다', str(e))
            return
        self.status.set('%s — %d편 %d줄, %.0f KB' % (out, len(docs), entry['lines'], kb))
        messagebox.showinfo('만들었습니다',
                            '%s\n%d편 · %d줄 · %.0f KB%s'
                            % (out, len(docs), entry['lines'], kb, note))


if __name__ == '__main__':
    root = tk.Tk()
    App(root)
    root.mainloop()
