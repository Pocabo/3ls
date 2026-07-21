# 3Ls 프로젝트 개발 가이드

> 이 문서는 **나중에 이 프로젝트를 다시 이어서 키우기 위한** 개발자용 상세 메모입니다.
> "무엇을 만들려 했는가 · 지금 어떤 구조인가 · 어떻게 확장하는가 · 무엇을 조심할까"를 담습니다.
> 현재 기준 버전: **v5.0.0.0**. (사용자용 요약은 [README.md](README.md), 변경 이력은 [CHANGELOG.md](CHANGELOG.md))

---

## 1. 프로젝트 개요 · 비전

**3Ls = Language Learning Library.** CEFR 기반 다국어 학습 + 실전 사전을 한 곳에서 보는 **설치형 웹앱(PWA)**.

### 만들려던 것
- 원래는 Notion에 언어별 단어책을 만들었는데, **열(칼럼)이 많은 데이터는 Notion에서 다루기 불편**했다.
- 그래서 직접 **JS/HTML 앱**으로 옮기기로 결정. 모바일 접근성 + 업데이트 편의를 위해 **APK가 아니라 PWA**로, 호스팅은 **GitHub Pages**로.
- 핵심 목표는 **"라이브러리(Library)"** — 시험으로 잠그기보다 **자유롭게 열람**하는 참고서에 가깝게. (레벨 잠금 제거)
- **호환성(compatibility)** 최우선: 엔진은 어떤 언어도 모르고, 언어 지식은 전부 **언어팩(languages/\*.js)** 이 공급. 새 언어·새 설명언어(base)를 붙이기 쉬워야 한다.

### 지금 상태 (한 줄 요약)
프랑스어·스페인어·일본어·한국어·중국어 **5개 target**을 지원하고, 각 언어에 학습 코스와/또는 실전 사전이 붙어 있다. UI/뜻은 **한국어(kr)·영어(en)** 두 개의 base로 전환 가능. 전부 오프라인 동작.

- 배포 URL: https://pocabo.github.io/3ls/
- GitHub: https://github.com/Pocabo/3ls (사용자: Pocabo)
- 이 세션에서 만든 건 **Draft** 수준. 앞으로 콘텐츠·기능을 직접 키울 예정.

---

## 2. 핵심 설계 원칙

1. **언어 비종속 엔진(language-agnostic).** `index.html` 안의 `App`은 프랑스어/중국어가 뭔지 모른다. 단어·문법·문제·TTS 로케일·특수문자는 전부 언어팩이 준다.
2. **데이터 주도 렌더(data-driven).** 표의 열은 데이터에 그 필드가 "있으면" 그려지고, 팩 전체에서 비어 있으면 **그 열 자체가 사라진다.** → 최소한 `w`(표제어)만 있어도 동작.
3. **base(설명 언어) · target(학습 언어) 분리.** 단어 뜻은 `m:{ kr:…, en:… }`처럼 **base로 키잉**. 엔진이 현재 base에 맞는 뜻만 골라 보여준다. 팩은 target만 선언하고, 지원 base는 데이터에서 자동 추론.
4. **Library = 시험 없는 자유 열람.** 레벨 잠금 제거. 시험(퀴즈)은 남아 있지만 다음 레벨을 잠그지 않는 "선택 연습".
5. **오프라인 PWA.** 서비스워커가 앱 셸(HTML·언어팩·아이콘)을 캐시. 첫 로딩 후 인터넷 없이 동작.
6. **의존성 0.** 빌드 툴·프레임워크·번들러 없음. 순수 HTML/CSS/JS 한 파일 + 언어팩 스크립트들. `npx http-server`로 로컬 확인만 하면 됨.

---

## 3. 디렉토리 · 파일 구조

