/* =====================================================================
   📦 새 언어팩 템플릿 — Polyglot Builder
   ---------------------------------------------------------------
   새 언어를 추가하는 두 가지 방법:

   [방법 1] JS 파일 (권장)
     1) 이 파일을 복사해 languages/es.js 처럼 저장
     2) 아래 내용을 그 언어에 맞게 채우기
     3) index.html 하단에 <script src="languages/es.js"></script> 추가

   [방법 2] JSON 파일
     아래 registerLanguagePack( ... ) 안쪽의 객체만 .json 파일로 저장한 뒤,
     프로그램 상단의 "＋ 언어팩" 버튼으로 불러오기 (브라우저에 저장됨)

   ── 필드 규칙 ─────────────────────────────────────────────
   id           : 팩 고유 id (파일명과 맞추기, 예: 'es', 'ja', 'fr-extra')
   target       : 학습 언어 코드 (예: 'fr','es','ja','kr'). 언어 선택 화면의 카드는 target 기준.
                  새 코드를 지어도 됨('ar','solresol','piano' 등) — 엔진 수정 불필요
   names        : (선택) 언어 선택 카드에 표시할 target 이름을 base별로.
                  예: names:{kr:'아랍어', en:'Arabic'}. 없으면 name 필드를 씀
   extra        : true 면 같은 target의 확장 콘텐츠(사전 등) — 카드 ▾ 에서 접근, menuLabel로 표기
   tts          : Web Speech API 로케일 (예: 'es-ES', 'de-DE', 'ja-JP').
                  생략하면 발음(듣기) 버튼·열이 전부 자동으로 숨겨짐 — 악보·인공어 등 무음 콘텐츠 OK
   desc         : (선택) 홈 화면 서브타이틀에 쓸 과정 소개 한 줄. 없으면 "레벨 N개 과정"으로 자동 생성
   phaseLabels  : (선택) 레벨의 phase 값에 붙일 단계 이름. { intro:'Warm-up', A:'Etudes', … }
                  없으면 기본 라벨(기초 다지기/Phase A…)을 base 언어로 표시
   ignoreDiacritics : (선택) true 면 채점 시 발음 구별 부호를 무시.
                  라틴어 마크론(amāre=amare)처럼 교재용 보조 기호일 때 켠다.
                  프랑스어 악센트(café)처럼 철자의 일부면 끄고 둔다(기본값).
   ※ RTL(아랍어·히브리어 등)은 별도 설정 없이 자동으로 올바른 방향으로 표시됩니다.
   specialChars : 화면 키보드로 제공할 특수문자 (없으면 [])
   columnLabels : (선택) 열 이름 바꾸기. { key:'새이름', … }. key = cat/word/ipa/
                  meaning/ex/speak. 예: 고사성어 사전 columnLabels:{ipa:'한자'}.
   columnOrder  : (선택) 열 순서 바꾸기. ['word','ipa','meaning','ex','speak'] 처럼
                  나열. 목록에 없는 열은 원래 순서로 뒤에 붙음.

   ── 단어 스키마 (언어 비종속) ─────────────────────────────
   { w:'표제어(학습 언어)', ipa:'발음',
     m:{ kr:'한국어 뜻', en:'English meaning' },   // 뜻은 base(설명 언어)로 키잉
     ex:'예문(학습 언어)', exm:{ kr:'예문 번역' },    // 예문 번역도 base로 키잉
     tip:{ kr:'보충 설명' },                        // 팁도 base로 키잉
     gender:'m'|'f'|'mf'(선택), plural:'복수형'(선택),
     say:'발음용 표기'(선택), exSay:'예문 발음용 표기'(선택),
     id:'SRS 고유키'(선택) }
   · say / exSay : 화면에 보이는 표기와 TTS로 읽을 표기가 다를 때 씁니다.
       라틴어 고전식 → {w:'Caesar', say:'Kaisar'} 를 이탈리아어 음성으로 근사
       한자 사전    → {w:'呵', ipa:'가', say:'가'} 로 한국어 음을 읽힘
       일본어 사전  → {w:'合図', ipa:'あいず', say:'あいず'} 로 요미를 읽힘
     생략하면 w(예문은 ex)를 그대로 읽습니다.
   · id : 복습(SRS) 진도를 구분하는 키. 생략하면 'L{레벨}|{표제어}'가 자동으로 쓰이며,
       같은 철자가 여러 레벨에 나와도 진도가 섞이지 않습니다(동형이의어 대응).
   · base 무관 필드(w·ipa·ex·gender·say)는 그대로 두고, base 종속 필드(m·exm·tip)만 맵으로.
   · 팩이 지원하는 base = 단어 m 에 값이 있는 키들로 자동 결정 (kr만 있으면 KR 모드에서만 노출).
   · base 하나만 쓸 거면 m:{kr:'…'} 처럼 그 키만 채우면 됩니다.
   gender       : 'm' | 'f' | 'mf' | 생략 — 성(性) 구분이 없는 언어(일본어 등)는
                  전부 생략하면 UI에서 자동으로 숨겨집니다.
   phase        : 'intro'(선택형 위주) → 'A'(블록 조립) → 'B'(빈칸/변형) → 'C'(자유 작문)
                  레벨 수와 phase 배치는 언어 난이도에 맞게 자유롭게 조정 가능.

   ── 읽기 자료 (선택) ──────────────────────────────────────
   레벨에 reading 을 두면 📜 읽기 탭이 자동으로 생깁니다.
   원전 강독·장문 독해·격언 모음 등 "긴 텍스트"를 담는 자리입니다.

   글이 하나면 객체, 여러 편(장·화)이면 배열로 둡니다.
   배열이면 읽기 탭 위에 목차 드롭다운이 생기고, 편마다 읽은 비율이 표시됩니다.
   ▸ 소설·경전처럼 편이 아주 많은 자료는 레벨을 늘리지 말고 이 배열을 늘리세요.
     레벨 카드가 수백 개로 불어나는 걸 막을 수 있습니다.

   reading: {                              // 또는 [ {…}, {…} ]
     id:'gen-1'(선택), title:'글 제목', source:'출처'(선택),
     intro:'도입 설명 HTML'(선택), after:'맺음말 HTML'(선택),
     gloss:{ '낱말':'뜻', … }(선택),       // 이 글 전용 용어집 — 아래 설명 참고
     lines:[
       { n:'1:3',                          // 줄 표지(절·행 번호 등). 원문 앞에 작게 붙음(선택)
         t:'원문 한 줄',
         m:{ kr:'번역' },                    // base 로 키잉. 없으면 번역 없는 줄
         note:[{w:'낱말', m:'주석'}],        // 낱말 주석(선택)
         say:'발음용 표기'(선택),
         p:true                              // 이 줄 앞에서 문단 나누기(선택)
       }, …
     ]
   }
   · 번역과 주석은 기본으로 감춰져 있고, 줄을 누르면 펼쳐집니다(가려 읽기).
     상단 버튼으로 전체를 한 번에 열고 닫을 수 있습니다.
   · 낱말을 더블클릭하면 뜻 풍선이 뜹니다. 찾는 순서는
       ① 그 줄의 note  ② 이 글의 gloss  ③ 설치된 모든 언어팩의 표제어(정확히 일치)
     셋 다 없으면 "사전에 없는 낱말"이라고 알리고 통합검색으로 넘어갈 버튼을 줍니다
     (없는 뜻을 지어내지 않습니다).
   · 굴절이 심한 언어(라틴어·희랍어 등)는 ③에서 표제어형만 잡힙니다.
     예: puella·Caesar 는 잡히고 rosam·amat·vēnit 는 못 잡습니다.
     원문을 낱말까지 다 읽히려면 그 글의 gloss 에 굴절형을 넣어 두세요.
       gloss:{ 'rosam':'rosa 장미 (단수 대격)', 'amat':'amō 사랑하다 (3인칭 단수 현재)' }
     여러 편이 같은 용어집을 쓴다면 **팩 맨 바깥에** gloss 를 한 번만 두세요.
     편마다 복사하면 50장짜리에서 같은 표가 50번 들어갑니다.
     찾는 순서는 편의 gloss → 팩의 gloss 입니다(편별로 다른 뜻을 줄 수 있습니다).
   · 읽던 위치·글자 크기는 기기에 저장돼, 다시 열면 그 자리에서 이어집니다.
   · 읽기 탭 안의 검색창은 그 글 안에서만 찾습니다(표지로도 찾힘).
     헤더의 🔎 통합검색과 섞이지 않습니다 — 통합검색은 단어만 다룹니다.
   · 사전 팩(dictionary:true)에도 reading 을 넣을 수 있습니다.
   · 단어(words)가 없고 reading 만 있는 팩도 됩니다. 이때는 읽기 탭만 뜨고
     암기카드·연습·시험 탭은 자동으로 숨습니다. 번역이 아직 없어 base 를 못
     정하는 팩이라면 bases:['kr'] 처럼 직접 적어주세요.

   ── 서재: 원서 파일 따로 받기 (선택) ──────────────────────
   장편은 index.html 에 <script> 로 박지 말고 library/ 에 JSON 으로 두세요.
   ⚙ 메뉴의 "📚 서재"에서 목록을 보고, 받기를 누른 것만 기기에 저장됩니다.
     · 앱을 켜는 것만으로는 원서를 받지 않습니다
       (service-worker.js 의 APP_SHELL 에 library/ 를 넣지 마세요 — 넣으면 전부 받아집니다)
     · 받은 파일은 버전이 안 붙은 '3ls-library' 캐시에 들어가 앱을 업데이트해도 남습니다
     · 서재 파일은 그냥 언어팩 JSON 입니다. 이 템플릿 그대로 쓰면 됩니다
   1) library/<이름>.json  … 언어팩 객체 (extra:true 로 두면 카드 ▾ 로 들어감)
   2) library/index.json 에 한 줄 등록:
        { "id":"la-vulgata-genesis", "file":"la-vulgata-genesis.json",
          "name":"불가타 — 창세기", "target":"la",
          "lines":1533, "size":"180 KB", "desc":"한 줄 소개" }
   평문 텍스트가 있다면 tools/mkreading.py 로 1)을 자동 생성할 수 있습니다.

   ── 문제 유형 4종 ─────────────────────────────────────────
   { type:'choice',  q:'질문', options:['a','b','c'], answer:1(정답 인덱스),
     audio:'읽어줄 문장'(선택), why:'해설'(선택), hint:'힌트'(선택) }

   { type:'blank',   text:'문장 속 ___ 을 빈칸으로', answer:'정답' 또는 ['답1','답2'](빈칸 여러 개),
     ko:'해석', accept:['허용 오답 표기'](선택) }

   { type:'blocks',  answer:'정답 문장 (공백으로 토큰 분리)', ko:'해석',
     answers:['다른 어순도 정답'](선택), distractors:['함정 블록'](선택) }
   · answers : 어순이 자유로운 언어(라틴어 등)에서 정답이 여럿일 때 나머지를 적습니다.
     예) answer:'Puella rosam amat', answers:['Rosam puella amat','Puella amat rosam']

   { type:'compose', prompt:'작문 지시', mustInclude:['필수 표현', ['대안1','대안2']],
     minWords:6, sample:'모범 답안',
     minChars:10(선택), checkCase:false(선택), checkEnd:false(선택), endPunct:'。'(선택) }
   · 길이 검사는 한중일·태국 문자가 섞이면 자동으로 '글자 수' 기준이 됩니다(띄어쓰기를 안 하므로).
     minChars 로 직접 지정할 수도 있습니다.
   · 종결부호는 . ! ? 。！？ ؟ ۔ ； ; … 를 기본 허용. endPunct 로 좁히거나
     checkEnd:false / checkCase:false 로 각 검사를 끌 수 있습니다.
   ===================================================================== */

