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
   target       : 학습 언어 코드 (예: 'fr','es','ja','kr'). 언어 선택 화면의 카드는 target 기준
   extra        : true 면 같은 target의 확장 콘텐츠(사전 등) — 카드 ▾ 에서 접근, menuLabel로 표기
   tts          : Web Speech API 로케일 (예: 'es-ES', 'de-DE', 'ja-JP')
   specialChars : 화면 키보드로 제공할 특수문자 (없으면 [])

   ── 단어 스키마 (언어 비종속) ─────────────────────────────
   { w:'표제어(학습 언어)', ipa:'발음',
     m:{ kr:'한국어 뜻', en:'English meaning' },   // 뜻은 base(설명 언어)로 키잉
     ex:'예문(학습 언어)', exm:{ kr:'예문 번역' },    // 예문 번역도 base로 키잉
     tip:{ kr:'보충 설명' },                        // 팁도 base로 키잉
     gender:'m'|'f'|'mf'(선택), plural:'복수형'(선택) }
   · base 무관 필드(w·ipa·ex·gender)는 그대로 두고, base 종속 필드(m·exm·tip)만 맵으로.
   · 팩이 지원하는 base = 단어 m 에 값이 있는 키들로 자동 결정 (kr만 있으면 KR 모드에서만 노출).
   · base 하나만 쓸 거면 m:{kr:'…'} 처럼 그 키만 채우면 됩니다.
   gender       : 'm' | 'f' | 'mf' | 생략 — 성(性) 구분이 없는 언어(일본어 등)는
                  전부 생략하면 UI에서 자동으로 숨겨집니다.
   phase        : 'intro'(선택형 위주) → 'A'(블록 조립) → 'B'(빈칸/변형) → 'C'(자유 작문)
                  레벨 수와 phase 배치는 언어 난이도에 맞게 자유롭게 조정 가능.

   ── 문제 유형 4종 ─────────────────────────────────────────
   { type:'choice',  q:'질문', options:['a','b','c'], answer:1(정답 인덱스),
     audio:'읽어줄 문장'(선택), why:'해설'(선택), hint:'힌트'(선택) }

   { type:'blank',   text:'문장 속 ___ 을 빈칸으로', answer:'정답' 또는 ['답1','답2'](빈칸 여러 개),
     ko:'해석', accept:['허용 오답 표기'](선택) }

   { type:'blocks',  answer:'정답 문장 (공백으로 토큰 분리)', ko:'해석',
     distractors:['함정 블록'](선택) }

   { type:'compose', prompt:'작문 지시', mustInclude:['필수 표현', ['대안1','대안2']],
     minWords:6, sample:'모범 답안' }
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