```
3Ls/
├── index.html            ← 학습 엔진 전체 (HTML+CSS+JS 한 파일, ~1140줄)
├── manifest.json         ← PWA 매니페스트 (version 필드는 참고용)
├── service-worker.js     ← 오프라인 캐시 (CACHE 상수 + APP_SHELL 목록)
├── icon.svg              ← 앱 아이콘
├── icon-maskable.svg     ← 마스커블 아이콘(홈 화면용)
├── .nojekyll             ← GitHub Pages의 Jekyll 처리 비활성화
├── README.md             ← 사용자용 요약 + 언어 추가법
├── CHANGELOG.md          ← 버전 규칙 + 전체 변경 이력
├── PROJECT_GUIDE.md      ← (이 문서) 개발자용 상세 가이드
├── .claude/
│   └── launch.json       ← 로컬 개발 서버 설정 (name: polyglot-builder, port 4173)
└── languages/            ← 언어팩. 파일명 = target 기준
    ├── _template.js      ← 새 언어팩 작성 가이드/뼈대
    ├── fr.js             ← 프랑스어 코스 (10레벨, 144단어, m:{kr,en})
    ├── fr-extra.js       ← 프랑스어 확장 어휘 사전 (extra, 146단어, m:{kr,en})
    ├── es.js             ← 스페인어 코스 (10레벨, 144단어, m:{kr,en})
    ├── ja.js             ← 일본어 "빈 껍데기"(levels:[]) → 사전으로 redirect
    ├── ja-food.js        ← 일본 음식 사전 (extra, 8분류 90단어, m:{kr}+일부 en)
    ├── kr.js             ← 한국어 "빈 껍데기" → 한자어로 redirect
    ├── kr-hanja.js       ← 한자어 사전 (extra, 2분류 72단어, m:{kr})
    ├── zh.js             ← 중국어 코스 (5레벨 60단어, m:{kr})
    └── zh-local.js       ← 중국 현지 회화 사전 (extra, 9분류 96단어, m:{kr})
```

> **주의**: `id` 없이 파일만 늘리면 로드가 안 된다. 새 팩은 반드시 ① `index.html` 하단에 `<script src>` 추가, ② `service-worker.js`의 `APP_SHELL`에 경로 추가.

---

## 4. 언어팩 스키마 (상세)

새 팩 뼈대는 [languages/_template.js](languages/_template.js) 참고. 모든 팩은 전역 함수 `registerLanguagePack({...})` 를 호출한다.

### 4.1 팩(pack) 레벨 필드
| 필드 | 필수 | 설명 |
|---|---|---|
| `id` | ✅ | 팩 고유 id. 관례상 파일명과 동일 (예: `'fr'`, `'zh-local'`) |
| `target` | ✅(사실상) | 학습 언어 코드 (`'fr'`,`'es'`,`'ja'`,`'kr'`,`'zh'`…). 언어 선택 카드는 target 기준으로 묶임 |
| `name` | ✅ | 팩 표시 이름 (예: `'프랑스어'`, `'중국 현지 회화'`) |
| `tts` | ✅ | Web Speech API 로케일 (`'fr-FR'`,`'zh-CN'`,`'ja-JP'`…). 🔊 발음은 이걸로 읽음 |
| `levels` | ✅ | 레벨 배열. 빈 배열 `[]`이면 "빈 껍데기"(§4.4) |
| `nativeName` | | 원어 표기 (예: `'Français'`, `'中文'`). 홈/카드에 부제로 표시 |
| `flag` | | 국기 이모지 |
| `extra` | | `true`면 같은 target의 **확장 콘텐츠**(사전 등). 카드 ▾ / Contents 드롭다운에서 접근 |
| `menuLabel` | | extra 팩의 드롭다운 표기 (예: `'현지 회화'`) |
| `dictionary` | | `true`면 열람 전용 — 시험/연습/암기카드 탭 없이 **단어 탭만** |
| `specialChars` | | 화면 키보드로 제공할 특수문자 배열 (없으면 `[]`) |
| `desc` | | 홈 상단 설명 문구 |
| `bases` | | (선택) 지원 base를 명시. 보통은 단어 `m`에서 자동 추론하므로 불필요 |

> **`base` 필드는 없다.** 팩이 지원하는 base는 §4.2의 `m` 키로 **자동 결정**된다. (과거엔 `base:'kr'`를 팩에 뒀지만 v4.2.1.0에서 제거)

