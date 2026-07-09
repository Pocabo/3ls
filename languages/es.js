/* =====================================================================
   🇪🇸 스페인어 언어팩 — Polyglot Builder
   ---------------------------------------------------------------
   프랑스어 팩과 동일한 10레벨 CEFR 구조를 따르되, 스페인어 고유 문법에
   맞게 커리큘럼을 조정함:
   - L2: ser vs estar 구분 (프랑스어 être 하나와 달리 둘로 나뉨)
   - L5: 어간모음변화 동사 (dormir → duermo)
   - L6: passé composé 대신 pretérito indefinido 중심
   - L8: gustar 역구조 (me gusta...)
   - L10: si + 접속법 과거(fuera) + condicional
   ===================================================================== */
registerLanguagePack({
  id: 'es',
  name: '스페인어',
  nativeName: 'Español',
  flag: '🇪🇸',
  tts: 'es-ES',
  specialChars: ['á','é','í','ó','ú','ñ','ü','¿','¡'],
  levels: [

  /* ─────────────── LEVEL 1 ─────────────── */
  {
    level: 1, cefr: 'A1.1', phase: 'intro',
    title: '첫걸음 — 인사와 소리',
    desc: '읽는 그대로 소리 나는 스페인어의 발음 규칙, 생존 인사말, 인칭대명사와 관사, 숫자 1-10을 익힙니다.',
    words: [
      {w:'hola', ipa:'/ˈo.la/', ko:'안녕하세요 (만능 인사)', en:'hello', pos:'표현', ex:'¡Hola! ¿Qué tal?', exKo:'안녕! 어떻게 지내?'},
      {w:'buenos días', ipa:'/ˈbwe.nos ˈdi.as/', ko:'좋은 아침입니다', en:'good morning', pos:'표현', ex:'Buenos días, señora.', exKo:'좋은 아침입니다, 부인.'},
      {w:'buenas tardes', ipa:'/ˈbwe.nas ˈtaɾ.des/', ko:'안녕하세요 (오후 인사)', en:'good afternoon', pos:'표현', ex:'Buenas tardes a todos.', exKo:'여러분, 안녕하세요(오후).'},
      {w:'buenas noches', ipa:'/ˈbwe.nas ˈno.tʃes/', ko:'안녕하세요(저녁) / 잘 자요', en:'good evening / night', pos:'표현', ex:'Buenas noches, hasta mañana.', exKo:'잘 자요, 내일 봐요.'},
      {w:'adiós', ipa:'/aˈðjos/', ko:'안녕히 가세요', en:'goodbye', pos:'표현', ex:'Adiós, hasta luego.', exKo:'안녕, 나중에 봐.'},
      {w:'hasta luego', ipa:'/ˈas.ta ˈlwe.ɣo/', ko:'나중에 봐요', en:'see you later', pos:'표현', ex:'Me voy, ¡hasta luego!', exKo:'나 갈게, 나중에 봐!'},
      {w:'gracias', ipa:'/ˈɡɾa.sjas/', ko:'감사합니다', en:'thank you', pos:'표현', ex:'Muchas gracias.', exKo:'정말 감사합니다.'},
      {w:'por favor', ipa:'/poɾ faˈβoɾ/', ko:'부탁합니다', en:'please', pos:'표현', ex:'Un café, por favor.', exKo:'커피 한 잔 부탁합니다.'},
      {w:'perdón', ipa:'/peɾˈðon/', ko:'실례합니다, 죄송합니다', en:'excuse me, sorry', pos:'표현', ex:'Perdón, ¿dónde está la estación?', exKo:'실례합니다, 역이 어디에 있나요?'},
      {w:'sí', ipa:'/si/', ko:'네', en:'yes', pos:'부사', ex:'Sí, entiendo.', exKo:'네, 이해합니다.'},
      {w:'no', ipa:'/no/', ko:'아니요', en:'no', pos:'부사', ex:'No, gracias.', exKo:'아니요, 괜찮습니다.'},
      {w:'señora', ipa:'/seˈɲo.ɾa/', ko:'부인, ~씨 (여성 존칭)', en:'madam, Mrs.', pos:'명사', gender:'f', plural:'señoras', ex:'Buenos días, señora García.', exKo:'좋은 아침입니다, 가르시아 부인.'},
      {w:'señor', ipa:'/seˈɲoɾ/', ko:'선생님, ~씨 (남성 존칭)', en:'sir, Mr.', pos:'명사', gender:'m', plural:'señores', ex:'Perdón, señor.', exKo:'실례합니다, 선생님.'},
      {w:'yo', ipa:'/ʝo/', ko:'나는', en:'I', pos:'대명사', ex:'Yo soy coreano.', exKo:'저는 한국인입니다.'},
      {w:'tú', ipa:'/tu/', ko:'너는 (친한 사이)', en:'you (informal)', pos:'대명사', ex:'Tú eres mi amigo.', exKo:'너는 내 친구야.'},
      {w:'él / ella', ipa:'/el/ /ˈe.ʝa/', ko:'그는 / 그녀는', en:'he / she', pos:'대명사', gender:'mf', ex:'Él es alto. Ella es baja.', exKo:'그는 키가 크다. 그녀는 키가 작다.'},
      {w:'usted', ipa:'/usˈteð/', ko:'당신은 (존칭)', en:'you (formal)', pos:'대명사', ex:'¿Cómo está usted?', exKo:'어떻게 지내세요? (존칭)'},
      {w:'nosotros / nosotras', ipa:'/noˈso.tɾos/', ko:'우리는', en:'we', pos:'대명사', gender:'mf', ex:'Nosotros somos estudiantes.', exKo:'우리는 학생입니다.'},
      {w:'ellos / ellas', ipa:'/ˈe.ʝos/ /ˈe.ʝas/', ko:'그들은 / 그녀들은', en:'they', pos:'대명사', gender:'mf', ex:'Ellos son españoles.', exKo:'그들은 스페인 사람입니다.'},
      {w:'el / la / los / las', ipa:'/el/ /la/ /los/ /las/', ko:'그 (정관사)', en:'the', pos:'관사', gender:'mf', ex:'el pan, la manzana, los libros, las mesas', exKo:'그 빵, 그 사과, 그 책들, 그 탁자들'},
      {w:'un / una / unos / unas', ipa:'/un/ /ˈu.na/', ko:'하나의 (부정관사)', en:'a / an / some', pos:'관사', gender:'mf', ex:'un libro, una mesa, unos amigos', exKo:'책 한 권, 탁자 하나, 친구들'},
      {w:'uno', ipa:'/ˈu.no/', ko:'하나, 1', en:'one', pos:'숫자', ex:'Tengo un hermano.', exKo:'나는 형제가 한 명 있다.'},
      {w:'dos', ipa:'/dos/', ko:'둘, 2', en:'two', pos:'숫자', ex:'Dos cafés, por favor.', exKo:'커피 두 잔 부탁합니다.'},
      {w:'tres', ipa:'/tɾes/', ko:'셋, 3', en:'three', pos:'숫자', ex:'Hay tres gatos.', exKo:'고양이 세 마리가 있다.'},
      {w:'cuatro', ipa:'/ˈkwa.tɾo/', ko:'넷, 4', en:'four', pos:'숫자', ex:'Somos cuatro.', exKo:'우리는 네 명입니다.'},
      {w:'cinco', ipa:'/ˈsiŋ.ko/', ko:'다섯, 5', en:'five', pos:'숫자', ex:'Son las cinco.', exKo:'5시입니다.'},
      {w:'seis', ipa:'/sejs/', ko:'여섯, 6', en:'six', pos:'숫자', ex:'Seis euros, por favor.', exKo:'6유로입니다.'},
      {w:'siete', ipa:'/ˈsje.te/', ko:'일곱, 7', en:'seven', pos:'숫자', ex:'La semana tiene siete días.', exKo:'일주일에는 7일이 있다.'},
      {w:'ocho', ipa:'/ˈo.tʃo/', ko:'여덟, 8', en:'eight', pos:'숫자', ex:'La tienda abre a las ocho.', exKo:'가게는 8시에 문을 연다.'},
      {w:'nueve', ipa:'/ˈnwe.βe/', ko:'아홉, 9', en:'nine', pos:'숫자', ex:'Tengo nueve libros.', exKo:'나는 책이 아홉 권 있다.'},
      {w:'diez', ipa:'/djes/', ko:'열, 10', en:'ten', pos:'숫자', ex:'Contar de uno a diez.', exKo:'1부터 10까지 세기.'}
    ],
    grammar: [
      {title:'스페인어 발음 — 쓰인 대로 읽는다', html:
        `<p>프랑스어와 달리 <b>거의 모든 글자를 발음</b>합니다. 예외 몇 개만 기억하세요.</p>
         <p><b>ñ</b> = 니(mañana 마냐나) · <b>ll/y</b> = 야(ella 에야) · <b>j</b> = 강한 ㅎ(jamón 하몬) · <b>h</b>는 항상 묵음(hola 올라) · <b>rr</b>은 굴리는 r(perro)</p>
         <p><b>강세 규칙</b>: 모음/n/s로 끝나면 끝에서 두 번째 음절, 그 외는 마지막 음절. 규칙을 벗어나면 악센트 표시(á é í ó ú)가 붙습니다: caf<b>é</b>, perd<b>ó</b>n.</p>
         <p>물음표·느낌표는 앞뒤로: <b>¿</b>Qué tal<b>?</b> <b>¡</b>Hola<b>!</b></p>`},
      {title:'인칭대명사 — 주어는 자주 생략된다', html:
        `<table><tr><th>단수</th><th>복수</th></tr>
         <tr><td>yo (나)</td><td>nosotros/-as (우리)</td></tr>
         <tr><td>tú (너)</td><td>vosotros/-as (너희, 스페인)</td></tr>
         <tr><td>él / ella / usted (그/그녀/당신)</td><td>ellos / ellas / ustedes</td></tr></table>
         <p>💡 동사 어미가 주어를 알려주므로 주어를 자주 생략합니다: (Yo) soy coreano → <b>Soy coreano.</b></p>
         <p><b>tú vs usted</b>: 친구는 tú, 격식·처음 만난 사람은 usted.</p>`},
      {title:'관사 — 명사의 성과 수', html:
        `<p>대부분 <b>-o로 끝나면 남성, -a로 끝나면 여성</b>입니다 (예외 있음: el día, la mano).</p>
         <table><tr><th></th><th>남성 단수</th><th>여성 단수</th><th>남성 복수</th><th>여성 복수</th></tr>
         <tr><td>정관사</td><td>el pan</td><td>la manzana</td><td>los libros</td><td>las mesas</td></tr>
         <tr><td>부정관사</td><td>un libro</td><td>una mesa</td><td>unos amigos</td><td>unas casas</td></tr></table>
         <p>💡 관사와 한 덩어리로 외우세요: "manzana"가 아니라 "la manzana".</p>`}
    ],
    exercises: [
      {type:'choice', q:'오후에 만난 상사에게 어울리는 인사는?', options:['¡Hola, tío!','Buenas tardes, señor.','Buenas noches.'], answer:1,
       why:'오후 인사는 buenas tardes, 격식 상황이므로 señor를 붙입니다.'},
      {type:'choice', q:'🔊 듣고 알맞은 뜻을 고르세요.', audio:'muchas gracias', options:['실례합니다','정말 감사합니다','안녕히 가세요'], answer:1},
      {type:'blank', text:'Me voy, ¡hasta ___!', answer:'luego', ko:'나 갈게, 나중에 봐!', hint:'"나중에"를 뜻하는 단어'},
      {type:'choice', q:'"manzana(사과)"는 여성명사입니다. 알맞은 관사는?', options:['el manzana','la manzana','los manzana'], answer:1,
       why:'여성 단수 명사에는 정관사 la를 씁니다.'},
      {type:'blank', text:'uno, dos, ___, cuatro, cinco', answer:'tres', ko:'1, 2, 3, 4, 5', hint:'숫자 3'},
      {type:'choice', q:'처음 만난 어른께 "어떻게 지내세요?"라고 물을 때 알맞은 주어는?', options:['tú','usted','ellos'], answer:1,
       why:'격식·존칭 상황에서는 usted를 씁니다: ¿Cómo está usted?'}
    ],
    quiz: [
      {type:'choice', q:'"감사합니다"에 해당하는 말은?', options:['perdón','gracias','adiós'], answer:1},
      {type:'choice', q:'🔊 듣고 알맞은 뜻을 고르세요.', audio:'por favor', options:['부탁합니다','죄송합니다','잘 지내요'], answer:0},
      {type:'blank', text:'— ¿Qué tal? — Muy bien, ___.', answer:'gracias', ko:'— 어떻게 지내? — 아주 좋아, 고마워.'},
      {type:'choice', q:'"libro(책)"는 남성명사입니다. "책 한 권"은?', options:['una libro','un libro','unos libro'], answer:1},
      {type:'choice', q:'다음 중 숫자 8은?', options:['ocho','seis','nueve'], answer:0}
    ]
  },

  /* ─────────────── LEVEL 2 ─────────────── */
  {
    level: 2, cefr: 'A1.1', phase: 'intro',
    title: '문장의 심장 — ser·estar·tener·ir',
    desc: '스페인어의 함정 ser vs estar를 포함한 4대 동사, 부정문(no), 의문사, 일상 사물 어휘로 첫 문장을 만듭니다.',
    words: [
      {w:'ser', ipa:'/seɾ/', ko:'~이다 (본질·정체)', en:'to be (essence)', pos:'동사', ex:'Yo soy estudiante.', exKo:'저는 학생입니다.'},
      {w:'estar', ipa:'/esˈtaɾ/', ko:'~이다, 있다 (상태·위치)', en:'to be (state/place)', pos:'동사', ex:'Estoy cansado.', exKo:'나는 피곤하다.'},
      {w:'tener', ipa:'/teˈneɾ/', ko:'가지다', en:'to have', pos:'동사', ex:'Tengo un gato.', exKo:'나는 고양이 한 마리가 있다.'},
      {w:'ir', ipa:'/iɾ/', ko:'가다', en:'to go', pos:'동사', ex:'Voy a Madrid.', exKo:'나는 마드리드에 간다.'},
      {w:'no (부정)', ipa:'/no/', ko:'~하지 않다 (동사 앞에 no)', en:'not', pos:'표현', ex:'No hablo inglés.', exKo:'나는 영어를 하지 못한다.'},
      {w:'agua', ipa:'/ˈa.ɣwa/', ko:'물 (여성이지만 el agua!)', en:'water', pos:'명사', gender:'f', plural:'aguas', ex:'Bebo agua.', exKo:'나는 물을 마신다.'},
      {w:'pan', ipa:'/pan/', ko:'빵', en:'bread', pos:'명사', gender:'m', plural:'panes', ex:'El pan está delicioso.', exKo:'그 빵은 맛있다.'},
      {w:'casa', ipa:'/ˈka.sa/', ko:'집', en:'house', pos:'명사', gender:'f', plural:'casas', ex:'Mi casa es pequeña.', exKo:'우리 집은 작다.'},
      {w:'escuela', ipa:'/esˈkwe.la/', ko:'학교', en:'school', pos:'명사', gender:'f', plural:'escuelas', ex:'Voy a la escuela.', exKo:'나는 학교에 간다.'},
      {w:'libro', ipa:'/ˈli.βɾo/', ko:'책', en:'book', pos:'명사', gender:'m', plural:'libros', ex:'Leo un libro.', exKo:'나는 책을 읽는다.'},
      {w:'día', ipa:'/ˈdi.a/', ko:'날, 하루 (-a지만 남성!)', en:'day', pos:'명사', gender:'m', plural:'días', ex:'¿Qué día es hoy?', exKo:'오늘 무슨 요일이죠?'},
      {w:'noche', ipa:'/ˈno.tʃe/', ko:'밤', en:'night', pos:'명사', gender:'f', plural:'noches', ex:'¡Buenas noches!', exKo:'잘 자요!'},
      {w:'amigo / amiga', ipa:'/aˈmi.ɣo/', ko:'친구', en:'friend', pos:'명사', gender:'mf', plural:'amigos / amigas', ex:'Es mi amigo.', exKo:'이 사람은 내 친구야.'},
      {w:'gato', ipa:'/ˈɡa.to/', ko:'고양이', en:'cat', pos:'명사', gender:'m', plural:'gatos', ex:'El gato duerme en la mesa.', exKo:'고양이가 탁자 위에서 잔다.'},
      {w:'perro', ipa:'/ˈpe.ro/', ko:'개', en:'dog', pos:'명사', gender:'m', plural:'perros', ex:'El perro come.', exKo:'개가 먹고 있다.'},
      {w:'mesa', ipa:'/ˈme.sa/', ko:'탁자, 식탁', en:'table', pos:'명사', gender:'f', plural:'mesas', ex:'El libro está en la mesa.', exKo:'책이 탁자 위에 있다.'},
      {w:'pequeño / pequeña', ipa:'/peˈke.ɲo(a)/', ko:'작은', en:'small', pos:'형용사', gender:'mf', ex:'un gato pequeño / una casa pequeña', exKo:'작은 고양이 / 작은 집'},
      {w:'grande', ipa:'/ˈɡɾan.de/', ko:'큰', en:'big', pos:'형용사', gender:'mf', ex:'una escuela grande', exKo:'큰 학교'},
      {w:'bueno / buena', ipa:'/ˈbwe.no(a)/', ko:'좋은, 맛있는', en:'good', pos:'형용사', gender:'mf', ex:'Es un buen restaurante.', exKo:'여기는 좋은 식당이다.'},
      {w:'y', ipa:'/i/', ko:'그리고', en:'and', pos:'접속사', ex:'un café y un cruasán', exKo:'커피 한 잔과 크루아상 하나'},
      {w:'pero', ipa:'/ˈpe.ɾo/', ko:'하지만', en:'but', pos:'접속사', ex:'Es pequeño pero bonito.', exKo:'작지만 예쁘다.'},
      {w:'o', ipa:'/o/', ko:'또는', en:'or', pos:'접속사', ex:'¿Té o café?', exKo:'차요 아니면 커피요?'},
      {w:'porque', ipa:'/ˈpoɾ.ke/', ko:'왜냐하면', en:'because', pos:'접속사', ex:'Como porque tengo hambre.', exKo:'배가 고파서 먹는다.'},
      {w:'quién', ipa:'/kjen/', ko:'누가, 누구', en:'who', pos:'의문사', ex:'¿Quién es?', exKo:'이 사람은 누구예요?'},
      {w:'qué', ipa:'/ke/', ko:'무엇', en:'what', pos:'의문사', ex:'¿Qué es esto?', exKo:'이게 뭐예요?'},
      {w:'dónde', ipa:'/ˈdon.de/', ko:'어디', en:'where', pos:'의문사', ex:'¿Dónde está la estación?', exKo:'역이 어디에 있나요?'},
      {w:'cuándo', ipa:'/ˈkwan.do/', ko:'언제', en:'when', pos:'의문사', ex:'¿Cuándo llegas?', exKo:'너 언제 도착해?'},
      {w:'por qué', ipa:'/poɾ ˈke/', ko:'왜', en:'why', pos:'의문사', ex:'¿Por qué estudias español?', exKo:'너는 왜 스페인어를 공부해?'},
      {w:'cómo', ipa:'/ˈko.mo/', ko:'어떻게', en:'how', pos:'의문사', ex:'¿Cómo te llamas?', exKo:'너 이름이 뭐야?'}
    ],
    grammar: [
      {title:'ser vs estar — 스페인어 최대의 갈림길', html:
        `<p>둘 다 "~이다"지만 쓰임이 다릅니다.</p>
         <table><tr><th>ser (본질·변하지 않는 것)</th><th>estar (상태·위치·변하는 것)</th></tr>
         <tr><td>직업·국적: Soy estudiante.</td><td>기분·상태: Estoy cansado.</td></tr>
         <tr><td>성격: Ella es amable.</td><td>위치: El libro está en la mesa.</td></tr>
         <tr><td>시간: Son las cinco.</td><td>진행: Estoy comiendo.</td></tr></table>
         <p>💡 "성격은 ser, 컨디션은 estar" — Es guapo(원래 잘생김) vs Está guapo(오늘 멋짐).</p>`},
      {title:'4대 동사 현재형', html:
        `<table><tr><th></th><th>ser</th><th>estar</th><th>tener</th><th>ir</th></tr>
         <tr><td>yo</td><td>soy</td><td>estoy</td><td>tengo</td><td>voy</td></tr>
         <tr><td>tú</td><td>eres</td><td>estás</td><td>tienes</td><td>vas</td></tr>
         <tr><td>él/ella/usted</td><td>es</td><td>está</td><td>tiene</td><td>va</td></tr>
         <tr><td>nosotros</td><td>somos</td><td>estamos</td><td>tenemos</td><td>vamos</td></tr>
         <tr><td>ellos/ustedes</td><td>son</td><td>están</td><td>tienen</td><td>van</td></tr></table>`},
      {title:'부정문과 의문문 — 프랑스어보다 쉽다!', html:
        `<p><b>부정문</b>: 동사 앞에 no 하나면 끝 — <b>No</b> hablo inglés.</p>
         <p><b>의문문</b>: 어순 그대로 + 물음표 두 개 — <b>¿</b>Tú eres coreano<b>?</b></p>
         <p>의문사가 있으면 앞으로: ¿<b>Dónde</b> está la estación? / ¿<b>Por qué</b> estudias?</p>`}
    ],
    exercises: [
      {type:'blank', text:'Yo ___ estudiante.', answer:'soy', ko:'저는 학생입니다.', hint:'직업·정체는 ser'},
      {type:'choice', q:'"María ___ cansada." (마리아는 피곤하다) 빈칸에 알맞은 것은?', options:['es','está','tiene'], answer:1,
       why:'피곤함은 일시적 상태이므로 estar를 씁니다.'},
      {type:'blank', text:'¿Tú ___ un gato?', answer:'tienes', ko:'너는 고양이를 키우니?', hint:'tener의 2인칭 단수'},
      {type:'blank', text:'Nosotros ___ a la escuela.', answer:'vamos', ko:'우리는 학교에 간다.', hint:'ir의 1인칭 복수'},
      {type:'blank', text:'Yo ___ hablo inglés.', answer:'no', ko:'나는 영어를 하지 못한다.', hint:'부정은 동사 앞에 no'},
      {type:'choice', q:'"¿___ está la estación?" (역이 어디에 있나요?)', options:['Quién','Dónde','Cuándo'], answer:1},
      {type:'blank', text:'Ellos ___ españoles.', answer:'son', ko:'그들은 스페인 사람이다.', hint:'국적은 ser의 3인칭 복수'}
    ],
    quiz: [
      {type:'blank', text:'Usted ___ muy amable.', answer:'es', ko:'당신은 매우 친절하시네요.', hint:'성격은 ser'},
      {type:'blank', text:'Ella ___ dos hermanos.', answer:'tiene', ko:'그녀는 형제가 둘 있다.'},
      {type:'choice', q:'"책이 탁자 위에 있다"를 올바르게 말하면?', options:['El libro es en la mesa.','El libro está en la mesa.','El libro tiene en la mesa.'], answer:1,
       why:'위치는 estar를 씁니다.'},
      {type:'choice', q:'"이게 뭐예요?"는?', options:['¿Quién es?','¿Qué es esto?','¿Dónde es?'], answer:1},
      {type:'blank', text:'El gato duerme en la ___.', answer:'mesa', ko:'고양이가 탁자 위에서 잔다.'},
      {type:'choice', q:'🔊 듣고 알맞은 뜻을 고르세요.', audio:'Voy a Madrid', options:['나는 마드리드에 간다','나는 마드리드에 산다','나는 마드리드를 좋아한다'], answer:0}
    ]
  },

  /* ─────────────── LEVEL 3 ─────────────── */
  {
    level: 3, cefr: 'A1', phase: 'A',
    title: '음식과 식사 — 블록 조립 시작',
    desc: 'Phase A 시작! 음식 어휘와 -ar/-er/-ir 규칙동사를 배우고 단어 블록으로 문장을 조립합니다.',
    words: [
      {w:'queso', ipa:'/ˈke.so/', ko:'치즈', en:'cheese', pos:'명사', gender:'m', plural:'quesos', ex:'Quisiera queso, por favor.', exKo:'치즈를 주세요.'},
      {w:'manzana', ipa:'/manˈsa.na/', ko:'사과', en:'apple', pos:'명사', gender:'f', plural:'manzanas', ex:'Como una manzana roja.', exKo:'나는 빨간 사과를 먹는다.'},
      {w:'verdura', ipa:'/beɾˈðu.ɾa/', ko:'채소', en:'vegetable', pos:'명사', gender:'f', plural:'verduras', ex:'Las verduras son buenas para la salud.', exKo:'채소는 건강에 좋다.'},
      {w:'carne', ipa:'/ˈkaɾ.ne/', ko:'고기', en:'meat', pos:'명사', gender:'f', plural:'carnes', ex:'No como carne.', exKo:'나는 고기를 먹지 않는다.'},
      {w:'pescado', ipa:'/pesˈka.ðo/', ko:'생선', en:'fish', pos:'명사', gender:'m', plural:'pescados', ex:'El pescado está fresco.', exKo:'생선이 신선하다.'},
      {w:'restaurante', ipa:'/res.tawˈɾan.te/', ko:'식당', en:'restaurant', pos:'명사', gender:'m', plural:'restaurantes', ex:'Vamos al restaurante esta noche.', exKo:'우리는 오늘 저녁 식당에 간다.'},
      {w:'menú', ipa:'/meˈnu/', ko:'메뉴', en:'menu', pos:'명사', gender:'m', plural:'menús', ex:'El menú, por favor.', exKo:'메뉴판 주세요.'},
      {w:'bebida', ipa:'/beˈβi.ða/', ko:'음료', en:'drink', pos:'명사', gender:'f', plural:'bebidas', ex:'¿Qué bebida quiere?', exKo:'어떤 음료를 드릴까요?'},
      {w:'desayuno', ipa:'/de.saˈʝu.no/', ko:'아침 식사', en:'breakfast', pos:'명사', gender:'m', plural:'desayunos', ex:'Tomo el desayuno a las siete.', exKo:'나는 7시에 아침을 먹는다.'},
      {w:'delicioso / deliciosa', ipa:'/de.liˈsjo.so(a)/', ko:'맛있는', en:'delicious', pos:'형용사', gender:'mf', ex:'¡Esta tarta está deliciosa!', exKo:'이 타르트 정말 맛있다!'},
      {w:'comer', ipa:'/koˈmeɾ/', ko:'먹다', en:'to eat', pos:'동사', ex:'Como una manzana.', exKo:'나는 사과를 먹는다.'},
      {w:'beber', ipa:'/beˈβeɾ/', ko:'마시다', en:'to drink', pos:'동사', ex:'Bebo agua.', exKo:'나는 물을 마신다.'},
      {w:'pedir', ipa:'/peˈðiɾ/', ko:'주문하다, 부탁하다 (e→i)', en:'to order', pos:'동사', ex:'Pedimos dos cafés.', exKo:'우리는 커피 두 잔을 주문한다.'},
      {w:'quisiera', ipa:'/kiˈsje.ɾa/', ko:'~을 주세요 (정중한 요청)', en:'I would like', pos:'표현', ex:'Quisiera un cruasán, por favor.', exKo:'크루아상 하나 주세요.'}
    ],
    grammar: [
      {title:'규칙동사 3형제 — -ar / -er / -ir', html:
        `<table><tr><th>인칭</th><th>hablar(-ar)</th><th>comer(-er)</th><th>vivir(-ir)</th></tr>
         <tr><td>yo</td><td>habl<b>o</b></td><td>com<b>o</b></td><td>viv<b>o</b></td></tr>
         <tr><td>tú</td><td>habl<b>as</b></td><td>com<b>es</b></td><td>viv<b>es</b></td></tr>
         <tr><td>él/ella</td><td>habl<b>a</b></td><td>com<b>e</b></td><td>viv<b>e</b></td></tr>
         <tr><td>nosotros</td><td>habl<b>amos</b></td><td>com<b>emos</b></td><td>viv<b>imos</b></td></tr>
         <tr><td>ellos</td><td>habl<b>an</b></td><td>com<b>en</b></td><td>viv<b>en</b></td></tr></table>
         <p>💡 어미가 곧 주어입니다. como = "나는 먹는다", comes = "너는 먹는다".</p>`},
      {title:'식당 생존 표현', html:
        `<p><b>Quisiera</b> + 명사 = 정중한 주문의 만능 열쇠: Quisiera un café / el menú / agua, por favor.</p>
         <p>계산: La cuenta, por favor. (계산서 주세요)</p>
         <p>맛 표현은 estar: ¡Está delicioso! (일시적 상태 — 지금 이 요리가 맛있다)</p>`}
    ],
    exercises: [
      {type:'blocks', answer:'Yo como una manzana', ko:'나는 사과를 먹는다.', distractors:['comes'],
       hint:'주어 yo에는 como(-o 어미)를 씁니다.'},
      {type:'blocks', answer:'Quisiera un café por favor', ko:'커피 한 잔 주세요.',
       hint:'정중한 요청: quisiera + 명사 + por favor'},
      {type:'blocks', answer:'Nosotros pedimos dos bebidas', ko:'우리는 음료 두 잔을 주문한다.', distractors:['piden'],
       hint:'nosotros에는 -imos 어미'},
      {type:'blocks', answer:'El queso está delicioso', ko:'그 치즈는 맛있다.', distractors:['deliciosa'],
       hint:'queso는 남성명사 → 형용사도 남성형, 맛은 estar'},
      {type:'blocks', answer:'No como carne', ko:'나는 고기를 먹지 않는다.', distractors:['la'],
       hint:'부정은 동사 앞에 no. 일반적인 "고기"에는 관사를 안 씁니다.'},
      {type:'blank', text:'Como ___ manzana.', answer:'una', ko:'나는 사과 하나를 먹는다.', hint:'manzana는 여성명사'}
    ],
    quiz: [
      {type:'blocks', answer:'Yo bebo una bebida', ko:'나는 음료를 마신다.', distractors:['bebes']},
      {type:'blocks', answer:'Vamos al restaurante', ko:'우리는 식당에 간다.'},
      {type:'blank', text:'¡Esta tarta está ___!', answer:'deliciosa', ko:'이 타르트 정말 맛있다!', hint:'tarta는 여성명사'},
      {type:'choice', q:'"나는 고기를 먹지 않는다"를 올바르게 말하면?', options:['No como carne.','Como no carne.','No come carne yo.'], answer:0},
      {type:'blank', text:'¿Ustedes ___ el desayuno? (pedir)', answer:'piden', ko:'아침 식사를 주문하시겠어요?', hint:'pedir는 e→i 변화: pido, pides, pide... piden'}
    ]
  },

  /* ─────────────── LEVEL 4 ─────────────── */
  {
    level: 4, cefr: 'A2', phase: 'A',
    title: '가족과 날씨 — 소유와 일치',
    desc: '가족·날씨 어휘, 소유형용사(mi/tu/su), 형용사의 성수일치를 블록 조립으로 훈련합니다.',
    words: [
      {w:'familia', ipa:'/faˈmi.lja/', ko:'가족', en:'family', pos:'명사', gender:'f', plural:'familias', ex:'Mi familia vive en Seúl.', exKo:'우리 가족은 서울에 산다.'},
      {w:'padre', ipa:'/ˈpa.ðɾe/', ko:'아버지', en:'father', pos:'명사', gender:'m', plural:'padres', ex:'Mi padre trabaja mucho.', exKo:'우리 아버지는 일을 많이 하신다.'},
      {w:'madre', ipa:'/ˈma.ðɾe/', ko:'어머니', en:'mother', pos:'명사', gender:'f', plural:'madres', ex:'Mi madre cocina muy bien.', exKo:'우리 어머니는 요리를 아주 잘하신다.'},
      {w:'hermano', ipa:'/eɾˈma.no/', ko:'형, 오빠, 남동생', en:'brother', pos:'명사', gender:'m', plural:'hermanos', ex:'Tengo dos hermanos.', exKo:'나는 형제가 둘 있다.'},
      {w:'hermana', ipa:'/eɾˈma.na/', ko:'누나, 언니, 여동생', en:'sister', pos:'명사', gender:'f', plural:'hermanas', ex:'Mi hermana es médica.', exKo:'우리 언니는 의사다.'},
      {w:'niño / niña', ipa:'/ˈni.ɲo(a)/', ko:'아이', en:'child', pos:'명사', gender:'mf', plural:'niños / niñas', ex:'Los niños juegan en el jardín.', exKo:'아이들이 정원에서 놀고 있다.'},
      {w:'mi / mis', ipa:'/mi/ /mis/', ko:'나의 (소유형용사)', en:'my', pos:'관사', ex:'mi padre, mi madre, mis padres', exKo:'나의 아버지, 나의 어머니, 나의 부모님'},
      {w:'tiempo', ipa:'/ˈtjem.po/', ko:'날씨; 시간', en:'weather; time', pos:'명사', gender:'m', plural:'tiempos', ex:'¿Qué tiempo hace?', exKo:'날씨가 어떻습니까?'},
      {w:'lluvia', ipa:'/ˈʝu.βja/', ko:'비', en:'rain', pos:'명사', gender:'f', plural:'lluvias', ex:'Llueve. / La lluvia cae.', exKo:'비가 온다.'},
      {w:'sol', ipa:'/sol/', ko:'해, 태양', en:'sun', pos:'명사', gender:'m', plural:'soles', ex:'Hace sol hoy.', exKo:'오늘은 해가 떴다.'},
      {w:'nieve', ipa:'/ˈnje.βe/', ko:'눈', en:'snow', pos:'명사', gender:'f', plural:'nieves', ex:'Nieva en invierno.', exKo:'겨울에는 눈이 온다.'},
      {w:'hace buen tiempo', ipa:'/ˈa.se bwen ˈtjem.po/', ko:'날씨가 좋다', en:'the weather is nice', pos:'표현', ex:'Hace buen tiempo, ¡vamos al parque!', exKo:'날씨가 좋으니 공원에 가자!'}
    ],
    grammar: [
      {title:'소유형용사 — 프랑스어보다 쉽다!', html:
        `<p>성 구분 없이 <b>수만</b> 맞춥니다.</p>
         <table><tr><th></th><th>단수 명사</th><th>복수 명사</th></tr>
         <tr><td>나의</td><td>mi padre / mi madre</td><td>mis padres</td></tr>
         <tr><td>너의</td><td>tu hermano</td><td>tus amigos</td></tr>
         <tr><td>그/그녀/당신의</td><td>su gato</td><td>sus libros</td></tr></table>`},
      {title:'형용사 성수일치 & 위치', html:
        `<p>형용사는 보통 명사 <b>뒤</b>: una manzana <b>roja</b>, mi hermana <b>pequeña</b>.</p>
         <p>-o로 끝나는 형용사는 성수 변화: pequeño/pequeña/pequeños/pequeñas. -e로 끝나면 수만: grande/grandes.</p>
         <p>⚠️ bueno는 남성 단수 명사 앞에서 buen: un <b>buen</b> restaurante.</p>`},
      {title:'날씨는 hacer로', html:
        `<p>Hace buen/mal tiempo. (날씨가 좋다/나쁘다) / Hace sol. (해가 떴다) / Hace calor/frío. (덥다/춥다)</p>
         <p>동사 하나로: Llueve. (비 온다) / Nieva. (눈 온다)</p>`}
    ],
    exercises: [
      {type:'blocks', answer:'Mi madre cocina muy bien', ko:'우리 어머니는 요리를 아주 잘하신다.', distractors:['Mis'],
       hint:'madre는 단수 → mi'},
      {type:'blocks', answer:'Hace buen tiempo hoy', ko:'오늘은 날씨가 좋다.'},
      {type:'blocks', answer:'Tengo dos hermanos y una hermana', ko:'나는 남자 형제 둘과 여자 형제 하나가 있다.'},
      {type:'blocks', answer:'Mi hermana pequeña come una manzana', ko:'내 여동생이 사과를 먹는다.', distractors:['pequeño'],
       hint:'hermana가 여성이므로 pequeña, 형용사는 명사 뒤 (누적 복습: comer, manzana)'},
      {type:'blocks', answer:'Hace sol hoy', ko:'오늘은 해가 떴다.'},
      {type:'blank', text:'___ padre trabaja mucho.', answer:'Mi', ko:'우리 아버지는 일을 많이 하신다.'}
    ],
    quiz: [
      {type:'blank', text:'___ hermanos viven en Busan.', answer:'Mis', ko:'내 형제들은 부산에 산다.', hint:'복수 명사 앞'},
      {type:'blocks', answer:'Mi familia vive en Seúl', ko:'우리 가족은 서울에 산다.'},
      {type:'choice', q:'"겨울에는 눈이 온다"는?', options:['Nieva en invierno.','Hace nieva en invierno.','La nieve es en invierno.'], answer:0},
      {type:'blank', text:'¿Qué ___ hace?', answer:'tiempo', ko:'날씨가 어떻습니까?'},
      {type:'choice', q:'올바른 성수일치는?', options:['una casa pequeño','una casa pequeña','un casa pequeña'], answer:1}
    ]
  },

  /* ─────────────── LEVEL 5 ─────────────── */
  {
    level: 5, cefr: 'A2', phase: 'A',
    title: '나의 하루 — 일과와 재귀동사',
    desc: '일과 어휘, 재귀동사(levantarse), 어간모음변화 동사(dormir→duermo)를 익히고 긴 문장을 조립합니다. 통과하면 Phase B가 열립니다.',
    words: [
      {w:'levantarse', ipa:'/le.βanˈtaɾ.se/', ko:'일어나다 (재귀동사)', en:'to get up', pos:'동사', ex:'Me levanto a las siete.', exKo:'나는 7시에 일어난다.'},
      {w:'trabajar', ipa:'/tɾa.βaˈxaɾ/', ko:'일하다', en:'to work', pos:'동사', ex:'Trabajo en una oficina.', exKo:'나는 사무실에서 일한다.'},
      {w:'dormir', ipa:'/doɾˈmiɾ/', ko:'자다 (o→ue)', en:'to sleep', pos:'동사', ex:'Duermo ocho horas cada noche.', exKo:'나는 매일 밤 8시간 잔다.'},
      {w:'mañana', ipa:'/maˈɲa.na/', ko:'아침(la mañana); 내일(부사)', en:'morning; tomorrow', pos:'명사', gender:'f', plural:'mañanas', ex:'Por la mañana bebo un café. / ¡Hasta mañana!', exKo:'아침에 나는 커피를 마신다. / 내일 봐!'},
      {w:'tarde', ipa:'/ˈtaɾ.ðe/', ko:'오후; 늦게', en:'afternoon; late', pos:'명사', gender:'f', plural:'tardes', ex:'Por la tarde estudio español.', exKo:'오후에 나는 스페인어를 공부한다.'},
      {w:'semana', ipa:'/seˈma.na/', ko:'주, 일주일', en:'week', pos:'명사', gender:'f', plural:'semanas', ex:'Trabajo cinco días por semana.', exKo:'나는 일주일에 5일 일한다.'},
      {w:'hoy', ipa:'/oj/', ko:'오늘', en:'today', pos:'부사', ex:'Hoy hace buen tiempo.', exKo:'오늘은 날씨가 좋다.'},
      {w:'cada', ipa:'/ˈka.ða/', ko:'각각의, ~마다', en:'each, every', pos:'형용사', ex:'Estudio cada día.', exKo:'나는 매일 공부한다.'}
    ],
    grammar: [
      {title:'재귀동사 — 자기 자신에게 하는 동작', html:
        `<p>levantarse(일어나다), acostarse(자러 가다), lavarse(씻다)...</p>
         <table><tr><td>yo <b>me</b> levanto</td><td>nosotros <b>nos</b> levantamos</td></tr>
         <tr><td>tú <b>te</b> levantas</td><td>vosotros <b>os</b> levantáis</td></tr>
         <tr><td>él <b>se</b> levanta</td><td>ellos <b>se</b> levantan</td></tr></table>
         <p>💡 재귀대명사(me/te/se...)는 동사 바로 앞에 놓입니다.</p>`},
      {title:'어간모음변화 동사 — 스페인어의 리듬', html:
        `<p>강세가 어간에 올 때 모음이 변합니다 (nosotros는 변하지 않음!).</p>
         <p><b>o→ue</b>: dormir → d<b>ue</b>rmo, d<b>ue</b>rmes... dormimos / <b>e→ie</b>: querer → qu<b>ie</b>ro / <b>e→i</b>: pedir → p<b>i</b>do</p>`},
      {title:'시간 말하기 & 하루 묘사', html:
        `<p>a las siete (7시에) / por la mañana (아침에) / por la tarde (오후에) / por la noche (밤에)</p>
         <p>일과 서술 공식: <b>시간 표현 + 동사(주어 생략) + 목적어</b><br>Por la mañana, bebo un café y voy a la escuela.</p>`}
    ],
    exercises: [
      {type:'blocks', answer:'Me levanto a las siete', ko:'나는 7시에 일어난다.', distractors:['se'],
       hint:'주어가 yo이므로 재귀대명사는 me'},
      {type:'blocks', answer:'Por la mañana bebo un café', ko:'아침에 나는 커피를 마신다.',
       hint:'누적 복습: beber(Level 3)'},
      {type:'blocks', answer:'Trabajamos cinco días por semana', ko:'우리는 일주일에 5일 일한다.', distractors:['Trabajan']},
      {type:'blocks', answer:'Esta noche vamos al restaurante', ko:'오늘 저녁 우리는 식당에 간다.',
       hint:'누적 복습: ir(L2) + restaurante(L3)'},
      {type:'blocks', answer:'Duermo ocho horas cada noche', ko:'나는 매일 밤 8시간 잔다.', distractors:['Dormo'],
       hint:'dormir는 o→ue: duermo (dormo는 없는 형태!)'},
      {type:'blank', text:'¿A qué hora ___ levantas?', answer:'te', ko:'너는 몇 시에 일어나?', hint:'tú의 재귀대명사'}
    ],
    quiz: [
      {type:'blocks', answer:'Mi madre se levanta a las seis', ko:'우리 어머니는 6시에 일어나신다.', distractors:['me']},
      {type:'blank', text:'___ hace buen tiempo.', answer:'Hoy', ko:'오늘은 날씨가 좋다.'},
      {type:'blocks', answer:'Por la noche como con mi familia', ko:'밤에 나는 가족과 함께 먹는다.'},
      {type:'blank', text:'Él ___ ocho horas. (dormir)', answer:'duerme', ko:'그는 8시간 잔다.', hint:'o→ue 변화'},
      {type:'blank', text:'Nosotros ___ levantamos a las siete.', answer:'nos', ko:'우리는 7시에 일어난다.'}
    ]
  },

  /* ─────────────── LEVEL 6 ─────────────── */
  {
    level: 6, cefr: 'B1', phase: 'B',
    title: '어제의 이야기 — pretérito indefinido',
    desc: 'Phase B 시작! 단순과거(pretérito indefinido)로 어제 일어난 일을 말합니다. 빈칸 채우기로 동사 변형을 직접 씁니다.',
    words: [
      {w:'ayer', ipa:'/aˈʝeɾ/', ko:'어제', en:'yesterday', pos:'부사', ex:'Ayer comí en un restaurante.', exKo:'어제 나는 식당에서 먹었다.'},
      {w:'ya', ipa:'/ʝa/', ko:'이미, 벌써', en:'already', pos:'부사', ex:'Ya terminé.', exKo:'나는 이미 끝냈다.'},
      {w:'fin de semana', ipa:'/fin de seˈma.na/', ko:'주말', en:'weekend', pos:'명사', gender:'m', plural:'fines de semana', ex:'El fin de semana descanso.', exKo:'주말에 나는 쉰다.'},
      {w:'vacaciones', ipa:'/ba.kaˈsjo.nes/', ko:'방학, 휴가 (항상 복수)', en:'vacation', pos:'명사', gender:'f', ex:'Estoy de vacaciones.', exKo:'나는 휴가 중이다.'},
      {w:'museo', ipa:'/muˈse.o/', ko:'박물관', en:'museum', pos:'명사', gender:'m', plural:'museos', ex:'Visitamos un museo.', exKo:'우리는 박물관을 관람했다.'},
      {w:'viajar', ipa:'/bjaˈxaɾ/', ko:'여행하다', en:'to travel', pos:'동사', ex:'Me gusta viajar por Europa.', exKo:'나는 유럽 여행을 좋아한다.'},
      {w:'visitar', ipa:'/bi.siˈtaɾ/', ko:'방문하다', en:'to visit', pos:'동사', ex:'Visitaron Madrid.', exKo:'그들은 마드리드를 방문했다.'},
      {w:'comprar', ipa:'/komˈpɾaɾ/', ko:'사다', en:'to buy', pos:'동사', ex:'Ella compró pan.', exKo:'그녀는 빵을 샀다.'},
      {w:'tomar', ipa:'/toˈmaɾ/', ko:'잡다, 타다, 마시다/먹다', en:'to take', pos:'동사', ex:'Tomo el autobús.', exKo:'나는 버스를 탄다.'},
      {w:'ver', ipa:'/beɾ/', ko:'보다', en:'to see', pos:'동사', ex:'Vimos una película.', exKo:'우리는 영화를 봤다.'}
    ],
    grammar: [
      {title:'pretérito indefinido — 끝난 과거', html:
        `<p>"어제, 작년에" 처럼 <b>끝난 사건</b>을 말할 때 씁니다. 조동사 없이 어미만 바꿉니다.</p>
         <table><tr><th></th><th>hablar(-ar)</th><th>comer(-er/-ir)</th></tr>
         <tr><td>yo</td><td>habl<b>é</b></td><td>com<b>í</b></td></tr>
         <tr><td>tú</td><td>habl<b>aste</b></td><td>com<b>iste</b></td></tr>
         <tr><td>él/ella</td><td>habl<b>ó</b></td><td>com<b>ió</b></td></tr>
         <tr><td>nosotros</td><td>habl<b>amos</b></td><td>com<b>imos</b></td></tr>
         <tr><td>ellos</td><td>habl<b>aron</b></td><td>com<b>ieron</b></td></tr></table>
         <p>⚠️ 악센트가 뜻을 가릅니다: hablo(나는 말한다) vs habló(그가 말했다)!</p>`},
      {title:'자주 쓰는 불규칙 과거', html:
        `<p><b>ir/ser</b>(같은 형태!): fui, fuiste, fue, fuimos, fueron</p>
         <p><b>ver</b>: vi, viste, vio, vimos, vieron / <b>hacer</b>: hice, hiciste, hizo... / <b>tener</b>: tuve... / <b>estar</b>: estuve...</p>`}
    ],
    exercises: [
      {type:'blank', text:'Ayer yo ___ en un restaurante. (comer)', answer:'comí', ko:'어제 나는 식당에서 먹었다.',
       hint:'-er 동사의 yo 과거형은 -í (악센트!)'},
      {type:'blank', text:'Ella ___ a Madrid. (ir)', answer:'fue', ko:'그녀는 마드리드에 갔다.',
       hint:'ir의 과거는 완전 불규칙'},
      {type:'blank', text:'Nosotros ___ una película. (ver)', answer:'vimos', ko:'우리는 영화를 봤다.'},
      {type:'blank', text:'¿Tú ___ el autobús? (tomar)', answer:'tomaste', ko:'너 버스 탔어?'},
      {type:'blank', text:'Ellos ___ pan. (comprar)', answer:'compraron', ko:'그들은 빵을 샀다.'},
      {type:'choice', q:'hacer(하다)의 yo 과거형은?', options:['hací','hice','hizo'], answer:1,
       why:'hacer는 불규칙: hice, hiciste, hizo...'}
    ],
    quiz: [
      {type:'blank', text:'Ayer yo ___ mis deberes. (hacer)', answer:'hice', ko:'어제 나는 숙제를 했다.'},
      {type:'blank', text:'Ella ___ agua. (beber)', answer:'bebió', ko:'그녀는 물을 마셨다.', hint:'-er 동사 3인칭 과거는 -ió'},
      {type:'blank', text:'Nosotros ___ un museo. (visitar)', answer:'visitamos', ko:'우리는 박물관을 관람했다.'},
      {type:'choice', q:'"그들은 학교에 갔다"의 올바른 형태는?', options:['Ellos fueron a la escuela.','Ellos iban ayer a la escuela una vez.','Ellos van a la escuela ayer.'], answer:0,
       why:'끝난 과거 사건은 pretérito indefinido: fueron'},
      {type:'blank', text:'El fin de semana, ¿tú ___ a tus amigos? (ver)', answer:'viste', ko:'주말에 너 친구들 봤어?'}
    ]
  },

  /* ─────────────── LEVEL 7 ─────────────── */
  {
    level: 7, cefr: 'B1', phase: 'B',
    title: '흐르는 시간 — imperfecto와 미래',
    desc: '배경 묘사의 imperfecto, 가까운 미래(ir a + 동사원형)와 단순 미래를 구분해 씁니다.',
    words: [
      {w:'a menudo', ipa:'/a meˈnu.ðo/', ko:'자주', en:'often', pos:'부사', ex:'Voy a menudo al cine.', exKo:'나는 영화관에 자주 간다.'},
      {w:'siempre', ipa:'/ˈsjem.pɾe/', ko:'항상', en:'always', pos:'부사', ex:'Él siempre llega tarde.', exKo:'그는 항상 늦는다.'},
      {w:'nunca', ipa:'/ˈnuŋ.ka/', ko:'결코 ~않다', en:'never', pos:'부사', ex:'Nunca bebo café por la noche.', exKo:'나는 밤에 커피를 절대 마시지 않는다.'},
      {w:'antes', ipa:'/ˈan.tes/', ko:'전에, 예전에', en:'before', pos:'부사', ex:'Antes vivía en Busan.', exKo:'예전에 나는 부산에 살았다.'},
      {w:'después', ipa:'/desˈpwes/', ko:'후에, 나중에', en:'after', pos:'부사', ex:'Después de cenar, leo.', exKo:'저녁 식사 후에 나는 책을 읽는다.'},
      {w:'año', ipa:'/ˈa.ɲo/', ko:'해, 연도', en:'year', pos:'명사', gender:'m', plural:'años', ex:'¡Feliz año nuevo!', exKo:'새해 복 많이 받으세요!'},
      {w:'próximo / próxima', ipa:'/ˈpɾok.si.mo(a)/', ko:'다음의', en:'next', pos:'형용사', gender:'mf', ex:'la semana próxima', exKo:'다음 주'},
      {w:'pasado / pasada', ipa:'/paˈsa.ðo(a)/', ko:'지난', en:'last', pos:'형용사', gender:'mf', ex:'el año pasado', exKo:'작년'},
      {w:'vivir', ipa:'/biˈβiɾ/', ko:'살다', en:'to live', pos:'동사', ex:'Vivo en Seúl.', exKo:'나는 서울에 산다.'},
      {w:'jugar', ipa:'/xuˈɣaɾ/', ko:'놀다, (경기를) 하다 (u→ue)', en:'to play', pos:'동사', ex:'Los niños juegan al fútbol.', exKo:'아이들이 축구를 한다.'}
    ],
    grammar: [
      {title:'imperfecto — 과거의 배경·습관', html:
        `<p>만들기: -ar → <b>-aba</b>(hablaba), -er/-ir → <b>-ía</b>(comía, vivía). 불규칙은 단 3개: ser(era), ir(iba), ver(veía)!</p>
         <p>쓰임: 과거의 습관(예전엔 ~하곤 했다), 배경 묘사(날씨·나이·기분), 진행 중이던 일.</p>
         <p>💡 indefinido는 "사건", imperfecto는 "배경": <b>Llovía</b>(배경) cuando <b>salí</b>(사건).</p>`},
      {title:'미래 두 가지', html:
        `<p><b>ir a + 동사원형</b>(가까운 미래): Voy a comer. (막 ~할 것이다) — 구어에서 압도적으로 많이 씀</p>
         <p><b>futuro simple</b> = 동사원형 + é/ás/á/emos/án: Visitaremos Madrid el año próximo.</p>`}
    ],
    exercises: [
      {type:'blank', text:'Cuando era pequeño, ___ al fútbol. (jugar, imperfecto)', answer:'jugaba', ko:'어렸을 때 나는 축구를 하곤 했다.'},
      {type:'blank', text:'Mañana ___ a ir al cine. (ir)', answer:'voy', ko:'내일 나는 영화관에 갈 것이다.',
       hint:'ir a + 동사원형: voy a ir'},
      {type:'blank', text:'El año próximo ___ Madrid. (visitar, futuro simple)', answer:'visitaremos', ko:'내년에 우리는 마드리드를 방문할 것이다.'},
      {type:'blank', text:'Antes, ella ___ en Sevilla. (vivir, imperfecto)', answer:'vivía', ko:'예전에 그녀는 세비야에 살았다.'},
      {type:'choice', q:'"비가 오고 있었다(배경)"에 알맞은 시제는?', options:['Llovió.','Llovía.','Lloverá.'], answer:1,
       why:'과거의 배경 묘사는 imperfecto.'},
      {type:'blank', text:'___ bebo café por la noche. (결코 ~않다)', answer:'Nunca', ko:'나는 밤에 커피를 절대 마시지 않는다.'}
    ],
    quiz: [
      {type:'blank', text:'Antes, nosotros ___ en una casa pequeña. (vivir, imperfecto)', answer:'vivíamos', ko:'예전에 우리는 작은 집에 살았다.'},
      {type:'blank', text:'Esta noche ellos ___ a ir al restaurante. (ir)', answer:'van', ko:'오늘 저녁 그들은 식당에 갈 것이다.'},
      {type:'blank', text:'La semana próxima ___ a mis abuelos. (visitar, futuro simple, yo)', answer:'visitaré', ko:'다음 주에 나는 조부모님을 방문할 것이다.'},
      {type:'choice', q:'indefinido와 imperfecto의 올바른 조합은?', options:['Dormía cuando llamaste.','Dormí cuando llamabas.','Duermo cuando llamaste.'], answer:0,
       why:'진행 중이던 배경(dormía) + 끼어든 사건(llamaste)'},
      {type:'blank', text:'Él ___ llega tarde. (항상)', answer:'siempre', ko:'그는 항상 늦는다.'}
    ]
  },

  /* ─────────────── LEVEL 8 ─────────────── */
  {
    level: 8, cefr: 'B1', phase: 'B',
    title: '매끄러운 문장 — 목적어 대명사와 gustar',
    desc: '반복을 없애는 목적어 대명사(lo/la/le)와 스페인어의 백미 gustar 구문, tener 관용구를 익힙니다.',
    words: [
      {w:'lo / la / los / las (목적어)', ipa:'/lo/ /la/', ko:'그를/그녀를/그것들을 (직접목적어)', en:'him/her/them', pos:'대명사', gender:'mf', ex:'Lo conozco bien.', exKo:'나는 그를 잘 안다.'},
      {w:'le / les', ipa:'/le/ /les/', ko:'그(녀)에게 / 그들에게 (간접목적어)', en:'to him/her/them', pos:'대명사', ex:'Le hablo todos los días.', exKo:'나는 매일 그(녀)에게 말한다.'},
      {w:'gustar', ipa:'/ɡusˈtaɾ/', ko:'좋아하다 (역구조: ~이 마음에 들다)', en:'to like', pos:'동사', ex:'Me gusta el chocolate.', exKo:'나는 초콜릿을 좋아한다.'},
      {w:'tener hambre', ipa:'/teˈneɾ ˈam.bɾe/', ko:'배고프다', en:'to be hungry', pos:'표현', ex:'¡Tengo mucha hambre!', exKo:'나 정말 배고파!'},
      {w:'tener sed', ipa:'/teˈneɾ seð/', ko:'목마르다', en:'to be thirsty', pos:'표현', ex:'¿Tienes sed? Aquí hay agua.', exKo:'목말라? 여기 물 있어.'},
      {w:'necesitar', ipa:'/ne.se.siˈtaɾ/', ko:'~이 필요하다', en:'to need', pos:'동사', ex:'Necesito dormir.', exKo:'나는 잠이 필요하다.'},
      {w:'hay', ipa:'/aj/', ko:'~이 있다', en:'there is/are', pos:'표현', ex:'Hay un gato en la mesa.', exKo:'탁자 위에 고양이가 있다.'},
      {w:'pensar en', ipa:'/penˈsaɾ en/', ko:'~을 생각하다 (e→ie)', en:'to think about', pos:'동사', ex:'Pienso en mis vacaciones.', exKo:'나는 휴가를 생각한다.'},
      {w:'conocer', ipa:'/ko.noˈseɾ/', ko:'알다 (사람·장소)', en:'to know', pos:'동사', ex:'Conozco este restaurante.', exKo:'나는 이 식당을 안다.'},
      {w:'querer', ipa:'/keˈɾeɾ/', ko:'원하다, 사랑하다 (e→ie)', en:'to want, to love', pos:'동사', ex:'Quiero un café. / Te quiero.', exKo:'커피 마시고 싶어. / 사랑해.'}
    ],
    grammar: [
      {title:'목적어 대명사 — 동사 앞에 놓는다', html:
        `<p>직접목적어: lo(그를/그것)/la(그녀를)/los/las — Veo a María → <b>La</b> veo.</p>
         <p>간접목적어: le(그에게)/les(그들에게) — Hablo a María → <b>Le</b> hablo.</p>
         <p>부정문: No <b>lo</b> veo.</p>`},
      {title:'gustar — 주어가 뒤집히는 동사', html:
        `<p>"나는 초콜릿을 좋아한다"가 아니라 <b>"초콜릿이 나에게 즐거움을 준다"</b> 구조입니다.</p>
         <p><b>Me gusta</b> el chocolate. (단수) / <b>Me gustan</b> los libros. (복수 — 동사도 복수!)</p>
         <p>me/te/le/nos/les + gusta(n): ¿<b>Te</b> gusta viajar? — 너 여행 좋아해?</p>`},
      {title:'tener 관용구 — 몸 상태는 tener로', html:
        `<p>tener hambre(배고프다) · tener sed(목마르다) · tener frío/calor(춥다/덥다) · tener sueño(졸리다) · tener razón(옳다) · tener ~ años(나이)</p>
         <p>⚠️ 영어의 be와 달리 tener(가지다)를 씁니다: I am hungry → <b>Tengo hambre</b>.</p>`}
    ],
    exercises: [
      {type:'blank', text:'— ¿Comes la manzana? — Sí, ___ como.', answer:'la', ko:'— 사과 먹어? — 응, 그거 먹어.', hint:'la manzana = 여성 직접목적어'},
      {type:'blank', text:'— ¿Hablas a María? — Sí, ___ hablo.', answer:'le', ko:'— 마리아에게 말해? — 응, 그녀에게 말해.', hint:'a + 사람 = 간접목적어'},
      {type:'blank', text:'Me ___ el chocolate.', answer:'gusta', ko:'나는 초콜릿을 좋아한다.', hint:'단수 명사 → gusta'},
      {type:'blank', text:'Me ___ los libros.', answer:'gustan', ko:'나는 책을 좋아한다.', hint:'복수 명사 → 동사도 복수 gustan!'},
      {type:'choice', q:'"나 배고파"를 올바르게 말하면?', options:['Estoy hambre.','Tengo hambre.','Soy hambre.'], answer:1,
       why:'몸 상태는 tener: Tengo hambre.'},
      {type:'blank', text:'___ un gato en la mesa.', answer:'Hay', ko:'탁자 위에 고양이가 있다.'}
    ],
    quiz: [
      {type:'blank', text:'— ¿Conoces este restaurante? — Sí, ___ conozco.', answer:'lo', ko:'— 이 식당 알아? — 응, 알아.'},
      {type:'blank', text:'¿Te ___ viajar?', answer:'gusta', ko:'너 여행 좋아해?', hint:'동사원형은 단수 취급'},
      {type:'blank', text:'Nos ___ las películas españolas.', answer:'gustan', ko:'우리는 스페인 영화를 좋아한다.'},
      {type:'choice', q:'"나는 그들에게 매일 전화한다"는?', options:['Los llamo por teléfono cada día.','Les llamo por teléfono cada día.','Le llamo por teléfono cada día.'], answer:1,
       why:'그들에게 = 간접목적어 les'},
      {type:'blank', text:'Después de correr, tengo mucha ___.', answer:'sed', ko:'달리고 나면 목이 많이 마르다.'}
    ]
  },

  /* ─────────────── LEVEL 9 ─────────────── */
  {
    level: 9, cefr: 'B2', phase: 'C',
    title: '나의 목소리 — 의견과 subjuntivo',
    desc: 'Phase C 시작! 의견을 표현하고 subjuntivo(접속법)의 문을 엽니다. 이제 직접 문장을 씁니다.',
    words: [
      {w:'pensar', ipa:'/penˈsaɾ/', ko:'생각하다 (e→ie)', en:'to think', pos:'동사', ex:'Pienso que es una buena idea.', exKo:'좋은 생각인 것 같아.'},
      {w:'creer', ipa:'/kɾeˈeɾ/', ko:'믿다, ~라고 생각하다', en:'to believe', pos:'동사', ex:'Creo que él tiene razón.', exKo:'그가 옳다고 생각해.'},
      {w:'es importante que', ipa:'/es im.poɾˈtan.te ke/', ko:'~하는 것이 중요하다 (+subjuntivo)', en:'it is important that', pos:'표현', ex:'Es importante que seas puntual.', exKo:'네가 시간을 지키는 것이 중요해.'},
      {w:'aunque', ipa:'/ˈawŋ.ke/', ko:'비록 ~이지만', en:'although', pos:'접속사', ex:'Aunque tenga hambre, no come.', exKo:'그는 배가 고파도 먹지 않는다.'},
      {w:'en mi opinión', ipa:'/en mi o.piˈnjon/', ko:'내 생각에는', en:'in my opinion', pos:'표현', ex:'En mi opinión, esta película es excelente.', exKo:'내 생각에 이 영화는 훌륭하다.'},
      {w:'opinión', ipa:'/o.piˈnjon/', ko:'의견', en:'opinion', pos:'명사', gender:'f', plural:'opiniones', ex:'¿Cuál es tu opinión?', exKo:'네 의견은 뭐야?'},
      {w:'importante', ipa:'/im.poɾˈtan.te/', ko:'중요한', en:'important', pos:'형용사', ex:'Es una decisión importante.', exKo:'이것은 중요한 결정이다.'},
      {w:'necesario / necesaria', ipa:'/ne.seˈsa.ɾjo(a)/', ko:'필요한', en:'necessary', pos:'형용사', gender:'mf', ex:'Es necesario practicar.', exKo:'연습이 필요하다.'},
      {w:'parecer', ipa:'/pa.ɾeˈseɾ/', ko:'~인 것 같다', en:'to seem', pos:'동사', ex:'Parece contento.', exKo:'그는 만족스러워 보인다.'},
      {w:'tener razón', ipa:'/teˈneɾ raˈson/', ko:'옳다, 맞다', en:'to be right', pos:'표현', ex:'Tienes razón, es verdad.', exKo:'네 말이 맞아, 사실이야.'}
    ],
    grammar: [
      {title:'subjuntivo — 사실이 아닌 "마음속" 서법', html:
        `<p>바람·의무·감정·의심 뒤의 que절에서 씁니다. 신호: <b>es importante que, quiero que, aunque, para que...</b></p>
         <p>만들기: yo 현재형에서 -o를 떼고 <b>어미를 반대로</b> — -ar는 e로, -er/-ir는 a로: hablar → habl<b>e</b>, comer → com<b>a</b>.</p>
         <table><tr><th></th><th>ser</th><th>tener</th><th>ir</th><th>hacer</th></tr>
         <tr><td>que yo</td><td>sea</td><td>tenga</td><td>vaya</td><td>haga</td></tr>
         <tr><td>que tú</td><td>seas</td><td>tengas</td><td>vayas</td><td>hagas</td></tr>
         <tr><td>que él</td><td>sea</td><td>tenga</td><td>vaya</td><td>haga</td></tr>
         <tr><td>que nosotros</td><td>seamos</td><td>tengamos</td><td>vayamos</td><td>hagamos</td></tr></table>
         <p>💡 "creo que"(확신) 뒤에는 직설법, "no creo que"(의심) 뒤에는 subjuntivo!</p>`},
      {title:'의견 표현 공식', html:
        `<p>En mi opinión, ... / Creo que + 직설법 / Me parece que ... / Pienso que ...</p>
         <p>동의: Tienes razón. / Estoy de acuerdo. — 반대: No estoy de acuerdo, porque ...</p>
         <p>작문 팁: <b>주장 → porque 근거 → pero 반론 고려</b> 순서로 쓰면 단락이 됩니다.</p>`}
    ],
    exercises: [
      {type:'blank', text:'Es importante que ___ puntual. (ser, subjuntivo, tú)', answer:'seas', ko:'네가 시간을 지키는 것이 중요해.'},
      {type:'blank', text:'Aunque ___ hambre, no come. (tener, subjuntivo)', answer:'tenga', ko:'그는 배가 고파도 먹지 않는다.'},
      {type:'compose', prompt:'"En mi opinión"으로 시작해서, 스페인 음식(la comida española)에 대한 당신의 의견을 한 문장으로 쓰세요.',
       mustInclude:['en mi opinión'], minWords:6,
       sample:'En mi opinión, la comida española es deliciosa pero un poco salada.'},
      {type:'compose', prompt:'"es importante que"를 사용해 피곤해하는 친구에게 조언하는 문장을 쓰세요.',
       mustInclude:['es importante que'], minWords:6,
       sample:'Es importante que duermas más, porque estás muy cansado.'},
      {type:'compose', prompt:'당신의 취미 하나를 소개하고 "porque"로 이유를 붙이세요.',
       mustInclude:['porque'], minWords:7,
       sample:'Me gusta leer novelas porque es interesante y tranquilo.'}
    ],
    quiz: [
      {type:'blank', text:'Es necesario que nosotros ___ los deberes. (hacer, subjuntivo)', answer:'hagamos', ko:'우리는 숙제를 해야 한다.'},
      {type:'choice', q:'"Creo que..." 뒤에 오는 서법은?', options:['subjuntivo','직설법(indicativo)','condicional'], answer:1,
       why:'확신을 나타내는 creer/pensar 긍정문 뒤는 직설법입니다.'},
      {type:'blank', text:'Aunque ___ cansada, ella trabaja. (estar, subjuntivo)', answer:'esté', ko:'그녀는 피곤해도 일한다.'},
      {type:'compose', prompt:'"creo que"를 사용해 스페인어 학습에 대한 의견을 한 문장으로 쓰세요.',
       mustInclude:['creo que'], minWords:6,
       sample:'Creo que el español es difícil pero muy bonito.'},
      {type:'compose', prompt:'"tienes razón"을 포함해 친구의 말에 동의하는 문장을 쓰세요.',
       mustInclude:['tienes razón'], minWords:5,
       sample:'Tienes razón, este restaurante es realmente delicioso.'}
    ]
  },

  /* ─────────────── LEVEL 10 ─────────────── */
  {
    level: 10, cefr: 'C1', phase: 'C',
    title: '가정과 품격 — condicional과 문체',
    desc: '마지막 레벨! 가정법(si + 접속법 과거, condicional), 격식 있는 연결어로 세련된 스페인어를 완성합니다.',
    words: [
      {w:'sin embargo', ipa:'/sin emˈbaɾ.ɣo/', ko:'그러나 (격식)', en:'however', pos:'접속사', ex:'La película era larga; sin embargo, no me aburrí.', exKo:'영화는 길었다. 그러나 지루하지 않았다.'},
      {w:'no obstante', ipa:'/no obsˈtan.te/', ko:'그럼에도 불구하고 (문어)', en:'nonetheless', pos:'부사', ex:'Es difícil; no obstante, lo intentaré.', exKo:'어렵다. 그럼에도 시도해 보겠다.'},
      {w:'a pesar de', ipa:'/a peˈsaɾ ðe/', ko:'~에도 불구하고', en:'despite', pos:'전치사', ex:'A pesar de la lluvia, salimos.', exKo:'비에도 불구하고 우리는 나갔다.'},
      {w:'para que', ipa:'/ˈpa.ɾa ke/', ko:'~하도록 (+subjuntivo)', en:'so that', pos:'접속사', ex:'Estudio para que mi futuro sea mejor.', exKo:'나는 더 나은 미래를 위해 공부한다.'},
      {w:'si', ipa:'/si/', ko:'만약 ~라면', en:'if', pos:'접속사', ex:'Si fuera rico, viajaría.', exKo:'내가 부자라면 여행할 텐데.'},
      {w:'poder (podría)', ipa:'/poˈðeɾ/', ko:'~할 수 있다 (조건법: ~해 주시겠어요?)', en:'could', pos:'동사', ex:'¿Podría ayudarme?', exKo:'저를 도와주실 수 있을까요?'},
      {w:'deber (deberías)', ipa:'/deˈβeɾ/', ko:'~해야 한다 (조건법: ~하는 게 좋겠다)', en:'should', pos:'동사', ex:'Deberías dormir más.', exKo:'너는 잠을 더 자는 게 좋겠어.'},
      {w:'desear', ipa:'/de.seˈaɾ/', ko:'바라다, 원하다 (격식)', en:'to wish', pos:'동사', ex:'Desearía reservar una mesa.', exKo:'테이블을 예약하고 싶습니다만.'},
      {w:'expresar', ipa:'/eks.pɾeˈsaɾ/', ko:'표현하다', en:'to express', pos:'동사', ex:'Expresa bien sus ideas.', exKo:'그는 자기 생각을 잘 표현한다.'},
      {w:'quizás', ipa:'/kiˈsas/', ko:'아마도 (+subjuntivo 가능)', en:'perhaps', pos:'부사', ex:'Quizás venga mañana.', exKo:'그는 아마 내일 올 것이다.'}
    ],
    grammar: [
      {title:'condicional — 공손함과 가정의 서법', html:
        `<p>만들기: <b>동사원형 + ía/ías/ía/íamos/ían</b>: viajar<b>ía</b>, podr<b>ía</b>, deber<b>ías</b>.</p>
         <p>가정문 공식: <b>Si + 접속법 과거(-ra), condicional</b><br>Si <u>fuera</u> rico, <u>viajaría</u>. (내가 부자라면 여행할 텐데)</p>
         <p>접속법 과거: ellos 과거형에서 -ron을 떼고 -ra: fueron → fue<b>ra</b>, tuvieron → tuvie<b>ra</b>, hablaron → habla<b>ra</b>.</p>
         <p>공손 표현: Quisiera... / ¿Podría...? / Deberías... (조언)</p>`},
      {title:'문체(registro) — 상황에 맞는 옷 입기', html:
        `<table><tr><th>구어(coloquial)</th><th>표준(neutro)</th><th>격식(formal)</th></tr>
         <tr><td>pero</td><td>sin embargo</td><td>no obstante</td></tr>
         <tr><td>Quiero...</td><td>Quisiera...</td><td>Desearía...</td></tr>
         <tr><td>tú</td><td>—</td><td>usted (+3인칭 동사)</td></tr></table>
         <p>이메일·편지에서는 격식 표현 + usted를 쓰고, 친구와는 구어 표현 + tú를 씁니다.</p>`}
    ],
    exercises: [
      {type:'blank', text:'Si tuviera tiempo, ___ por Europa. (viajar, condicional)', answer:'viajaría', ko:'시간이 있다면 유럽 여행을 할 텐데.'},
      {type:'compose', prompt:'"Si fuera rico, ..."로 시작하는 가정문을 완성하세요. (condicional -ría 사용, 8단어 이상)',
       mustInclude:['si fuera', ['ría']], minWords:8,
       sample:'Si fuera rico, viajaría por todo el mundo con mi familia.'},
      {type:'compose', prompt:'식당에 전화해 두 명 자리를 정중하게 예약하는 첫 문장을 쓰세요. (quisiera 또는 podría 사용)',
       mustInclude:[['quisiera','podría']], minWords:7,
       sample:'Buenas tardes, quisiera reservar una mesa para dos personas esta noche, por favor.'},
      {type:'compose', prompt:'"sin embargo"로 두 문장을 대조해 연결하세요.',
       mustInclude:['sin embargo'], minWords:8,
       sample:'La película era muy larga; sin embargo, no me aburrí.'},
      {type:'compose', prompt:'"a pesar de"를 사용해 역경에도 무언가를 했다는 문장을 쓰세요.',
       mustInclude:['a pesar de'], minWords:6,
       sample:'A pesar de la lluvia, decidimos salir juntos.'}
    ],
    quiz: [
      {type:'blank', text:'Si estudiaras más, ___ aprobar. (poder, condicional)', answer:'podrías', ko:'네가 더 공부한다면 합격할 수 있을 텐데.'},
      {type:'choice', q:'격식 있는 이메일에 가장 어울리는 표현은?', options:['Quiero una respuesta.','Desearía recibir una respuesta.','Dame una respuesta.'], answer:1},
      {type:'blank', text:'___ ___ de la nieve, fue al trabajo. (~에도 불구하고)', answer:['A','pesar'], ko:'눈에도 불구하고 그는 출근했다.'},
      {type:'compose', prompt:'"deberías"를 사용해 스페인어를 배우는 친구에게 조언하는 문장을 쓰세요.',
       mustInclude:['deberías'], minWords:6,
       sample:'Deberías escuchar canciones españolas todos los días.'},
      {type:'compose', prompt:'가정문(Si + 접속법 과거, condicional)으로 "시간이 있다면 무엇을 할지" 쓰세요.',
       mustInclude:['si'], minWords:8,
       sample:'Si tuviera más tiempo libre, haría deporte todas las mañanas.'}
    ]
  }
  ]
});
