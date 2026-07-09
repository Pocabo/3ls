# 3Ls — Language Learning Library

CEFR 기반 10레벨 커리큘럼으로 언어를 학습하는 **설치형 웹앱(PWA)** 입니다.
서버·앱스토어·APK 불필요 — 브라우저로 열거나, 홈 화면에 설치해 **오프라인**으로 쓸 수 있습니다.

## 실행

```
index.html  ← 로컬에서 바로 열기 (Chrome/Edge 권장, TTS 음성 지원)
```
> PWA(설치·오프라인) 기능은 `http(s)://` 로 접속할 때만 켜집니다. 로컬 `file://` 로 열면
> 학습 기능은 그대로 되지만 서비스워커는 비활성화됩니다. → 아래 **GitHub Pages 배포** 참고.

## 📱 PWA (설치 · 오프라인)

- `manifest.json` + `service-worker.js` + `icon.svg` 로 구성 — **홈 화면 추가** 시 전체화면 앱처럼 실행
- 서비스워커가 앱 셸(HTML·언어팩·아이콘)을 캐시 → 첫 로딩 후 **인터넷 없이도** 동작
- **자동 업데이트**: 호스트에 파일을 올리면 다음 실행 때 새 버전을 받아옵니다
  (내용을 바꾼 뒤에는 `service-worker.js`의 `CACHE = '3ls-v1'` 숫자를 올려 강제 갱신)

## 🚀 GitHub Pages 배포

1. GitHub에 새 저장소(예: `3ls`) 생성 → 이 폴더 전체를 push
   ```bash
   git init && git add -A && git commit -m "3Ls PWA"
   git branch -M main
   git remote add origin https://github.com/<사용자명>/3ls.git
   git push -u origin main
   ```
2. 저장소 **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**, Branch: **main / (root)** → Save
3. 잠시 뒤 `https://<사용자명>.github.io/3ls/` 로 접속
4. 폰(Chrome/Safari)에서 그 주소 열기 → **"홈 화면에 추가"** → 앱 아이콘 완성

> 모든 경로를 상대경로(`./`)로 작성해 하위경로(`/3ls/`)에서도 그대로 동작합니다.
> `.nojekyll` 파일이 Jekyll 처리를 꺼서 `languages/_template.js` 같은 밑줄 파일도 정상 서빙됩니다.

## 커리큘럼 구조 (프랑스어 🇫🇷 기본 탑재)

| 레벨 | CEFR | 단계 | 내용 |
|---|---|---|---|
| 1-2 | A1.1 | 기초 다지기 | 발음 규칙(리에종·묵음), 인사, 숫자, **관사·인칭대명사·부정문·의문사**¹ |
| 3-5 | A1-A2 | **Phase A** 블록 조립 | 음식·가족·날씨·일과 어휘, 성수일치, 대명동사 |
| 6-8 | B1 | **Phase B** 빈칸/변형 | passé composé, imparfait, 미래시제, 목적어 대명사 y/en |
| 9-10 | B2-C1 | **Phase C** 자유 작문 | subjonctif, conditionnel, 문체(격식) |

¹ 원 커리큘럼에 없던 문법 연결부(관사, 대명사, 부분관사, 소유형용사 등)를 레벨 사이 징검다리로 추가했습니다.

### 핵심 기능
- **마일스톤 시험**: 각 레벨 시험 80점 이상 → 다음 레벨 해제
- **누적 복습 루프(SRS)**: 플래시카드에서 "몰라요"한 단어가 0→1→3→7→14→30일 간격으로 재출제
- **오디오-비주얼 그라운딩**: 전 단어 IPA 발음기호 + 브라우저 TTS(🔊) 지원
- **특수문자 키보드**: é è ç 등 언어별 입력 버튼 자동 제공
- 진행 상황은 브라우저 localStorage에 언어별로 저장

## 🌍 다른 언어 추가하기 (호환성 설계)

엔진(`index.html`)은 언어를 전혀 모릅니다. 모든 언어 지식은 **언어팩**이 공급합니다.

```
3Ls/
├── index.html          ← 학습 엔진 (수정할 일 없음)
├── manifest.json       ← PWA 매니페스트
├── service-worker.js   ← 오프라인 캐시 (언어팩 추가 시 APP_SHELL에도 등록)
├── icon.svg            ← 앱 아이콘 (+ icon-maskable.svg)
├── .nojekyll           ← GitHub Pages Jekyll 비활성화
└── languages/
    ├── fr.js           ← 프랑스어 팩
    ├── es.js           ← 스페인어 팩
    ├── _template.js    ← 새 언어팩 작성 가이드
    └── (ja.js, de.js…) ← 여기에 추가
```

> 새 언어팩(`xx.js`)을 추가하면 ① `index.html` 하단에 `<script>` 한 줄, ② `service-worker.js`의
> `APP_SHELL` 배열에 `'./languages/xx.js'` 를 넣어야 오프라인에서도 로드됩니다.

**방법 1 — JS 파일**: `_template.js`를 복사해 채우고, `index.html` 하단에 `<script src="languages/xx.js"></script>` 한 줄 추가.

**방법 2 — JSON 가져오기**: 팩 객체를 `.json`으로 저장 후 프로그램 상단 **"＋ 언어팩"** 버튼으로 불러오기(브라우저에 저장됨).

성(性)이 없는 언어(일본어 등)는 `gender` 필드를 생략하면 UI가 자동으로 숨겨지고, `tts` 로케일만 바꾸면 발음도 그 언어로 나옵니다.

## 📒 Notion 연동

프랑스어 어휘 95개는 Notion **"🇫🇷 프랑스어 단어책"** 데이터베이스와 동기화되어 있습니다
(레벨·CEFR·품사·성별·IPA·예문·학습 상태 속성 포함).
