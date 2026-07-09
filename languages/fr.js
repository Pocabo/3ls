/* =====================================================================
   🇫🇷 프랑스어 언어팩 — Polyglot Builder
   ---------------------------------------------------------------
   CEFR 매핑 10레벨 커리큘럼.
   Level 1-2  : 발음·인사·기초 문법(관사/대명사/부정문) — 원 커리큘럼의
                "연결부 부족"을 보완하기 위해 관사·대명사·의문사를 추가함.
   Level 3-5  : Phase A (블록 조립) — 주제 어휘 + 현재형
   Level 6-8  : Phase B (빈칸/변형) — 과거·미래 시제, 목적어 대명사 y/en
   Level 9-10 : Phase C (자유 작문) — subjonctif, conditionnel, 문체
   단어 데이터는 Notion "🇫🇷 프랑스어 단어책" DB와 동기화되어 있음.
   ===================================================================== */
registerLanguagePack({
  id: 'fr',
  name: '프랑스어',
  nativeName: 'Français',
  flag: '🇫🇷',
  tts: 'fr-FR',
  specialChars: ['é','è','ê','ë','à','â','ç','î','ï','ô','û','ù','œ','’'],
  levels: [

  /* ─────────────── LEVEL 1 ─────────────── */
  {
    level: 1, cefr: 'A1.1', phase: 'intro',
    title: '첫걸음 — 인사와 소리',
    desc: '프랑스어의 소리 규칙(리에종·묵음), 생존 인사말, 인칭대명사와 관사, 숫자 1-10을 익힙니다.',
    words: [
      {w:'bonjour', ipa:'/bɔ̃.ʒuʁ/', ko:'안녕하세요 (낮 인사)', en:'hello', pos:'표현', ex:'Bonjour, comment allez-vous ?', exKo:'안녕하세요, 어떻게 지내세요?'},
      {w:'bonsoir', ipa:'/bɔ̃.swaʁ/', ko:'안녕하세요 (저녁 인사)', en:'good evening', pos:'표현', ex:'Bonsoir, madame !', exKo:'안녕하세요(저녁), 부인!'},
      {w:'salut', ipa:'/sa.ly/', ko:'안녕 (친한 사이)', en:'hi / bye', pos:'표현', ex:'Salut, ça va ?', exKo:'안녕, 잘 지내?'},
      {w:'au revoir', ipa:'/o ʁə.vwaʁ/', ko:'안녕히 가세요', en:'goodbye', pos:'표현', ex:'Au revoir, à demain !', exKo:'안녕히 가세요, 내일 봬요!'},
      {w:'merci', ipa:'/mɛʁ.si/', ko:'감사합니다', en:'thank you', pos:'표현', ex:'Merci beaucoup !', exKo:'정말 감사합니다!'},
      {w:"s'il vous plaît", ipa:'/sil vu plɛ/', ko:'부탁합니다', en:'please', pos:'표현', ex:"Un café, s'il vous plaît.", exKo:'커피 한 잔 부탁합니다.'},
      {w:'pardon', ipa:'/paʁ.dɔ̃/', ko:'실례합니다, 죄송합니다', en:'excuse me', pos:'표현', ex:'Pardon, où est la gare ?', exKo:'실례합니다, 역이 어디에 있나요?'},
      {w:'oui', ipa:'/wi/', ko:'네', en:'yes', pos:'부사', ex:'Oui, je comprends.', exKo:'네, 이해합니다.'},
      {w:'non', ipa:'/nɔ̃/', ko:'아니요', en:'no', pos:'부사', ex:'Non, merci.', exKo:'아니요, 괜찮습니다.'},
      {w:'ça va', ipa:'/sa va/', ko:'잘 지내요 / 잘 지내?', en:"I'm fine / how's it going?", pos:'표현', ex:'— Ça va ? — Oui, ça va bien, merci.', exKo:'— 잘 지내? — 응, 잘 지내, 고마워.'},
      {w:'madame', ipa:'/ma.dam/', ko:'부인, ~씨 (여성 존칭)', en:'madam', pos:'명사', gender:'f', plural:'mesdames', ex:'Bonjour, madame Dupont.', exKo:'안녕하세요, 뒤퐁 부인.'},
      {w:'monsieur', ipa:'/mə.sjø/', ko:'선생님, ~씨 (남성 존칭)', en:'sir', pos:'명사', gender:'m', plural:'messieurs', ex:'Excusez-moi, monsieur.', exKo:'실례합니다, 선생님.'},
      {w:'je', ipa:'/ʒə/', ko:'나는, 저는', en:'I', pos:'대명사', ex:'Je suis coréen.', exKo:'저는 한국인입니다.'},
      {w:'tu', ipa:'/ty/', ko:'너는 (친한 사이)', en:'you (informal)', pos:'대명사', ex:'Tu es mon ami.', exKo:'너는 내 친구야.'},
      {w:'il / elle', ipa:'/il/ /ɛl/', ko:'그는 / 그녀는', en:'he / she', pos:'대명사', gender:'mf', ex:'Il est grand. Elle est petite.', exKo:'그는 키가 크다. 그녀는 키가 작다.'},
      {w:'nous', ipa:'/nu/', ko:'우리는', en:'we', pos:'대명사', ex:'Nous sommes étudiants.', exKo:'우리는 학생입니다.'},
      {w:'vous', ipa:'/vu/', ko:'당신(들)은 (존칭·복수)', en:'you (formal/plural)', pos:'대명사', ex:'Vous êtes très gentil.', exKo:'당신은 매우 친절하시네요.'},
      {w:'ils / elles', ipa:'/il/ /ɛl/', ko:'그들은 / 그녀들은', en:'they', pos:'대명사', gender:'mf', ex:'Ils sont français.', exKo:'그들은 프랑스인입니다.'},
      {w:'le / la / les', ipa:'/lə/ /la/ /le/', ko:'그 (정관사)', en:'the', pos:'관사', gender:'mf', ex:'le pain, la pomme, les livres', exKo:'그 빵, 그 사과, 그 책들'},
      {w:'un / une / des', ipa:'/œ̃/ /yn/ /de/', ko:'하나의 (부정관사)', en:'a / an / some', pos:'관사', gender:'mf', ex:'un livre, une table, des amis', exKo:'책 한 권, 탁자 하나, 친구들'},
      {w:'un', ipa:'/œ̃/', ko:'하나, 1', en:'one', pos:'숫자', ex:"J'ai un frère.", exKo:'나는 형제가 한 명 있다.'},
      {w:'deux', ipa:'/dø/', ko:'둘, 2', en:'two', pos:'숫자', ex:"Deux cafés, s'il vous plaît.", exKo:'커피 두 잔 부탁합니다.'},
      {w:'trois', ipa:'/tʁwɑ/', ko:'셋, 3', en:'three', pos:'숫자', ex:'Il y a trois chats.', exKo:'고양이 세 마리가 있다.'},
      {w:'quatre', ipa:'/katʁ/', ko:'넷, 4', en:'four', pos:'숫자', ex:'Nous sommes quatre.', exKo:'우리는 네 명입니다.'},
      {w:'cinq', ipa:'/sɛ̃k/', ko:'다섯, 5', en:'five', pos:'숫자', ex:'Il est cinq heures.', exKo:'5시입니다.'},
      {w:'six', ipa:'/sis/', ko:'여섯, 6', en:'six', pos:'숫자', ex:"Six euros, s'il vous plaît.", exKo:'6유로입니다.'},
      {w:'sept', ipa:'/sɛt/', ko:'일곱, 7', en:'seven', pos:'숫자', ex:'Il y a sept jours dans une semaine.', exKo:'일주일에는 7일이 있다.'},
      {w:'huit', ipa:'/ɥit/', ko:'여덟, 8', en:'eight', pos:'숫자', ex:'Le magasin ouvre à huit heures.', exKo:'가게는 8시에 문을 연다.'},
      {w:'neuf', ipa:'/nœf/', ko:'아홉, 9', en:'nine', pos:'숫자', ex:"J'ai neuf livres.", exKo:'나는 책이 아홉 권 있다.'},
      {w:'dix', ipa:'/dis/', ko:'열, 10', en:'ten', pos:'숫자', ex:'Compter de un à dix.', exKo:'1부터 10까지 세기.'}
    ],
    grammar: [
      {title:'프랑스어 소리의 3대 규칙', html:
        `<p><b>① 묵음(lettre muette)</b> — 단어 끝 자음은 대부분 소리 나지 않습니다: peti<s>t</s>, gran<s>d</s>, troi<s>s</s>.</p>
         <p><b>② 리에종(liaison)</b> — 묵음이던 끝 자음이 다음 단어의 모음과 만나면 살아납니다: vous_êtes /vu-zɛt/, les_amis /le-za-mi/.</p>
         <p><b>③ 앙셴망(enchaînement)</b> — 발음되던 끝 자음이 다음 모음에 자연스럽게 붙습니다: il‿a /i-la/.</p>
         <p>🔊 단어 옆 스피커 버튼으로 실제 소리를 꼭 확인하세요!</p>`},
      {title:'인칭대명사 — 문장의 뼈대', html:
        `<table><tr><th>단수</th><th>복수</th></tr>
         <tr><td>je (나)</td><td>nous (우리)</td></tr>
         <tr><td>tu (너)</td><td>vous (당신/너희)</td></tr>
         <tr><td>il / elle (그/그녀)</td><td>ils / elles (그들/그녀들)</td></tr></table>
         <p><b>tu vs vous</b>: 친구·가족에게는 tu, 처음 보는 사람·격식 상황에서는 vous. 망설여지면 vous가 안전합니다.</p>`},
      {title:'관사 — 프랑스어 명사는 성(性)이 있다', html:
        `<p>모든 명사는 남성(m) 또는 여성(f)입니다. 관사가 성과 수를 알려줍니다.</p>
         <table><tr><th></th><th>남성</th><th>여성</th><th>복수</th></tr>
         <tr><td>정관사(그)</td><td>le pain</td><td>la pomme</td><td>les livres</td></tr>
         <tr><td>부정관사(하나의)</td><td>un livre</td><td>une table</td><td>des amis</td></tr></table>
         <p>💡 단어를 외울 때 <b>관사와 한 덩어리로</b> 외우세요: "pain"이 아니라 "le pain".</p>`}
    ],
    exercises: [
      {type:'choice', q:'저녁에 만난 상사에게 어울리는 인사는?', options:['Salut !','Bonsoir, monsieur.','Ça va ?'], answer:1,
       why:'저녁 인사는 bonsoir, 격식 상황이므로 salut(반말 인사)는 부적절합니다.'},
      {type:'choice', q:'🔊 듣고 알맞은 뜻을 고르세요.', audio:'merci beaucoup', options:['실례합니다','정말 감사합니다','안녕히 가세요'], answer:1},
      {type:'blank', text:'___ revoir, à demain !', answer:'Au', ko:'안녕히 가세요, 내일 봬요!', hint:'작별 인사는 두 단어입니다: au revoir'},
      {type:'choice', q:'"pomme(사과)"는 여성명사입니다. 알맞은 관사는?', options:['le pomme','la pomme','les pomme'], answer:1,
       why:'여성 단수 명사에는 정관사 la를 씁니다.'},
      {type:'blank', text:'un, deux, ___, quatre, cinq', answer:'trois', ko:'1, 2, 3, 4, 5', hint:'숫자 3'},
      {type:'choice', q:'처음 만난 사람에게 "당신은 친절하시네요"라고 할 때 알맞은 주어는?', options:['tu','vous','ils'], answer:1,
       why:'격식·존칭 상황에서는 vous를 씁니다.'}
    ],
    quiz: [
      {type:'choice', q:'"고맙습니다"에 해당하는 말은?', options:['pardon','merci','bonsoir'], answer:1},
      {type:'choice', q:'🔊 듣고 알맞은 뜻을 고르세요.', audio:"s'il vous plaît", options:['부탁합니다','죄송합니다','잘 지내요'], answer:0},
      {type:'blank', text:'— Ça va ? — Oui, ça va bien, ___.', answer:'merci', ko:'— 잘 지내? — 응, 잘 지내, 고마워.'},
      {type:'choice', q:'"livre(책)"는 남성명사입니다. "책 한 권"은?', options:['une livre','un livre','des livre'], answer:1},
      {type:'choice', q:'다음 중 숫자 8은?', options:['huit','six','neuf'], answer:0}
    ]
  },

  /* ─────────────── LEVEL 2 ─────────────── */
  {
    level: 2, cefr: 'A1.1', phase: 'intro',
    title: '문장의 심장 — 4대 동사와 질문',
    desc: 'être·avoir·aller·faire 4대 불규칙 동사, 부정문(ne...pas), 의문사, 일상 사물 어휘로 첫 문장을 만듭니다.',
    words: [
      {w:'être', ipa:'/ɛtʁ/', ko:'~이다, 있다', en:'to be', pos:'동사', ex:'Je suis étudiant.', exKo:'저는 학생입니다.'},
      {w:'avoir', ipa:'/a.vwaʁ/', ko:'가지다, 있다', en:'to have', pos:'동사', ex:"J'ai un chat.", exKo:'나는 고양이 한 마리가 있다.'},
      {w:'aller', ipa:'/a.le/', ko:'가다', en:'to go', pos:'동사', ex:'Je vais à Paris.', exKo:'나는 파리에 간다.'},
      {w:'faire', ipa:'/fɛʁ/', ko:'하다, 만들다', en:'to do, to make', pos:'동사', ex:'Je fais du sport.', exKo:'나는 운동을 한다.'},
      {w:'ne ... pas', ipa:'/nə pa/', ko:'~하지 않다 (부정문)', en:'not', pos:'표현', ex:'Je ne parle pas anglais.', exKo:'나는 영어를 하지 못한다.'},
      {w:'eau', ipa:'/o/', ko:'물', en:'water', pos:'명사', gender:'f', plural:'eaux', ex:"Je bois de l'eau.", exKo:'나는 물을 마신다.'},
      {w:'pain', ipa:'/pɛ̃/', ko:'빵', en:'bread', pos:'명사', gender:'m', plural:'pains', ex:'Le pain est délicieux.', exKo:'그 빵은 맛있다.'},
      {w:'maison', ipa:'/mɛ.zɔ̃/', ko:'집', en:'house', pos:'명사', gender:'f', plural:'maisons', ex:'Ma maison est petite.', exKo:'우리 집은 작다.'},
      {w:'école', ipa:'/e.kɔl/', ko:'학교', en:'school', pos:'명사', gender:'f', plural:'écoles', ex:"Je vais à l'école.", exKo:'나는 학교에 간다.'},
      {w:'livre', ipa:'/livʁ/', ko:'책', en:'book', pos:'명사', gender:'m', plural:'livres', ex:'Je lis un livre.', exKo:'나는 책을 읽는다.'},
      {w:'jour', ipa:'/ʒuʁ/', ko:'날, 하루', en:'day', pos:'명사', gender:'m', plural:'jours', ex:'Quel jour sommes-nous ?', exKo:'오늘이 무슨 요일이죠?'},
      {w:'nuit', ipa:'/nɥi/', ko:'밤', en:'night', pos:'명사', gender:'f', plural:'nuits', ex:'Bonne nuit !', exKo:'잘 자요!'},
      {w:'ami / amie', ipa:'/a.mi/', ko:'친구', en:'friend', pos:'명사', gender:'mf', plural:'amis / amies', ex:"C'est mon ami.", exKo:'이 사람은 내 친구야.'},
      {w:'chat', ipa:'/ʃa/', ko:'고양이', en:'cat', pos:'명사', gender:'m', plural:'chats', ex:'Le chat dort sur la table.', exKo:'고양이가 탁자 위에서 자고 있다.'},
      {w:'chien', ipa:'/ʃjɛ̃/', ko:'개', en:'dog', pos:'명사', gender:'m', plural:'chiens', ex:'Le chien mange.', exKo:'개가 먹고 있다.'},
      {w:'table', ipa:'/tabl/', ko:'탁자, 식탁', en:'table', pos:'명사', gender:'f', plural:'tables', ex:'Le livre est sur la table.', exKo:'책이 탁자 위에 있다.'},
      {w:'petit / petite', ipa:'/pə.ti(t)/', ko:'작은', en:'small', pos:'형용사', gender:'mf', ex:'un petit chat / une petite maison', exKo:'작은 고양이 / 작은 집'},
      {w:'grand / grande', ipa:'/ɡʁɑ̃(d)/', ko:'큰, 키가 큰', en:'big, tall', pos:'형용사', gender:'mf', ex:'une grande école', exKo:'큰 학교'},
      {w:'bon / bonne', ipa:'/bɔ̃(n)/', ko:'좋은, 맛있는', en:'good', pos:'형용사', gender:'mf', ex:"C'est un bon restaurant.", exKo:'여기는 좋은 식당이다.'},
      {w:'et', ipa:'/e/', ko:'그리고', en:'and', pos:'접속사', ex:'un café et un croissant', exKo:'커피 한 잔과 크루아상 하나'},
      {w:'mais', ipa:'/mɛ/', ko:'하지만', en:'but', pos:'접속사', ex:"C'est petit mais joli.", exKo:'작지만 예쁘다.'},
      {w:'ou', ipa:'/u/', ko:'또는', en:'or', pos:'접속사', ex:'Thé ou café ?', exKo:'차요 아니면 커피요?'},
      {w:'parce que', ipa:'/paʁs kə/', ko:'왜냐하면', en:'because', pos:'접속사', ex:"Je mange parce que j'ai faim.", exKo:'배가 고파서 먹는다.'},
      {w:'qui', ipa:'/ki/', ko:'누가, 누구', en:'who', pos:'의문사', ex:'Qui est-ce ?', exKo:'이 사람은 누구예요?'},
      {w:"qu'est-ce que", ipa:'/kɛs kə/', ko:'무엇을', en:'what', pos:'의문사', ex:"Qu'est-ce que c'est ?", exKo:'이게 뭐예요?'},
      {w:'où', ipa:'/u/', ko:'어디', en:'where', pos:'의문사', ex:'Où est la gare ?', exKo:'역이 어디에 있나요?'},
      {w:'quand', ipa:'/kɑ̃/', ko:'언제', en:'when', pos:'의문사', ex:'Quand est-ce que tu arrives ?', exKo:'너 언제 도착해?'},
      {w:'pourquoi', ipa:'/puʁ.kwa/', ko:'왜', en:'why', pos:'의문사', ex:'Pourquoi tu étudies le français ?', exKo:'너는 왜 프랑스어를 공부해?'},
      {w:'comment', ipa:'/kɔ.mɑ̃/', ko:'어떻게', en:'how', pos:'의문사', ex:"Comment tu t'appelles ?", exKo:'너 이름이 뭐야?'}
    ],
    grammar: [
      {title:'4대 불규칙 동사 — 현재형 완전 정복', html:
        `<table><tr><th></th><th>être<br>(~이다)</th><th>avoir<br>(가지다)</th><th>aller<br>(가다)</th><th>faire<br>(하다)</th></tr>
         <tr><td>je</td><td>suis</td><td>ai (j’ai)</td><td>vais</td><td>fais</td></tr>
         <tr><td>tu</td><td>es</td><td>as</td><td>vas</td><td>fais</td></tr>
         <tr><td>il/elle</td><td>est</td><td>a</td><td>va</td><td>fait</td></tr>
         <tr><td>nous</td><td>sommes</td><td>avons</td><td>allons</td><td>faisons</td></tr>
         <tr><td>vous</td><td>êtes</td><td>avez</td><td>allez</td><td>faites</td></tr>
         <tr><td>ils/elles</td><td>sont</td><td>ont</td><td>vont</td><td>font</td></tr></table>
         <p>💡 이 4개만 외워도 프랑스어 문장의 절반이 열립니다. 소리 내어 통째로 암송하세요.</p>`},
      {title:'부정문 — 동사를 ne와 pas 사이에 끼우기', html:
        `<p>Je <b>ne</b> parle <b>pas</b> anglais. (나는 영어를 못한다)</p>
         <p>모음 앞에서는 ne → n’: Je <b>n’</b>ai <b>pas</b> de chat.</p>
         <p>⚠️ 부정문에서 un/une/du/de la는 <b>de</b>로 바뀝니다: J’ai <u>un</u> chat → Je n’ai pas <u>de</u> chat.</p>`},
      {title:'질문하는 3가지 방법', html:
        `<p>① 억양만 올리기(구어): Tu es coréen <b>?</b></p>
         <p>② est-ce que 붙이기: <b>Est-ce que</b> tu es coréen ?</p>
         <p>③ 도치(격식): Es-<b>tu</b> coréen ?</p>
         <p>의문사와 함께: <b>Où</b> est-ce que tu vas ? / <b>Pourquoi</b> tu étudies ?</p>`}
    ],
    exercises: [
      {type:'blank', text:'Je ___ étudiant.', answer:'suis', ko:'저는 학생입니다.', hint:'être의 1인칭 단수'},
      {type:'blank', text:'Tu ___ un chien ?', answer:'as', ko:'너는 개를 키우니?', hint:'avoir의 2인칭 단수'},
      {type:'blank', text:"Nous ___ à l'école.", answer:'allons', ko:'우리는 학교에 간다.', hint:'aller의 1인칭 복수'},
      {type:'choice', q:'"Il ___ beau." (날씨가 좋다) 빈칸에 알맞은 것은?', options:['est','fait','va'], answer:1,
       why:'날씨 표현은 faire를 씁니다: Il fait beau.'},
      {type:'blank', text:'Je ___ parle ___ anglais.', answer:['ne','pas'], ko:'나는 영어를 하지 못한다.', hint:'부정문은 ne + 동사 + pas'},
      {type:'choice', q:'"___ est la gare ?" (역이 어디에 있나요?)', options:['Qui','Où','Quand'], answer:1},
      {type:'blank', text:'Ils ___ français.', answer:'sont', ko:'그들은 프랑스인이다.', hint:'être의 3인칭 복수'}
    ],
    quiz: [
      {type:'blank', text:'Vous ___ très gentil.', answer:'êtes', ko:'당신은 매우 친절하시네요.'},
      {type:'blank', text:"Elle ___ deux frères.", answer:'a', ko:'그녀는 형제가 둘 있다.'},
      {type:'choice', q:'"나는 고양이가 없다"를 올바르게 말하면?', options:["Je n'ai pas de chat.","Je ne pas ai un chat.","Je n'ai pas un chat."], answer:0,
       why:'부정문에서 부정관사 un은 de로 바뀝니다.'},
      {type:'choice', q:'"이게 뭐예요?"는?', options:['Qui est-ce ?',"Qu'est-ce que c'est ?",'Où est-ce ?'], answer:1},
      {type:'blank', text:'Le chat dort sur la ___.', answer:'table', ko:'고양이가 탁자 위에서 자고 있다.'},
      {type:'choice', q:'🔊 듣고 알맞은 뜻을 고르세요.', audio:'Je vais à Paris', options:['나는 파리에 간다','나는 파리에 산다','나는 파리를 좋아한다'], answer:0}
    ]
  },

  /* ─────────────── LEVEL 3 ─────────────── */
  {
    level: 3, cefr: 'A1', phase: 'A',
    title: '음식과 식사 — 블록 조립 시작',
    desc: 'Phase A 시작! 음식 어휘와 부분관사, -er 규칙동사를 배우고 단어 블록으로 문장을 조립합니다.',
    words: [
      {w:'fromage', ipa:'/fʁɔ.maʒ/', ko:'치즈', en:'cheese', pos:'명사', gender:'m', plural:'fromages', ex:'Je voudrais du fromage.', exKo:'치즈를 주세요.'},
      {w:'pomme', ipa:'/pɔm/', ko:'사과', en:'apple', pos:'명사', gender:'f', plural:'pommes', ex:'Je mange une pomme rouge.', exKo:'나는 빨간 사과를 먹는다.'},
      {w:'légume', ipa:'/le.ɡym/', ko:'채소', en:'vegetable', pos:'명사', gender:'m', plural:'légumes', ex:'Les légumes sont bons pour la santé.', exKo:'채소는 건강에 좋다.'},
      {w:'viande', ipa:'/vjɑ̃d/', ko:'고기', en:'meat', pos:'명사', gender:'f', plural:'viandes', ex:'Je ne mange pas de viande.', exKo:'나는 고기를 먹지 않는다.'},
      {w:'poisson', ipa:'/pwa.sɔ̃/', ko:'생선', en:'fish', pos:'명사', gender:'m', plural:'poissons', ex:'Le poisson est frais.', exKo:'생선이 신선하다.'},
      {w:'restaurant', ipa:'/ʁɛs.tɔ.ʁɑ̃/', ko:'식당', en:'restaurant', pos:'명사', gender:'m', plural:'restaurants', ex:'Nous allons au restaurant ce soir.', exKo:'우리는 오늘 저녁 식당에 간다.'},
      {w:'menu', ipa:'/mə.ny/', ko:'메뉴', en:'menu', pos:'명사', gender:'m', plural:'menus', ex:"Le menu, s'il vous plaît.", exKo:'메뉴판 주세요.'},
      {w:'boisson', ipa:'/bwa.sɔ̃/', ko:'음료', en:'drink', pos:'명사', gender:'f', plural:'boissons', ex:'Quelle boisson voulez-vous ?', exKo:'어떤 음료를 드릴까요?'},
      {w:'petit-déjeuner', ipa:'/pə.ti de.ʒø.ne/', ko:'아침 식사', en:'breakfast', pos:'명사', gender:'m', plural:'petits-déjeuners', ex:'Je prends le petit-déjeuner à sept heures.', exKo:'나는 7시에 아침을 먹는다.'},
      {w:'délicieux / délicieuse', ipa:'/de.li.sjø(z)/', ko:'맛있는', en:'delicious', pos:'형용사', gender:'mf', ex:'Cette tarte est délicieuse !', exKo:'이 타르트 정말 맛있다!'},
      {w:'manger', ipa:'/mɑ̃.ʒe/', ko:'먹다', en:'to eat', pos:'동사', ex:'Je mange une pomme.', exKo:'나는 사과를 먹는다.'},
      {w:'boire', ipa:'/bwaʁ/', ko:'마시다', en:'to drink', pos:'동사', ex:"Je bois de l'eau.", exKo:'나는 물을 마신다.'},
      {w:'commander', ipa:'/kɔ.mɑ̃.de/', ko:'주문하다', en:'to order', pos:'동사', ex:'Nous commandons deux cafés.', exKo:'우리는 커피 두 잔을 주문한다.'},
      {w:'je voudrais', ipa:'/ʒə vu.dʁɛ/', ko:'~을 주세요 (정중한 요청)', en:'I would like', pos:'표현', ex:"Je voudrais un croissant, s'il vous plaît.", exKo:'크루아상 하나 주세요.'},
      {w:'du / de la / des', ipa:'/dy/ /də la/ /de/', ko:'약간의 (부분관사)', en:'some', pos:'관사', gender:'mf', ex:'Je mange du pain et de la viande.', exKo:'나는 빵과 고기를 먹는다.'}
    ],
    grammar: [
      {title:'-er 규칙동사 — 프랑스어 동사의 90%', html:
        `<p>manger, commander, parler, aimer... 어미만 바꾸면 됩니다.</p>
         <table><tr><th>인칭</th><th>어미</th><th>manger</th></tr>
         <tr><td>je</td><td>-e</td><td>mange</td></tr>
         <tr><td>tu</td><td>-es</td><td>manges</td></tr>
         <tr><td>il/elle</td><td>-e</td><td>mange</td></tr>
         <tr><td>nous</td><td>-ons</td><td>mange<b>ons</b> ⚠️</td></tr>
         <tr><td>vous</td><td>-ez</td><td>mangez</td></tr>
         <tr><td>ils/elles</td><td>-ent(묵음)</td><td>mangent</td></tr></table>
         <p>⚠️ manger는 nous에서 발음 유지를 위해 e를 남깁니다: mangeons.</p>`},
      {title:'부분관사 — 셀 수 없는 것의 "약간"', html:
        `<p>빵·물·고기처럼 덩어리로 먹는 것에는 부분관사를 씁니다.</p>
         <table><tr><th>남성</th><th>여성</th><th>모음 앞</th><th>복수</th></tr>
         <tr><td><b>du</b> pain</td><td><b>de la</b> viande</td><td><b>de l’</b>eau</td><td><b>des</b> légumes</td></tr></table>
         <p>부정문에서는 모두 <b>de</b>: Je ne mange pas <b>de</b> viande.</p>`},
      {title:'식당 생존 표현', html:
        `<p><b>Je voudrais</b> + 명사 = 정중한 주문의 만능 열쇠.</p>
         <p>Je voudrais un café / le menu / de l’eau, s’il vous plaît.</p>
         <p>계산: L’addition, s’il vous plaît. (계산서 주세요)</p>`}
    ],
    exercises: [
      {type:'blocks', answer:'Je mange une pomme', ko:'나는 사과를 먹는다.', distractors:['manges'],
       hint:'주어 je에는 mange(-e 어미)를 씁니다.'},
      {type:'blocks', answer:"Je voudrais un café s'il vous plaît", ko:'커피 한 잔 주세요.',
       hint:'정중한 요청: je voudrais + 명사 + s’il vous plaît'},
      {type:'blocks', answer:'Nous commandons deux boissons', ko:'우리는 음료 두 잔을 주문한다.', distractors:['commandez'],
       hint:'nous에는 -ons 어미'},
      {type:'blocks', answer:'Le fromage est délicieux', ko:'그 치즈는 맛있다.', distractors:['délicieuse'],
       hint:'fromage는 남성명사 → 형용사도 남성형'},
      {type:'blocks', answer:'Je ne mange pas de viande', ko:'나는 고기를 먹지 않는다.', distractors:['la'],
       hint:'부정문에서 부분관사는 de로 바뀝니다.'},
      {type:'blank', text:'Je mange ___ pain.', answer:'du', ko:'나는 빵을 (조금) 먹는다.', hint:'pain은 남성, 셀 수 없음 → 부분관사'}
    ],
    quiz: [
      {type:'blocks', answer:'Je bois de la boisson', ko:'나는 음료를 마신다.', distractors:['du']},
      {type:'blocks', answer:'Nous allons au restaurant', ko:'우리는 식당에 간다.'},
      {type:'blank', text:'Cette tarte est ___ !', answer:'délicieuse', ko:'이 타르트 정말 맛있다!', hint:'tarte는 여성명사'},
      {type:'choice', q:'"나는 고기를 먹지 않는다"를 올바르게 말하면?', options:['Je ne mange pas de viande.','Je ne mange pas la viande.','Je mange ne pas de viande.'], answer:0},
      {type:'blank', text:'Vous ___ le petit-déjeuner ? (commander)', answer:'commandez', ko:'아침 식사를 주문하시겠어요?'}
    ]
  },

  /* ─────────────── LEVEL 4 ─────────────── */
  {
    level: 4, cefr: 'A2', phase: 'A',
    title: '가족과 날씨 — 소유와 일치',
    desc: '가족·날씨 어휘, 소유형용사(mon/ma/mes), 형용사의 성수일치를 블록 조립으로 훈련합니다.',
    words: [
      {w:'famille', ipa:'/fa.mij/', ko:'가족', en:'family', pos:'명사', gender:'f', plural:'familles', ex:'Ma famille habite à Séoul.', exKo:'우리 가족은 서울에 산다.'},
      {w:'père', ipa:'/pɛʁ/', ko:'아버지', en:'father', pos:'명사', gender:'m', plural:'pères', ex:'Mon père travaille beaucoup.', exKo:'우리 아버지는 일을 많이 하신다.'},
      {w:'mère', ipa:'/mɛʁ/', ko:'어머니', en:'mother', pos:'명사', gender:'f', plural:'mères', ex:'Ma mère aime cuisiner.', exKo:'우리 어머니는 요리를 좋아하신다.'},
      {w:'frère', ipa:'/fʁɛʁ/', ko:'형, 오빠, 남동생', en:'brother', pos:'명사', gender:'m', plural:'frères', ex:"J'ai deux frères.", exKo:'나는 형제가 둘 있다.'},
      {w:'sœur', ipa:'/sœʁ/', ko:'누나, 언니, 여동생', en:'sister', pos:'명사', gender:'f', plural:'sœurs', ex:'Ma sœur est médecin.', exKo:'우리 언니는 의사다.'},
      {w:'enfant', ipa:'/ɑ̃.fɑ̃/', ko:'아이, 자녀', en:'child', pos:'명사', gender:'mf', plural:'enfants', ex:'Les enfants jouent dans le jardin.', exKo:'아이들이 정원에서 놀고 있다.'},
      {w:'mon / ma / mes', ipa:'/mɔ̃/ /ma/ /me/', ko:'나의 (소유형용사)', en:'my', pos:'관사', gender:'mf', ex:'mon père, ma mère, mes parents', exKo:'나의 아버지, 나의 어머니, 나의 부모님'},
      {w:'temps', ipa:'/tɑ̃/', ko:'날씨; 시간', en:'weather; time', pos:'명사', gender:'m', plural:'temps', ex:'Quel temps fait-il ?', exKo:'날씨가 어떻습니까?'},
      {w:'pluie', ipa:'/plɥi/', ko:'비', en:'rain', pos:'명사', gender:'f', plural:'pluies', ex:'Il pleut. / La pluie tombe.', exKo:'비가 온다.'},
      {w:'soleil', ipa:'/sɔ.lɛj/', ko:'해, 태양', en:'sun', pos:'명사', gender:'m', plural:'soleils', ex:"Il y a du soleil aujourd'hui.", exKo:'오늘은 해가 떴다.'},
      {w:'neige', ipa:'/nɛʒ/', ko:'눈', en:'snow', pos:'명사', gender:'f', plural:'neiges', ex:'Il neige en hiver.', exKo:'겨울에는 눈이 온다.'},
      {w:'il fait beau', ipa:'/il fɛ bo/', ko:'날씨가 좋다', en:'the weather is nice', pos:'표현', ex:'Il fait beau, allons au parc !', exKo:'날씨가 좋으니 공원에 가자!'}
    ],
    grammar: [
      {title:'소유형용사 — "나의"도 성수일치', html:
        `<table><tr><th></th><th>남성 단수</th><th>여성 단수</th><th>복수</th></tr>
         <tr><td>나의</td><td>mon père</td><td>ma mère</td><td>mes parents</td></tr>
         <tr><td>너의</td><td>ton frère</td><td>ta sœur</td><td>tes amis</td></tr>
         <tr><td>그/그녀의</td><td>son chat</td><td>sa maison</td><td>ses livres</td></tr></table>
         <p>⚠️ 모음으로 시작하는 여성명사 앞에서는 발음 때문에 <b>mon</b>을 씁니다: mon école, mon amie.</p>`},
      {title:'형용사 성수일치 & 위치', html:
        `<p>형용사는 명사의 성·수에 맞춥니다: un <b>petit</b> chat / une <b>petite</b> maison / des <b>petits</b> chats.</p>
         <p>대부분 명사 <b>뒤</b>: une pomme <b>rouge</b>. 단, 자주 쓰는 짧은 형용사(petit, grand, bon, joli...)는 명사 <b>앞</b>: un <b>bon</b> restaurant.</p>`},
      {title:'날씨는 비인칭 il', html:
        `<p>Il fait beau. (좋다) / Il fait froid. (춥다) / Il fait chaud. (덥다)</p>
         <p>Il pleut. (비 온다) / Il neige. (눈 온다) / Il y a du soleil. (해가 있다)</p>`}
    ],
    exercises: [
      {type:'blocks', answer:'Ma mère aime cuisiner', ko:'우리 어머니는 요리를 좋아하신다.', distractors:['Mon'],
       hint:'mère는 여성명사 → ma'},
      {type:'blocks', answer:"Il fait beau aujourd'hui", ko:'오늘은 날씨가 좋다.'},
      {type:'blocks', answer:"J'ai deux frères et une sœur", ko:'나는 남자 형제 둘과 여자 형제 하나가 있다.'},
      {type:'blocks', answer:'Ma petite sœur mange une pomme', ko:'내 여동생이 사과를 먹는다.', distractors:['petit'],
       hint:'sœur가 여성이므로 petite (누적 복습: manger, pomme)'},
      {type:'blocks', answer:'Il y a du soleil', ko:'해가 떠 있다.'},
      {type:'blank', text:'___ père travaille beaucoup.', answer:'Mon', ko:'우리 아버지는 일을 많이 하신다.', hint:'père는 남성명사'}
    ],
    quiz: [
      {type:'blank', text:'___ école est grande.', answer:'Mon', ko:'우리 학교는 크다.', hint:'école은 여성이지만 모음으로 시작!',
       why:'모음 앞에서는 ma 대신 mon을 씁니다.'},
      {type:'blocks', answer:'Ma famille habite à Séoul', ko:'우리 가족은 서울에 산다.'},
      {type:'choice', q:'"겨울에는 눈이 온다"는?', options:['Il neige en hiver.','Il fait neige en hiver.','La neige est en hiver.'], answer:0},
      {type:'blank', text:'Quel ___ fait-il ?', answer:'temps', ko:'날씨가 어떻습니까?'},
      {type:'choice', q:'올바른 성수일치는?', options:['une grand maison','une grande maison','un grande maison'], answer:1}
    ]
  },

  /* ─────────────── LEVEL 5 ─────────────── */
  {
    level: 5, cefr: 'A2', phase: 'A',
    title: '나의 하루 — 일과와 대명동사',
    desc: '일과 어휘와 대명동사(se lever)를 익히고, 지금까지 배운 모든 어휘로 긴 문장을 조립합니다. 이 레벨을 통과하면 Phase B(시제 변형)가 열립니다.',
    words: [
      {w:'se lever', ipa:'/sə lə.ve/', ko:'일어나다', en:'to get up', pos:'동사', ex:'Je me lève à sept heures.', exKo:'나는 7시에 일어난다.'},
      {w:'travailler', ipa:'/tʁa.va.je/', ko:'일하다, 공부하다', en:'to work', pos:'동사', ex:'Je travaille dans un bureau.', exKo:'나는 사무실에서 일한다.'},
      {w:'dormir', ipa:'/dɔʁ.miʁ/', ko:'자다', en:'to sleep', pos:'동사', ex:'Je dors huit heures par nuit.', exKo:'나는 밤에 8시간 잔다.'},
      {w:'matin', ipa:'/ma.tɛ̃/', ko:'아침', en:'morning', pos:'명사', gender:'m', plural:'matins', ex:'Le matin, je bois un café.', exKo:'아침에 나는 커피를 마신다.'},
      {w:'soir', ipa:'/swaʁ/', ko:'저녁', en:'evening', pos:'명사', gender:'m', plural:'soirs', ex:'Ce soir, nous allons au cinéma.', exKo:'오늘 저녁 우리는 영화관에 간다.'},
      {w:'semaine', ipa:'/sə.mɛn/', ko:'주, 일주일', en:'week', pos:'명사', gender:'f', plural:'semaines', ex:'Je travaille cinq jours par semaine.', exKo:'나는 일주일에 5일 일한다.'},
      {w:"aujourd'hui", ipa:'/o.ʒuʁ.dɥi/', ko:'오늘', en:'today', pos:'부사', ex:"Aujourd'hui, il fait beau.", exKo:'오늘은 날씨가 좋다.'},
      {w:'demain', ipa:'/də.mɛ̃/', ko:'내일', en:'tomorrow', pos:'부사', ex:'À demain !', exKo:'내일 봐!'}
    ],
    grammar: [
      {title:'대명동사 — 자기 자신에게 하는 동작', html:
        `<p>se lever(일어나다), se coucher(자러 가다), se laver(씻다)...</p>
         <table><tr><td>je <b>me</b> lève</td><td>nous <b>nous</b> levons</td></tr>
         <tr><td>tu <b>te</b> lèves</td><td>vous <b>vous</b> levez</td></tr>
         <tr><td>il <b>se</b> lève</td><td>ils <b>se</b> lèvent</td></tr></table>
         <p>💡 재귀대명사(me/te/se...)는 주어에 맞춰 바뀌고 동사 바로 앞에 놓입니다.</p>`},
      {title:'시간 말하기 & 하루 묘사', html:
        `<p>à sept heures (7시에) / le matin (아침에) / le soir (저녁에) / par semaine (일주일에)</p>
         <p>일과 서술 공식: <b>시간 표현 + 주어 + 동사 + 목적어</b><br>
         Le matin, je bois un café et je vais à l’école.</p>`}
    ],
    exercises: [
      {type:'blocks', answer:'Je me lève à sept heures', ko:'나는 7시에 일어난다.', distractors:['se'],
       hint:'주어가 je이므로 재귀대명사는 me'},
      {type:'blocks', answer:'Le matin je bois un café', ko:'아침에 나는 커피를 마신다.',
       hint:'누적 복습: boire(Level 3)'},
      {type:'blocks', answer:'Nous travaillons cinq jours par semaine', ko:'우리는 일주일에 5일 일한다.', distractors:['travaillez']},
      {type:'blocks', answer:'Ce soir nous allons au restaurant', ko:'오늘 저녁 우리는 식당에 간다.',
       hint:'누적 복습: aller(L2) + restaurant(L3)'},
      {type:'blocks', answer:'Je dors huit heures par nuit', ko:'나는 밤에 8시간 잔다.'},
      {type:'blank', text:'Tu ___ lèves à quelle heure ?', answer:'te', ko:'너는 몇 시에 일어나?', hint:'tu의 재귀대명사'}
    ],
    quiz: [
      {type:'blocks', answer:'Ma mère se lève à six heures', ko:'우리 어머니는 6시에 일어나신다.', distractors:['me']},
      {type:'blank', text:"___, il fait beau.", answer:"Aujourd'hui", ko:'오늘은 날씨가 좋다.'},
      {type:'blocks', answer:'Le soir je mange avec ma famille', ko:'저녁에 나는 가족과 함께 먹는다.'},
      {type:'choice', q:'"나는 일주일에 5일 일한다"는?', options:['Je travaille cinq jours par semaine.','Je travaille cinq jours sur semaine.','Je travaille cinq jour par semaine.'], answer:0},
      {type:'blank', text:'Nous ___ levons à sept heures.', answer:'nous', ko:'우리는 7시에 일어난다.', hint:'nous의 재귀대명사는 nous'}
    ]
  },

  /* ─────────────── LEVEL 6 ─────────────── */
  {
    level: 6, cefr: 'B1', phase: 'B',
    title: '어제의 이야기 — passé composé',
    desc: 'Phase B 시작! 조동사 avoir/être + 과거분사로 과거를 말합니다. 빈칸 채우기로 동사 변형을 직접 씁니다.',
    words: [
      {w:'hier', ipa:'/jɛʁ/', ko:'어제', en:'yesterday', pos:'부사', ex:'Hier, j’ai mangé au restaurant.', exKo:'어제 나는 식당에서 먹었다.'},
      {w:'déjà', ipa:'/de.ʒa/', ko:'이미, 벌써', en:'already', pos:'부사', ex:'J’ai déjà fini.', exKo:'나는 이미 끝냈다.'},
      {w:'week-end', ipa:'/wi.kɛnd/', ko:'주말', en:'weekend', pos:'명사', gender:'m', plural:'week-ends', ex:'Le week-end, je me repose.', exKo:'주말에 나는 쉰다.'},
      {w:'vacances', ipa:'/va.kɑ̃s/', ko:'방학, 휴가 (항상 복수)', en:'vacation', pos:'명사', gender:'f', ex:'Je suis en vacances.', exKo:'나는 휴가 중이다.'},
      {w:'musée', ipa:'/my.ze/', ko:'박물관', en:'museum', pos:'명사', gender:'m', plural:'musées', ex:'Nous avons visité un musée.', exKo:'우리는 박물관을 관람했다.'},
      {w:'voyager', ipa:'/vwa.ja.ʒe/', ko:'여행하다', en:'to travel', pos:'동사', ex:'J’aime voyager en Europe.', exKo:'나는 유럽 여행을 좋아한다.'},
      {w:'visiter', ipa:'/vi.zi.te/', ko:'(장소를) 방문하다', en:'to visit', pos:'동사', ex:'Ils ont visité Paris.', exKo:'그들은 파리를 방문했다.'},
      {w:'acheter', ipa:'/aʃ.te/', ko:'사다', en:'to buy', pos:'동사', ex:'Elle a acheté du pain.', exKo:'그녀는 빵을 샀다.'},
      {w:'prendre', ipa:'/pʁɑ̃dʁ/', ko:'잡다, 타다, 먹다', en:'to take', pos:'동사', ex:'Je prends le bus.', exKo:'나는 버스를 탄다.'},
      {w:'voir', ipa:'/vwaʁ/', ko:'보다', en:'to see', pos:'동사', ex:'Nous avons vu un film.', exKo:'우리는 영화를 봤다.'}
    ],
    grammar: [
      {title:'passé composé = avoir/être 현재형 + 과거분사', html:
        `<p><b>대부분의 동사: avoir</b> — J’<b>ai mangé</b>. Tu <b>as fini</b>. Ils <b>ont vu</b>.</p>
         <p><b>이동·상태변화 동사(aller, venir, partir...)와 대명동사: être</b> — Elle <b>est allée</b>. Je <b>me suis levé(e)</b>.</p>
         <p>⚠️ être와 함께 쓰면 과거분사가 주어에 성수일치: Elle est allé<b>e</b>. Ils sont allé<b>s</b>.</p>`},
      {title:'과거분사 만들기', html:
        `<table><tr><th>동사군</th><th>규칙</th><th>예</th></tr>
         <tr><td>-er</td><td>-é</td><td>manger → mangé</td></tr>
         <tr><td>-ir</td><td>-i</td><td>finir → fini, dormir → dormi</td></tr>
         <tr><td>불규칙</td><td>암기</td><td>voir → <b>vu</b>, prendre → <b>pris</b>, faire → <b>fait</b>, être → <b>été</b>, avoir → <b>eu</b>, boire → <b>bu</b></td></tr></table>`}
    ],
    exercises: [
      {type:'blank', text:'Hier, je ___ ___ au restaurant. (manger)', answer:['ai','mangé'], ko:'어제 나는 식당에서 먹었다.',
       hint:'avoir 현재형 + 과거분사', accept:[[],['mangé']]},
      {type:'blank', text:'Elle ___ ___ à Paris. (aller)', answer:['est','allée'], ko:'그녀는 파리에 갔다.',
       hint:'aller는 être 조동사 + 여성 성일치'},
      {type:'blank', text:'Nous ___ ___ un film. (voir)', answer:['avons','vu'], ko:'우리는 영화를 봤다.',
       hint:'voir의 과거분사는 불규칙'},
      {type:'blank', text:'Tu ___ ___ le bus ? (prendre)', answer:['as','pris'], ko:'너 버스 탔어?',
       hint:'prendre → pris'},
      {type:'blank', text:'Ils ___ ___ du pain. (acheter)', answer:['ont','acheté'], ko:'그들은 빵을 샀다.'},
      {type:'choice', q:'다음 중 être를 조동사로 쓰는 동사는?', options:['manger','aller','voir'], answer:1,
       why:'이동 동사 aller는 être와 결합합니다: je suis allé(e).'}
    ],
    quiz: [
      {type:'blank', text:"Hier, j'___ ___ mes devoirs. (faire)", answer:['ai','fait'], ko:'어제 나는 숙제를 했다.'},
      {type:'blank', text:'Elle ___ ___ de l’eau. (boire)', answer:['a','bu'], ko:'그녀는 물을 마셨다.'},
      {type:'blank', text:'Nous ___ ___ un musée. (visiter)', answer:['avons','visité'], ko:'우리는 박물관을 관람했다.'},
      {type:'choice', q:'"그녀들은 학교에 갔다"의 올바른 형태는?', options:['Elles ont allé à l’école.','Elles sont allées à l’école.','Elles sont allé à l’école.'], answer:1,
       why:'être 조동사 + 여성 복수 성수일치(allées)'},
      {type:'blank', text:'Le week-end, tu ___ ___ tes amis ? (voir)', answer:['as','vu'], ko:'주말에 너 친구들 봤어?'}
    ]
  },

  /* ─────────────── LEVEL 7 ─────────────── */
  {
    level: 7, cefr: 'B1', phase: 'B',
    title: '흐르는 시간 — imparfait와 미래',
    desc: '배경 묘사의 imparfait, 가까운 미래(futur proche)와 단순 미래(futur simple)를 구분해 씁니다.',
    words: [
      {w:'souvent', ipa:'/su.vɑ̃/', ko:'자주', en:'often', pos:'부사', ex:'Je vais souvent au cinéma.', exKo:'나는 영화관에 자주 간다.'},
      {w:'toujours', ipa:'/tu.ʒuʁ/', ko:'항상', en:'always', pos:'부사', ex:'Il est toujours en retard.', exKo:'그는 항상 늦는다.'},
      {w:'jamais', ipa:'/ʒa.mɛ/', ko:'결코 ~않다 (ne...jamais)', en:'never', pos:'부사', ex:'Je ne bois jamais de café.', exKo:'나는 커피를 절대 마시지 않는다.'},
      {w:'avant', ipa:'/a.vɑ̃/', ko:'전에, 이전에', en:'before', pos:'전치사', ex:'Avant, j’habitais à Busan.', exKo:'예전에 나는 부산에 살았다.'},
      {w:'après', ipa:'/a.pʁɛ/', ko:'후에', en:'after', pos:'전치사', ex:'Après le dîner, je lis.', exKo:'저녁 식사 후에 나는 책을 읽는다.'},
      {w:'année', ipa:'/a.ne/', ko:'해, 연도', en:'year', pos:'명사', gender:'f', plural:'années', ex:'Bonne année !', exKo:'새해 복 많이 받으세요!'},
      {w:'prochain / prochaine', ipa:'/pʁɔ.ʃɛ̃(n)/', ko:'다음의', en:'next', pos:'형용사', gender:'mf', ex:'la semaine prochaine', exKo:'다음 주'},
      {w:'dernier / dernière', ipa:'/dɛʁ.nje(ʁ)/', ko:'지난, 마지막의', en:'last', pos:'형용사', gender:'mf', ex:'l’année dernière', exKo:'작년'},
      {w:'habiter', ipa:'/a.bi.te/', ko:'살다, 거주하다', en:'to live', pos:'동사', ex:'J’habite à Séoul.', exKo:'나는 서울에 산다.'},
      {w:'jouer', ipa:'/ʒwe/', ko:'놀다, (악기·경기를) 하다', en:'to play', pos:'동사', ex:'Les enfants jouent au football.', exKo:'아이들이 축구를 한다.'}
    ],
    grammar: [
      {title:'imparfait — 과거의 배경·습관', html:
        `<p>만들기: <b>nous 현재형 어간 + -ais/-ais/-ait/-ions/-iez/-aient</b></p>
         <p>nous habit<u>ons</u> → j’habit<b>ais</b>, tu habit<b>ais</b>, il habit<b>ait</b>...</p>
         <p>쓰임: 과거의 습관(예전엔 ~하곤 했다), 배경 묘사(날씨·기분), 진행 중이던 일.</p>
         <p>💡 passé composé는 "사건", imparfait는 "배경": Il <b>pleuvait</b>(배경) quand je <b>suis sorti</b>(사건).</p>`},
      {title:'미래 두 가지', html:
        `<p><b>futur proche(가까운 미래)</b> = aller 현재형 + 동사원형: Je <b>vais manger</b>. (막 ~할 것이다)</p>
         <p><b>futur simple(단순 미래)</b> = 동사원형 + -ai/-as/-a/-ons/-ez/-ont: Nous visiter<b>ons</b> Paris l’année prochaine.</p>
         <p>구어에서는 futur proche가 압도적으로 많이 쓰입니다.</p>`}
    ],
    exercises: [
      {type:'blank', text:"Quand j'étais petit, je ___ au football. (jouer, imparfait)", answer:'jouais', ko:'어렸을 때 나는 축구를 하곤 했다.'},
      {type:'blank', text:'Demain, je ___ ___ au cinéma. (aller, futur proche)', answer:['vais','aller'], ko:'내일 나는 영화관에 갈 것이다.',
       hint:'aller 현재형 + 동사원형 aller'},
      {type:'blank', text:"L'année prochaine, nous ___ Paris. (visiter, futur simple)", answer:'visiterons', ko:'내년에 우리는 파리를 방문할 것이다.'},
      {type:'blank', text:'Avant, elle ___ à Lyon. (habiter, imparfait)', answer:'habitait', ko:'예전에 그녀는 리옹에 살았다.'},
      {type:'choice', q:'"비가 오고 있었다(배경)"에 알맞은 시제는?', options:['Il a plu.','Il pleuvait.','Il pleuvra.'], answer:1,
       why:'과거의 배경 묘사는 imparfait.'},
      {type:'blank', text:'Je ne bois ___ de café le soir.', answer:'jamais', ko:'나는 저녁에 커피를 절대 마시지 않는다.'}
    ],
    quiz: [
      {type:'blank', text:'Avant, nous ___ dans une petite maison. (habiter, imparfait)', answer:'habitions', ko:'예전에 우리는 작은 집에 살았다.'},
      {type:'blank', text:'Ce soir, ils ___ ___ au restaurant. (aller, futur proche)', answer:['vont','aller'], ko:'오늘 저녁 그들은 식당에 갈 것이다.'},
      {type:'blank', text:'La semaine prochaine, je ___ mes grands-parents. (visiter, futur simple)', answer:'visiterai', ko:'다음 주에 나는 조부모님을 방문할 것이다.'},
      {type:'choice', q:'passé composé와 imparfait의 올바른 조합은?', options:['Je dormais quand tu as téléphoné.','Je dormais quand tu téléphonais.','J’ai dormi quand tu as téléphoné.'], answer:0,
       why:'진행 중이던 배경(dormais) + 끼어든 사건(as téléphoné)'},
      {type:'blank', text:'Il est ___ en retard. (항상)', answer:'toujours', ko:'그는 항상 늦는다.'}
    ]
  },

  /* ─────────────── LEVEL 8 ─────────────── */
  {
    level: 8, cefr: 'B1', phase: 'B',
    title: '매끄러운 문장 — 목적어 대명사와 y·en',
    desc: '반복을 없애는 목적어 대명사(le/la/les/lui/leur)와 마법의 대명사 y·en, avoir 관용구를 익힙니다.',
    words: [
      {w:'y', ipa:'/i/', ko:'거기에, 그것에 (장소 대명사)', en:'there', pos:'대명사', ex:'— Tu vas à Paris ? — Oui, j’y vais.', exKo:'— 파리 가? — 응, 거기 가.'},
      {w:'en', ipa:'/ɑ̃/', ko:'그것을(의) (수량 대명사)', en:'of it/them', pos:'대명사', ex:'— Tu as des frères ? — Oui, j’en ai deux.', exKo:'— 형제 있어? — 응, 둘 있어.'},
      {w:'le / la / les (목적어)', ipa:'/lə/ /la/ /le/', ko:'그를/그녀를/그것들을 (직접목적어)', en:'him/her/them', pos:'대명사', gender:'mf', ex:'Je le connais bien.', exKo:'나는 그를 잘 안다.'},
      {w:'lui / leur', ipa:'/lɥi/ /lœʁ/', ko:'그(녀)에게 / 그들에게 (간접목적어)', en:'to him/her/them', pos:'대명사', ex:'Je lui parle tous les jours.', exKo:'나는 매일 그(녀)에게 말한다.'},
      {w:'avoir faim', ipa:'/a.vwaʁ fɛ̃/', ko:'배고프다', en:'to be hungry', pos:'표현', ex:'J’ai très faim !', exKo:'나 정말 배고파!'},
      {w:'avoir soif', ipa:'/a.vwaʁ swaf/', ko:'목마르다', en:'to be thirsty', pos:'표현', ex:'Tu as soif ? Voilà de l’eau.', exKo:'목말라? 여기 물 있어.'},
      {w:'avoir besoin de', ipa:'/a.vwaʁ bə.zwɛ̃ də/', ko:'~이 필요하다', en:'to need', pos:'표현', ex:'J’ai besoin de dormir.', exKo:'나는 잠이 필요하다.'},
      {w:'il y a', ipa:'/il.ja/', ko:'~이 있다', en:'there is/are', pos:'표현', ex:'Il y a un chat sur la table.', exKo:'탁자 위에 고양이가 있다.'},
      {w:'penser à', ipa:'/pɑ̃.se a/', ko:'~을 생각하다', en:'to think about', pos:'동사', ex:'Je pense à mes vacances.', exKo:'나는 휴가를 생각한다.'},
      {w:'connaître', ipa:'/kɔ.nɛtʁ/', ko:'알다 (사람·장소)', en:'to know', pos:'동사', ex:'Je connais ce restaurant.', exKo:'나는 이 식당을 안다.'}
    ],
    grammar: [
      {title:'목적어 대명사 — 동사 앞에 놓는다', html:
        `<p>직접목적어: le(그를)/la(그녀를)/les(그들을) — Je vois Marie → Je <b>la</b> vois.</p>
         <p>간접목적어(à+사람): lui(그에게)/leur(그들에게) — Je parle à Marie → Je <b>lui</b> parle.</p>
         <p>부정문: Je <b>ne la</b> vois <b>pas</b>.</p>`},
      {title:'y와 en — 프랑스어다움의 핵심', html:
        `<p><b>y</b> = à/dans/en + 장소·사물: Tu vas à Paris ? → J’<b>y</b> vais. / Je pense à mes vacances → J’<b>y</b> pense.</p>
         <p><b>en</b> = de + 명사, 수량: Tu as des frères ? → J’<b>en</b> ai deux. / Tu veux du pain ? → J’<b>en</b> veux.</p>`},
      {title:'avoir 관용구 — 몸 상태는 avoir로', html:
        `<p>avoir faim(배고프다) · avoir soif(목마르다) · avoir chaud/froid(덥다/춥다) · avoir sommeil(졸리다) · avoir besoin de(필요하다) · avoir raison(옳다)</p>
         <p>⚠️ 영어의 be와 달리 avoir(가지다)를 씁니다: I am hungry ≠ Je suis faim → Je <b>J’ai faim</b>.</p>`}
    ],
    exercises: [
      {type:'blank', text:'— Tu manges la pomme ? — Oui, je ___ mange.', answer:'la', ko:'— 사과 먹어? — 응, 그거 먹어.', hint:'la pomme = 여성 직접목적어'},
      {type:'blank', text:'— Il va à Paris ? — Oui, il ___ va.', answer:'y', ko:'— 그 파리 가? — 응, 거기 가.'},
      {type:'blank', text:"— Vous avez des sœurs ? — Oui, j'___ ai deux.", answer:'en', ko:'— 자매가 있으세요? — 네, 둘 있어요.'},
      {type:'blank', text:'— Tu parles à Marie ? — Oui, je ___ parle.', answer:'lui', ko:'— 마리에게 말해? — 응, 그녀에게 말해.', hint:'à + 사람 = 간접목적어'},
      {type:'choice', q:'"나 배고파"를 올바르게 말하면?', options:["Je suis faim.","J'ai faim.","Je fais faim."], answer:1,
       why:'몸 상태는 avoir: J’ai faim.'},
      {type:'blank', text:"J'ai ___ de dormir.", answer:'besoin', ko:'나는 잠이 필요하다.'}
    ],
    quiz: [
      {type:'blank', text:'— Tu connais ce restaurant ? — Oui, je ___ connais.', answer:'le', ko:'— 이 식당 알아? — 응, 알아.'},
      {type:'blank', text:"— Elle pense à ses vacances ? — Oui, elle ___ pense.", answer:'y', ko:'— 그녀는 휴가 생각해? — 응, 그 생각 해.'},
      {type:'blank', text:'— Tu veux du fromage ? — Oui, j’___ veux bien.', answer:'en', ko:'— 치즈 먹을래? — 응, 좋아.'},
      {type:'choice', q:'"나는 그들에게 매일 전화한다"는?', options:['Je les téléphone tous les jours.','Je leur téléphone tous les jours.','Je lui téléphone tous les jours.'], answer:1,
       why:'téléphoner à + 사람 → 간접목적어 leur(그들에게)'},
      {type:'blank', text:'Il ___ ___ un chat sur la table.', answer:['y','a'], ko:'탁자 위에 고양이가 있다.'}
    ]
  },

  /* ─────────────── LEVEL 9 ─────────────── */
  {
    level: 9, cefr: 'B2', phase: 'C',
    title: '나의 목소리 — 의견과 subjonctif',
    desc: 'Phase C 시작! 의견을 표현하고 subjonctif(접속법)의 문을 엽니다. 이제 직접 문장을 씁니다.',
    words: [
      {w:'penser', ipa:'/pɑ̃.se/', ko:'생각하다', en:'to think', pos:'동사', ex:'Je pense que c’est une bonne idée.', exKo:'좋은 생각인 것 같아.'},
      {w:'croire', ipa:'/kʁwaʁ/', ko:'믿다, ~라고 생각하다', en:'to believe', pos:'동사', ex:'Je crois qu’il a raison.', exKo:'그가 옳다고 생각해.'},
      {w:'il faut que', ipa:'/il fo kə/', ko:'~해야 한다 (+subjonctif)', en:'it is necessary that', pos:'표현', ex:'Il faut que tu sois à l’heure.', exKo:'너는 제시간에 와야 해.'},
      {w:'bien que', ipa:'/bjɛ̃ kə/', ko:'비록 ~이지만 (+subjonctif)', en:'although', pos:'접속사', ex:'Bien qu’il soit fatigué, il travaille.', exKo:'그는 피곤하지만 일한다.'},
      {w:'à mon avis', ipa:'/a mɔ̃.n‿a.vi/', ko:'내 생각에는', en:'in my opinion', pos:'표현', ex:'À mon avis, ce film est excellent.', exKo:'내 생각에 이 영화는 훌륭하다.'},
      {w:'avis', ipa:'/a.vi/', ko:'의견', en:'opinion', pos:'명사', gender:'m', plural:'avis', ex:'Quel est ton avis ?', exKo:'네 의견은 뭐야?'},
      {w:'important / importante', ipa:'/ɛ̃.pɔʁ.tɑ̃(t)/', ko:'중요한', en:'important', pos:'형용사', gender:'mf', ex:'C’est une décision importante.', exKo:'이것은 중요한 결정이다.'},
      {w:'nécessaire', ipa:'/ne.se.sɛʁ/', ko:'필요한', en:'necessary', pos:'형용사', gender:'mf', ex:'Il est nécessaire de pratiquer.', exKo:'연습이 필요하다.'},
      {w:'sembler', ipa:'/sɑ̃.ble/', ko:'~인 것 같다', en:'to seem', pos:'동사', ex:'Il semble content.', exKo:'그는 만족스러워 보인다.'},
      {w:'avoir raison', ipa:'/a.vwaʁ ʁɛ.zɔ̃/', ko:'옳다, 맞다', en:'to be right', pos:'표현', ex:'Tu as raison, c’est vrai.', exKo:'네 말이 맞아, 사실이야.'}
    ],
    grammar: [
      {title:'subjonctif — 사실이 아닌 "마음속" 서법', html:
        `<p>필요·의무·감정·의심 뒤의 que절에서 씁니다. 신호: <b>il faut que, vouloir que, bien que, avant que...</b></p>
         <table><tr><th></th><th>être</th><th>avoir</th><th>aller</th><th>faire</th></tr>
         <tr><td>que je</td><td>sois</td><td>aie</td><td>aille</td><td>fasse</td></tr>
         <tr><td>que tu</td><td>sois</td><td>aies</td><td>ailles</td><td>fasses</td></tr>
         <tr><td>qu’il</td><td>soit</td><td>ait</td><td>aille</td><td>fasse</td></tr>
         <tr><td>que nous</td><td>soyons</td><td>ayons</td><td>allions</td><td>fassions</td></tr></table>
         <p>💡 반면 "je pense que / je crois que"(확신) 뒤에는 직설법을 씁니다.</p>`},
      {title:'의견 표현 공식', html:
        `<p>À mon avis, ... / Je pense que + 직설법 / Je trouve que ... / Il me semble que ...</p>
         <p>동의: Tu as raison. / Je suis d’accord. — 반대: Je ne suis pas d’accord, parce que ...</p>
         <p>작문 팁: <b>주장 → parce que 근거 → mais 반론 고려</b> 순서로 쓰면 단락이 됩니다.</p>`}
    ],
    exercises: [
      {type:'blank', text:"Il faut que tu ___ à l'heure. (être, subjonctif)", answer:'sois', ko:'너는 제시간에 와야 해.'},
      {type:'blank', text:"Bien qu'il ___ faim, il ne mange pas. (avoir, subjonctif)", answer:'ait', ko:'그는 배가 고프지만 먹지 않는다.'},
      {type:'compose', prompt:'"À mon avis"로 시작해서, 프랑스 음식(la cuisine française)에 대한 당신의 의견을 한 문장으로 쓰세요.',
       mustInclude:['à mon avis'], minWords:6,
       sample:'À mon avis, la cuisine française est délicieuse mais un peu chère.'},
      {type:'compose', prompt:'"il faut que"를 사용해 피곤해하는 친구에게 조언하는 문장을 쓰세요.',
       mustInclude:['il faut que'], minWords:6,
       sample:'Il faut que tu dormes plus, parce que tu es très fatigué.'},
      {type:'compose', prompt:'당신의 취미 하나를 소개하고 "parce que"로 이유를 붙이세요.',
       mustInclude:['parce que'], minWords:7,
       sample:'J’aime lire des romans parce que c’est intéressant et calme.'}
    ],
    quiz: [
      {type:'blank', text:'Il faut que nous ___ nos devoirs. (faire, subjonctif)', answer:'fassions', ko:'우리는 숙제를 해야 한다.'},
      {type:'choice', q:'"Je pense que..." 뒤에 오는 서법은?', options:['subjonctif','직설법(indicatif)','conditionnel'], answer:1,
       why:'확신을 나타내는 penser/croire 긍정문 뒤는 직설법입니다.'},
      {type:'blank', text:"Bien qu'elle ___ fatiguée, elle travaille. (être, subjonctif)", answer:'soit', ko:'그녀는 피곤하지만 일한다.'},
      {type:'compose', prompt:'"je crois que"를 사용해 프랑스어 학습에 대한 의견을 한 문장으로 쓰세요.',
       mustInclude:['je crois que'], minWords:6,
       sample:'Je crois que le français est difficile mais très beau.'},
      {type:'compose', prompt:'"tu as raison"을 포함해 친구의 말에 동의하는 문장을 쓰세요.',
       mustInclude:['tu as raison'], minWords:5,
       sample:'Tu as raison, ce restaurant est vraiment délicieux.'}
    ]
  },

  /* ─────────────── LEVEL 10 ─────────────── */
  {
    level: 10, cefr: 'C1', phase: 'C',
    title: '가정과 품격 — conditionnel과 문체',
    desc: '마지막 레벨! 가정법(si + imparfait, conditionnel), 격식 있는 연결어로 세련된 프랑스어를 완성합니다.',
    words: [
      {w:'cependant', ipa:'/sə.pɑ̃.dɑ̃/', ko:'그러나 (격식)', en:'however', pos:'접속사', ex:'Le film était long ; cependant, je ne me suis pas ennuyé.', exKo:'영화는 길었다. 그러나 지루하지 않았다.'},
      {w:'pourtant', ipa:'/puʁ.tɑ̃/', ko:'그렇지만, 그런데도', en:'yet, nevertheless', pos:'부사', ex:'Il est riche, pourtant il n’est pas heureux.', exKo:'그는 부자지만 행복하지 않다.'},
      {w:'néanmoins', ipa:'/ne.ɑ̃.mwɛ̃/', ko:'그럼에도 불구하고 (문어)', en:'nonetheless', pos:'부사', ex:'C’est difficile ; néanmoins, j’essaierai.', exKo:'어렵다. 그럼에도 시도해 보겠다.'},
      {w:'malgré', ipa:'/mal.ɡʁe/', ko:'~에도 불구하고', en:'despite', pos:'전치사', ex:'Malgré la pluie, nous sommes sortis.', exKo:'비에도 불구하고 우리는 나갔다.'},
      {w:'afin de', ipa:'/a.fɛ̃ də/', ko:'~하기 위하여 (격식)', en:'in order to', pos:'전치사', ex:'J’étudie afin de réussir.', exKo:'나는 성공하기 위해 공부한다.'},
      {w:'si', ipa:'/si/', ko:'만약 ~라면', en:'if', pos:'접속사', ex:'Si j’étais riche, je voyagerais.', exKo:'내가 부자라면 여행할 텐데.'},
      {w:'pouvoir (je pourrais)', ipa:'/pu.vwaʁ/', ko:'~할 수 있다 (조건법: ~할 수 있을 텐데요)', en:'could', pos:'동사', ex:'Pourriez-vous m’aider ?', exKo:'저를 도와주실 수 있을까요?'},
      {w:'devoir (je devrais)', ipa:'/də.vwaʁ/', ko:'~해야 한다 (조건법: ~하는 게 좋겠다)', en:'should', pos:'동사', ex:'Tu devrais dormir plus.', exKo:'너는 잠을 더 자는 게 좋겠어.'},
      {w:'souhaiter', ipa:'/swɛ.te/', ko:'바라다, 기원하다', en:'to wish', pos:'동사', ex:'Je souhaiterais réserver une table.', exKo:'테이블을 예약하고 싶습니다만.'},
      {w:'exprimer', ipa:'/ɛks.pʁi.me/', ko:'표현하다', en:'to express', pos:'동사', ex:'Il exprime bien ses idées.', exKo:'그는 자기 생각을 잘 표현한다.'}
    ],
    grammar: [
      {title:'conditionnel — 공손함과 가정의 서법', html:
        `<p>만들기: <b>futur simple 어간 + imparfait 어미(-ais...)</b>: je voudr<b>ais</b>, je pourr<b>ais</b>, je devr<b>ais</b>, je voyager<b>ais</b>.</p>
         <p>가정문 공식: <b>Si + imparfait, conditionnel</b><br>Si j’<u>étais</u> riche, je <u>voyagerais</u>. (내가 부자라면 여행할 텐데)</p>
         <p>공손 표현: Je voudrais... / Pourriez-vous... ? / Tu devrais... (조언)</p>`},
      {title:'문체(registre) — 상황에 맞는 옷 입기', html:
        `<table><tr><th>구어(familier)</th><th>표준(courant)</th><th>격식(soutenu)</th></tr>
         <tr><td>mais</td><td>pourtant</td><td>cependant / néanmoins</td></tr>
         <tr><td>pour</td><td>pour</td><td>afin de</td></tr>
         <tr><td>Je veux...</td><td>Je voudrais...</td><td>Je souhaiterais...</td></tr></table>
         <p>이메일·편지에서는 격식 표현 + vous를 쓰고, 친구와는 구어 표현 + tu를 씁니다.</p>`}
    ],
    exercises: [
      {type:'blank', text:"Si j'avais le temps, je ___ en Europe. (voyager, conditionnel)", answer:'voyagerais', ko:'시간이 있다면 유럽 여행을 할 텐데.'},
      {type:'compose', prompt:'"Si j’étais riche, ..."로 시작하는 가정문을 완성하세요. (conditionnel 사용, 8단어 이상)',
       mustInclude:['si j’étais', ['rais','rait']], minWords:8,
       sample:'Si j’étais riche, je voyagerais partout dans le monde avec ma famille.'},
      {type:'compose', prompt:'식당에 전화해 두 명 자리를 정중하게 예약하는 첫 문장을 쓰세요. (je souhaiterais 또는 pourriez-vous 사용)',
       mustInclude:[['je souhaiterais','pourriez-vous']], minWords:7,
       sample:'Bonjour, je souhaiterais réserver une table pour deux personnes ce soir, s’il vous plaît.'},
      {type:'compose', prompt:'"cependant" 또는 "pourtant"으로 두 문장을 대조해 연결하세요.',
       mustInclude:[['cependant','pourtant']], minWords:8,
       sample:'Le film était très long ; cependant, je ne me suis pas ennuyé.'},
      {type:'compose', prompt:'"malgré"를 사용해 역경에도 무언가를 했다는 문장을 쓰세요.',
       mustInclude:['malgré'], minWords:6,
       sample:'Malgré la pluie, nous avons décidé de sortir ensemble.'}
    ],
    quiz: [
      {type:'blank', text:'Si tu étudiais plus, tu ___ réussir. (pouvoir, conditionnel)', answer:'pourrais', ko:'네가 더 공부한다면 성공할 수 있을 텐데.'},
      {type:'choice', q:'격식 있는 이메일에 가장 어울리는 표현은?', options:['Je veux une réponse.','Je souhaiterais obtenir une réponse.','Donne-moi une réponse.'], answer:1},
      {type:'blank', text:'___ la neige, il est allé au travail. (~에도 불구하고)', answer:'Malgré', ko:'눈에도 불구하고 그는 출근했다.'},
      {type:'compose', prompt:'"tu devrais"를 사용해 프랑스어를 배우는 친구에게 조언하는 문장을 쓰세요.',
       mustInclude:['tu devrais'], minWords:6,
       sample:'Tu devrais écouter des chansons françaises tous les jours.'},
      {type:'compose', prompt:'가정문(Si + imparfait, conditionnel)으로 "시간이 있다면 무엇을 할지" 쓰세요.',
       mustInclude:['si'], minWords:8,
       sample:'Si j’avais plus de temps libre, je ferais du sport tous les matins.'}
    ]
  }
  ]
});
