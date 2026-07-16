/* =====================================================================
   🇫🇷 프랑스어 확장 어휘 사전 (Dictionary-only pack) — 3Ls
   ---------------------------------------------------------------
   dictionary:true → 시험·연습·잠금 없이 "단어 열람"만 제공.
   기존 학습팩(fr.js)의 커리큘럼/시험은 전혀 건드리지 않고, 공부할 때
   단어 열람 + 단어은행에서 폭넓게 찾아볼 수 있도록 어휘량을 보강하는 팩.
   각 단어: w / ipa / ko / en / (명사) gender / (일부) ex·exKo
   ===================================================================== */
registerLanguagePack({
  id: 'fr-extra',
  name: '프랑스어 확장',
  nativeName: 'Français +',
  flag: '🇫🇷',
  tts: 'fr-FR',
  parent: 'fr',        // fr(프랑스어) 하위 콘텐츠 — 언어 선택 화면엔 안 뜨고 Contents 드롭다운에서 접근
  menuLabel: '확장 어휘',
  dictionary: true,
  desc: '프랑스어 확장 어휘 사전',
  specialChars: [],
  levels: [

  /* ─────────── 색깔 ─────────── */
  { level:1, title:'🎨 색깔', sub:'les couleurs', words:[
    {w:'rouge', ipa:'/ʁuʒ/', ko:'빨강', en:'red', ex:'une pomme rouge', exKo:'빨간 사과'},
    {w:'bleu', ipa:'/blø/', ko:'파랑', en:'blue', ex:'Le ciel est bleu.', exKo:'하늘이 파랗다.'},
    {w:'vert', ipa:'/vɛʁ/', ko:'초록', en:'green', ex:'un arbre vert', exKo:'초록 나무'},
    {w:'jaune', ipa:'/ʒon/', ko:'노랑', en:'yellow'},
    {w:'noir', ipa:'/nwaʁ/', ko:'검정', en:'black'},
    {w:'blanc', ipa:'/blɑ̃/', ko:'하양', en:'white', ex:'un chat blanc', exKo:'하얀 고양이'},
    {w:'gris', ipa:'/ɡʁi/', ko:'회색', en:'grey'},
    {w:'orange', ipa:'/ɔ.ʁɑ̃ʒ/', ko:'주황', en:'orange'},
    {w:'rose', ipa:'/ʁoz/', ko:'분홍', en:'pink'},
    {w:'violet', ipa:'/vjɔ.lɛ/', ko:'보라', en:'purple'},
    {w:'marron', ipa:'/ma.ʁɔ̃/', ko:'갈색', en:'brown'},
  ]},

  /* ─────────── 신체 ─────────── */
  { level:2, title:'🧍 신체', sub:'le corps', words:[
    {w:'tête', ipa:'/tɛt/', ko:'머리', en:'head', gender:'f'},
    {w:'main', ipa:'/mɛ̃/', ko:'손', en:'hand', gender:'f', ex:'Lave-toi les mains.', exKo:'손을 씻어라.'},
    {w:'pied', ipa:'/pje/', ko:'발', en:'foot', gender:'m'},
    {w:'bras', ipa:'/bʁɑ/', ko:'팔', en:'arm', gender:'m'},
    {w:'jambe', ipa:'/ʒɑ̃b/', ko:'다리', en:'leg', gender:'f'},
    {w:'œil', ipa:'/œj/', ko:'눈', en:'eye', gender:'m', ex:'Il a les yeux bleus.', exKo:'그는 파란 눈을 가졌다.'},
    {w:'oreille', ipa:'/ɔ.ʁɛj/', ko:'귀', en:'ear', gender:'f'},
    {w:'nez', ipa:'/ne/', ko:'코', en:'nose', gender:'m'},
    {w:'bouche', ipa:'/buʃ/', ko:'입', en:'mouth', gender:'f'},
    {w:'dent', ipa:'/dɑ̃/', ko:'이, 치아', en:'tooth', gender:'f'},
    {w:'cœur', ipa:'/kœʁ/', ko:'심장, 마음', en:'heart', gender:'m'},
    {w:'cheveux', ipa:'/ʃə.vø/', ko:'머리카락', en:'hair', gender:'m'},
    {w:'doigt', ipa:'/dwa/', ko:'손가락', en:'finger', gender:'m'},
    {w:'ventre', ipa:'/vɑ̃tʁ/', ko:'배', en:'belly', gender:'m'},
    {w:'dos', ipa:'/do/', ko:'등', en:'back', gender:'m'},
  ]},

  /* ─────────── 집·가구 ─────────── */
  { level:3, title:'🏠 집·가구', sub:'la maison', words:[
    {w:'porte', ipa:'/pɔʁt/', ko:'문', en:'door', gender:'f', ex:'Ferme la porte.', exKo:'문을 닫아라.'},
    {w:'fenêtre', ipa:'/fə.nɛtʁ/', ko:'창문', en:'window', gender:'f'},
    {w:'chaise', ipa:'/ʃɛz/', ko:'의자', en:'chair', gender:'f'},
    {w:'lit', ipa:'/li/', ko:'침대', en:'bed', gender:'m', ex:'Je vais au lit.', exKo:'나는 자러 간다.'},
    {w:'mur', ipa:'/myʁ/', ko:'벽', en:'wall', gender:'m'},
    {w:'cuisine', ipa:'/kɥi.zin/', ko:'부엌', en:'kitchen', gender:'f'},
    {w:'chambre', ipa:'/ʃɑ̃bʁ/', ko:'방, 침실', en:'bedroom', gender:'f'},
    {w:'salle de bain', ipa:'/sal də bɛ̃/', ko:'욕실', en:'bathroom', gender:'f'},
    {w:'clé', ipa:'/kle/', ko:'열쇠', en:'key', gender:'f'},
    {w:'lampe', ipa:'/lɑ̃p/', ko:'램프, 등', en:'lamp', gender:'f'},
    {w:'jardin', ipa:'/ʒaʁ.dɛ̃/', ko:'정원', en:'garden', gender:'m'},
    {w:'escalier', ipa:'/ɛs.ka.lje/', ko:'계단', en:'stairs', gender:'m'},
    {w:'miroir', ipa:'/mi.ʁwaʁ/', ko:'거울', en:'mirror', gender:'m'},
  ]},

  /* ─────────── 옷 ─────────── */
  { level:4, title:'👕 옷', sub:'les vêtements', words:[
    {w:'vêtements', ipa:'/vɛt.mɑ̃/', ko:'옷 (총칭)', en:'clothes', gender:'m'},
    {w:'chemise', ipa:'/ʃə.miz/', ko:'셔츠', en:'shirt', gender:'f'},
    {w:'pantalon', ipa:'/pɑ̃.ta.lɔ̃/', ko:'바지', en:'trousers', gender:'m'},
    {w:'robe', ipa:'/ʁɔb/', ko:'원피스, 드레스', en:'dress', gender:'f'},
    {w:'chaussures', ipa:'/ʃo.syʁ/', ko:'신발', en:'shoes', gender:'f'},
    {w:'manteau', ipa:'/mɑ̃.to/', ko:'코트', en:'coat', gender:'m'},
    {w:'chapeau', ipa:'/ʃa.po/', ko:'모자', en:'hat', gender:'m'},
    {w:'jupe', ipa:'/ʒyp/', ko:'치마', en:'skirt', gender:'f'},
    {w:'chaussettes', ipa:'/ʃo.sɛt/', ko:'양말', en:'socks', gender:'f'},
    {w:'veste', ipa:'/vɛst/', ko:'재킷', en:'jacket', gender:'f'},
    {w:'lunettes', ipa:'/ly.nɛt/', ko:'안경', en:'glasses', gender:'f'},
  ]},

  /* ─────────── 직업 ─────────── */
  { level:5, title:'💼 직업', sub:'les métiers', words:[
    {w:'médecin', ipa:'/med.sɛ̃/', ko:'의사', en:'doctor', gender:'m', ex:'Ma sœur est médecin.', exKo:'우리 언니는 의사다.'},
    {w:'professeur', ipa:'/pʁɔ.fɛ.sœʁ/', ko:'교사, 교수', en:'teacher', gender:'m'},
    {w:'avocat', ipa:'/a.vɔ.ka/', ko:'변호사', en:'lawyer', gender:'m'},
    {w:'ingénieur', ipa:'/ɛ̃.ʒe.njœʁ/', ko:'엔지니어', en:'engineer', gender:'m'},
    {w:'cuisinier', ipa:'/kɥi.zi.nje/', ko:'요리사', en:'cook', gender:'m'},
    {w:'policier', ipa:'/pɔ.li.sje/', ko:'경찰관', en:'police officer', gender:'m'},
    {w:'infirmier', ipa:'/ɛ̃.fiʁ.mje/', ko:'간호사', en:'nurse', gender:'m'},
    {w:'boulanger', ipa:'/bu.lɑ̃.ʒe/', ko:'제빵사', en:'baker', gender:'m'},
    {w:'artiste', ipa:'/aʁ.tist/', ko:'예술가', en:'artist', gender:'mf'},
    {w:'vendeur', ipa:'/vɑ̃.dœʁ/', ko:'판매원', en:'salesperson', gender:'m'},
    {w:'agriculteur', ipa:'/a.ɡʁi.kyl.tœʁ/', ko:'농부', en:'farmer', gender:'m'},
  ]},

  /* ─────────── 자연·동물 ─────────── */
  { level:6, title:'🌳 자연·동물', sub:'la nature et les animaux', words:[
    {w:'arbre', ipa:'/aʁbʁ/', ko:'나무', en:'tree', gender:'m'},
    {w:'fleur', ipa:'/flœʁ/', ko:'꽃', en:'flower', gender:'f', ex:'une belle fleur', exKo:'예쁜 꽃'},
    {w:'montagne', ipa:'/mɔ̃.taɲ/', ko:'산', en:'mountain', gender:'f'},
    {w:'rivière', ipa:'/ʁi.vjɛʁ/', ko:'강', en:'river', gender:'f'},
    {w:'mer', ipa:'/mɛʁ/', ko:'바다', en:'sea', gender:'f', ex:'Nous allons à la mer.', exKo:'우리는 바다에 간다.'},
    {w:'ciel', ipa:'/sjɛl/', ko:'하늘', en:'sky', gender:'m'},
    {w:'étoile', ipa:'/e.twal/', ko:'별', en:'star', gender:'f'},
    {w:'lune', ipa:'/lyn/', ko:'달', en:'moon', gender:'f'},
    {w:'oiseau', ipa:'/wa.zo/', ko:'새', en:'bird', gender:'m'},
    {w:'cheval', ipa:'/ʃə.val/', ko:'말', en:'horse', gender:'m'},
    {w:'vache', ipa:'/vaʃ/', ko:'소', en:'cow', gender:'f'},
    {w:'mouton', ipa:'/mu.tɔ̃/', ko:'양', en:'sheep', gender:'m'},
    {w:'lapin', ipa:'/la.pɛ̃/', ko:'토끼', en:'rabbit', gender:'m'},
    {w:'ours', ipa:'/uʁs/', ko:'곰', en:'bear', gender:'m'},
    {w:'papillon', ipa:'/pa.pi.jɔ̃/', ko:'나비', en:'butterfly', gender:'m'},
  ]},

  /* ─────────── 도시·이동 ─────────── */
  { level:7, title:'🏙️ 도시·이동', sub:'la ville et les transports', words:[
    {w:'ville', ipa:'/vil/', ko:'도시', en:'city', gender:'f'},
    {w:'rue', ipa:'/ʁy/', ko:'거리', en:'street', gender:'f'},
    {w:'voiture', ipa:'/vwa.tyʁ/', ko:'자동차', en:'car', gender:'f', ex:'Je vais en voiture.', exKo:'나는 차로 간다.'},
    {w:'train', ipa:'/tʁɛ̃/', ko:'기차', en:'train', gender:'m', ex:'Je prends le train.', exKo:'나는 기차를 탄다.'},
    {w:'avion', ipa:'/a.vjɔ̃/', ko:'비행기', en:'plane', gender:'m'},
    {w:'bus', ipa:'/bys/', ko:'버스', en:'bus', gender:'m'},
    {w:'vélo', ipa:'/ve.lo/', ko:'자전거', en:'bicycle', gender:'m'},
    {w:'gare', ipa:'/ɡaʁ/', ko:'(기차)역', en:'station', gender:'f'},
    {w:'aéroport', ipa:'/a.e.ʁɔ.pɔʁ/', ko:'공항', en:'airport', gender:'m'},
    {w:'hôtel', ipa:'/o.tɛl/', ko:'호텔', en:'hotel', gender:'m'},
    {w:'banque', ipa:'/bɑ̃k/', ko:'은행', en:'bank', gender:'f'},
    {w:'magasin', ipa:'/ma.ɡa.zɛ̃/', ko:'상점', en:'shop', gender:'m'},
    {w:'marché', ipa:'/maʁ.ʃe/', ko:'시장', en:'market', gender:'m'},
    {w:'pont', ipa:'/pɔ̃/', ko:'다리(교량)', en:'bridge', gender:'m'},
    {w:'église', ipa:'/e.ɡliz/', ko:'교회', en:'church', gender:'f'},
  ]},

  /* ─────────── 자주 쓰는 형용사 ─────────── */
  { level:8, title:'✨ 자주 쓰는 형용사', sub:'adjectifs courants', words:[
    {w:'beau', ipa:'/bo/', ko:'아름다운, 잘생긴', en:'beautiful', ex:'un beau paysage', exKo:'아름다운 풍경'},
    {w:'jeune', ipa:'/ʒœn/', ko:'젊은', en:'young'},
    {w:'vieux', ipa:'/vjø/', ko:'늙은, 오래된', en:'old'},
    {w:'nouveau', ipa:'/nu.vo/', ko:'새로운', en:'new'},
    {w:'facile', ipa:'/fa.sil/', ko:'쉬운', en:'easy'},
    {w:'difficile', ipa:'/di.fi.sil/', ko:'어려운', en:'difficult'},
    {w:'cher', ipa:'/ʃɛʁ/', ko:'비싼, 소중한', en:'expensive, dear'},
    {w:'chaud', ipa:'/ʃo/', ko:'뜨거운, 더운', en:'hot'},
    {w:'froid', ipa:'/fʁwa/', ko:'차가운, 추운', en:'cold'},
    {w:'heureux', ipa:'/ø.ʁø/', ko:'행복한', en:'happy'},
    {w:'triste', ipa:'/tʁist/', ko:'슬픈', en:'sad'},
    {w:'fatigué', ipa:'/fa.ti.ɡe/', ko:'피곤한', en:'tired'},
    {w:'fort', ipa:'/fɔʁ/', ko:'강한, 센', en:'strong'},
    {w:'content', ipa:'/kɔ̃.tɑ̃/', ko:'만족한, 기쁜', en:'glad'},
    {w:'important', ipa:'/ɛ̃.pɔʁ.tɑ̃/', ko:'중요한', en:'important'},
  ]},

  /* ─────────── 자주 쓰는 동사 ─────────── */
  { level:9, title:'🏃 자주 쓰는 동사', sub:'verbes courants', words:[
    {w:'parler', ipa:'/paʁ.le/', ko:'말하다', en:'to speak', ex:'Je parle français.', exKo:'나는 프랑스어를 한다.'},
    {w:'écouter', ipa:'/e.ku.te/', ko:'듣다', en:'to listen', ex:'J’écoute de la musique.', exKo:'나는 음악을 듣는다.'},
    {w:'regarder', ipa:'/ʁə.ɡaʁ.de/', ko:'보다, 바라보다', en:'to watch', ex:'Je regarde un film.', exKo:'나는 영화를 본다.'},
    {w:'lire', ipa:'/liʁ/', ko:'읽다', en:'to read', ex:'Elle lit un livre.', exKo:'그녀는 책을 읽는다.'},
    {w:'écrire', ipa:'/e.kʁiʁ/', ko:'쓰다', en:'to write'},
    {w:'ouvrir', ipa:'/u.vʁiʁ/', ko:'열다', en:'to open'},
    {w:'fermer', ipa:'/fɛʁ.me/', ko:'닫다', en:'to close'},
    {w:'acheter', ipa:'/aʃ.te/', ko:'사다', en:'to buy', ex:'J’achète du pain.', exKo:'나는 빵을 산다.'},
    {w:'vendre', ipa:'/vɑ̃dʁ/', ko:'팔다', en:'to sell'},
    {w:'donner', ipa:'/dɔ.ne/', ko:'주다', en:'to give'},
    {w:'venir', ipa:'/və.niʁ/', ko:'오다', en:'to come', ex:'Il vient demain.', exKo:'그는 내일 온다.'},
    {w:'partir', ipa:'/paʁ.tiʁ/', ko:'떠나다', en:'to leave'},
    {w:'chercher', ipa:'/ʃɛʁ.ʃe/', ko:'찾다', en:'to look for'},
    {w:'trouver', ipa:'/tʁu.ve/', ko:'발견하다', en:'to find'},
    {w:'attendre', ipa:'/a.tɑ̃dʁ/', ko:'기다리다', en:'to wait', ex:'J’attends le bus.', exKo:'나는 버스를 기다린다.'},
    {w:'apprendre', ipa:'/a.pʁɑ̃dʁ/', ko:'배우다', en:'to learn'},
    {w:'comprendre', ipa:'/kɔ̃.pʁɑ̃dʁ/', ko:'이해하다', en:'to understand'},
    {w:'aimer', ipa:'/e.me/', ko:'좋아하다, 사랑하다', en:'to like, to love'},
    {w:'commencer', ipa:'/kɔ.mɑ̃.se/', ko:'시작하다', en:'to begin'},
    {w:'finir', ipa:'/fi.niʁ/', ko:'끝내다', en:'to finish'},
    {w:'aider', ipa:'/e.de/', ko:'돕다', en:'to help'},
    {w:'payer', ipa:'/pe.je/', ko:'지불하다', en:'to pay'},
    {w:'courir', ipa:'/ku.ʁiʁ/', ko:'달리다', en:'to run'},
    {w:'chanter', ipa:'/ʃɑ̃.te/', ko:'노래하다', en:'to sing'},
    {w:'voyager', ipa:'/vwa.ja.ʒe/', ko:'여행하다', en:'to travel'},
  ]},

  /* ─────────── 시간·부사 ─────────── */
  { level:10, title:'⏰ 시간·부사', sub:'temps et adverbes', words:[
    {w:'maintenant', ipa:'/mɛ̃t.nɑ̃/', ko:'지금', en:'now'},
    {w:'toujours', ipa:'/tu.ʒuʁ/', ko:'항상', en:'always'},
    {w:'souvent', ipa:'/su.vɑ̃/', ko:'자주', en:'often'},
    {w:'parfois', ipa:'/paʁ.fwa/', ko:'가끔', en:'sometimes'},
    {w:'tôt', ipa:'/to/', ko:'일찍', en:'early'},
    {w:'tard', ipa:'/taʁ/', ko:'늦게', en:'late'},
    {w:'vite', ipa:'/vit/', ko:'빨리', en:'quickly'},
    {w:'ici', ipa:'/i.si/', ko:'여기', en:'here'},
    {w:'là', ipa:'/la/', ko:'거기, 저기', en:'there'},
    {w:'ensemble', ipa:'/ɑ̃.sɑ̃bl/', ko:'함께', en:'together'},
    {w:'beaucoup', ipa:'/bo.ku/', ko:'많이', en:'a lot'},
    {w:'un peu', ipa:'/œ̃ pø/', ko:'조금', en:'a little'},
    {w:'très', ipa:'/tʁɛ/', ko:'매우', en:'very'},
    {w:'bien', ipa:'/bjɛ̃/', ko:'잘', en:'well'},
    {w:'mal', ipa:'/mal/', ko:'나쁘게, 잘못', en:'badly'},
  ]},

  ]
});
