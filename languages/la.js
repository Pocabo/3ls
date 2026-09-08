/* =====================================================================
   🏛 라틴어 (Latin) 본과정 — 3Ls
   ---------------------------------------------------------------
   고전 라틴어. 발음은 복원 고전식(Classical / restored pronunciation).

   ◆ 발음 재생 방식
     브라우저에 'la' 음성이 없으므로, 표기와 별개로 say 필드에
     이탈리아어 음성이 고전식에 가깝게 읽어줄 철자를 담는다.
       c → k (항상)   v → w (=/w/)   ae → ai   oe → oi
       ph th ch → p t k   y → i   qu·ll·tt·pp 는 그대로 둔다
     이탈리아어를 쓰는 이유(실제로 들어보고 고름):
       · 이중자음이 살아 있다 — mittō·oppidum 의 tt·pp 가 라틴어처럼 끊긴다
       · ll 이 /l.l/ 로 읽힌다 (스페인어는 /ʎ/ 라 puella 가 "푸에야"가 된다)
       · qu 를 /kw/ 로 그대로 읽는다 (questo)
       · w 를 외래어식 /w/ 로 읽어 v 를 재현할 수 있다 (whisky)
     ⚠️ ae/oe 치환은 마크론 제거보다 먼저 해야 한다.
        poēta 는 po-ē-ta 이지 oe 이중모음이 아니다.

   ◆ 마크론(ā ē ī ō ū)
     교재용 장음 표시. 화면에는 남기되 채점에서는 무시한다(ignoreDiacritics).
     실제 로마 비문·사본에는 없는 기호다.

   ◆ 열 구성
     ipa 자리에 "주요부(principal parts)"를 넣는다. 라틴어는 표제어 하나로
     단어가 결정되지 않는다 — 명사는 属格과 성, 동사는 네 부분이 필요하다.
   ===================================================================== */