### 4.2 단어(word) 스키마 — ★핵심★
```js
{ w:'bonjour',                 // 표제어(학습 언어). TTS·표의 "단어" 열. base 무관
  ipa:'/bɔ̃.ʒuʁ/',              // 발음(IPA/병음/요미가나). base 무관
  m:{ kr:'안녕하세요', en:'hello' },   // 뜻 — base로 키잉 (★)
  ex:'Bonjour !',              // 예문(학습 언어). base 무관
  exm:{ kr:'안녕하세요!' },      // 예문 번역 — base로 키잉
  tip:{ kr:'글자 그대로는 …' },  // 보충 설명 — base로 키잉
  gender:'m'|'f'|'mf',         // (선택) 명사 성. 없으면 성 태그 자동 숨김
  plural:'…' }                 // (선택) 복수형
```
- **base 무관 필드**(`w`·`ipa`·`ex`·`gender`·`plural`)는 그대로 둔다.
- **base 종속 필드**(`m`·`exm`·`tip`)만 `{ <base>:값 }` 맵으로. 엔진은 `word.m[현재base]`를 골라 렌더한다 (`meaningOf`/`exmOf`/`tipOf`).
- **팩의 지원 base** = 그 팩 단어들의 `m`에 값이 있는 키들의 합집합. 예: 모든 단어가 `m:{kr}`만 있으면 그 팩은 **KR 모드에서만** 노출된다. (중국어·한자어가 그렇다)
- `pos`(품사) 필드가 옛 데이터에 남아 있지만 **엔진은 사용하지 않는다**(무시됨).

### 4.3 레벨(level) 필드 · 문제 유형
```js
{ level:1, cefr:'A1.1', phase:'intro', title:'…', sub:'…', desc:'…',
  words:[ …§4.2… ],
  grammar:[ {title:'…', html:'<p>자유 HTML</p>'} ],
  exercises:[ …문제… ],
  quiz:[ …문제(5문항 권장)… ] }
```
- `dictionary:true` 팩은 `grammar/exercises/quiz`가 있어도 **무시**되고 단어 탭만 뜬다.
- `phase`: `'intro'`→`'A'`(블록조립)→`'B'`(빈칸/변형)→`'C'`(자유작문). 홈 카드의 단계 태그에만 쓰임.

**문제 4종** (exercises·quiz 공통):
```js
{ type:'choice', q:'질문', options:['a','b','c'], answer:1,  // 정답 인덱스
  audio:'읽어줄 문장'(선택), why:'해설'(선택), hint:'힌트'(선택) }

{ type:'blank', text:'문장 속 ___ 을 빈칸으로', answer:'정답' 또는 ['답1','답2'],
  ko:'해석', accept:['허용 오답'](선택) }   // ← 이 ko 는 "문제 프롬프트"용. 단어 m 과 다름!

{ type:'blocks', answer:'정답 문장 (공백으로 토큰 분리)', ko:'해석',
  distractors:['함정 블록'](선택) }

{ type:'compose', prompt:'작문 지시', mustInclude:['필수표현',['대안1','대안2']],
  minWords:6, sample:'모범 답안' }
```
> ⚠️ **연습문제의 `ko:` 필드는 단어의 `m` 과 완전히 다른 것**이다(문제 해석용). 스키마를 또 바꿀 때 스크립트로 일괄 변환한다면 이 둘을 절대 헷갈리지 말 것. (§9 마이그레이션 참고)

### 4.4 확장(extra)·빈 껍데기(shell)·redirect
한 target 안에 여러 팩을 둘 수 있다:
- **main 팩**: `extra`가 없는 팩. 언어 선택 카드 본체를 누르면 여기로 간다.
- **extra 팩**: `extra:true`. 카드 오른쪽 **▾** 와 📂 Contents 드롭다운에 뜬다.
- **빈 껍데기(shell)**: `levels:[]`인 main 팩. 아직 코스가 없는 언어를 "언어 카드"로만 세워둘 때 쓴다. 이 카드를 누르면 엔진이 **같은 target의 1순위 extra 사전으로 자동 redirect**한다(`resolvePack`). 예) `ja.js`(빈 껍데기) → 누르면 `ja-food`로.

**현재 target별 구성**
| target | main | extra |
|---|---|---|
| fr | `fr`(코스) | `fr-extra`(확장 사전) |
| es | `es`(코스) | — |
| ja | `ja`(빈 껍데기) | `ja-food`(음식 사전) |
| kr | `kr`(빈 껍데기) | `kr-hanja`(한자어 사전) |
| zh | `zh`(코스) | `zh-local`(현지 회화 사전) |

---

## 5. 엔진 내부 (index.html)

전부 `index.html` 하나에 있다. 최상단에 전역 등록 함수, 그 아래 `const App = (() => { … })()` IIFE.

### 5.1 전역 (window)
- `window.LANGUAGE_PACKS` : `{ id: pack }` 사전.
- `window.registerLanguagePack(pack)` : 필수 필드 검사 후 등록.
- `window.registerMeanings(target, base, map)` : **향후 확장용 훅**. 이미 로드된 target의 단어들에 base 뜻을 나중에 주입한다. 표제어(`w`)로 매칭해 `m[base]`를 채움. → "인라인(A)"으로 시작해도 나중에 "별도 뜻 파일(B, 오버레이)"로 무손실 확장 가능 (§8).

