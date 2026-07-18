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
  target: 'fr',
  extra: true,         // 같은 target 안의 확장 콘텐츠 — 카드 ▾ 로 접근
  name: '프랑스어 확장',
  nativeName: 'Français +',
  flag: '🇫🇷',
  tts: 'fr-FR',
  menuLabel: '확장 어휘',
  dictionary: true,
  desc: '프랑스어 확장 어휘 사전',
  specialChars: [],
  levels: [

  /* ─────────── 색깔 ─────────── */
  { level:1, title:'🎨 색깔', sub:'les couleurs', words:[
    {w:'rouge', ipa:'/ʁuʒ/', m:{kr:'빨강', en:'red'}, ex:'une pomme rouge', exm:{kr:'빨간 사과'}},
    {w:'bleu', ipa:'/blø/', m:{kr:'파랑', en:'blue'}, ex:'Le ciel est bleu.', exm:{kr:'하늘이 파랗다.'}},
    {w:'vert', ipa:'/vɛʁ/', m:{kr:'초록', en:'green'}, ex:'un arbre vert', exm:{kr:'초록 나무'}},
    {w:'jaune', ipa:'/ʒon/', m:{kr:'노랑', en:'yellow'}},
    {w:'noir', ipa:'/nwaʁ/', m:{kr:'검정', en:'black'}},
    {w:'blanc', ipa:'/blɑ̃/', m:{kr:'하양', en:'white'}, ex:'un chat blanc', exm:{kr:'하얀 고양이'}},
    {w:'gris', ipa:'/ɡʁi/', m:{kr:'회색', en:'grey'}},
    {w:'orange', ipa:'/ɔ.ʁɑ̃ʒ/', m:{kr:'주황', en:'orange'}},
    {w:'rose', ipa:'/ʁoz/', m:{kr:'분홍', en:'pink'}},
    {w:'violet', ipa:'/vjɔ.lɛ/', m:{kr:'보라', en:'purple'}},
    {w:'marron', ipa:'/ma.ʁɔ̃/', m:{kr:'갈색', en:'brown'}},
  ]},

  /* ─────────── 신체 ─────────── */
  { level:2, title:'🧍 신체', sub:'le corps', words:[
    {w:'tête', ipa:'/tɛt/', m:{kr:'머리', en:'head'}, gender:'f'},
    {w:'main', ipa:'/mɛ̃/', m:{kr:'손', en:'hand'}, gender:'f', ex:'Lave-toi les mains.', exm:{kr:'손을 씻어라.'}},
    {w:'pied', ipa:'/pje/', m:{kr:'발', en:'foot'}, gender:'m'},
    {w:'bras', ipa:'/bʁɑ/', m:{kr:'팔', en:'arm'}, gender:'m'},
    {w:'jambe', ipa:'/ʒɑ̃b/', m:{kr:'다리', en:'leg'}, gender:'f'},
    {w:'œil', ipa:'/œj/', m:{kr:'눈', en:'eye'}, gender:'m', ex:'Il a les yeux bleus.', exm:{kr:'그는 파란 눈을 가졌다.'}},
    {w:'oreille', ipa:'/ɔ.ʁɛj/', m:{kr:'귀', en:'ear'}, gender:'f'},
    {w:'nez', ipa:'/ne/', m:{kr:'코', en:'nose'}, gender:'m'},
    {w:'bouche', ipa:'/buʃ/', m:{kr:'입', en:'mouth'}, gender:'f'},
    {w:'dent', ipa:'/dɑ̃/', m:{kr:'이, 치아', en:'tooth'}, gender:'f'},
    {w:'cœur', ipa:'/kœʁ/', m:{kr:'심장, 마음', en:'heart'}, gender:'m'},
    {w:'cheveux', ipa:'/ʃə.vø/', m:{kr:'머리카락', en:'hair'}, gender:'m'},
    {w:'doigt', ipa:'/dwa/', m:{kr:'손가락', en:'finger'}, gender:'m'},
    {w:'ventre', ipa:'/vɑ̃tʁ/', m:{kr:'배', en:'belly'}, gender:'m'},
    {w:'dos', ipa:'/do/', m:{kr:'등', en:'back'}, gender:'m'},
  ]},

  /* ─────────── 집·가구 ─────────── */
  { level:3, title:'🏠 집·가구', sub:'la maison', words:[
    {w:'porte', ipa:'/pɔʁt/', m:{kr:'문', en:'door'}, gender:'f', ex:'Ferme la porte.', exm:{kr:'문을 닫아라.'}},
    {w:'fenêtre', ipa:'/fə.nɛtʁ/', m:{kr:'창문', en:'window'}, gender:'f'},
    {w:'chaise', ipa:'/ʃɛz/', m:{kr:'의자', en:'chair'}, gender:'f'},
    {w:'lit', ipa:'/li/', m:{kr:'침대', en:'bed'}, gender:'m', ex:'Je vais au lit.', exm:{kr:'나는 자러 간다.'}},
    {w:'mur', ipa:'/myʁ/', m:{kr:'벽', en:'wall'}, gender:'m'},
    {w:'cuisine', ipa:'/kɥi.zin/', m:{kr:'부엌', en:'kitchen'}, gender:'f'},
    {w:'chambre', ipa:'/ʃɑ̃bʁ/', m:{kr:'방, 침실', en:'bedroom'}, gender:'f'},
    {w:'salle de bain', ipa:'/sal də bɛ̃/', m:{kr:'욕실', en:'bathroom'}, gender:'f'},
    {w:'clé', ipa:'/kle/', m:{kr:'열쇠', en:'key'}, gender:'f'},
    {w:'lampe', ipa:'/lɑ̃p/', m:{kr:'램프, 등', en:'lamp'}, gender:'f'},
    {w:'jardin', ipa:'/ʒaʁ.dɛ̃/', m:{kr:'정원', en:'garden'}, gender:'m'},
    {w:'escalier', ipa:'/ɛs.ka.lje/', m:{kr:'계단', en:'stairs'}, gender:'m'},
    {w:'miroir', ipa:'/mi.ʁwaʁ/', m:{kr:'거울', en:'mirror'}, gender:'m'},
  ]},

  /* ─────────── 옷 ─────────── */
  { level:4, title:'👕 옷', sub:'les vêtements', words:[
    {w:'vêtements', ipa:'/vɛt.mɑ̃/', m:{kr:'옷 (총칭)', en:'clothes'}, gender:'m'},
    {w:'chemise', ipa:'/ʃə.miz/', m:{kr:'셔츠', en:'shirt'}, gender:'f'},
    {w:'pantalon', ipa:'/pɑ̃.ta.lɔ̃/', m:{kr:'바지', en:'trousers'}, gender:'m'},
    {w:'robe', ipa:'/ʁɔb/', m:{kr:'원피스, 드레스', en:'dress'}, gender:'f'},
    {w:'chaussures', ipa:'/ʃo.syʁ/', m:{kr:'신발', en:'shoes'}, gender:'f'},
    {w:'manteau', ipa:'/mɑ̃.to/', m:{kr:'코트', en:'coat'}, gender:'m'},
    {w:'chapeau', ipa:'/ʃa.po/', m:{kr:'모자', en:'hat'}, gender:'m'},
    {w:'jupe', ipa:'/ʒyp/', m:{kr:'치마', en:'skirt'}, gender:'f'},
    {w:'chaussettes', ipa:'/ʃo.sɛt/', m:{kr:'양말', en:'socks'}, gender:'f'},
    {w:'veste', ipa:'/vɛst/', m:{kr:'재킷', en:'jacket'}, gender:'f'},
    {w:'lunettes', ipa:'/ly.nɛt/', m:{kr:'안경', en:'glasses'}, gender:'f'},
  ]},

  /* ─────────── 직업 ─────────── */
  { level:5, title:'💼 직업', sub:'les métiers', words:[
    {w:'médecin', ipa:'/med.sɛ̃/', m:{kr:'의사', en:'doctor'}, gender:'m', ex:'Ma sœur est médecin.', exm:{kr:'우리 언니는 의사다.'}},
    {w:'professeur', ipa:'/pʁɔ.fɛ.sœʁ/', m:{kr:'교사, 교수', en:'teacher'}, gender:'m'},
    {w:'avocat', ipa:'/a.vɔ.ka/', m:{kr:'변호사', en:'lawyer'}, gender:'m'},
    {w:'ingénieur', ipa:'/ɛ̃.ʒe.njœʁ/', m:{kr:'엔지니어', en:'engineer'}, gender:'m'},
    {w:'cuisinier', ipa:'/kɥi.zi.nje/', m:{kr:'요리사', en:'cook'}, gender:'m'},
    {w:'policier', ipa:'/pɔ.li.sje/', m:{kr:'경찰관', en:'police officer'}, gender:'m'},
    {w:'infirmier', ipa:'/ɛ̃.fiʁ.mje/', m:{kr:'간호사', en:'nurse'}, gender:'m'},
    {w:'boulanger', ipa:'/bu.lɑ̃.ʒe/', m:{kr:'제빵사', en:'baker'}, gender:'m'},
    {w:'artiste', ipa:'/aʁ.tist/', m:{kr:'예술가', en:'artist'}, gender:'mf'},
    {w:'vendeur', ipa:'/vɑ̃.dœʁ/', m:{kr:'판매원', en:'salesperson'}, gender:'m'},
    {w:'agriculteur', ipa:'/a.ɡʁi.kyl.tœʁ/', m:{kr:'농부', en:'farmer'}, gender:'m'},
  ]},

  /* ─────────── 자연·동물 ─────────── */
  { level:6, title:'🌳 자연·동물', sub:'la nature et les animaux', words:[
    {w:'arbre', ipa:'/aʁbʁ/', m:{kr:'나무', en:'tree'}, gender:'m'},
    {w:'fleur', ipa:'/flœʁ/', m:{kr:'꽃', en:'flower'}, gender:'f', ex:'une belle fleur', exm:{kr:'예쁜 꽃'}},
    {w:'montagne', ipa:'/mɔ̃.taɲ/', m:{kr:'산', en:'mountain'}, gender:'f'},
    {w:'rivière', ipa:'/ʁi.vjɛʁ/', m:{kr:'강', en:'river'}, gender:'f'},
    {w:'mer', ipa:'/mɛʁ/', m:{kr:'바다', en:'sea'}, gender:'f', ex:'Nous allons à la mer.', exm:{kr:'우리는 바다에 간다.'}},
    {w:'ciel', ipa:'/sjɛl/', m:{kr:'하늘', en:'sky'}, gender:'m'},
    {w:'étoile', ipa:'/e.twal/', m:{kr:'별', en:'star'}, gender:'f'},
    {w:'lune', ipa:'/lyn/', m:{kr:'달', en:'moon'}, gender:'f'},
    {w:'oiseau', ipa:'/wa.zo/', m:{kr:'새', en:'bird'}, gender:'m'},
    {w:'cheval', ipa:'/ʃə.val/', m:{kr:'말', en:'horse'}, gender:'m'},
    {w:'vache', ipa:'/vaʃ/', m:{kr:'소', en:'cow'}, gender:'f'},
    {w:'mouton', ipa:'/mu.tɔ̃/', m:{kr:'양', en:'sheep'}, gender:'m'},
    {w:'lapin', ipa:'/la.pɛ̃/', m:{kr:'토끼', en:'rabbit'}, gender:'m'},
    {w:'ours', ipa:'/uʁs/', m:{kr:'곰', en:'bear'}, gender:'m'},
    {w:'papillon', ipa:'/pa.pi.jɔ̃/', m:{kr:'나비', en:'butterfly'}, gender:'m'},
  ]},

  /* ─────────── 도시·이동 ─────────── */
  { level:7, title:'🏙️ 도시·이동', sub:'la ville et les transports', words:[
    {w:'ville', ipa:'/vil/', m:{kr:'도시', en:'city'}, gender:'f'},
    {w:'rue', ipa:'/ʁy/', m:{kr:'거리', en:'street'}, gender:'f'},
    {w:'voiture', ipa:'/vwa.tyʁ/', m:{kr:'자동차', en:'car'}, gender:'f', ex:'Je vais en voiture.', exm:{kr:'나는 차로 간다.'}},
    {w:'train', ipa:'/tʁɛ̃/', m:{kr:'기차', en:'train'}, gender:'m', ex:'Je prends le train.', exm:{kr:'나는 기차를 탄다.'}},
    {w:'avion', ipa:'/a.vjɔ̃/', m:{kr:'비행기', en:'plane'}, gender:'m'},
    {w:'bus', ipa:'/bys/', m:{kr:'버스', en:'bus'}, gender:'m'},
    {w:'vélo', ipa:'/ve.lo/', m:{kr:'자전거', en:'bicycle'}, gender:'m'},
    {w:'gare', ipa:'/ɡaʁ/', m:{kr:'(기차)역', en:'station'}, gender:'f'},
    {w:'aéroport', ipa:'/a.e.ʁɔ.pɔʁ/', m:{kr:'공항', en:'airport'}, gender:'m'},
    {w:'hôtel', ipa:'/o.tɛl/', m:{kr:'호텔', en:'hotel'}, gender:'m'},
    {w:'banque', ipa:'/bɑ̃k/', m:{kr:'은행', en:'bank'}, gender:'f'},
    {w:'magasin', ipa:'/ma.ɡa.zɛ̃/', m:{kr:'상점', en:'shop'}, gender:'m'},
    {w:'marché', ipa:'/maʁ.ʃe/', m:{kr:'시장', en:'market'}, gender:'m'},
    {w:'pont', ipa:'/pɔ̃/', m:{kr:'다리(교량)', en:'bridge'}, gender:'m'},
    {w:'église', ipa:'/e.ɡliz/', m:{kr:'교회', en:'church'}, gender:'f'},
  ]},

  /* ─────────── 자주 쓰는 형용사 ─────────── */
  { level:8, title:'✨ 자주 쓰는 형용사', sub:'adjectifs courants', words:[
    {w:'beau', ipa:'/bo/', m:{kr:'아름다운, 잘생긴', en:'beautiful'}, ex:'un beau paysage', exm:{kr:'아름다운 풍경'}},
    {w:'jeune', ipa:'/ʒœn/', m:{kr:'젊은', en:'young'}},
    {w:'vieux', ipa:'/vjø/', m:{kr:'늙은, 오래된', en:'old'}},
    {w:'nouveau', ipa:'/nu.vo/', m:{kr:'새로운', en:'new'}},
    {w:'facile', ipa:'/fa.sil/', m:{kr:'쉬운', en:'easy'}},
    {w:'difficile', ipa:'/di.fi.sil/', m:{kr:'어려운', en:'difficult'}},
    {w:'cher', ipa:'/ʃɛʁ/', m:{kr:'비싼, 소중한', en:'expensive, dear'}},
    {w:'chaud', ipa:'/ʃo/', m:{kr:'뜨거운, 더운', en:'hot'}},
    {w:'froid', ipa:'/fʁwa/', m:{kr:'차가운, 추운', en:'cold'}},
    {w:'heureux', ipa:'/ø.ʁø/', m:{kr:'행복한', en:'happy'}},
    {w:'triste', ipa:'/tʁist/', m:{kr:'슬픈', en:'sad'}},
    {w:'fatigué', ipa:'/fa.ti.ɡe/', m:{kr:'피곤한', en:'tired'}},
    {w:'fort', ipa:'/fɔʁ/', m:{kr:'강한, 센', en:'strong'}},
    {w:'content', ipa:'/kɔ̃.tɑ̃/', m:{kr:'만족한, 기쁜', en:'glad'}},
    {w:'important', ipa:'/ɛ̃.pɔʁ.tɑ̃/', m:{kr:'중요한', en:'important'}},
  ]},

  /* ─────────── 자주 쓰는 동사 ─────────── */
  { level:9, title:'🏃 자주 쓰는 동사', sub:'verbes courants', words:[
    {w:'parler', ipa:'/paʁ.le/', m:{kr:'말하다', en:'to speak'}, ex:'Je parle français.', exm:{kr:'나는 프랑스어를 한다.'}},
    {w:'écouter', ipa:'/e.ku.te/', m:{kr:'듣다', en:'to listen'}, ex:'J’écoute de la musique.', exm:{kr:'나는 음악을 듣는다.'}},
    {w:'regarder', ipa:'/ʁə.ɡaʁ.de/', m:{kr:'보다, 바라보다', en:'to watch'}, ex:'Je regarde un film.', exm:{kr:'나는 영화를 본다.'}},
    {w:'lire', ipa:'/liʁ/', m:{kr:'읽다', en:'to read'}, ex:'Elle lit un livre.', exm:{kr:'그녀는 책을 읽는다.'}},
    {w:'écrire', ipa:'/e.kʁiʁ/', m:{kr:'쓰다', en:'to write'}},
    {w:'ouvrir', ipa:'/u.vʁiʁ/', m:{kr:'열다', en:'to open'}},
    {w:'fermer', ipa:'/fɛʁ.me/', m:{kr:'닫다', en:'to close'}},
    {w:'acheter', ipa:'/aʃ.te/', m:{kr:'사다', en:'to buy'}, ex:'J’achète du pain.', exm:{kr:'나는 빵을 산다.'}},
    {w:'vendre', ipa:'/vɑ̃dʁ/', m:{kr:'팔다', en:'to sell'}},
    {w:'donner', ipa:'/dɔ.ne/', m:{kr:'주다', en:'to give'}},
    {w:'venir', ipa:'/və.niʁ/', m:{kr:'오다', en:'to come'}, ex:'Il vient demain.', exm:{kr:'그는 내일 온다.'}},
    {w:'partir', ipa:'/paʁ.tiʁ/', m:{kr:'떠나다', en:'to leave'}},
    {w:'chercher', ipa:'/ʃɛʁ.ʃe/', m:{kr:'찾다', en:'to look for'}},
    {w:'trouver', ipa:'/tʁu.ve/', m:{kr:'발견하다', en:'to find'}},
    {w:'attendre', ipa:'/a.tɑ̃dʁ/', m:{kr:'기다리다', en:'to wait'}, ex:'J’attends le bus.', exm:{kr:'나는 버스를 기다린다.'}},
    {w:'apprendre', ipa:'/a.pʁɑ̃dʁ/', m:{kr:'배우다', en:'to learn'}},
    {w:'comprendre', ipa:'/kɔ̃.pʁɑ̃dʁ/', m:{kr:'이해하다', en:'to understand'}},
    {w:'aimer', ipa:'/e.me/', m:{kr:'좋아하다, 사랑하다', en:'to like, to love'}},
    {w:'commencer', ipa:'/kɔ.mɑ̃.se/', m:{kr:'시작하다', en:'to begin'}},
    {w:'finir', ipa:'/fi.niʁ/', m:{kr:'끝내다', en:'to finish'}},
    {w:'aider', ipa:'/e.de/', m:{kr:'돕다', en:'to help'}},
    {w:'payer', ipa:'/pe.je/', m:{kr:'지불하다', en:'to pay'}},
    {w:'courir', ipa:'/ku.ʁiʁ/', m:{kr:'달리다', en:'to run'}},
    {w:'chanter', ipa:'/ʃɑ̃.te/', m:{kr:'노래하다', en:'to sing'}},
    {w:'voyager', ipa:'/vwa.ja.ʒe/', m:{kr:'여행하다', en:'to travel'}},
  ]},

  /* ─────────── 시간·부사 ─────────── */
  { level:10, title:'⏰ 시간·부사', sub:'temps et adverbes', words:[
    {w:'maintenant', ipa:'/mɛ̃t.nɑ̃/', m:{kr:'지금', en:'now'}},
    {w:'toujours', ipa:'/tu.ʒuʁ/', m:{kr:'항상', en:'always'}},
    {w:'souvent', ipa:'/su.vɑ̃/', m:{kr:'자주', en:'often'}},
    {w:'parfois', ipa:'/paʁ.fwa/', m:{kr:'가끔', en:'sometimes'}},
    {w:'tôt', ipa:'/to/', m:{kr:'일찍', en:'early'}},
    {w:'tard', ipa:'/taʁ/', m:{kr:'늦게', en:'late'}},
    {w:'vite', ipa:'/vit/', m:{kr:'빨리', en:'quickly'}},
    {w:'ici', ipa:'/i.si/', m:{kr:'여기', en:'here'}},
    {w:'là', ipa:'/la/', m:{kr:'거기, 저기', en:'there'}},
    {w:'ensemble', ipa:'/ɑ̃.sɑ̃bl/', m:{kr:'함께', en:'together'}},
    {w:'beaucoup', ipa:'/bo.ku/', m:{kr:'많이', en:'a lot'}},
    {w:'un peu', ipa:'/œ̃ pø/', m:{kr:'조금', en:'a little'}},
    {w:'très', ipa:'/tʁɛ/', m:{kr:'매우', en:'very'}},
    {w:'bien', ipa:'/bjɛ̃/', m:{kr:'잘', en:'well'}},
    {w:'mal', ipa:'/mal/', m:{kr:'나쁘게, 잘못', en:'badly'}},
  ]},

  ]
});