registerLanguagePack({
  id: 'la',
  target: 'la',
  name: '라틴어',
  names: { kr:'라틴어', en:'Latin' },
  nativeName: 'Lingua Latina',
  flag: '🏛',
  tts: 'it-IT',                 // 고전식 근사용 (say 필드와 함께 동작)
  ignoreDiacritics: true,       // 마크론은 채점에서 무시
  specialChars: ['ā','ē','ī','ō','ū','ȳ','Ā','Ē','Ī','Ō','Ū'],
  desc: '고전 라틴어 — 문법 16단계 과정',
  columnLabels: { ipa:'주요부' },
  phaseLabels: {
    intro: '기초 · 소리와 격',
    noun:  '명사 체계',
    verb:  '동사 체계',
    synt:  '구문',
    high:  '접속법과 종속절',
  },
  levels: [

  /* ─────────────── LEVEL 1 ─────────────── */
  {
    level: 1, cefr: '발음·격', phase: 'intro',
    title: '소리와 여섯 격',
    desc: '고전식 발음 규칙과 장음, 그리고 라틴어의 뼈대인 6격 체계를 잡습니다. 라틴어는 어순이 아니라 어미가 문장 안의 역할을 정합니다.',
    words: [
      {w:'Rōma', say:'Roma', ipa:'Rōma, Rōmae (f.)', m:{kr:'로마'}, pos:'명사', ex:'Rōma in Ītaliā est.', exSay:'Roma in Italia est.', exm:{kr:'로마는 이탈리아에 있다.'}},
      {w:'aqua', say:'aqua', ipa:'aqua, aquae (f.)', m:{kr:'물'}, pos:'명사', ex:'Aqua bona est.', exSay:'Aqua bona est.', exm:{kr:'물이 좋다.'}, tip:{kr:'qu는 /kw/로 한 덩어리. 이탈리아어가 questo를 /kwesto/로 읽어 그대로 쓸 수 있습니다.'}},
      {w:'via', say:'wia', ipa:'via, viae (f.)', m:{kr:'길, 도로'}, pos:'명사', ex:'Via longa est.', exSay:'Wia longa est.', exm:{kr:'길이 길다.'}, tip:{kr:'v는 고전식에서 /w/. 로마인은 U와 V를 구분해 쓰지 않았습니다.'}},
      {w:'Caesar', say:'Kaisar', ipa:'Caesar, Caesaris (m.)', m:{kr:'카이사르'}, pos:'명사', ex:'Caesar vēnit.', exSay:'Kaisar wenit.', exm:{kr:'카이사르가 왔다.'}, tip:{kr:'ae는 /ai/. 그래서 "카이사르"이지 "시저"가 아닙니다 — 영어식 발음은 후대의 변화입니다.'}},
      {w:'Cicerō', say:'Kikero', ipa:'Cicerō, Cicerōnis (m.)', m:{kr:'키케로'}, pos:'명사', ex:'Cicerō ōrātor erat.', exSay:'Kikero orator erat.', exm:{kr:'키케로는 연설가였다.'}, tip:{kr:'c는 언제나 /k/. 교회 라틴어의 "치체로"와 갈리는 대표적인 낱말입니다.'}},
      {w:'puella', say:'puella', ipa:'puella, puellae (f.)', m:{kr:'소녀'}, pos:'명사', ex:'Puella cantat.', exSay:'Puella kantat.', exm:{kr:'소녀가 노래한다.'}},
      {w:'poēta', say:'poeta', ipa:'poēta, poētae (m.)', m:{kr:'시인'}, pos:'명사', ex:'Poēta clārus est.', exSay:'Poeta klarus est.', exm:{kr:'그 시인은 유명하다.'}, tip:{kr:'-a로 끝나지만 남성입니다. 뜻이 남성인 직업 명사는 1변화라도 남성.'}},
      {w:'terra', say:'terra', ipa:'terra, terrae (f.)', m:{kr:'땅, 대지'}, pos:'명사', ex:'Terra magna est.', exSay:'Terra magna est.', exm:{kr:'땅이 넓다.'}},
      {w:'philosophia', say:'pilosopia', ipa:'philosophia, -ae (f.)', m:{kr:'철학'}, pos:'명사', ex:'Philosophia vīta est.', exSay:'Pilosopia wita est.', exm:{kr:'철학은 삶이다.'}, tip:{kr:'ph·th·ch는 그리스어 차용 표기. 고전기에는 p·t·k와 크게 다르지 않게 읽혔습니다.'}},
      {w:'lingua', say:'lingua', ipa:'lingua, linguae (f.)', m:{kr:'혀, 언어'}, pos:'명사', ex:'Lingua Latīna clāra est.', exSay:'Lingua Latina klara est.', exm:{kr:'라틴어는 명료하다.'}},
      {w:'est', say:'est', ipa:'sum, esse, fuī', m:{kr:'~이다, 있다 (3인칭 단수)'}, pos:'동사', ex:'Puella in viā est.', exSay:'Puella in wia est.', exm:{kr:'소녀가 길에 있다.'}},
      {w:'in', say:'in', ipa:'전치사 (+탈격/대격)', m:{kr:'~안에 (탈격) / ~안으로 (대격)'}, pos:'전치사', ex:'in silvā / in silvam', exSay:'in silwa / in silwam', exm:{kr:'숲에서 / 숲 속으로'}, tip:{kr:'같은 전치사가 뒤에 오는 격에 따라 위치(정지)와 방향(이동)으로 갈립니다.'}},
      {w:'et', say:'et', ipa:'접속사', m:{kr:'그리고'}, pos:'접속사', ex:'terra et aqua', exSay:'terra et aqua', exm:{kr:'땅과 물'}},
      {w:'nōn', say:'non', ipa:'부사', m:{kr:'~않다'}, pos:'부사', ex:'Puella nōn cantat.', exSay:'Puella non kantat.', exm:{kr:'소녀는 노래하지 않는다.'}},
      {w:'magnus', say:'magnus', ipa:'magnus, -a, -um', m:{kr:'큰, 위대한'}, pos:'형용사', ex:'poēta magnus', exSay:'poeta magnus', exm:{kr:'위대한 시인'}},
      {w:'bonus', say:'bonus', ipa:'bonus, -a, -um', m:{kr:'좋은'}, pos:'형용사', ex:'aqua bona', exSay:'aqua bona', exm:{kr:'좋은 물'}},
    ],
    grammar: [
      {title:'고전식 발음 — 다섯 가지만 기억하면 된다', html:'<table><tr><th>철자</th><th>소리</th><th>예</th></tr><tr><td><b>c</b></td><td>언제나 /k/</td><td>Cicerō = <b>키</b>케로 (×치체로)</td></tr><tr><td><b>v</b></td><td>/w/</td><td>vēnī = <b>웨</b>니 (×베니)</td></tr><tr><td><b>ae</b></td><td>/ai/</td><td>Caesar = <b>카이</b>사르</td></tr><tr><td><b>oe</b></td><td>/oi/</td><td>poena = 포<b>이</b>나</td></tr><tr><td><b>qu</b></td><td>/kw/</td><td>aqua = 아<b>쿠아</b></td></tr></table><p>나머지 자모는 로마자를 읽는 그대로입니다. <b>h</b>는 약하게, <b>ph·th·ch</b>는 그리스어 낱말 표기로 p·t·k에 가깝습니다.</p><p>🔊 이 팩의 발음 버튼은 이탈리아어 음성에 <b>변환된 철자</b>를 넘겨 고전식을 근사합니다(via→wia, Caesar→Kaisar). 브라우저에 라틴어 음성이 없어서 쓰는 우회이며, 완벽하지는 않지만 방향은 맞습니다.</p>'},
      {title:'장음(마크론) — 뜻을 가르는 경우가 있다', html:'<p>ā ē ī ō ū 위의 줄은 <b>모음을 길게</b> 읽으라는 표시입니다. 교재에서만 쓰고 실제 비문에는 없습니다.</p><table><tr><td><b>malum</b></td><td>악(惡)</td></tr><tr><td><b>mālum</b></td><td>사과</td></tr><tr><td><b>liber</b></td><td>책</td></tr><tr><td><b>līber</b></td><td>자유로운</td></tr></table><p>더 중요한 역할은 <b>강세 위치</b>를 정하는 것입니다. 라틴어 강세는 끝에서 두 번째 음절이 길면 거기에, 짧으면 그 앞으로 갑니다.</p><p>💡 이 팩은 <b>채점할 때 마크론을 무시</b>합니다. amāre든 amare든 정답으로 인정되니, 입력할 때 신경 쓰지 않아도 됩니다.</p>'},
      {title:'여섯 격 — 어순이 아니라 어미가 역할을 정한다', html:'<p>영어·한국어는 자리로 역할을 정하지만, 라틴어는 <b>어미</b>로 정합니다. 그래서 어순을 바꿔도 뜻이 그대로입니다.</p><table><tr><th>격</th><th>역할</th><th>한국어 조사</th><th>예 (puella)</th></tr><tr><td><b>주격</b> Nōminātīvus</td><td>주어</td><td>~이/가</td><td>puell<b>a</b></td></tr><tr><td><b>속격</b> Genetīvus</td><td>소유</td><td>~의</td><td>puell<b>ae</b></td></tr><tr><td><b>여격</b> Datīvus</td><td>간접목적어</td><td>~에게</td><td>puell<b>ae</b></td></tr><tr><td><b>대격</b> Accūsātīvus</td><td>직접목적어</td><td>~을/를</td><td>puell<b>am</b></td></tr><tr><td><b>탈격</b> Ablātīvus</td><td>수단·장소·시간</td><td>~로/에서</td><td>puell<b>ā</b></td></tr><tr><td><b>호격</b> Vocātīvus</td><td>부름</td><td>~야!</td><td>puell<b>a</b></td></tr></table><p><b>Puella poētam amat</b> = <b>Poētam puella amat</b> = <b>Amat puella poētam</b><br>셋 다 "소녀가 시인을 사랑한다"입니다. <u>puella</u>가 주격이고 <u>poētam</u>이 대격이라는 사실이 어순과 무관하게 역할을 확정합니다.</p><p>💡 그래서 라틴어를 읽을 때는 <b>어미부터 봐야</b> 합니다. 이것이 이 언어를 배우는 내내 관통하는 원리입니다.</p>'},
    ],
    exercises: [
      {type:'choice', q:'고전식으로 「Cicerō」를 읽으면?', options:['치체로','키케로','시세로','키세로'], answer:1, why:'c는 언제나 /k/. 교회 라틴어에서만 e·i 앞에서 /tʃ/가 됩니다.'},
      {type:'choice', q:'「Caesar」의 고전식 발음은?', options:['시저','체사르','카이사르','카에사르'], answer:2, why:'c=/k/, ae=/ai/.'},
      {type:'choice', q:'「vēnī」의 고전식 발음은?', options:['베니','웨니','페니','비니'], answer:1, why:'v는 /w/. 로마인은 U와 V를 같은 글자로 썼습니다.'},
      {type:'choice', q:'문장에서 "~을/를"(직접목적어)에 해당하는 격은?', options:['주격','속격','대격','탈격'], answer:2},
      {type:'choice', q:'「Poētam puella amat」의 뜻으로 알맞은 것은?', options:['시인이 소녀를 사랑한다','소녀가 시인을 사랑한다','시인과 소녀가 사랑한다','소녀는 시인이다'], answer:1, why:'puella가 주격, poētam이 대격(-am). 어순이 앞뒤로 바뀌어도 어미가 역할을 확정합니다.'},
    ],
    quiz: [
      {type:'choice', q:'「aqua」의 고전식 발음은?', options:['아과','아쿠아','아콰','아그와'], answer:1, why:'qu = /kw/.'},
      {type:'choice', q:'「mālum」과 「malum」의 뜻 차이는?', options:['둘 다 사과','둘 다 악','ā는 사과, a는 악','ā는 악, a는 사과'], answer:2},
      {type:'choice', q:'소유("~의")를 나타내는 격은?', options:['속격','여격','대격','호격'], answer:0},
      {type:'choice', q:'라틴어에서 문장 안의 역할을 정하는 것은?', options:['어순','어미','전치사','강세'], answer:1},
      {type:'choice', q:'「in silvam」이 뜻하는 것은?', options:['숲에서','숲 속으로','숲의','숲에게'], answer:1, why:'in + 대격 = 이동(방향). in + 탈격이면 위치(숲에서).'},
    ],
  },

  /* ─────────────── LEVEL 2 ─────────────── */
  {
    level: 2, cefr: '1변화', phase: 'intro',
    title: '1변화 명사와 sum',
    desc: '-a로 끝나는 1변화 명사의 전체 어미표를 익히고, 가장 중요한 불규칙 동사 sum(있다·이다)의 현재형으로 첫 문장을 만듭니다.',
    words: [
      {w:'silva', say:'silwa', ipa:'silva, silvae (f.)', m:{kr:'숲'}, pos:'명사', ex:'In silvā sumus.', exSay:'In silwa sumus.', exm:{kr:'우리는 숲에 있다.'}},
      {w:'īnsula', say:'insula', ipa:'īnsula, īnsulae (f.)', m:{kr:'섬'}, pos:'명사', ex:'Īnsula parva est.', exSay:'Insula parwa est.', exm:{kr:'섬이 작다.'}},
      {w:'fēmina', say:'femina', ipa:'fēmina, fēminae (f.)', m:{kr:'여자'}, pos:'명사', ex:'Fēmina rēgīna est.', exSay:'Femina regina est.', exm:{kr:'그 여자는 여왕이다.'}},
      {w:'rēgīna', say:'regina', ipa:'rēgīna, rēgīnae (f.)', m:{kr:'여왕'}, pos:'명사', ex:'Rēgīna in īnsulā est.', exSay:'Regina in insula est.', exm:{kr:'여왕이 섬에 있다.'}},
      {w:'nauta', say:'nauta', ipa:'nauta, nautae (m.)', m:{kr:'선원'}, pos:'명사', ex:'Nautae fessī sunt.', exSay:'Nautai fessi sunt.', exm:{kr:'선원들은 지쳐 있다.'}, tip:{kr:'poēta·agricola·nauta는 -a로 끝나도 남성입니다. 뜻이 사람(남성 직업)이기 때문.'}},
      {w:'agricola', say:'agrikola', ipa:'agricola, -ae (m.)', m:{kr:'농부'}, pos:'명사', ex:'Agricola in terrā labōrat.', exSay:'Agrikola in terra laborat.', exm:{kr:'농부가 땅에서 일한다.'}},
      {w:'patria', say:'patria', ipa:'patria, patriae (f.)', m:{kr:'조국, 고향'}, pos:'명사', ex:'Patria nostra est.', exSay:'Patria nostra est.', exm:{kr:'조국은 우리의 것이다.'}},
      {w:'fōrma', say:'forma', ipa:'fōrma, fōrmae (f.)', m:{kr:'모습, 아름다움'}, pos:'명사', ex:'Fōrma rēgīnae clāra est.', exSay:'Forma reginai klara est.', exm:{kr:'여왕의 아름다움은 뛰어나다.'}},
      {w:'vīta', say:'wita', ipa:'vīta, vītae (f.)', m:{kr:'삶, 생명'}, pos:'명사', ex:'Vīta brevis est.', exSay:'Wita brewis est.', exm:{kr:'인생은 짧다.'}},
      {w:'fīlia', say:'filia', ipa:'fīlia, fīliae (f.)', m:{kr:'딸'}, pos:'명사', ex:'Fīlia poētae est.', exSay:'Filia poetai est.', exm:{kr:'그녀는 시인의 딸이다.'}},
      {w:'sum', say:'sum', ipa:'sum, esse, fuī, futūrus', m:{kr:'나는 ~이다/있다'}, pos:'동사', ex:'Poēta sum.', exSay:'Poeta sum.', exm:{kr:'나는 시인이다.'}, tip:{kr:'라틴어에서 가장 자주 쓰이고 가장 불규칙한 동사. 통째로 외웁니다.'}},
      {w:'es', say:'es', ipa:'sum 2인칭 단수', m:{kr:'너는 ~이다'}, pos:'동사', ex:'Nauta es.', exSay:'Nauta es.', exm:{kr:'너는 선원이다.'}},
      {w:'sumus', say:'sumus', ipa:'sum 1인칭 복수', m:{kr:'우리는 ~이다'}, pos:'동사', ex:'In silvā sumus.', exSay:'In silwa sumus.', exm:{kr:'우리는 숲에 있다.'}},
      {w:'sunt', say:'sunt', ipa:'sum 3인칭 복수', m:{kr:'그들은 ~이다'}, pos:'동사', ex:'Nautae fessī sunt.', exSay:'Nautai fessi sunt.', exm:{kr:'선원들은 지쳐 있다.'}},
      {w:'parvus', say:'parwus', ipa:'parvus, -a, -um', m:{kr:'작은'}, pos:'형용사', ex:'īnsula parva', exSay:'insula parwa', exm:{kr:'작은 섬'}},
      {w:'longus', say:'longus', ipa:'longus, -a, -um', m:{kr:'긴'}, pos:'형용사', ex:'via longa', exSay:'wia longa', exm:{kr:'긴 길'}},
      {w:'clārus', say:'klarus', ipa:'clārus, -a, -um', m:{kr:'밝은, 유명한'}, pos:'형용사', ex:'poēta clārus', exSay:'poeta klarus', exm:{kr:'유명한 시인'}},
      {w:'sed', say:'sed', ipa:'접속사', m:{kr:'그러나'}, pos:'접속사', ex:'Parva sed clāra.', exSay:'Parwa sed klara.', exm:{kr:'작지만 유명하다.'}},
    ],
    grammar: [
      {title:'1변화 명사 — 어미 열 개', html:'<p><b>puella, puellae, f.</b> (소녀) — 사전형의 두 번째가 속격입니다. 속격 어미 <b>-ae</b>가 1변화의 표지입니다.</p><table><tr><th>격</th><th>단수</th><th>복수</th></tr><tr><td>주격</td><td>puell<b>a</b></td><td>puell<b>ae</b></td></tr><tr><td>속격</td><td>puell<b>ae</b></td><td>puell<b>ārum</b></td></tr><tr><td>여격</td><td>puell<b>ae</b></td><td>puell<b>īs</b></td></tr><tr><td>대격</td><td>puell<b>am</b></td><td>puell<b>ās</b></td></tr><tr><td>탈격</td><td>puell<b>ā</b></td><td>puell<b>īs</b></td></tr><tr><td>호격</td><td>puell<b>a</b></td><td>puell<b>ae</b></td></tr></table><p>⚠️ <b>puellae</b> 하나가 속격·여격·복수주격 셋을 겸합니다. 형태만으로는 정할 수 없고 <u>문맥</u>이 정합니다 — 라틴어를 읽는 일의 상당 부분이 이 판별입니다.</p><p>💡 1변화는 대부분 <b>여성</b>이지만, <b>사람을 가리키는 남성 명사</b>는 예외입니다: poēta(시인) · nauta(선원) · agricola(농부) · pīrāta(해적).</p>'},
      {title:'sum — 있다 · 이다', html:'<table><tr><th></th><th>단수</th><th>복수</th></tr><tr><td>1인칭</td><td><b>sum</b> 나는 ~이다</td><td><b>sumus</b> 우리는</td></tr><tr><td>2인칭</td><td><b>es</b> 너는</td><td><b>estis</b> 너희는</td></tr><tr><td>3인칭</td><td><b>est</b> 그는/그것은</td><td><b>sunt</b> 그들은</td></tr></table><p>라틴어는 <b>동사 어미가 주어를 담고</b> 있어서 대명사를 따로 쓰지 않습니다.<br><b>Poēta sum.</b> = "(나는) 시인이다." — ego(나)를 붙이면 "<u>내가</u> 시인이다"처럼 강조가 됩니다.</p><p><b>sum은 주격을 데려옵니다.</b> 목적어가 아니라 보어이기 때문입니다.<br>Fēmina <b>rēgīna</b> est. (여자는 여왕<u>이다</u>) — rēgīnam(대격)이 아닙니다.</p>'},
      {title:'형용사는 명사에 성·수·격을 맞춘다', html:'<p>형용사는 꾸미는 명사와 <b>세 가지</b>를 일치시킵니다 — 성·수·격.</p><table><tr><td>puella <b>bona</b></td><td>착한 소녀 (여성·단수·주격)</td></tr><tr><td>puellam <b>bonam</b></td><td>착한 소녀를 (대격)</td></tr><tr><td>puellārum <b>bonārum</b></td><td>착한 소녀들의 (복수 속격)</td></tr><tr><td>poēta <b>bonus</b></td><td>착한 시인 (남성이므로 -us)</td></tr></table><p>⚠️ 마지막 줄을 보세요. poēta는 1변화지만 <b>남성</b>이라 형용사가 <b>bonus</b>(남성형)를 씁니다. <u>형용사는 명사의 변화 종류가 아니라 성을 따릅니다.</u></p><p>💡 형용사 사전형 <b>bonus, -a, -um</b>은 남성·여성·중성 주격을 나란히 적은 것입니다.</p>'},
    ],
    exercises: [
      {type:'choice', q:'「puellae」가 될 수 <b>없는</b> 것은?', options:['속격 단수','여격 단수','주격 복수','대격 단수'], answer:3, why:'대격 단수는 puellam. 나머지 셋은 모두 puellae로 같습니다.'},
      {type:'choice', q:'"소녀들의"(복수 속격)에 맞는 형태는?', options:['puellae','puellās','puellārum','puellīs'], answer:2},
      {type:'blank', text:'Poēta ___. (나는 시인이다)', answer:'sum', ko:'나는 시인이다', hint:'sum 동사의 1인칭 단수'},
      {type:'choice', q:'「Nautae fessī ___.」 빈칸에 맞는 것은?', options:['est','sum','sunt','es'], answer:2, why:'nautae가 복수 주격이므로 3인칭 복수 sunt.'},
      {type:'choice', q:'「poēta」를 꾸미는 형용사로 맞는 것은?', options:['bona','bonus','bonam','bonae'], answer:1, why:'poēta는 1변화지만 남성이라 형용사는 남성형 bonus.'},
    ],
    quiz: [
      {type:'choice', q:'1변화 명사임을 알려주는 사전형의 표지는?', options:['주격 -a','속격 -ae','대격 -am','탈격 -ā'], answer:1, why:'변화 종류는 언제나 속격 어미로 판별합니다.'},
      {type:'choice', q:'다음 중 <b>남성</b> 명사는?', options:['silva','īnsula','agricola','patria'], answer:2, why:'agricola(농부)·nauta(선원)·poēta(시인)는 -a로 끝나도 남성.'},
      {type:'choice', q:'「In silvā ___.」 (우리는 숲에 있다)', options:['sum','es','sumus','sunt'], answer:2},
      {type:'choice', q:'「Fēmina rēgīna est」에서 rēgīna의 격은?', options:['주격','대격','속격','탈격'], answer:0, why:'sum은 보어로 주격을 취합니다. 대격이 아닙니다.'},
      {type:'blank', text:'Vīta brevis ___. (인생은 짧다)', answer:'est', ko:'인생은 짧다'},
    ],
  },

  /* ─────────────── LEVEL 3 ─────────────── */
  {
    level: 3, cefr: '1활용', phase: 'intro',
    title: '1활용 동사 — 첫 문장 만들기',
    desc: '-āre로 끝나는 1활용 동사의 현재형 여섯 어미를 익히고, 지금까지 배운 격과 합쳐 실제 문장을 조립합니다.',
    words: [
      {w:'amō', say:'amo', ipa:'amō, amāre, amāvī, amātum', m:{kr:'사랑하다'}, pos:'동사', ex:'Puellam amō.', exSay:'Puellam amo.', exm:{kr:'나는 소녀를 사랑한다.'}, tip:{kr:'사전형 네 부분: 1인칭현재·부정사·완료·목적분사. 앞의 둘만 알아도 현재형은 만듭니다.'}},
      {w:'laudō', say:'laudo', ipa:'laudō, laudāre, laudāvī, laudātum', m:{kr:'칭찬하다'}, pos:'동사', ex:'Poētam laudāmus.', exSay:'Poetam laudamus.', exm:{kr:'우리는 시인을 칭찬한다.'}},
      {w:'labōrō', say:'laboro', ipa:'labōrō, labōrāre, -āvī, -ātum', m:{kr:'일하다'}, pos:'동사', ex:'Agricolae labōrant.', exSay:'Agrikolai laborant.', exm:{kr:'농부들이 일한다.'}},
      {w:'portō', say:'porto', ipa:'portō, portāre, -āvī, -ātum', m:{kr:'나르다, 옮기다'}, pos:'동사', ex:'Aquam portat.', exSay:'Aquam portat.', exm:{kr:'그는 물을 나른다.'}},
      {w:'vocō', say:'woko', ipa:'vocō, vocāre, -āvī, -ātum', m:{kr:'부르다'}, pos:'동사', ex:'Fīliam vocō.', exSay:'Filiam woko.', exm:{kr:'나는 딸을 부른다.'}},
      {w:'spectō', say:'spekto', ipa:'spectō, spectāre, -āvī, -ātum', m:{kr:'바라보다'}, pos:'동사', ex:'Terram spectāmus.', exSay:'Terram spektamus.', exm:{kr:'우리는 땅을 바라본다.'}},
      {w:'cantō', say:'kanto', ipa:'cantō, cantāre, -āvī, -ātum', m:{kr:'노래하다'}, pos:'동사', ex:'Puellae cantant.', exSay:'Puellai kantant.', exm:{kr:'소녀들이 노래한다.'}},
      {w:'dō', say:'do', ipa:'dō, dare, dedī, datum', m:{kr:'주다'}, pos:'동사', ex:'Rēgīnae aquam dō.', exSay:'Reginai aquam do.', exm:{kr:'나는 여왕에게 물을 준다.'}, tip:{kr:'1활용이지만 부정사가 dāre가 아니라 dare로 짧습니다. 흔히 쓰이니 형태를 기억해 두세요.'}},
      {w:'habitō', say:'habito', ipa:'habitō, habitāre, -āvī, -ātum', m:{kr:'살다, 거주하다'}, pos:'동사', ex:'In īnsulā habitant.', exSay:'In insula habitant.', exm:{kr:'그들은 섬에 산다.'}},
      {w:'nārrō', say:'narro', ipa:'nārrō, nārrāre, -āvī, -ātum', m:{kr:'이야기하다'}, pos:'동사', ex:'Fābulam nārrat.', exSay:'Fabulam narrat.', exm:{kr:'그가 이야기를 들려준다.'}},
      {w:'fābula', say:'fabula', ipa:'fābula, fābulae (f.)', m:{kr:'이야기, 우화'}, pos:'명사', ex:'Fābula longa est.', exSay:'Fabula longa est.', exm:{kr:'이야기가 길다.'}},
      {w:'pecūnia', say:'pekunia', ipa:'pecūnia, -ae (f.)', m:{kr:'돈'}, pos:'명사', ex:'Pecūniam nōn habeō.', exSay:'Pekuniam non habeo.', exm:{kr:'나는 돈이 없다.'}},
      {w:'epistula', say:'epistula', ipa:'epistula, -ae (f.)', m:{kr:'편지'}, pos:'명사', ex:'Epistulam portō.', exSay:'Epistulam porto.', exm:{kr:'나는 편지를 나른다.'}},
      {w:'semper', say:'semper', ipa:'부사', m:{kr:'항상'}, pos:'부사', ex:'Semper labōrat.', exSay:'Semper laborat.', exm:{kr:'그는 항상 일한다.'}},
      {w:'saepe', say:'saipe', ipa:'부사', m:{kr:'자주'}, pos:'부사', ex:'Saepe cantāmus.', exSay:'Saipe kantamus.', exm:{kr:'우리는 자주 노래한다.'}},
      {w:'hodiē', say:'hodie', ipa:'부사', m:{kr:'오늘'}, pos:'부사', ex:'Hodiē nōn labōrō.', exSay:'Hodie non laboro.', exm:{kr:'오늘은 일하지 않는다.'}},
    ],
    grammar: [
      {title:'1활용 현재 — 어미 여섯 개', html:'<p><b>amō, amāre</b> (사랑하다). 부정사 <b>-āre</b>가 1활용의 표지입니다. 어간은 부정사에서 -re를 뗀 <b>amā-</b>.</p><table><tr><th></th><th>단수</th><th>복수</th></tr><tr><td>1인칭</td><td>am<b>ō</b> 나는 사랑한다</td><td>am<b>āmus</b> 우리는</td></tr><tr><td>2인칭</td><td>am<b>ās</b> 너는</td><td>am<b>ātis</b> 너희는</td></tr><tr><td>3인칭</td><td>am<b>at</b> 그는</td><td>am<b>ant</b> 그들은</td></tr></table><p>어미만 떼어 보면 <b>-ō, -s, -t, -mus, -tis, -nt</b>입니다. 이 여섯은 <u>거의 모든 활용·시제에 그대로 나타납니다</u> — 지금 외워두면 앞으로 계속 씁니다.</p><p>⚠️ 1인칭 단수에서만 어간 모음 ā가 삼켜집니다: amā+ō → <b>amō</b>.</p>'},
      {title:'현재형 하나가 세 가지 뜻', html:'<p>라틴어 현재는 영어의 세 형태를 한꺼번에 담습니다.</p><p><b>Puella cantat.</b><br>① 소녀가 노래한다 (단순)<br>② 소녀가 노래하고 있다 (진행)<br>③ 소녀가 정말 노래한다 (강조)</p><p>어느 쪽인지는 문맥이 정합니다. 라틴어는 이런 식으로 <b>형태 하나가 여러 뜻을 겸하는</b> 일이 잦고, 읽는 사람이 문맥으로 좁힙니다.</p>'},
      {title:'문장 조립 — 어순은 자유, 어미는 필수', html:'<p>이제 재료가 갖춰졌습니다. 주어(주격) + 목적어(대격) + 동사.</p><p><b>Puella poētam amat.</b> 소녀가 시인을 사랑한다.</p><p>어순을 바꿔도 뜻이 같습니다.</p><table><tr><td>Puella poētam amat.</td><td rowspan="4">전부 같은 뜻</td></tr><tr><td>Poētam puella amat.</td></tr><tr><td>Amat puella poētam.</td></tr><tr><td>Poētam amat puella.</td></tr></table><p>다만 <b>기본 어순은 동사가 끝</b>(SOV)입니다. 산문에서 가장 흔하고, 앞으로 나온 낱말일수록 강조됩니다.</p><p>⚠️ 어미 하나만 바뀌어도 뜻이 뒤집힙니다.<br><b>Puella poētam amat.</b> 소녀가 시인을 사랑한다<br><b>Puellam poēta amat.</b> 시인이 소녀를 사랑한다</p><p>💡 이 팩의 문장 조립 문제는 <b>어순이 다른 정답도 인정</b>합니다.</p>'},
    ],
    exercises: [
      {type:'choice', q:'「labōrāre」의 "그들이 일한다"에 맞는 형태는?', options:['labōrat','labōrant','labōrāmus','labōrātis'], answer:1},
      {type:'blank', text:'Puellam ___. (나는 소녀를 사랑한다)', answer:'amō', ko:'나는 소녀를 사랑한다', hint:'1인칭 단수. 마크론은 없어도 정답 처리됩니다'},
      {type:'choice', q:'모든 활용에 공통으로 나타나는 인칭 어미 여섯 개는?', options:['-ō -s -t -mus -tis -nt','-a -ae -am -ā -ās -īs','-us -a -um -ī -ae -a','-ī -istī -it -imus -istis -ērunt'], answer:0},
      {type:'choice', q:'「Puellam poēta amat」의 뜻은?', options:['소녀가 시인을 사랑한다','시인이 소녀를 사랑한다','소녀와 시인이 사랑한다','시인은 소녀다'], answer:1, why:'poēta가 주격, puellam이 대격(-am). 어순이 아니라 어미를 보세요.'},
      {type:'blocks', answer:'Agricola aquam portat', answers:['Aquam agricola portat','Agricola portat aquam','Aquam portat agricola'], ko:'농부가 물을 나른다', distractors:['aqua','agricolam'], hint:'주격 + 대격 + 동사. 어순은 바꿔도 됩니다'},
    ],
    quiz: [
      {type:'choice', q:'1활용 동사임을 알려주는 표지는?', options:['-ō로 끝나는 1인칭','-āre로 끝나는 부정사','-āvī로 끝나는 완료','-t로 끝나는 3인칭'], answer:1},
      {type:'choice', q:'「cantāre」의 "우리는 노래한다"는?', options:['cantant','cantātis','cantāmus','cantāt'], answer:2},
      {type:'choice', q:'「Puella cantat」이 뜻할 수 <b>없는</b> 것은?', options:['소녀가 노래한다','소녀가 노래하고 있다','소녀가 정말 노래한다','소녀가 노래했다'], answer:3, why:'현재형은 과거를 나타내지 않습니다. 과거는 완료·미완료로 따로 배웁니다.'},
      {type:'choice', q:'라틴어 산문에서 가장 흔한 기본 어순은?', options:['주어-동사-목적어','주어-목적어-동사','동사-주어-목적어','목적어-동사-주어'], answer:1, why:'SOV. 다만 강조하려는 낱말을 앞으로 빼는 일이 잦습니다.'},
      {type:'blocks', answer:'Poēta fābulam nārrat', answers:['Fābulam poēta nārrat','Poēta nārrat fābulam','Fābulam nārrat poēta'], ko:'시인이 이야기를 들려준다', distractors:['poētam','fābula']},
    ],
  },

  /* ─────────────── LEVEL 4 ─────────────── */
  {
    level: 4, cefr: '3변화', phase: 'noun',
    title: '3변화 명사 — 가장 크고 가장 불규칙한 무리',
    desc: '라틴어 명사의 절반이 여기 속합니다. 주격은 제각각이라 외울 수 없고, 속격 -is 에서 어간을 얻어 나머지를 만듭니다.',
    words: [
      {w:'rēx', say:'rex', ipa:'rēx, rēgis (m.)', m:{kr:'왕'}, pos:'명사', ex:'Rēx populum regit.', exSay:'Rex populum regit.', exm:{kr:'왕이 백성을 다스린다.'}, tip:{kr:'주격 rēx만 보면 어간을 알 수 없습니다. 속격 rēgis에서 -is를 떼야 rēg- 가 나옵니다.'}},
      {w:'cōnsul', say:'konsul', ipa:'cōnsul, cōnsulis (m.)', m:{kr:'집정관'}, pos:'명사', ex:'Cōnsul in senātū est.', exSay:'Konsul in senatu est.', exm:{kr:'집정관이 원로원에 있다.'}},
      {w:'mīles', say:'miles', ipa:'mīles, mīlitis (m.)', m:{kr:'병사'}, pos:'명사', ex:'Mīlitēs fortēs sunt.', exSay:'Milites fortes sunt.', exm:{kr:'병사들은 용감하다.'}, tip:{kr:'mīles → mīlit- . 주격에서 t가 사라졌습니다.'}},
      {w:'pater', say:'pater', ipa:'pater, patris (m.)', m:{kr:'아버지'}, pos:'명사', ex:'Pater fīliam amat.', exSay:'Pater filiam amat.', exm:{kr:'아버지가 딸을 사랑한다.'}},
      {w:'māter', say:'mater', ipa:'māter, mātris (f.)', m:{kr:'어머니'}, pos:'명사', ex:'Māter in casā labōrat.', exSay:'Mater in kasa laborat.', exm:{kr:'어머니가 집에서 일한다.'}},
      {w:'homō', say:'homo', ipa:'homō, hominis (m.)', m:{kr:'사람, 인간'}, pos:'명사', ex:'Homō errāre potest.', exSay:'Homo errare potest.', exm:{kr:'사람은 실수할 수 있다.'}},
      {w:'ōrātor', say:'orator', ipa:'ōrātor, ōrātōris (m.)', m:{kr:'연설가'}, pos:'명사', ex:'Ōrātor bonus erat.', exSay:'Orator bonus erat.', exm:{kr:'그는 훌륭한 연설가였다.'}},
      {w:'virtūs', say:'wirtus', ipa:'virtūs, virtūtis (f.)', m:{kr:'용기, 덕'}, pos:'명사', ex:'Virtūs laudātur.', exSay:'Wirtus laudatur.', exm:{kr:'덕은 칭송받는다.'}, tip:{kr:'-tūs / -tūtis 로 끝나는 추상명사는 여성입니다: lībertās, vēritās.'}},
      {w:'lēx', say:'lex', ipa:'lēx, lēgis (f.)', m:{kr:'법'}, pos:'명사', ex:'Lēx dūra est.', exSay:'Lex dura est.', exm:{kr:'법은 엄하다.'}},
      {w:'vōx', say:'wox', ipa:'vōx, vōcis (f.)', m:{kr:'목소리'}, pos:'명사', ex:'Vōx clāra est.', exSay:'Wox klara est.', exm:{kr:'목소리가 또렷하다.'}},
      {w:'tempus', say:'tempus', ipa:'tempus, temporis (n.)', m:{kr:'시간, 때'}, pos:'명사', ex:'Tempus fugit.', exSay:'Tempus fugit.', exm:{kr:'시간은 달아난다.'}, tip:{kr:'중성. -us로 끝나지만 2변화 남성이 아닙니다 — 속격 temporis가 3변화임을 알려줍니다.'}},
      {w:'corpus', say:'korpus', ipa:'corpus, corporis (n.)', m:{kr:'몸'}, pos:'명사', ex:'Corpus et animus.', exSay:'Korpus et animus.', exm:{kr:'몸과 마음.'}},
      {w:'nōmen', say:'nomen', ipa:'nōmen, nōminis (n.)', m:{kr:'이름'}, pos:'명사', ex:'Nōmen meum Mārcus est.', exSay:'Nomen meum Markus est.', exm:{kr:'내 이름은 마르쿠스다.'}},
      {w:'flūmen', say:'flumen', ipa:'flūmen, flūminis (n.)', m:{kr:'강'}, pos:'명사', ex:'Flūmen lātum est.', exSay:'Flumen latum est.', exm:{kr:'강이 넓다.'}},
      {w:'populus', say:'populus', ipa:'populus, populī (m.)', m:{kr:'백성, 민족'}, pos:'명사', ex:'Populus Rōmānus', exSay:'Populus Romanus', exm:{kr:'로마 인민'}, tip:{kr:'이건 2변화입니다. 속격 -ī가 표지.'}},
      {w:'regō', say:'rego', ipa:'regō, regere, rēxī, rēctum', m:{kr:'다스리다'}, pos:'동사', ex:'Rēx regit.', exSay:'Rex regit.', exm:{kr:'왕이 다스린다.'}},
      {w:'dūrus', say:'durus', ipa:'dūrus, -a, -um', m:{kr:'단단한, 엄한'}, pos:'형용사', ex:'lēx dūra', exSay:'lex dura', exm:{kr:'엄한 법'}},
      {w:'lātus', say:'latus', ipa:'lātus, -a, -um', m:{kr:'넓은'}, pos:'형용사', ex:'flūmen lātum', exSay:'flumen latum', exm:{kr:'넓은 강'}},
    ],
    grammar: [
      {title:'3변화 — 속격이 열쇠다', html:'<p>1·2변화는 주격만 봐도 어간이 보입니다. <b>3변화는 그렇지 않습니다.</b></p><table><tr><th>주격</th><th>속격</th><th>어간</th></tr><tr><td>rēx</td><td>rēg<b>is</b></td><td>rēg-</td></tr><tr><td>mīles</td><td>mīlit<b>is</b></td><td>mīlit-</td></tr><tr><td>homō</td><td>homin<b>is</b></td><td>homin-</td></tr><tr><td>tempus</td><td>tempor<b>is</b></td><td>tempor-</td></tr></table><p>주격에서 어간을 짐작할 방법이 없습니다. 그래서 3변화 명사는 <b>반드시 두 형태를 함께</b> 외웁니다 — 사전이 <b>rēx, rēgis</b>처럼 적는 이유입니다.</p><p>💡 규칙: <b>속격에서 -is를 떼면 어간</b>. 이 어간에 아래 어미를 붙입니다.</p>'},
      {title:'3변화 어미 — 남성·여성', html:'<p><b>rēx, rēgis, m.</b> (왕) — 어간 rēg-</p><table><tr><th>격</th><th>단수</th><th>복수</th></tr><tr><td>주격</td><td>rēx</td><td>rēg<b>ēs</b></td></tr><tr><td>속격</td><td>rēg<b>is</b></td><td>rēg<b>um</b></td></tr><tr><td>여격</td><td>rēg<b>ī</b></td><td>rēg<b>ibus</b></td></tr><tr><td>대격</td><td>rēg<b>em</b></td><td>rēg<b>ēs</b></td></tr><tr><td>탈격</td><td>rēg<b>e</b></td><td>rēg<b>ibus</b></td></tr></table><p>주격 단수만 불규칙하고 <b>나머지는 규칙적</b>입니다. 남성과 여성은 어미가 완전히 같습니다 — 성은 따로 외워야 합니다.</p><p>⚠️ <b>rēgēs</b>가 주격 복수와 대격 복수를 겸합니다. 1변화의 puellae와 같은 상황입니다.</p>'},
      {title:'3변화 중성 — 두 가지만 다르다', html:'<p><b>tempus, temporis, n.</b> (시간) — 어간 tempor-</p><table><tr><th>격</th><th>단수</th><th>복수</th></tr><tr><td>주격</td><td>tempus</td><td>tempor<b>a</b></td></tr><tr><td>속격</td><td>tempor<b>is</b></td><td>tempor<b>um</b></td></tr><tr><td>여격</td><td>tempor<b>ī</b></td><td>tempor<b>ibus</b></td></tr><tr><td>대격</td><td>tempus</td><td>tempor<b>a</b></td></tr><tr><td>탈격</td><td>tempor<b>e</b></td><td>tempor<b>ibus</b></td></tr></table><p><b>모든 중성 명사에 통하는 두 규칙</b>입니다. 변화 종류를 가리지 않습니다.</p><p>① <b>주격 = 대격</b> (단수든 복수든 형태가 같다)<br>② <b>복수 주격·대격은 -a</b></p><p>💡 그래서 중성 명사는 문장에서 주어인지 목적어인지 <u>형태로는 알 수 없고</u> 동사와 문맥이 정합니다.</p>'},
    ],
    reading: {
      title: 'Sententiae — 짧은 문장들',
      source: '로마의 격언과 상용구',
      intro: '3변화 명사가 들어간 짧은 문장부터 읽어봅니다. <b>줄을 누르면</b> 번역과 낱말 주석이 펼쳐집니다.',
      lines: [
        {t:'Tempus fugit.', say:'Tempus fugit.', m:{kr:'시간은 달아난다.'},
         note:[{w:'tempus', m:'시간 (n. 주격)'},{w:'fugit', m:'달아난다 (fugiō 3인칭 단수)'}]},
        {t:'Vōx populī, vōx deī.', say:'Wox populi, wox dei.', m:{kr:'백성의 목소리가 곧 신의 목소리다.'},
         note:[{w:'vōx', m:'목소리 (f. 주격)'},{w:'populī', m:'백성의 (속격)'},{w:'deī', m:'신의 (속격)'}]},
        {t:'Lēx dūra, sed lēx.', say:'Lex dura, sed lex.', m:{kr:'법은 가혹하다, 그러나 법이다.'},
         note:[{w:'dūra', m:'가혹한 (lēx가 여성이라 -a)'},{w:'sed', m:'그러나'}]},
        {t:'Nōmen est ōmen.', say:'Nomen est omen.', m:{kr:'이름이 곧 징조다.'},
         note:[{w:'nōmen', m:'이름 (n.)'},{w:'ōmen', m:'징조 (n. 보어라 주격)'}]},
        {t:'Homō sum: hūmānī nihil ā mē aliēnum putō.', say:'Homo sum: humani nihil a me alienum puto.',
         m:{kr:'나는 인간이다. 인간사 가운데 나와 무관한 것은 없다고 여긴다.'},
         note:[{w:'homō', m:'사람 (주격, sum의 보어)'},{w:'nihil', m:'아무것도 ~않다'},{w:'putō', m:'여기다, 생각하다'}], p:true},
        {t:'Mēns sāna in corpore sānō.', say:'Mens sana in korpore sano.', m:{kr:'건전한 몸에 건전한 정신.'},
         note:[{w:'mēns', m:'정신 (f. 3변화, 속격 mentis)'},{w:'corpore', m:'몸에 (탈격 — in + 탈격은 위치)'}]},
        {t:'Dum spīrō, spērō.', say:'Dum spiro, spero.', m:{kr:'숨쉬는 동안 나는 희망한다.'},
         note:[{w:'dum', m:'~하는 동안'},{w:'spīrō', m:'숨쉬다'},{w:'spērō', m:'희망하다'}]},
      ],
      after: '<h3>읽는 법</h3><p>3변화 명사를 만나면 <b>속격을 떠올려 어간을 확인</b>하는 습관을 들이세요. <b>corpore</b>를 보고 "corpus의 탈격"임을 알아채는 것이 이 단계의 목표입니다.</p><p>💡 <b>Mēns sāna in corpore sānō</b>에서 형용사 sānō가 corpore와 함께 탈격입니다. 형용사는 3변화 명사를 꾸밀 때도 <u>자기 변화(1·2류)를 따르되 격만 맞춥니다</u> — 다음 레벨에서 다룹니다.</p>',
    },
    exercises: [
      {type:'choice', q:'3변화 명사의 어간을 얻는 방법은?', options:['주격에서 어미를 뗀다','속격에서 -is를 뗀다','대격에서 -em을 뗀다','탈격에서 -e를 뗀다'], answer:1},
      {type:'choice', q:'「mīles, mīlitis」의 어간은?', options:['mīles-','mīle-','mīlit-','mīl-'], answer:2},
      {type:'choice', q:'모든 중성 명사에 통하는 규칙은?', options:['주격과 속격이 같다','주격과 대격이 같다','복수 주격이 -ēs','탈격이 -ī'], answer:1},
      {type:'choice', q:'「tempus」의 복수 주격은?', options:['tempī','tempora','tempūs','tempēs'], answer:1, why:'중성 복수 주격·대격은 -a.'},
      {type:'blank', text:'Rēx populum ___. (왕이 백성을 다스린다)', answer:'regit', ko:'왕이 백성을 다스린다'},
    ],
    quiz: [
      {type:'choice', q:'사전이 「rēx, rēgis」처럼 두 형태를 적는 이유는?', options:['성을 알려주려고','주격만으로는 어간을 알 수 없어서','복수형을 알려주려고','강세 위치를 알려주려고'], answer:1},
      {type:'choice', q:'「rēgēs」가 될 수 있는 격은?', options:['주격 복수와 대격 복수','속격 단수와 여격 단수','탈격 복수만','주격 단수만'], answer:0},
      {type:'choice', q:'다음 중 <b>중성</b> 명사는?', options:['rēx','virtūs','corpus','cōnsul'], answer:2},
      {type:'choice', q:'「Mēns sāna in corpore sānō」에서 corpore의 격은?', options:['주격','대격','탈격','속격'], answer:2, why:'in + 탈격 = 위치.'},
      {type:'choice', q:'「virtūs, virtūtis」의 성은?', options:['남성','여성','중성','남성과 여성 겸용'], answer:1, why:'-tūs/-tūtis 추상명사는 여성입니다.'},
    ],
  },

  /* ─────────────── LEVEL 5 ─────────────── */
  {
    level: 5, cefr: '형용사·i어간', phase: 'noun',
    title: '형용사 두 부류와 3변화 i어간',
    desc: '형용사는 1·2변화형과 3변화형 두 갈래입니다. 명사가 몇 변화든 상관없이 형용사는 자기 부류대로 변하고 성·수·격만 맞춥니다.',
    words: [
      {w:'fortis', say:'fortis', ipa:'fortis, forte', m:{kr:'용감한, 강한'}, pos:'형용사', ex:'mīles fortis', exSay:'miles fortis', exm:{kr:'용감한 병사'}, tip:{kr:'3변화 형용사. 사전형이 두 개면 남녀공용형+중성형입니다.'}},
      {w:'omnis', say:'omnis', ipa:'omnis, omne', m:{kr:'모든, 전체의'}, pos:'형용사', ex:'omnēs hominēs', exSay:'omnes homines', exm:{kr:'모든 사람들'}},
      {w:'ācer', say:'aker', ipa:'ācer, ācris, ācre', m:{kr:'날카로운, 격렬한'}, pos:'형용사', ex:'ācre bellum', exSay:'akre bellum', exm:{kr:'격렬한 전쟁'}, tip:{kr:'사전형이 셋이면 남성·여성·중성이 각각 다른 3변화 형용사입니다.'}},
      {w:'brevis', say:'brewis', ipa:'brevis, breve', m:{kr:'짧은'}, pos:'형용사', ex:'Vīta brevis, ars longa.', exSay:'Wita brewis, ars longa.', exm:{kr:'인생은 짧고 예술은 길다.'}},
      {w:'facilis', say:'fakilis', ipa:'facilis, facile', m:{kr:'쉬운'}, pos:'형용사', ex:'opus facile', exSay:'opus fakile', exm:{kr:'쉬운 일'}},
      {w:'turris', say:'turris', ipa:'turris, turris (f.)', m:{kr:'탑'}, pos:'명사', ex:'Turris alta est.', exSay:'Turris alta est.', exm:{kr:'탑이 높다.'}, tip:{kr:'i어간 3변화. 속격 복수가 -ium입니다(turrium).'}},
      {w:'cīvis', say:'kiwis', ipa:'cīvis, cīvis (m./f.)', m:{kr:'시민'}, pos:'명사', ex:'Cīvis Rōmānus sum.', exSay:'Kiwis Romanus sum.', exm:{kr:'나는 로마 시민이다.'}},
      {w:'urbs', say:'urbs', ipa:'urbs, urbis (f.)', m:{kr:'도시'}, pos:'명사', ex:'Urbs magna est.', exSay:'Urbs magna est.', exm:{kr:'도시가 크다.'}, tip:{kr:'자음 두 개로 끝나 i어간에 들어갑니다.'}},
      {w:'mare', say:'mare', ipa:'mare, maris (n.)', m:{kr:'바다'}, pos:'명사', ex:'Mare lātum est.', exSay:'Mare latum est.', exm:{kr:'바다가 넓다.'}, tip:{kr:'중성 i어간. 탈격이 -ī, 복수 주격이 -ia로 특이합니다.'}},
      {w:'animal', say:'animal', ipa:'animal, animālis (n.)', m:{kr:'동물'}, pos:'명사', ex:'Animālia in silvā sunt.', exSay:'Animalia in silwa sunt.', exm:{kr:'동물들이 숲에 있다.'}},
      {w:'bellum', say:'bellum', ipa:'bellum, bellī (n.)', m:{kr:'전쟁'}, pos:'명사', ex:'Bellum longum erat.', exSay:'Bellum longum erat.', exm:{kr:'전쟁은 길었다.'}, tip:{kr:'2변화 중성. 속격 -ī가 표지입니다.'}},
      {w:'ars', say:'ars', ipa:'ars, artis (f.)', m:{kr:'기술, 예술'}, pos:'명사', ex:'Ars longa est.', exSay:'Ars longa est.', exm:{kr:'예술은 길다.'}},
      {w:'opus', say:'opus', ipa:'opus, operis (n.)', m:{kr:'일, 작품'}, pos:'명사', ex:'Opus magnum', exSay:'Opus magnum', exm:{kr:'대작'}},
      {w:'altus', say:'altus', ipa:'altus, -a, -um', m:{kr:'높은, 깊은'}, pos:'형용사', ex:'turris alta', exSay:'turris alta', exm:{kr:'높은 탑'}},
      {w:'Rōmānus', say:'Romanus', ipa:'Rōmānus, -a, -um', m:{kr:'로마의'}, pos:'형용사', ex:'cīvis Rōmānus', exSay:'kiwis Romanus', exm:{kr:'로마 시민'}},
      {w:'multus', say:'multus', ipa:'multus, -a, -um', m:{kr:'많은'}, pos:'형용사', ex:'multī hominēs', exSay:'multi homines', exm:{kr:'많은 사람들'}},
    ],
    grammar: [
      {title:'형용사 두 부류', html:'<p><b>① 1·2변화형</b> — 사전형이 <b>셋</b>: bonus, bon<b>a</b>, bon<b>um</b><br>남성은 2변화, 여성은 1변화, 중성은 2변화 중성으로 변합니다. 이미 배운 어미 그대로입니다.</p><p><b>② 3변화형</b> — 사전형이 <b>둘 또는 셋</b>:</p><table><tr><th>사전형</th><th>뜻</th><th>구조</th></tr><tr><td>fortis, forte</td><td>용감한</td><td>남녀 공용 + 중성</td></tr><tr><td>ācer, ācris, ācre</td><td>격렬한</td><td>남 · 여 · 중 각각</td></tr><tr><td>fēlīx (속격 fēlīcis)</td><td>행복한</td><td>세 성 모두 같은 형태</td></tr></table><p>💡 <b>사전형의 개수</b>가 그대로 정보입니다. 셋인데 -us로 시작하면 1·2변화형, 둘이면 3변화형.</p>'},
      {title:'명사의 변화와 형용사의 변화는 별개다', html:'<p>이게 초심자가 가장 많이 틀리는 지점입니다.</p><table><tr><th>구</th><th>명사</th><th>형용사</th></tr><tr><td>mīles <b>fortis</b></td><td>3변화</td><td>3변화형</td></tr><tr><td>mīles <b>bonus</b></td><td>3변화</td><td><b>1·2변화형</b></td></tr><tr><td>puella <b>fortis</b></td><td>1변화</td><td><b>3변화형</b></td></tr><tr><td>poēta <b>bonus</b></td><td>1변화</td><td>1·2변화형 (남성이라 -us)</td></tr></table><p><b>형용사는 명사의 변화 종류를 따라가지 않습니다.</b> 형용사는 자기 부류대로 변하고, 명사와는 <u>성·수·격 세 가지만</u> 일치시킵니다.</p><p>💡 그래서 <b>mīles bonus</b>는 어미가 서로 달라 보여도 정상입니다. 둘 다 남성·단수·주격이면 됩니다.</p>'},
      {title:'3변화 i어간 — 세 가지 표지', html:'<p>3변화 안에서 일부 명사는 속격 복수가 <b>-ium</b>이 됩니다. 다음 중 하나면 i어간입니다.</p><table><tr><td><b>① 주격 = 속격</b> 음절 수가 같다</td><td>cīvis, cīvis · turris, turris</td></tr><tr><td><b>② 주격이 자음 두 개로 끝난다</b></td><td>urbs, urbis · ars, artis · mēns, mentis</td></tr><tr><td><b>③ 중성으로 -e, -al, -ar 로 끝난다</b></td><td>mare · animal · exemplar</td></tr></table><p><b>차이는 세 곳뿐</b>입니다 — 나머지는 보통 3변화와 같습니다.</p><table><tr><th></th><th>보통</th><th>i어간</th></tr><tr><td>속격 복수</td><td>rēg<b>um</b></td><td>civ<b>ium</b></td></tr><tr><td>중성 탈격 단수</td><td>tempor<b>e</b></td><td>mar<b>ī</b></td></tr><tr><td>중성 복수 주·대격</td><td>tempor<b>a</b></td><td>mar<b>ia</b></td></tr></table><p>💡 3변화 <b>형용사</b>는 전부 i어간 방식으로 변합니다 — fortium, fortī, fortia.</p>'},
    ],
    reading: {
      title: 'Vīta brevis, ars longa',
      source: '히포크라테스 잠언의 라틴어 번역 (세네카가 인용)',
      intro: '형용사가 명사와 어떻게 맞물리는지 보면서 읽습니다. 각 줄에서 <b>형용사가 어느 명사에 붙었는지</b> 찾아보세요.',
      lines: [
        {t:'Vīta brevis, ars longa,', say:'Wita brewis, ars longa,', m:{kr:'인생은 짧고 예술은 길며,'},
         note:[{w:'brevis', m:'짧은 (3변화형, vīta가 여성이라 -is 공용형)'},{w:'longa', m:'긴 (1·2변화형, ars가 여성이라 -a)'}]},
        {t:'occāsiō praeceps,', say:'okkasio praikeps,', m:{kr:'기회는 순식간이고,'},
         note:[{w:'occāsiō', m:'기회 (f. 3변화, 속격 occāsiōnis)'},{w:'praeceps', m:'성급한, 순식간의'}]},
        {t:'experīmentum perīculōsum,', say:'eksperimentum perikulosum,', m:{kr:'실험은 위험하며,'},
         note:[{w:'experīmentum', m:'실험 (n. 2변화)'},{w:'perīculōsum', m:'위험한 (중성이라 -um)'}]},
        {t:'iūdicium difficile.', say:'iudikium diffikile.', m:{kr:'판단은 어렵다.'},
         note:[{w:'iūdicium', m:'판단 (n. 2변화)'},{w:'difficile', m:'어려운 (3변화형 중성 -e)'}]},
        {t:'Cīvis Rōmānus sum.', say:'Kiwis Romanus sum.', m:{kr:'나는 로마 시민이다.'},
         note:[{w:'cīvis', m:'시민 (i어간 3변화)'},{w:'Rōmānus', m:'로마의 (1·2변화형 — 명사가 3변화여도 형용사는 자기 부류대로)'}], p:true},
        {t:'Omnia mūtantur, nihil interit.', say:'Omnia mutantur, nihil interit.', m:{kr:'모든 것은 변하지만 사라지는 것은 없다.'},
         note:[{w:'omnia', m:'모든 것들 (omnis의 중성 복수 — i어간이라 -ia)'},{w:'mūtantur', m:'변한다 (수동태)'}]},
      ],
      after: '<h3>눈여겨볼 것</h3><p><b>Cīvis Rōmānus</b> — 명사는 3변화 i어간, 형용사는 1·2변화형입니다. 어미가 달라 보여도 <u>둘 다 남성·단수·주격</u>이라 정상입니다.</p><p><b>Omnia</b> — omnis의 중성 복수 주격이 -ia인 것은 3변화 형용사가 i어간 방식을 따르기 때문입니다. 보통 3변화 중성이면 omn<b>a</b>가 됐겠지요.</p>',
    },
    exercises: [
      {type:'choice', q:'사전형이 「fortis, forte」인 형용사의 부류는?', options:['1·2변화형','3변화형','4변화형','불규칙'], answer:1},
      {type:'choice', q:'「mīles bonus」가 정상인 이유는?', options:['mīles가 2변화라서','형용사는 명사의 변화가 아니라 성·수·격만 맞추므로','bonus가 3변화형이라서','예외적 표현이라서'], answer:1},
      {type:'choice', q:'다음 중 i어간 <b>아닌</b> 것은?', options:['urbs, urbis','cīvis, cīvis','rēx, rēgis','mare, maris'], answer:2, why:'rēx는 주격 1음절·속격 2음절이고 자음 하나로 끝나 보통 3변화입니다.'},
      {type:'choice', q:'「omnis」의 중성 복수 주격은?', options:['omna','omnia','omnēs','omnium'], answer:1, why:'3변화 형용사는 i어간 방식이라 -ia.'},
      {type:'blank', text:'Cīvis Rōmānus ___. (나는 로마 시민이다)', answer:'sum', ko:'나는 로마 시민이다'},
    ],
    quiz: [
      {type:'choice', q:'형용사 사전형이 「ācer, ācris, ācre」인 것이 알려주는 것은?', options:['1·2변화형이다','세 성의 형태가 각각 다른 3변화형이다','불규칙이다','비교급이다'], answer:1},
      {type:'choice', q:'i어간의 속격 복수 어미는?', options:['-um','-ium','-ārum','-ōrum'], answer:1},
      {type:'choice', q:'「puella fortis」에서 fortis의 성·수·격은?', options:['남성 단수 주격','여성 단수 주격','여성 복수 주격','중성 단수 주격'], answer:1, why:'puella가 여성 단수 주격이므로 형용사도 그렇게 맞춥니다. fortis는 남녀 공용형.'},
      {type:'choice', q:'「mare」의 탈격 단수는?', options:['mare','marī','mari','mārum'], answer:1, why:'중성 i어간의 탈격은 -ī.'},
      {type:'blocks', answer:'Mīles fortis bellum amat', answers:['Bellum mīles fortis amat','Mīles fortis amat bellum'], ko:'용감한 병사가 전쟁을 좋아한다', distractors:['forte','bellī']},
    ],
  },

  /* ─────────────── LEVEL 6 ─────────────── */
  {
    level: 6, cefr: '4·5변화·대명사', phase: 'noun',
    title: '4·5변화와 대명사',
    desc: '남은 두 변화는 규모가 작습니다. 대신 라틴어 문장에 끊임없이 나오는 대명사 is/hic/ille를 익혀 명사 체계를 마무리합니다.',
    words: [
      {w:'manus', say:'manus', ipa:'manus, manūs (f.)', m:{kr:'손, 부대'}, pos:'명사', ex:'Manus manum lavat.', exSay:'Manus manum lawat.', exm:{kr:'손이 손을 씻는다(서로 돕는다).'}, tip:{kr:'4변화인데 여성입니다. 4변화는 대부분 남성이라 예외로 외웁니다.'}},
      {w:'senātus', say:'senatus', ipa:'senātus, senātūs (m.)', m:{kr:'원로원'}, pos:'명사', ex:'Senātus populusque Rōmānus', exSay:'Senatus populusque Romanus', exm:{kr:'로마의 원로원과 인민 (SPQR)'}},
      {w:'exercitus', say:'exerkitus', ipa:'exercitus, exercitūs (m.)', m:{kr:'군대'}, pos:'명사', ex:'Exercitus magnus erat.', exSay:'Exerkitus magnus erat.', exm:{kr:'군대는 컸다.'}},
      {w:'domus', say:'domus', ipa:'domus, domūs (f.)', m:{kr:'집'}, pos:'명사', ex:'Domus mea parva est.', exSay:'Domus mea parwa est.', exm:{kr:'내 집은 작다.'}},
      {w:'diēs', say:'dies', ipa:'diēs, diēī (m.)', m:{kr:'날, 하루'}, pos:'명사', ex:'Diēs longus est.', exSay:'Dies longus est.', exm:{kr:'하루가 길다.'}, tip:{kr:'5변화. 보통 남성이지만 "정해진 날짜"를 뜻할 때는 여성이 되기도 합니다.'}},
      {w:'rēs', say:'res', ipa:'rēs, reī (f.)', m:{kr:'것, 일, 사물'}, pos:'명사', ex:'Rēs pūblica', exSay:'Res publika', exm:{kr:'공적인 것 = 국가, 공화국'}, tip:{kr:'뜻이 가장 넓은 명사. rēs pūblica가 republic의 어원입니다.'}},
      {w:'fidēs', say:'fides', ipa:'fidēs, fideī (f.)', m:{kr:'믿음, 신의'}, pos:'명사', ex:'Fidēs Rōmāna', exSay:'Fides Romana', exm:{kr:'로마인의 신의'}},
      {w:'is', say:'is', ipa:'is, ea, id', m:{kr:'그, 그것 (3인칭 대명사)'}, pos:'대명사', ex:'Is rēx erat.', exSay:'Is rex erat.', exm:{kr:'그는 왕이었다.'}, tip:{kr:'가장 중립적인 지시어. 영어 he/she/it 자리를 대신합니다.'}},
      {w:'hic', say:'hik', ipa:'hic, haec, hoc', m:{kr:'이, 이것 (화자 가까이)'}, pos:'대명사', ex:'Hic liber meus est.', exSay:'Hik liber meus est.', exm:{kr:'이 책은 내 것이다.'}},
      {w:'ille', say:'ille', ipa:'ille, illa, illud', m:{kr:'저, 저것 (멀리)'}, pos:'대명사', ex:'Illa fēmina rēgīna est.', exSay:'Illa femina regina est.', exm:{kr:'저 여자는 여왕이다.'}, tip:{kr:'프랑스어 il, 스페인어 él, 이탈리아어 lui의 조상입니다.'}},
      {w:'quī', say:'qui', ipa:'quī, quae, quod', m:{kr:'~하는 (관계대명사)'}, pos:'대명사', ex:'Vir quī venit', exSay:'Wir qui wenit', exm:{kr:'오는 그 남자'}},
      {w:'ego', say:'ego', ipa:'ego, meī', m:{kr:'나'}, pos:'대명사', ex:'Ego sum.', exSay:'Ego sum.', exm:{kr:'내가 그렇다.'}, tip:{kr:'동사가 이미 주어를 담으므로, 굳이 쓰면 강조입니다.'}},
      {w:'tū', say:'tu', ipa:'tū, tuī', m:{kr:'너'}, pos:'대명사', ex:'Et tū, Brūte?', exSay:'Et tu, Brute?', exm:{kr:'브루투스, 너마저?'}},
      {w:'nōs', say:'nos', ipa:'nōs, nostrī', m:{kr:'우리'}, pos:'대명사', ex:'Nōs Rōmānī sumus.', exSay:'Nos Romani sumus.', exm:{kr:'우리는 로마인이다.'}},
      {w:'meus', say:'meus', ipa:'meus, -a, -um', m:{kr:'나의'}, pos:'형용사', ex:'liber meus', exSay:'liber meus', exm:{kr:'내 책'}},
      {w:'liber', say:'liber', ipa:'liber, librī (m.)', m:{kr:'책'}, pos:'명사', ex:'Liber bonus est.', exSay:'Liber bonus est.', exm:{kr:'좋은 책이다.'}, tip:{kr:'līber(자유로운)와 마크론 하나로 갈립니다.'}},
      {w:'pūblicus', say:'publikus', ipa:'pūblicus, -a, -um', m:{kr:'공적인'}, pos:'형용사', ex:'rēs pūblica', exSay:'res publika', exm:{kr:'국가'}},
      {w:'veniō', say:'wenio', ipa:'veniō, venīre, vēnī, ventum', m:{kr:'오다'}, pos:'동사', ex:'Vēnī, vīdī, vīcī.', exSay:'Weni, widi, wiki.', exm:{kr:'왔노라, 보았노라, 이겼노라.'}},
    ],
    grammar: [
      {title:'4변화와 5변화 — 작지만 자주 나온다', html:'<p><b>4변화</b> (속격 <b>-ūs</b>) — 대부분 남성. manus·domus만 여성.</p><table><tr><th>격</th><th>단수</th><th>복수</th></tr><tr><td>주격</td><td>man<b>us</b></td><td>man<b>ūs</b></td></tr><tr><td>속격</td><td>man<b>ūs</b></td><td>man<b>uum</b></td></tr><tr><td>여격</td><td>man<b>uī</b></td><td>man<b>ibus</b></td></tr><tr><td>대격</td><td>man<b>um</b></td><td>man<b>ūs</b></td></tr><tr><td>탈격</td><td>man<b>ū</b></td><td>man<b>ibus</b></td></tr></table><p>⚠️ <b>manus</b>(주격 단수)와 <b>manūs</b>(속격 단수·주대격 복수)가 마크론 하나로 갈립니다. 마크론 없는 실제 텍스트에서는 문맥으로 판별합니다.</p><p><b>5변화</b> (속격 <b>-eī/-ēī</b>) — 거의 전부 여성. 낱말 수가 적고 <b>rēs</b>와 <b>diēs</b>가 압도적으로 자주 나옵니다.</p><table><tr><td>주격</td><td>rēs</td><td>rēs</td></tr><tr><td>속격</td><td>re<b>ī</b></td><td>rē<b>rum</b></td></tr><tr><td>대격</td><td>re<b>m</b></td><td>rēs</td></tr><tr><td>탈격</td><td>rē</td><td>rē<b>bus</b></td></tr></table>'},
      {title:'다섯 변화 한눈에 — 속격이 모든 것을 정한다', html:'<table><tr><th>변화</th><th>속격 단수</th><th>대표</th><th>주된 성</th></tr><tr><td>1</td><td>-ae</td><td>puella, puellae</td><td>여성</td></tr><tr><td>2</td><td>-ī</td><td>liber, librī</td><td>남성·중성</td></tr><tr><td>3</td><td>-is</td><td>rēx, rēgis</td><td>전부</td></tr><tr><td>4</td><td>-ūs</td><td>manus, manūs</td><td>남성</td></tr><tr><td>5</td><td>-eī</td><td>rēs, reī</td><td>여성</td></tr></table><p>💡 이것이 라틴어 명사 체계의 전부입니다. <b>속격 어미 다섯 개</b>만 보면 어느 변화인지 즉시 알 수 있고, 그러면 나머지 어미가 따라옵니다.</p><p>사전이 <b>rēs, reī, f.</b>처럼 적는 이유가 여기 있습니다 — 주격·속격·성 셋이면 그 명사의 모든 형태가 결정됩니다.</p>'},
      {title:'대명사 셋 — 거리로 나뉜다', html:'<table><tr><th></th><th>남성</th><th>여성</th><th>중성</th><th>뜻</th></tr><tr><td><b>is</b></td><td>is</td><td>ea</td><td>id</td><td>그 (중립)</td></tr><tr><td><b>hic</b></td><td>hic</td><td>haec</td><td>hoc</td><td>이 (가까이)</td></tr><tr><td><b>ille</b></td><td>ille</td><td>illa</td><td>illud</td><td>저 (멀리)</td></tr></table><p>대명사는 형용사처럼 <b>명사를 꾸미기도</b> 하고 <b>홀로 서기도</b> 합니다.<br><b>hic liber</b> = 이 책 (꾸밈) / <b>hic</b> = 이 사람 (홀로)</p><p>⚠️ 대명사 변화는 명사와 조금 다릅니다. 특히 <b>속격 단수 -īus</b>, <b>여격 단수 -ī</b>가 세 성 공통입니다: eius·huius·illīus / eī·huic·illī.</p><p>💡 <b>ille</b>는 로망스어 정관사의 조상입니다. 프랑스어 le, 스페인어 el, 이탈리아어 il 이 전부 여기서 나왔습니다.</p>'},
    ],
    reading: {
      title: 'Vēnī, vīdī, vīcī — 그리고 다른 유명한 말들',
      source: '카이사르·수에토니우스·플루타르코스 전승',
      intro: '지금까지 배운 다섯 변화와 대명사가 실제 문장에 어떻게 나타나는지 봅니다.',
      lines: [
        {t:'Vēnī, vīdī, vīcī.', say:'Weni, widi, wiki.', m:{kr:'왔노라, 보았노라, 이겼노라.'},
         note:[{w:'vēnī', m:'나는 왔다 (veniō의 완료 — 다음 단계에서 배웁니다)'},{w:'vīcī', m:'나는 이겼다 (vincō)'}]},
        {t:'Et tū, Brūte?', say:'Et tu, Brute?', m:{kr:'브루투스, 너마저?'},
         note:[{w:'tū', m:'너 (주격)'},{w:'Brūte', m:'브루투스야 (호격 — 2변화 -us는 호격에서 -e)'}]},
        {t:'Alea iacta est.', say:'Alea iakta est.', m:{kr:'주사위는 던져졌다.'},
         note:[{w:'alea', m:'주사위 (f. 1변화)'},{w:'iacta est', m:'던져졌다 (수동 완료)'}]},
        {t:'Senātus populusque Rōmānus.', say:'Senatus populusque Romanus.', m:{kr:'로마의 원로원과 인민. (SPQR)'},
         note:[{w:'senātus', m:'원로원 (4변화 주격)'},{w:'-que', m:'그리고 (낱말 뒤에 붙는 접속사)'}]},
        {t:'Rēs pūblica rēs populī est.', say:'Res publika res populi est.', m:{kr:'국가란 인민의 것이다.'},
         note:[{w:'rēs', m:'것 (5변화)'},{w:'populī', m:'인민의 (속격)'}], p:true},
        {t:'Hic liber meus est; ille tuus.', say:'Hik liber meus est; ille tuus.', m:{kr:'이 책은 내 것이고, 저것은 네 것이다.'},
         note:[{w:'hic', m:'이 (가까이)'},{w:'ille', m:'저것 (멀리, 홀로 서서 대명사로)'}]},
        {t:'Manus manum lavat.', say:'Manus manum lawat.', m:{kr:'손이 손을 씻는다 — 서로 돕는다.'},
         note:[{w:'manus', m:'손 (4변화 주격)'},{w:'manum', m:'손을 (대격)'}]},
        {t:'Ō tempora, ō mōrēs!', say:'O tempora, o mores!', m:{kr:'오 시대여, 오 세태여!'},
         note:[{w:'tempora', m:'시대들 (tempus의 중성 복수 — 호격)'},{w:'mōrēs', m:'풍습들 (mōs, mōris의 복수)'}]},
      ],
      after: '<h3>여기까지 오면</h3><p>라틴어 <b>명사 체계 전체</b>를 지난 셈입니다. 다섯 변화, 여섯 격, 세 성, 형용사 두 부류, 대명사.</p><p>남은 절반은 <b>동사</b>입니다. <b>Vēnī, vīdī, vīcī</b>의 세 낱말이 전부 완료시제인데, 지금은 현재형만 배운 상태입니다. 다음 단계부터 2·3·4활용과 여섯 시제로 들어갑니다.</p>',
    },
    exercises: [
      {type:'choice', q:'4변화 명사임을 알려주는 속격 어미는?', options:['-ae','-ī','-is','-ūs'], answer:3},
      {type:'choice', q:'「rēs, reī」는 몇 변화입니까?', options:['3변화','4변화','5변화','불규칙'], answer:2},
      {type:'choice', q:'「hic, haec, hoc」이 뜻하는 거리는?', options:['화자 가까이','상대 가까이','둘 다에게서 멀리','거리와 무관'], answer:0},
      {type:'choice', q:'「Et tū, Brūte?」에서 Brūte의 격은?', options:['주격','대격','호격','탈격'], answer:2, why:'부르는 말이므로 호격. 2변화 -us는 호격에서 -e가 됩니다.'},
      {type:'blank', text:'Hic ___ meus est. (이 책은 내 것이다)', answer:'liber', ko:'이 책은 내 것이다'},
    ],
    quiz: [
      {type:'choice', q:'명사의 변화 종류를 결정하는 것은?', options:['주격 어미','속격 어미','성','대격 어미'], answer:1},
      {type:'choice', q:'4변화 중 <b>여성</b>인 낱말은?', options:['senātus','exercitus','manus','portus'], answer:2, why:'manus와 domus가 4변화의 여성 예외입니다.'},
      {type:'choice', q:'로망스어 정관사(le·el·il)의 조상이 된 라틴어 대명사는?', options:['is','hic','ille','quī'], answer:2},
      {type:'choice', q:'「Senātus populusque Rōmānus」에서 -que의 뜻은?', options:['그러나','그리고','또는','~때문에'], answer:1, why:'낱말 뒤에 붙는 접속사입니다.'},
      {type:'choice', q:'대명사의 속격 단수 어미로 세 성에 공통인 것은?', options:['-ae','-ī','-īus','-is'], answer:2, why:'eius · huius · illīus.'},
    ],
  },

  ]
});