/* ↓ 주석을 풀고 채워 넣으세요 (스페인어 예시 뼈대)

registerLanguagePack({
  id: 'es',
  target: 'es',
  name: '스페인어',
  nativeName: 'Español',
  flag: '🇪🇸',
  tts: 'es-ES',
  specialChars: ['á','é','í','ó','ú','ñ','ü','¿','¡'],
  levels: [
    {
      level: 1, cefr: 'A1.1', phase: 'intro',
      title: '첫걸음 — 인사',
      desc: '스페인어 기본 인사와 발음을 익힙니다.',
      words: [
        {w:'hola', ipa:'/ˈola/', m:{kr:'안녕하세요', en:'hello'}, pos:'표현',
         ex:'¡Hola! ¿Cómo estás?', exm:{kr:'안녕! 어떻게 지내?'}},
        {w:'gracias', ipa:'/ˈɡɾasjas/', m:{kr:'감사합니다', en:'thank you'}, pos:'표현',
         ex:'Muchas gracias.', exm:{kr:'정말 감사합니다.'}}
        // ... 단어 추가
      ],
      grammar: [
        {title:'문법 노트 제목', html:'<p>HTML로 자유롭게 설명</p>'}
      ],
      exercises: [
        {type:'choice', q:'"감사합니다"는?', options:['hola','gracias','adiós'], answer:1}
        // ... 문제 추가
      ],
      quiz: [
        {type:'choice', q:'"안녕하세요"는?', options:['gracias','hola','por favor'], answer:1}
        // 5문항 권장, 80점 이상이면 다음 레벨 해제
      ]
    }
    // ... Level 2~10 추가
  ]
});

*/