### 5.2 상태(state)와 저장소
`let S = load()` — 전체 상태. `save()`로 localStorage에 직렬화.
- **`polyglotBuilder.v1`** (STORE_KEY): `S` = `{ activeLang, base, langs:{ [packId]:{ unlocked, quizBest, srs, doneEx } } }`
  - `activeLang`: 현재 보고 있는 팩 id
  - `base`: 현재 설명 언어(`'kr'`|`'en'`) = UI 언어
  - `langs[id].srs`: 간격 반복(SRS) 상태 `{ [단어]:{box,due} }`
  - `langs[id].quizBest/doneEx`: 시험 최고점 / 완료한 연습 (레벨 잠금엔 더 이상 안 쓰임)
- **`polyglotBuilder.customPacks.v1`** (PACKS_KEY): JSON으로 가져온 커스텀 팩 보관(브라우저 저장)
- **`3ls.colHidden`**: 표에서 접은 열 목록
- **`3ls.wbMode`**: 단어은행 표/카드 모드
- **`3ls.theme`**: `system`|`light`|`dark`

### 5.3 base/target 그룹 헬퍼
- `curBase()` = `S.base||'kr'`
- `packBases(p)` → 그 팩이 지원하는 base 집합(단어 m 키에서 추론)
- `basesAvailable()` → 전체 팩을 통틀어 존재하는 base들(kr 우선 정렬)
- `packsOfTarget(t)` → 그 target의 팩들(extra는 뒤로 정렬)
- `targetsForBase(b)` → 그 base로 뜻이 있는 target들
- `mainPackOf(t)` → target의 main 팩
- `isEmptyPack(p)` / `resolvePack(id)` → 빈 껍데기면 1순위 extra로
- `meaningOf(w)`/`exmOf(w)`/`tipOf(w)` → 현재 base의 뜻/예문번역/팁
- `TARGETS` = `{ fr:{ko,en}, es, ja, kr, zh }` (target의 표시 이름), `targetName(t)`는 현재 base 언어로 반환
- `BASE_LABEL` = `{ kr:'한국어', en:'English' }`

### 5.4 i18n (UI 언어 = base)
- `I18N = { ko:{…}, en:{…} }`, `T(key)` → 현재 base의 문자열.
- `applyI18n()` → 헤더 버튼(Contents/Word/Remind/Menu)·메뉴 패널 텍스트를 현재 base로 갱신.
- **한계**: 학습 코스의 `grammar`/`exercises`/`quiz` 콘텐츠는 **한국어로 하드코딩**돼 있어, EN base에서도 그대로 한국어로 나온다(§7). 단어·뜻·표 헤더·탭 라벨만 i18n 처리됨.

### 5.5 라우팅 · 뷰
`go(name, arg)` → `view = {name, arg}` → `render()`. 뷰 5종:
- **`picker`** : 언어 선택 화면. 상단 "Languages" 옆 **Base 드롭다운**, 아래에 현재 base의 target 카드들(▾로 extra 펼침).
- **`home`** : 선택된 팩의 레벨/분류 지도. (잠금 없음 = Library)
- **`level`** : 레벨 상세. 탭 = 단어/암기카드/문법/연습/시험 (dictionary 팩은 단어 탭만).
- **`review`** : 누적 복습(SRS 큐). 플래시카드에서 "몰라요"한 단어가 0→1→3→7→14→30일 간격으로 재출제.
- **`wordbank`** : 현재 팩 전체 단어 검색/필터(표·카드 모드). 검색은 `w`·`ipa`·`ex`·모든 `m`값·`exm`값을 훑음.

### 5.6 단어 표 렌더 (data-driven)
- `wordColumns(words, opts)` → 존재하는 필드만 열로: 분류(opts.cat)·단어·발음·뜻(+💡팁)·예문·듣기.
- `wordTableHtml()` → 열 접기 바(collapsible 열 + 팁 토글, `3ls.colHidden`에 저장) + 표.
- 열 너비: 짧은 열(분류·단어·발음·듣기)은 `width:1%+nowrap`로 내용에 딱 맞추고, 남는 폭은 뜻·예문이 가져간다. 한국어는 `word-break:keep-all`로 어절 단위 줄바꿈.

### 5.7 언어/콘텐츠 전환
- `switchLang(id)` : `resolvePack`(빈 껍데기 redirect) → 현재 base를 그 팩이 지원 안 하면 지원 base로 바꿈 → 홈으로.
- `setBase(b)` : base(=UI 언어) 전환. 현재 팩이 그 base를 지원하면 유지, 아니면 그 base의 첫 target으로.
- `renderContentsMenu()` : 헤더 📂 Contents 드롭다운. "언어 선택…"(→picker) + 현재 target의 팩 목록(빈 껍데기 제외, 현재 base 지원분만).

### 5.8 시험(quiz)의 현재 위치
`startQuiz`/`afterGrade`가 채점하고 `quizBest`/`unlocked`를 갱신하긴 하지만, **홈의 레벨 카드는 더 이상 잠기지 않는다**(Library 방침). 즉 시험은 "자기 점검용"으로만 남아 있다. 나중에 잠금을 되살리려면 `homeView`의 카드 렌더에서 잠금 로직을 복구하면 된다(현재 `locked` 분기는 제거됨).

### 5.9 반환(exports)
`App`이 노출하는 함수: `init, go, tab, speak, switchLang, setBase, importPack, flashFlip/Mark/Restart, pickChoice/checkBlank/checkBlocks/checkCompose, paintBlocks/moveBlock/resetBlocks, insertChar, startQuiz, wbSetQuery/wbSetCat/wbSetMode, toggleWordbank, toggleCol, cycleTheme, toggleMenu/closeMenu, toggleContents/closeContents, togglePick`. (HTML의 `onclick="App.xxx()"`가 이걸 부른다.)

---

## 6. 현재 콘텐츠 현황

| target | 팩 | 종류 | 레벨/분류 | 단어 | 지원 base | 비고 |
|---|---|---|---|---|---|---|
| fr | fr | 코스 | 10 | 144 | kr, en | 문법·연습·시험 완비 |
| fr | fr-extra | 사전(extra) | 10분류 | 146 | kr, en | 확장 어휘 |
| es | es | 코스 | 10 | 144 | kr, en | 문법·연습·시험 완비 |
| ja | ja | 빈 껍데기 | 0 | 0 | — | 누르면 ja-food로 |
| ja | ja-food | 사전(extra) | 8분류 | 90 | kr, en(72개) | 일본 음식/조리/라멘 |
| kr | kr | 빈 껍데기 | 0 | 0 | — | 누르면 kr-hanja로 |
| kr | kr-hanja | 사전(extra) | 2분류 | 72 | kr | 한자어 어원 |
| zh | zh | 코스 | 5 | 60 | kr | 성조·인사·숫자·가족·음식·쇼핑 |
| zh | zh-local | 사전(extra) | 9분류 | 96 | kr | 현지 회화/신조어/밈 |

- **base = kr**: 5개 target 모두 노출.
- **base = en**: fr·es·ja(음식엔 영어 뜻 있음)만 노출. kr-hanja·zh·zh-local은 영어 뜻이 없어 **EN에선 숨김**.

---

## 7. 알려진 한계 · 주의점 (Gotchas)

1. **EN base에서 코스의 문법/연습/시험은 한국어다.** fr/es처럼 full 코스는 EN 모드에서도 grammar/exercises/quiz가 한국어로 뜬다(단어·뜻만 영어화). 해결책: (a) 그 콘텐츠도 `{ko,en}`으로 i18n화하거나, (b) EN용은 `dictionary:true` 사전만 노출. → 지금은 미해결.
2. **`ja-food`가 EN base에 "Japanese"로 뜬다.** 영어 뜻이 있는 단어(72/90)가 있어서. 원치 않으면 EN에서 특정 target을 숨기는 필터를 추가하거나 영어 뜻을 빼면 됨.
3. **캐시 갱신.** 파일을 고쳐도 옛 서비스워커 캐시가 남으면 안 보인다. 반드시 `service-worker.js`의 `CACHE` 문자열을 **버전과 함께** 올릴 것. 설치 시 `{cache:'reload'}`, 런타임 `no-cache`로 우회하지만 CACHE 버전이 최종 방어선.
4. **CJK 인코딩.** 코드에서 `\uXXXX` 이스케이프로 한자/가나를 쓰면 깨지기 쉽다. **항상 리터럴 문자**로 쓰고, 특히 외부(Notion 등)로 쓸 때 결과를 눈으로 검증.
5. **연습문제 `ko:` ≠ 단어 `m`.** 스키마를 또 바꿀 때 스크립트가 연습문제의 `ko`를 건드리면 안 된다(§9).
6. **버전 동기화 5곳.** 새 버전은 `index.html`(APP_VERSION), `service-worker.js`(CACHE), `manifest.json`(version), `README.md`(현재 버전), `CHANGELOG.md`(항목)를 **모두** 맞춰야 한다.
7. **빈 껍데기 target은 EN에서 사라질 수 있다.** ja/kr 껍데기는 자체 단어가 없어 base 지원을 extra 사전에서 물려받는다. extra가 그 base를 지원 안 하면 그 target은 그 base에서 안 뜬다(정상 동작).

---

## 8. 앞으로 키우는 법 (확장 가이드)

### 8.1 기존 언어에 단어 추가 (가장 흔함 · PATCH)
해당 `languages/xx.js`의 `words` 배열에 §4.2 형식으로 추가 → 버전 PATCH +1 → 5곳 동기화. 끝.

### 8.2 새 언어(target) 추가 (LANG +1)
1. `languages/<target>.js` 작성(`_template.js` 복사). `target` 지정, 단어는 `m:{kr:…}`(+원하면 en).
2. (필요시) 사전 extra 팩·빈 껍데기도 추가.
3. `index.html`의 `TARGETS`에 `<target>:{ko:'…', en:'…'}` 한 줄.
4. `index.html` 하단에 `<script src="languages/<target>.js">` 추가.
5. `service-worker.js` `APP_SHELL`에 경로 추가.
6. 버전 **LANG 자리 +1**, 나머지 0 리셋. 5곳 동기화 + CHANGELOG.

### 8.3 새 설명 언어(base) 추가 — 예: 중국어에 영어 뜻(en) 붙이기
**방법 A (인라인)**: 각 단어의 `m`에 `en` 키를 채운다. `m:{kr:'…', en:'…'}`. → 그 target이 자동으로 EN base에도 노출됨. (`registerMeanings` 훅이나 스크립트로 일괄 주입 가능)

**방법 B (오버레이 파일)**: 뜻만 담은 별도 파일을 만들어 `registerMeanings`로 얹는다:
```js
// languages/zh.en.js  (index.html·APP_SHELL에 zh.js 다음으로 등록)
registerMeanings('zh', 'en', {
  '你好':'hello', '谢谢':'thank you', /* … 표제어:뜻 … */
});
```
표제어(`w`)로 매칭되어 `m.en`이 채워진다. → **원본 zh.js를 건드리지 않고** EN 지원 추가. (단, 표제어가 유일해야 함)

> 스키마 선택 배경(중요): 우리는 "단어 뜻을 base로 키잉"으로 정했고, 파일은 **target당 1파일(A방식)** 로 시작했다. base가 많아지거나 번역을 따로 관리하고 싶어지면 그때 그 target만 **B방식(오버레이)** 으로 떼어내면 된다. 두 방식은 `m:{base}` 스키마를 공유하므로 **무손실 전환** 가능.

### 8.4 그 밖에 키울 만한 것 (아이디어)
- **일본어·한국어 정식 코스**: `ja.js`/`kr.js`의 빈 `levels:[]`를 채우면 껍데기가 자동으로 정식 코스가 된다(redirect 사라짐).
- **EN 모드 문법/연습 다국어화**: `grammar.html`·연습을 `{ko,en}`으로.
- **JSON 팩 가져오기 UX**: 이미 ⚙ 메뉴에 "언어팩 가져오기(JSON)"가 있음. 공유/내보내기 기능 확장 여지.
- **SRS·통계 강화**, **발음 녹음/비교**, **즐겨찾기 단어장** 등.

---

## 9. 개발 워크플로우

### 9.1 로컬 실행
- `.claude/launch.json`에 개발 서버 설정(`polyglot-builder`, `npx http-server`, port **4173**).
- 그냥 `index.html`을 브라우저로 열어도 학습 기능은 됨. 단 **PWA/서비스워커는 `http(s)://`에서만** 켜짐(`file://`은 SW 비활성).
- 변경 검증 시: 브라우저 콘솔에서 서비스워커 unregister + `caches` 삭제 후 새로고침해야 최신본이 뜬다(캐시 때문).

### 9.2 데이터 대량 변환 (마이그레이션 스크립트 패턴)
스키마를 바꿀 때 손으로 하지 말고 Node 스크립트로. 이 프로젝트에서 쓴 안전한 패턴 2가지:
- **구조 로드/검증**: `global.registerLanguagePack = p=>packs[p.id]=p;` 스텁을 깔고 `eval(파일내용)` → 객체로 로드해 필드 검사. (팩은 순수 데이터라 안전)
- **본문 보존 in-place 치환**: 정규식으로 **단어 필드 토큰만** 바꾸고 주석/서식은 유지. JS 문자열 정규식은 `'(?:[^'\\]|\\.)*'` (이스케이프된 따옴표 처리). 단, `ko:`는 단어에도 연습문제에도 있으니 **`ko:'X', en:'Y'` 쌍**처럼 단어에만 있는 패턴으로 노려야 안전(§7-5).
  - 실제로 v4.2.1.0에서 `ko/en → m:{kr,en}`, `exKo → exm:{kr}`, `tip → tip:{kr}` 변환에 이 방식을 썼다. (한 단어만 `en:"…"` 큰따옴표였는데, 먼저 작은따옴표로 정규화 후 일괄 변환)

### 9.3 배포 (사용자가 직접 push)
```
git add -A
git commit -m "vX.Y.Z.W: 요약"
git push
```
GitHub Pages가 자동 배포. 커밋 메시지 끝에는 관례상
`Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>` 를 붙여 왔다.

---

## 10. 버전 규칙 (LANG.MAJOR.MINOR.PATCH)

| 자리 | 올리는 기준 | 예 |
|---|---|---|
| **LANG** | 새 **언어(target)** 추가 | 값 = 지원 언어 수(현재 5) |
| **MAJOR** | 대형 기능/새 콘텐츠 축(단어은행, 새 번역 방향 등) | LANG 오르면 0 |
| **MINOR** | UI가 명시적으로 바뀌어 UX가 달라짐 | MAJOR 오르면 0 |
| **PATCH** | 오류 수정 · **기존 팩에 단어 추가** | MINOR 오르면 0 |

- 왼쪽 자리가 오르면 오른쪽은 모두 0으로 리셋.
- **⚠️ 팩 규격 변경**: 단어/팩 스키마가 바뀌면(예: `m:{base}` 도입, `parent`/`extra` 필드) 자리와 별개로 CHANGELOG 항목에 `⚠️ 팩 규격 변경` 표기.
- 전체 이력은 [CHANGELOG.md](CHANGELOG.md).

---

## 11. 주요 결정 · 히스토리 (왜 이렇게 됐나)

- **Notion → 웹앱**: 열 많은 데이터가 Notion에서 불편해서 JS/HTML로 이전.
- **APK → PWA**: 앱스토어/APK 업데이트가 번거로워서 GitHub Pages + PWA로. 이름을 **3Ls**(Language Learning Library)로.
- **데이터 주도 표 + 열 자동 숨김**: 팩마다 필드가 달라도 UI가 알아서 맞추도록(호환성).
- **한국어 어절 줄바꿈**(`word-break:keep-all`), **열 접기**, **팁 토글** 등 모바일 가독성 개선.
- **언어 선택 페이지 분리 + 📂 Contents 드롭다운**: 언어가 늘어도 드롭다운이 터지지 않게. 확장 사전은 카드 ▾ 로.
- **빈 껍데기 + redirect**: 코스는 없고 사전만 있는 언어(일본어·한국어)를 "언어 카드"로 세우되 누르면 사전으로.
- **Library 전환**: 시험 잠금 제거 — 자유 열람 지향.
- **base/target + i18n**: 나중에 "English→French" 같은 방향을 위해 UI 언어(base)와 학습 언어(target)를 분리. 단어 뜻을 base로 키잉.
- **스키마 언어 비종속화(A방식)**: `ko`/`en` 처럼 필드명에 base가 박힌 구조를 `m:{base}`로 바꿔 호환성 확보. 파일은 target당 1개로 통합하고 파생 파일 폐지. 향후 B(오버레이)로 확장 가능하게 `registerMeanings` 훅 남김.
- **중국어 추가(v5.0.0.0)**: 코스 + 현지 회화 사전. 현지 사전은 신조어·밈 중심으로 보강.

---

*마지막 갱신: v5.0.0.0 기준. 구조를 크게 바꾸면 이 문서도 같이 갱신할 것.*
