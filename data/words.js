/* 오늘의 단어 — 하루에 하나씩 순서대로 보여준다.
   추가하려면 이 배열 끝에 항목을 덧붙이면 된다.
   뜻풀이와 예문은 직접 작성한 것이라 저작권 문제가 없다.

   시험용 고급 어휘 대신 '일상에서 실제로 입에 오르는 말'만 담았다.
   아침에 일어나서 잠들 때까지 하루 동안 거치는 장면 순서로 묶여 있다.
   장면별로 몰아 보면 한 상황에서 쓰는 말이 한꺼번에 잡힌다.

   word  단어       ipa  발음기호   kr   한글 발음   pos  품사
   ko    우리말 뜻   ex   예문       exKo 예문 해석   tip  쓰임새 한 줄

   ex(예문)는 읽어주기 버튼으로 소리 내어 들려주므로,
   말로 뱉었을 때 어색하지 않은 문장으로 쓴다. */

const WORDS = [

  /* ── 아침·잠 ───────────────────────────────── */

  { word:"alarm", ipa:"/əˈlɑːrm/", kr:"얼람", pos:"명사", ko:"알람, 자명종",
    ex:"I set an alarm for six in the morning.", exKo:"아침 여섯 시로 알람을 맞췄다.",
    tip:"알람을 맞추면 set an alarm, 알람이 울리면 the alarm goes off." },

  { word:"oversleep", ipa:"/ˌoʊvərˈsliːp/", kr:"오버슬립", pos:"동사", ko:"늦잠을 자다",
    ex:"I overslept and missed the bus.", exKo:"늦잠을 자서 버스를 놓쳤다.",
    tip:"과거형은 overslept. '늦게 잤다'가 아니라 '늦게 일어났다'는 뜻이다." },

  { word:"snooze", ipa:"/snuːz/", kr:"스누즈", pos:"동사·명사", ko:"알람을 잠깐 미루다, 선잠",
    ex:"Stop hitting snooze and get up.", exKo:"알람 그만 미루고 일어나.",
    tip:"폰 알람의 '다시 알림' 버튼이 그대로 snooze다." },

  { word:"sleepy", ipa:"/ˈsliːpi/", kr:"슬리피", pos:"형용사", ko:"졸린",
    ex:"I get sleepy right after lunch.", exKo:"나는 점심 먹고 나면 바로 졸리다.",
    tip:"tired(피곤한)와 다르다. 졸음이 오는 상태는 sleepy." },

  { word:"yawn", ipa:"/jɔːn/", kr:"욘", pos:"동사·명사", ko:"하품하다, 하품",
    ex:"She yawned through the whole meeting.", exKo:"그는 회의 내내 하품을 했다.",
    tip:"w는 소리 내지 않는다. '야운'이 아니라 '욘'." },

  { word:"stretch", ipa:"/stretʃ/", kr:"스트레치", pos:"동사·명사", ko:"기지개를 켜다, 늘이다",
    ex:"Stretch your back before you sit down.", exKo:"앉기 전에 허리를 좀 펴라.",
    tip:"운동 전 '스트레칭'이 여기서 나왔다. 옷이 늘어나는 것도 stretch." },

  { word:"brush", ipa:"/brʌʃ/", kr:"브러시", pos:"동사·명사", ko:"닦다, 빗다 / 솔",
    ex:"Brush your teeth before you leave.", exKo:"나가기 전에 이 닦아.",
    tip:"이를 닦는 것도, 머리를 빗는 것도 다 brush다." },

  { word:"rinse", ipa:"/rɪns/", kr:"린스", pos:"동사", ko:"헹구다",
    ex:"Rinse the cup and put it back.", exKo:"컵을 헹궈서 제자리에 둬.",
    tip:"머리에 바르는 '린스'는 영어로 conditioner다. 뜻이 전혀 다르다." },

  { word:"towel", ipa:"/ˈtaʊəl/", kr:"타월", pos:"명사", ko:"수건",
    ex:"Hand me a clean towel, please.", exKo:"깨끗한 수건 하나만 줘.",
    tip:"주방에서 쓰면 dish towel, 목욕용은 bath towel." },

  { word:"blanket", ipa:"/ˈblæŋkɪt/", kr:"블랭킷", pos:"명사", ko:"담요, 이불",
    ex:"He pulled the blanket over his head.", exKo:"그는 이불을 머리까지 뒤집어썼다.",
    tip:"두꺼운 겨울 이불은 comforter라고 부른다." },

  { word:"pillow", ipa:"/ˈpɪloʊ/", kr:"필로우", pos:"명사", ko:"베개",
    ex:"This pillow is too soft for me.", exKo:"이 베개는 나한테 너무 물렁하다.",
    tip:"베갯잇은 pillowcase." },

  { word:"nap", ipa:"/næp/", kr:"냅", pos:"명사·동사", ko:"낮잠, 잠깐 자다",
    ex:"I took a short nap on the couch.", exKo:"소파에서 잠깐 눈을 붙였다.",
    tip:"낮잠을 자다는 take a nap. sleep a nap이라고 하지 않는다." },

  { word:"exhausted", ipa:"/ɪɡˈzɔːstɪd/", kr:"이그조스티드", pos:"형용사", ko:"기진맥진한, 녹초가 된",
    ex:"I was exhausted after the long trip.", exKo:"긴 여행 뒤라 완전히 지쳤다.",
    tip:"tired보다 훨씬 세다. '피곤한'이 아니라 '뻗은'에 가깝다." },

  /* ── 집안일 ───────────────────────────────── */

  { word:"laundry", ipa:"/ˈlɔːndri/", kr:"론드리", pos:"명사", ko:"빨래, 세탁물",
    ex:"I have to do the laundry tonight.", exKo:"오늘 밤에 빨래를 해야 한다.",
    tip:"빨래하다는 do the laundry. wash the laundry라고는 잘 안 한다." },

  { word:"chore", ipa:"/tʃɔːr/", kr:"초어", pos:"명사", ko:"집안일, 허드렛일",
    ex:"We split the chores every week.", exKo:"우리는 매주 집안일을 나눈다.",
    tip:"보통 복수형 chores로 쓴다. '귀찮은 일'이라는 뉘앙스가 깔려 있다." },

  { word:"tidy", ipa:"/ˈtaɪdi/", kr:"타이디", pos:"형용사·동사", ko:"정돈된, 치우다",
    ex:"Let's tidy up before they arrive.", exKo:"그들이 오기 전에 좀 치우자.",
    tip:"치우다는 보통 tidy up으로 up을 붙여 쓴다." },

  { word:"messy", ipa:"/ˈmesi/", kr:"메시", pos:"형용사", ko:"어질러진, 지저분한",
    ex:"Sorry, my room is a little messy.", exKo:"미안, 방이 좀 어질러져 있어.",
    tip:"상황이 복잡하게 꼬였을 때도 messy를 쓴다." },

  { word:"sweep", ipa:"/swiːp/", kr:"스윕", pos:"동사", ko:"비로 쓸다",
    ex:"He swept the floor without being asked.", exKo:"그는 시키지도 않았는데 바닥을 쓸었다.",
    tip:"과거형은 swept. 진공청소기로 미는 건 vacuum." },

  { word:"vacuum", ipa:"/ˈvækjuːm/", kr:"배큠", pos:"동사·명사", ko:"청소기로 밀다, 진공",
    ex:"I vacuum the living room every Sunday.", exKo:"나는 일요일마다 거실을 청소기로 민다.",
    tip:"u가 두 번 들어간다. 청소기 자체는 vacuum cleaner." },

  { word:"dust", ipa:"/dʌst/", kr:"더스트", pos:"명사·동사", ko:"먼지, 먼지를 털다",
    ex:"There is dust on top of the shelf.", exKo:"선반 위에 먼지가 쌓였다.",
    tip:"명사는 '먼지', 동사는 반대로 '먼지를 없애다'라는 뜻이 된다." },

  { word:"trash", ipa:"/træʃ/", kr:"트래시", pos:"명사", ko:"쓰레기",
    ex:"Can you take out the trash?", exKo:"쓰레기 좀 내다 버려 줄래?",
    tip:"미국은 trash, 영국은 rubbish. 쓰레기통은 trash can." },

  { word:"dishes", ipa:"/ˈdɪʃɪz/", kr:"디시즈", pos:"명사", ko:"설거지거리, 그릇",
    ex:"I'll cook if you do the dishes.", exKo:"네가 설거지하면 내가 요리할게.",
    tip:"설거지하다는 do the dishes 또는 wash the dishes." },

  { word:"sink", ipa:"/sɪŋk/", kr:"싱크", pos:"명사·동사", ko:"개수대, 세면대 / 가라앉다",
    ex:"Just leave the bowl in the sink.", exKo:"그릇은 그냥 싱크대에 둬.",
    tip:"'싱크대'는 여기서 온 말. 동사로 쓰면 '가라앉다'." },

  { word:"faucet", ipa:"/ˈfɔːsɪt/", kr:"포싯", pos:"명사", ko:"수도꼭지",
    ex:"The faucet keeps dripping at night.", exKo:"밤에 수도꼭지가 계속 똑똑 샌다.",
    tip:"영국에서는 tap이라고 한다. 둘 다 통한다." },

  { word:"leak", ipa:"/liːk/", kr:"리크", pos:"동사·명사", ko:"새다, 누수",
    ex:"Water is leaking under the sink.", exKo:"싱크대 밑으로 물이 새고 있다.",
    tip:"정보가 밖으로 흘러나가는 것도 leak. '유출'이 그 뜻이다." },

  { word:"drawer", ipa:"/drɔːr/", kr:"드로어", pos:"명사", ko:"서랍",
    ex:"The scissors are in the top drawer.", exKo:"가위는 맨 위 서랍에 있다.",
    tip:"철자에 w가 있지만 '드로워'가 아니라 '드로어'에 가깝다." },

  { word:"closet", ipa:"/ˈklɑːzət/", kr:"클라짓", pos:"명사", ko:"옷장, 붙박이장",
    ex:"Hang your coat in the closet.", exKo:"코트는 옷장에 걸어 둬.",
    tip:"방에 붙어 있는 수납공간 전체를 뜻한다. 가구 옷장은 wardrobe." },

  { word:"shelf", ipa:"/ʃelf/", kr:"셸프", pos:"명사", ko:"선반",
    ex:"Put the box on the bottom shelf.", exKo:"상자는 맨 아래 선반에 올려 둬.",
    tip:"복수형이 shelfs가 아니라 shelves다." },

  { word:"outlet", ipa:"/ˈaʊtlet/", kr:"아웃렛", pos:"명사", ko:"콘센트 / 할인 매장",
    ex:"Is there an outlet near the table?", exKo:"테이블 근처에 콘센트 있나요?",
    tip:"'콘센트'는 영어가 아니다. 미국은 outlet, 영국은 socket." },

  { word:"plug", ipa:"/plʌɡ/", kr:"플러그", pos:"동사·명사", ko:"꽂다, 플러그",
    ex:"Plug in the charger before you sleep.", exKo:"자기 전에 충전기를 꽂아 둬.",
    tip:"꽂다는 plug in, 뽑다는 unplug." },

  { word:"hang", ipa:"/hæŋ/", kr:"행", pos:"동사", ko:"걸다, 널다",
    ex:"Hang the towels outside to dry.", exKo:"수건은 밖에 널어서 말려.",
    tip:"과거형은 hung. 빨래를 너는 것도, 액자를 거는 것도 hang." },

  { word:"fold", ipa:"/foʊld/", kr:"폴드", pos:"동사", ko:"개다, 접다",
    ex:"He folded the laundry while watching TV.", exKo:"그는 TV를 보면서 빨래를 갰다.",
    tip:"종이를 접는 것도 fold. 반대는 unfold." },

  { word:"wipe", ipa:"/waɪp/", kr:"와이프", pos:"동사", ko:"훔치다, 닦아 내다",
    ex:"Wipe the table with a wet cloth.", exKo:"젖은 행주로 식탁을 닦아.",
    tip:"물기나 얼룩을 문질러 없애는 동작. 물로 씻는 건 wash." },

  { word:"spill", ipa:"/spɪl/", kr:"스필", pos:"동사·명사", ko:"쏟다, 흘리다",
    ex:"I spilled coffee on my shirt.", exKo:"셔츠에 커피를 쏟았다.",
    tip:"엎지른 물은 되돌릴 수 없다는 속담이 don't cry over spilled milk." },

  { word:"stain", ipa:"/steɪn/", kr:"스테인", pos:"명사·동사", ko:"얼룩, 얼룩지다",
    ex:"This stain won't come out.", exKo:"이 얼룩은 안 지워진다.",
    tip:"얼룩이 지워지다는 come out을 쓴다." },

  { word:"rent", ipa:"/rent/", kr:"렌트", pos:"명사·동사", ko:"월세, 빌리다",
    ex:"The rent goes up again next year.", exKo:"내년에 월세가 또 오른다.",
    tip:"집·차처럼 돈을 내고 빌리면 rent, 그냥 빌리면 borrow." },

  /* ── 부엌·요리 ───────────────────────────────── */

  { word:"groceries", ipa:"/ˈɡroʊsəriz/", kr:"그로서리즈", pos:"명사", ko:"장 본 식료품",
    ex:"I need to pick up a few groceries.", exKo:"장을 좀 봐야 한다.",
    tip:"장을 보다는 buy groceries 또는 do the grocery shopping." },

  { word:"fridge", ipa:"/frɪdʒ/", kr:"프리지", pos:"명사", ko:"냉장고",
    ex:"There's nothing in the fridge.", exKo:"냉장고에 아무것도 없다.",
    tip:"refrigerator의 줄임말. 말할 때는 거의 fridge만 쓴다." },

  { word:"leftovers", ipa:"/ˈleftoʊvərz/", kr:"레프트오버즈", pos:"명사", ko:"남은 음식",
    ex:"We had leftovers for lunch.", exKo:"점심은 남은 음식으로 때웠다.",
    tip:"항상 복수형. 한 끼 분량이라도 leftovers라고 한다." },

  { word:"microwave", ipa:"/ˈmaɪkrəweɪv/", kr:"마이크러웨이브", pos:"명사·동사", ko:"전자레인지, 데우다",
    ex:"Just microwave it for one minute.", exKo:"1분만 전자레인지에 돌려.",
    tip:"'전자레인지에 돌리다'가 그대로 동사로 쓰인다." },

  { word:"defrost", ipa:"/ˌdiːˈfrɔːst/", kr:"디프로스트", pos:"동사", ko:"해동하다, 녹이다",
    ex:"Defrost the meat before you cook it.", exKo:"요리하기 전에 고기를 해동해 둬.",
    tip:"전자레인지의 '해동' 버튼에 적혀 있는 그 단어다." },

  { word:"boil", ipa:"/bɔɪl/", kr:"보일", pos:"동사", ko:"끓이다, 삶다",
    ex:"Boil the water first.", exKo:"물부터 끓여.",
    tip:"삶은 달걀은 boiled egg." },

  { word:"fry", ipa:"/fraɪ/", kr:"프라이", pos:"동사", ko:"기름에 볶다, 부치다",
    ex:"Fry the onions until they turn brown.", exKo:"양파를 갈색이 될 때까지 볶아.",
    tip:"기름에 푹 담가 튀기는 건 deep-fry로 구분한다." },

  { word:"bake", ipa:"/beɪk/", kr:"베이크", pos:"동사", ko:"오븐에 굽다",
    ex:"She baked bread this morning.", exKo:"그는 오늘 아침에 빵을 구웠다.",
    tip:"오븐 안에서 굽는 게 bake, 불판 위에서 굽는 건 grill." },

  { word:"stir", ipa:"/stɜːr/", kr:"스터", pos:"동사", ko:"휘젓다, 섞다",
    ex:"Stir the soup so it doesn't burn.", exKo:"눌어붙지 않게 국을 저어.",
    tip:"볶음 요리 이름의 stir-fry가 여기서 나왔다." },

  { word:"chop", ipa:"/tʃɑːp/", kr:"찹", pos:"동사", ko:"썰다, 다지다",
    ex:"Chop the garlic into small pieces.", exKo:"마늘을 잘게 다져.",
    tip:"툭툭 내리쳐 써는 느낌. 얇게 저미면 slice." },

  { word:"peel", ipa:"/piːl/", kr:"필", pos:"동사·명사", ko:"껍질을 벗기다, 껍질",
    ex:"Peel the potatoes before boiling them.", exKo:"삶기 전에 감자 껍질을 벗겨.",
    tip:"감자칼은 peeler. 명사로 쓰면 껍질 자체를 뜻한다." },

  { word:"recipe", ipa:"/ˈresəpi/", kr:"레서피", pos:"명사", ko:"조리법, 레시피",
    ex:"I found this recipe online.", exKo:"이 조리법은 인터넷에서 찾았다.",
    tip:"강세가 맨 앞이다. '리사이프'가 아니라 '레서피'." },

  { word:"ingredient", ipa:"/ɪnˈɡriːdiənt/", kr:"인그리디언트", pos:"명사", ko:"재료",
    ex:"We're missing one ingredient.", exKo:"재료 하나가 빠졌다.",
    tip:"요리 재료뿐 아니라 성공의 '요소'라는 뜻으로도 쓴다." },

  { word:"spicy", ipa:"/ˈspaɪsi/", kr:"스파이시", pos:"형용사", ko:"매운, 향신료가 강한",
    ex:"Is this dish very spicy?", exKo:"이 음식 많이 매워요?",
    tip:"hot도 '맵다'는 뜻이지만 '뜨겁다'와 헷갈린다. spicy가 안전하다." },

  { word:"bland", ipa:"/blænd/", kr:"블랜드", pos:"형용사", ko:"싱거운, 밍밍한",
    ex:"The soup tastes a bit bland.", exKo:"국이 좀 싱겁다.",
    tip:"맛만이 아니라 '개성 없는 영화'처럼 밋밋한 것에도 쓴다." },

  { word:"crispy", ipa:"/ˈkrɪspi/", kr:"크리스피", pos:"형용사", ko:"바삭한",
    ex:"I like my toast crispy.", exKo:"나는 토스트를 바삭하게 굽는 게 좋다.",
    tip:"눅눅한 반대말은 soggy." },

  { word:"chewy", ipa:"/ˈtʃuːi/", kr:"츄이", pos:"형용사", ko:"쫄깃한, 질긴",
    ex:"These noodles are nice and chewy.", exKo:"이 면은 쫄깃해서 좋다.",
    tip:"칭찬이 될 수도, '질기다'는 불평이 될 수도 있다. 앞뒤 말로 갈린다." },

  { word:"starving", ipa:"/ˈstɑːrvɪŋ/", kr:"스타빙", pos:"형용사", ko:"몹시 배고픈",
    ex:"I'm starving. Let's eat something.", exKo:"배고파 죽겠다. 뭐라도 먹자.",
    tip:"hungry를 과장한 일상 표현. 진짜 굶주림에도 쓰는 말이라 상황은 가려 쓴다." },

  { word:"thirsty", ipa:"/ˈθɜːrsti/", kr:"써스티", pos:"형용사", ko:"목마른",
    ex:"Walking home made me thirsty.", exKo:"걸어오니 목이 말랐다.",
    tip:"th는 혀를 살짝 물고 내는 소리. '떠스티'가 아니다." },

  { word:"sip", ipa:"/sɪp/", kr:"십", pos:"동사·명사", ko:"홀짝이다, 한 모금",
    ex:"She sipped her tea slowly.", exKo:"그는 차를 천천히 홀짝였다.",
    tip:"벌컥벌컥 마시면 gulp. 조금씩 마시면 sip." },

  { word:"snack", ipa:"/snæk/", kr:"스낵", pos:"명사·동사", ko:"간식, 간식을 먹다",
    ex:"I need a snack before dinner.", exKo:"저녁 전에 간식이 좀 필요하다.",
    tip:"과자만이 아니라 끼니 사이에 먹는 모든 것을 뜻한다." },

  /* ── 밖에서 먹기 ───────────────────────────────── */

  { word:"order", ipa:"/ˈɔːrdər/", kr:"오더", pos:"동사·명사", ko:"주문하다, 주문",
    ex:"Are you ready to order?", exKo:"주문하시겠어요?",
    tip:"식당에서 가장 많이 듣는 문장이다. 대답은 Yes, I'll have..." },

  { word:"takeout", ipa:"/ˈteɪkaʊt/", kr:"테이크아웃", pos:"명사·형용사", ko:"포장 음식",
    ex:"Let's just get takeout tonight.", exKo:"오늘 저녁은 그냥 포장해 오자.",
    tip:"가게에서는 For here or to go?라고 묻는다. 포장이면 To go." },

  { word:"delivery", ipa:"/dɪˈlɪvəri/", kr:"딜리버리", pos:"명사", ko:"배달, 배송",
    ex:"The delivery takes about thirty minutes.", exKo:"배달은 30분쯤 걸린다.",
    tip:"동사는 deliver. 배달원은 delivery driver." },

  { word:"refill", ipa:"/ˈriːfɪl/", kr:"리필", pos:"명사·동사", ko:"리필, 다시 채우다",
    ex:"Can I get a refill on my coffee?", exKo:"커피 리필 되나요?",
    tip:"명사는 앞에, 동사는 뒤에 강세가 온다." },

  { word:"bill", ipa:"/bɪl/", kr:"빌", pos:"명사", ko:"계산서, 청구서",
    ex:"Could we have the bill, please?", exKo:"계산서 좀 주시겠어요?",
    tip:"미국 식당에서는 check라고도 한다. 전기·수도 요금 고지서도 bill." },

  { word:"split", ipa:"/splɪt/", kr:"스플릿", pos:"동사", ko:"나누다, 쪼개다",
    ex:"Let's split the bill.", exKo:"각자 내자.",
    tip:"더치페이는 콩글리시다. split the bill이나 go halves를 쓴다." },

  { word:"reservation", ipa:"/ˌrezərˈveɪʃn/", kr:"레저베이션", pos:"명사", ko:"예약",
    ex:"I made a reservation for seven.", exKo:"일곱 시로 예약했다.",
    tip:"식당·호텔은 reservation, 병원·미용실은 appointment." },

  { word:"straw", ipa:"/strɔː/", kr:"스트로", pos:"명사", ko:"빨대",
    ex:"Can I have a straw, please?", exKo:"빨대 하나 주시겠어요?",
    tip:"원래 뜻은 '지푸라기'. 옛날 빨대를 밀짚으로 만들어서 붙은 이름이다." },

  /* ── 장보기·쇼핑 ───────────────────────────────── */

  { word:"cart", ipa:"/kɑːrt/", kr:"카트", pos:"명사", ko:"쇼핑 카트, 장바구니",
    ex:"My cart is already full.", exKo:"카트가 벌써 꽉 찼다.",
    tip:"인터넷 쇼핑의 '장바구니'도 cart다. 영국은 trolley." },

  { word:"checkout", ipa:"/ˈtʃekaʊt/", kr:"체크아웃", pos:"명사", ko:"계산대, 결제",
    ex:"The line at the checkout was long.", exKo:"계산대 줄이 길었다.",
    tip:"호텔에서 나가는 것도 checkout. 문맥으로 갈린다." },

  { word:"cashier", ipa:"/kæˈʃɪr/", kr:"캐시어", pos:"명사", ko:"계산원",
    ex:"The cashier asked for my card.", exKo:"계산원이 카드를 달라고 했다.",
    tip:"강세가 뒤에 있다. '캐시어'보다 '캐시-어'에 가깝다." },

  { word:"receipt", ipa:"/rɪˈsiːt/", kr:"리시트", pos:"명사", ko:"영수증",
    ex:"Keep the receipt just in case.", exKo:"혹시 모르니 영수증은 챙겨 둬.",
    tip:"p는 소리 내지 않는다. '리십트'가 아니라 '리시트'." },

  { word:"refund", ipa:"/ˈriːfʌnd/", kr:"리펀드", pos:"명사·동사", ko:"환불, 환불하다",
    ex:"I'd like a refund for this.", exKo:"이거 환불하고 싶은데요.",
    tip:"환불받다는 get a refund. 교환은 exchange." },

  { word:"exchange", ipa:"/ɪksˈtʃeɪndʒ/", kr:"익스체인지", pos:"동사·명사", ko:"교환하다, 바꾸다",
    ex:"Can I exchange this for a bigger size?", exKo:"이걸 더 큰 사이즈로 바꿀 수 있나요?",
    tip:"환전도 exchange. 환율은 exchange rate." },

  { word:"discount", ipa:"/ˈdɪskaʊnt/", kr:"디스카운트", pos:"명사", ko:"할인",
    ex:"They gave me a ten percent discount.", exKo:"10퍼센트 깎아 줬다.",
    tip:"'세일 중'은 on sale. for sale은 '판매 중'이라 뜻이 다르다." },

  { word:"coupon", ipa:"/ˈkuːpɑːn/", kr:"쿠판", pos:"명사", ko:"쿠폰, 할인권",
    ex:"This coupon expires tomorrow.", exKo:"이 쿠폰은 내일 만료된다.",
    tip:"'큐폰'으로 읽는 사람도 많지만 '쿠판'이 더 흔하다." },

  { word:"try on", ipa:"/traɪ ɑːn/", kr:"트라이 온", pos:"동사구", ko:"입어 보다, 신어 보다",
    ex:"Can I try these on?", exKo:"이거 입어 봐도 되나요?",
    tip:"목적어가 대명사면 사이에 넣는다. try it on이 맞고 try on it은 틀리다." },

  { word:"fit", ipa:"/fɪt/", kr:"핏", pos:"동사·형용사", ko:"(치수가) 맞다",
    ex:"These shoes don't fit me.", exKo:"이 신발은 나한테 안 맞는다.",
    tip:"치수가 맞으면 fit, 어울리면 suit. 둘을 섞어 쓰지 않는다." },

  { word:"loose", ipa:"/luːs/", kr:"루스", pos:"형용사", ko:"헐렁한, 느슨한",
    ex:"The pants are a little loose.", exKo:"바지가 좀 헐렁하다.",
    tip:"lose(잃다)와 철자가 한 끗 차이다. loose는 '루스', lose는 '루즈'." },

  { word:"tight", ipa:"/taɪt/", kr:"타이트", pos:"형용사", ko:"꽉 끼는, 빡빡한",
    ex:"This shirt feels too tight.", exKo:"이 셔츠는 너무 꽉 낀다.",
    tip:"일정이 빡빡할 때도 a tight schedule이라고 한다." },

  { word:"secondhand", ipa:"/ˌsekəndˈhænd/", kr:"세컨핸드", pos:"형용사", ko:"중고의",
    ex:"I bought this desk secondhand.", exKo:"이 책상은 중고로 샀다.",
    tip:"used도 같은 뜻이다. 중고차는 보통 used car." },

  { word:"warranty", ipa:"/ˈwɔːrənti/", kr:"워런티", pos:"명사", ko:"품질 보증(서)",
    ex:"The phone is still under warranty.", exKo:"그 폰은 아직 보증 기간이다.",
    tip:"보증 기간 안이면 under warranty라고 표현한다." },

  { word:"afford", ipa:"/əˈfɔːrd/", kr:"어포드", pos:"동사", ko:"~할 형편이 되다",
    ex:"I can't afford a new car right now.", exKo:"지금은 새 차를 살 형편이 안 된다.",
    tip:"거의 언제나 can/can't와 함께 쓴다. 돈뿐 아니라 시간에도 쓴다." },

  /* ── 돈 ───────────────────────────────── */

  { word:"budget", ipa:"/ˈbʌdʒɪt/", kr:"버짓", pos:"명사·동사", ko:"예산, 예산을 짜다",
    ex:"We're on a tight budget this month.", exKo:"이번 달은 살림이 빠듯하다.",
    tip:"저렴하다는 뜻의 형용사로도 쓴다. budget hotel은 저가 호텔." },

  { word:"change", ipa:"/tʃeɪndʒ/", kr:"체인지", pos:"명사", ko:"잔돈, 거스름돈",
    ex:"Keep the change.", exKo:"잔돈은 됐어요.",
    tip:"'바꾸다'만 떠올리기 쉽지만 일상에서는 잔돈이라는 뜻으로 훨씬 자주 쓴다." },

  { word:"fee", ipa:"/fiː/", kr:"피", pos:"명사", ko:"수수료, 요금",
    ex:"There's no fee for the first year.", exKo:"첫 해에는 수수료가 없다.",
    tip:"서비스 대가는 fee, 교통 요금은 fare, 물건값은 price." },

  { word:"deposit", ipa:"/dɪˈpɑːzɪt/", kr:"디파짓", pos:"명사·동사", ko:"보증금, 예치금 / 입금하다",
    ex:"We paid a deposit on the apartment.", exKo:"아파트 보증금을 냈다.",
    tip:"전세·월세 보증금도 deposit. 반대말은 withdraw(인출)." },

  { word:"withdraw", ipa:"/wɪðˈdrɔː/", kr:"위드드로", pos:"동사", ko:"인출하다, 물러나다",
    ex:"I need to withdraw some cash.", exKo:"현금을 좀 뽑아야 한다.",
    tip:"돈을 빼는 것도, 대회에서 기권하는 것도 withdraw." },

  { word:"worth", ipa:"/wɜːrθ/", kr:"워쓰", pos:"형용사·명사", ko:"~할 가치가 있는",
    ex:"That movie is worth watching twice.", exKo:"그 영화는 두 번 볼 만하다.",
    tip:"뒤에는 동사원형이 아니라 -ing가 온다. worth to see는 틀린 말이다." },

  { word:"owe", ipa:"/oʊ/", kr:"오우", pos:"동사", ko:"빚지다, 신세 지다",
    ex:"I still owe you five dollars.", exKo:"아직 너한테 5달러 빚졌다.",
    tip:"I owe you one.은 '한 번 신세 졌다'는 인사말." },

  /* ── 오가는 길 ───────────────────────────────── */

  { word:"commute", ipa:"/kəˈmjuːt/", kr:"커뮤트", pos:"동사·명사", ko:"통근하다, 출퇴근길",
    ex:"My commute takes about an hour.", exKo:"출퇴근에 한 시간쯤 걸린다.",
    tip:"통근하는 사람은 commuter." },

  { word:"transfer", ipa:"/trænsˈfɜːr/", kr:"트랜스퍼", pos:"동사·명사", ko:"환승하다, 옮기다",
    ex:"Transfer to line two at the next stop.", exKo:"다음 역에서 2호선으로 갈아타세요.",
    tip:"돈을 보내는 '이체'도 transfer, 부서를 옮기는 것도 transfer." },

  { word:"fare", ipa:"/fer/", kr:"페어", pos:"명사", ko:"교통 요금",
    ex:"The bus fare went up again.", exKo:"버스 요금이 또 올랐다.",
    tip:"fair(공정한)와 소리가 같다. 철자로만 구분한다." },

  { word:"rush hour", ipa:"/rʌʃ ˈaʊər/", kr:"러시 아워", pos:"명사", ko:"혼잡 시간대",
    ex:"Let's leave before rush hour.", exKo:"혼잡 시간 전에 나가자.",
    tip:"한 시간이 아니라 출퇴근 시간대 전체를 뜻한다." },

  { word:"traffic", ipa:"/ˈtræfɪk/", kr:"트래픽", pos:"명사", ko:"차량 통행, 교통량",
    ex:"We were stuck in traffic for an hour.", exKo:"한 시간 동안 차가 막혀 갇혀 있었다.",
    tip:"차가 막힌다는 표현은 stuck in traffic 또는 heavy traffic." },

  { word:"detour", ipa:"/ˈdiːtʊr/", kr:"디투어", pos:"명사·동사", ko:"우회, 돌아가는 길",
    ex:"We took a detour around the construction.", exKo:"공사 구간을 피해 돌아갔다.",
    tip:"도로 표지판에 DETOUR라고 적혀 있으면 '우회'라는 뜻이다." },

  { word:"crosswalk", ipa:"/ˈkrɔːswɔːk/", kr:"크로스워크", pos:"명사", ko:"횡단보도",
    ex:"Wait at the crosswalk until it turns green.", exKo:"초록불이 될 때까지 횡단보도에서 기다려.",
    tip:"영국에서는 얼룩말 무늬를 따서 zebra crossing이라고 한다." },

  { word:"lane", ipa:"/leɪn/", kr:"레인", pos:"명사", ko:"차선, 좁은 길",
    ex:"He changed lanes without signaling.", exKo:"그는 깜빡이도 안 켜고 차선을 바꿨다.",
    tip:"수영장의 레인, 볼링장의 레인도 같은 단어." },

  { word:"license", ipa:"/ˈlaɪsns/", kr:"라이선스", pos:"명사", ko:"면허(증), 허가",
    ex:"Don't forget your driver's license.", exKo:"운전면허증 챙기는 거 잊지 마.",
    tip:"영국식 철자는 licence. 미국은 license로 통일한다." },

  { word:"ride", ipa:"/raɪd/", kr:"라이드", pos:"명사·동사", ko:"태워 주기, 타다",
    ex:"Do you need a ride home?", exKo:"집까지 태워 줄까?",
    tip:"Give me a ride.는 '나 좀 태워 줘'라는 아주 흔한 부탁." },

  { word:"drop off", ipa:"/drɑːp ɔːf/", kr:"드랍 오프", pos:"동사구", ko:"데려다주다, 내려 주다",
    ex:"I'll drop you off at the station.", exKo:"역에 내려 줄게.",
    tip:"반대는 pick up(데리러 가다). 짐이나 서류를 갖다 놓을 때도 쓴다." },

  { word:"pick up", ipa:"/pɪk ʌp/", kr:"픽 업", pos:"동사구", ko:"데리러 가다, 집어 들다",
    ex:"Can you pick me up at seven?", exKo:"일곱 시에 나 데리러 와 줄 수 있어?",
    tip:"물건을 사 오는 것, 전화를 받는 것도 pick up이다." },

  /* ── 몸·건강 ───────────────────────────────── */

  { word:"headache", ipa:"/ˈhedeɪk/", kr:"헤데이크", pos:"명사", ko:"두통",
    ex:"I have a bad headache today.", exKo:"오늘 머리가 몹시 아프다.",
    tip:"ache는 은근히 오래 아픈 통증. 치통은 toothache, 복통은 stomachache." },

  { word:"sore", ipa:"/sɔːr/", kr:"소어", pos:"형용사", ko:"쑤시는, 결리는",
    ex:"My legs are sore from yesterday.", exKo:"어제 때문에 다리가 쑤신다.",
    tip:"목이 아플 때는 sore throat. 운동 후 근육통에도 쓴다." },

  { word:"cough", ipa:"/kɔːf/", kr:"코프", pos:"동사·명사", ko:"기침하다, 기침",
    ex:"He's been coughing all night.", exKo:"그는 밤새 기침을 했다.",
    tip:"gh를 f로 소리 낸다. '코우그'가 아니라 '코프'." },

  { word:"sneeze", ipa:"/sniːz/", kr:"스니즈", pos:"동사·명사", ko:"재채기하다",
    ex:"I sneeze every spring.", exKo:"나는 봄마다 재채기를 한다.",
    tip:"옆에서 재채기하면 Bless you.라고 말해 주는 관습이 있다." },

  { word:"fever", ipa:"/ˈfiːvər/", kr:"피버", pos:"명사", ko:"열",
    ex:"She had a fever for two days.", exKo:"그는 이틀 동안 열이 났다.",
    tip:"열이 나다는 have a fever 또는 run a fever." },

  { word:"stuffy", ipa:"/ˈstʌfi/", kr:"스터피", pos:"형용사", ko:"코가 막힌, 답답한",
    ex:"My nose is stuffy again.", exKo:"코가 또 막혔다.",
    tip:"콧물이 흐르면 반대로 runny nose. 환기 안 된 방도 stuffy." },

  { word:"dizzy", ipa:"/ˈdɪzi/", kr:"디지", pos:"형용사", ko:"어지러운",
    ex:"I felt dizzy when I stood up.", exKo:"일어설 때 어지러웠다.",
    tip:"핑 도는 느낌. 속이 울렁거리면 nauseous." },

  { word:"itchy", ipa:"/ˈɪtʃi/", kr:"이치", pos:"형용사", ko:"가려운",
    ex:"This sweater makes my neck itchy.", exKo:"이 스웨터는 목이 가렵다.",
    tip:"긁다는 scratch. 가려움 자체는 itch." },

  { word:"bruise", ipa:"/bruːz/", kr:"브루즈", pos:"명사·동사", ko:"멍, 멍들다",
    ex:"I got a bruise on my knee.", exKo:"무릎에 멍이 들었다.",
    tip:"소리는 '브루즈'. 과일이 무르는 것도 bruise라고 한다." },

  { word:"swollen", ipa:"/ˈswoʊlən/", kr:"스월런", pos:"형용사", ko:"부은",
    ex:"My ankle is still swollen.", exKo:"발목이 아직 부어 있다.",
    tip:"동사 swell(붓다)의 과거분사. 눈이 부으면 swollen eyes." },

  { word:"pharmacy", ipa:"/ˈfɑːrməsi/", kr:"파머시", pos:"명사", ko:"약국",
    ex:"There's a pharmacy across the street.", exKo:"길 건너에 약국이 있다.",
    tip:"미국에서는 drugstore라고도 한다. 약사는 pharmacist." },

  { word:"prescription", ipa:"/prɪˈskrɪpʃn/", kr:"프리스크립션", pos:"명사", ko:"처방전",
    ex:"You need a prescription for this.", exKo:"이건 처방전이 있어야 해요.",
    tip:"처방 없이 살 수 있는 약은 over-the-counter." },

  { word:"appointment", ipa:"/əˈpɔɪntmənt/", kr:"어포인트먼트", pos:"명사", ko:"(병원·미용실) 예약, 약속",
    ex:"I have a dentist appointment at three.", exKo:"세 시에 치과 예약이 있다.",
    tip:"친구와의 약속은 plans라고 한다. appointment는 공적인 예약." },

  { word:"checkup", ipa:"/ˈtʃekʌp/", kr:"체컵", pos:"명사", ko:"건강검진",
    ex:"I get a checkup once a year.", exKo:"나는 일 년에 한 번 건강검진을 받는다.",
    tip:"받는다는 뜻으로 get이나 have를 쓴다. take a checkup은 어색하다." },

  { word:"workout", ipa:"/ˈwɜːrkaʊt/", kr:"워크아웃", pos:"명사", ko:"운동",
    ex:"I skipped my workout today.", exKo:"오늘은 운동을 걸렀다.",
    tip:"동사로 쓸 때는 띄어서 work out. 명사는 붙여 쓴다." },

  { word:"recover", ipa:"/rɪˈkʌvər/", kr:"리커버", pos:"동사", ko:"회복하다, 되찾다",
    ex:"It took a week to recover.", exKo:"회복하는 데 일주일 걸렸다.",
    tip:"병에서 낫는 것도, 잃어버린 물건을 되찾는 것도 recover." },

  /* ── 날씨 ───────────────────────────────── */

  { word:"humid", ipa:"/ˈhjuːmɪd/", kr:"휴미드", pos:"형용사", ko:"습한, 눅눅한",
    ex:"It gets really humid in July.", exKo:"7월이면 정말 습해진다.",
    tip:"우리 여름 날씨를 설명할 때 가장 정확한 단어다. 습도는 humidity." },

  { word:"chilly", ipa:"/ˈtʃɪli/", kr:"칠리", pos:"형용사", ko:"쌀쌀한",
    ex:"It's a bit chilly this morning.", exKo:"오늘 아침은 좀 쌀쌀하다.",
    tip:"고추 chili와 소리가 같지만 철자가 다르다." },

  { word:"freezing", ipa:"/ˈfriːzɪŋ/", kr:"프리징", pos:"형용사", ko:"몹시 추운",
    ex:"It's freezing outside.", exKo:"밖은 얼어붙을 만큼 춥다.",
    tip:"cold를 과장한 말. 반대로 몹시 더우면 boiling." },

  { word:"breeze", ipa:"/briːz/", kr:"브리즈", pos:"명사", ko:"산들바람",
    ex:"There's a nice breeze tonight.", exKo:"오늘 밤은 바람이 선선하다.",
    tip:"It's a breeze.라고 하면 '식은 죽 먹기'라는 뜻." },

  { word:"drizzle", ipa:"/ˈdrɪzl/", kr:"드리즐", pos:"명사·동사", ko:"이슬비, 가랑비가 오다",
    ex:"It was drizzling when I left.", exKo:"나올 때 가랑비가 내리고 있었다.",
    tip:"소스를 살짝 뿌리는 것도 drizzle이라고 한다." },

  { word:"pour", ipa:"/pɔːr/", kr:"포어", pos:"동사", ko:"붓다 / (비가) 퍼붓다",
    ex:"It's pouring outside.", exKo:"밖에 비가 퍼붓는다.",
    tip:"물을 따르는 것도 pour. 비가 억수같이 올 때 가장 흔한 표현이다." },

  { word:"forecast", ipa:"/ˈfɔːrkæst/", kr:"포캐스트", pos:"명사·동사", ko:"예보, 예측하다",
    ex:"The forecast says it'll snow tomorrow.", exKo:"예보로는 내일 눈이 온다고 한다.",
    tip:"일기예보는 weather forecast. 경제 전망에도 그대로 쓴다." },

  { word:"slippery", ipa:"/ˈslɪpəri/", kr:"슬리퍼리", pos:"형용사", ko:"미끄러운",
    ex:"The stairs are slippery when wet.", exKo:"계단은 젖으면 미끄럽다.",
    tip:"미끄러지다는 slip. 넘어지는 것까지 포함하면 slip and fall." },

  { word:"umbrella", ipa:"/ʌmˈbrelə/", kr:"엄브렐라", pos:"명사", ko:"우산",
    ex:"Take an umbrella just in case.", exKo:"혹시 모르니 우산 챙겨.",
    tip:"l이 두 개다. 강세는 가운데 brel에 있다." },

  /* ── 기분·성격 ───────────────────────────────── */

  { word:"annoyed", ipa:"/əˈnɔɪd/", kr:"어노이드", pos:"형용사", ko:"짜증 난, 거슬리는",
    ex:"I was annoyed by the noise upstairs.", exKo:"윗층 소음 때문에 짜증이 났다.",
    tip:"angry보다 훨씬 가볍다. 일상의 짜증은 대부분 annoyed로 충분하다." },

  { word:"upset", ipa:"/ʌpˈset/", kr:"업셋", pos:"형용사", ko:"속상한, 마음이 상한",
    ex:"Don't be upset. It wasn't your fault.", exKo:"속상해하지 마. 네 잘못 아니야.",
    tip:"화남과 서운함이 섞인 감정. 배탈에도 upset stomach라고 쓴다." },

  { word:"nervous", ipa:"/ˈnɜːrvəs/", kr:"너버스", pos:"형용사", ko:"긴장한, 불안한",
    ex:"I get nervous before every meeting.", exKo:"나는 회의 때마다 긴장한다.",
    tip:"신경 nerve에서 나온 말. 설레는 긴장은 excited로 구분한다." },

  { word:"embarrassed", ipa:"/ɪmˈbærəst/", kr:"임배러스트", pos:"형용사", ko:"창피한, 쑥스러운",
    ex:"I felt embarrassed about my mistake.", exKo:"실수해서 창피했다.",
    tip:"r이 두 개, s도 두 개다. 철자 틀리기 쉬운 단어." },

  { word:"relieved", ipa:"/rɪˈliːvd/", kr:"릴리브드", pos:"형용사", ko:"마음이 놓인, 안도한",
    ex:"I'm relieved that it's over.", exKo:"끝나서 마음이 놓인다.",
    tip:"걱정이 사라진 뒤의 감정. 명사는 relief." },

  { word:"proud", ipa:"/praʊd/", kr:"프라우드", pos:"형용사", ko:"자랑스러운",
    ex:"I'm proud of you.", exKo:"네가 자랑스럽다.",
    tip:"뒤에 of가 붙는다. proud for는 틀린 표현." },

  { word:"grateful", ipa:"/ˈɡreɪtfl/", kr:"그레이트풀", pos:"형용사", ko:"고마워하는",
    ex:"I'm grateful for your help.", exKo:"도와줘서 고맙다.",
    tip:"thankful과 거의 같지만 grateful이 조금 더 묵직하다." },

  { word:"bored", ipa:"/bɔːrd/", kr:"보어드", pos:"형용사", ko:"지루한, 심심한",
    ex:"The kids are bored at home.", exKo:"아이들이 집에서 심심해한다.",
    tip:"내가 지루하면 bored, 그것이 지루하면 boring. 자주 헷갈린다." },

  { word:"lonely", ipa:"/ˈloʊnli/", kr:"론리", pos:"형용사", ko:"외로운",
    ex:"He felt lonely in the new city.", exKo:"그는 낯선 도시에서 외로웠다.",
    tip:"alone은 그냥 혼자 있는 상태, lonely는 그게 쓸쓸한 것." },

  { word:"jealous", ipa:"/ˈdʒeləs/", kr:"젤러스", pos:"형용사", ko:"부러운, 질투하는",
    ex:"I'm so jealous of your vacation.", exKo:"네 휴가 정말 부럽다.",
    tip:"가벼운 '부럽다'로도 쓴다. 무거운 질투만 뜻하지 않는다." },

  { word:"curious", ipa:"/ˈkjʊriəs/", kr:"큐리어스", pos:"형용사", ko:"궁금한, 호기심 많은",
    ex:"I'm curious about how it works.", exKo:"그게 어떻게 돌아가는지 궁금하다.",
    tip:"뒤에 about이 붙는다. 명사는 curiosity." },

  { word:"picky", ipa:"/ˈpɪki/", kr:"피키", pos:"형용사", ko:"까다로운, 가리는",
    ex:"He's a picky eater.", exKo:"그는 입이 짧다.",
    tip:"음식을 가리는 사람을 picky eater라고 한다." },

  { word:"stubborn", ipa:"/ˈstʌbərn/", kr:"스터번", pos:"형용사", ko:"고집이 센",
    ex:"He's too stubborn to admit it.", exKo:"그는 고집이 세서 인정하지 않는다.",
    tip:"얼룩이 잘 안 지워질 때도 stubborn stain이라고 한다." },

  { word:"easygoing", ipa:"/ˌiːziˈɡoʊɪŋ/", kr:"이지고잉", pos:"형용사", ko:"털털한, 무던한",
    ex:"She's easygoing about everything.", exKo:"그는 뭐든 무던하게 넘긴다.",
    tip:"사람 성격을 칭찬할 때 쓰는 흔한 말." },

  { word:"thoughtful", ipa:"/ˈθɔːtfl/", kr:"쏘트풀", pos:"형용사", ko:"사려 깊은, 배려하는",
    ex:"That was really thoughtful of you.", exKo:"정말 세심하게 신경 써 줬구나.",
    tip:"선물이나 배려를 받았을 때 건네는 인사말로 자주 쓴다." },

  { word:"lazy", ipa:"/ˈleɪzi/", kr:"레이지", pos:"형용사", ko:"게으른, 나른한",
    ex:"It was a lazy Sunday afternoon.", exKo:"나른한 일요일 오후였다.",
    tip:"사람에게 쓰면 흉이지만, 하루에 쓰면 '느긋한'이라는 좋은 뜻이 된다." },

  /* ── 사람 사이 ───────────────────────────────── */

  { word:"borrow", ipa:"/ˈbɑːroʊ/", kr:"바로우", pos:"동사", ko:"빌리다",
    ex:"Can I borrow your charger?", exKo:"충전기 좀 빌릴 수 있을까?",
    tip:"내가 빌리면 borrow, 남에게 빌려주면 lend. 방향이 반대다." },

  { word:"lend", ipa:"/lend/", kr:"렌드", pos:"동사", ko:"빌려주다",
    ex:"He lent me his umbrella.", exKo:"그가 우산을 빌려줬다.",
    tip:"과거형은 lent. 돈을 빌려주는 것도 lend." },

  { word:"favor", ipa:"/ˈfeɪvər/", kr:"페이버", pos:"명사", ko:"부탁, 호의",
    ex:"Can I ask you a favor?", exKo:"부탁 하나 해도 될까?",
    tip:"부탁할 때 가장 자연스러운 문장이다. 영국식 철자는 favour." },

  { word:"apologize", ipa:"/əˈpɑːlədʒaɪz/", kr:"어팔러자이즈", pos:"동사", ko:"사과하다",
    ex:"He apologized for being late.", exKo:"그는 늦은 것을 사과했다.",
    tip:"뒤에 for가 붙는다. 명사는 apology." },

  { word:"invite", ipa:"/ɪnˈvaɪt/", kr:"인바이트", pos:"동사", ko:"초대하다",
    ex:"They invited us over for dinner.", exKo:"그들이 우리를 저녁에 초대했다.",
    tip:"집으로 부르는 것은 invite over라고 over를 붙인다." },

  { word:"hang out", ipa:"/hæŋ aʊt/", kr:"행 아웃", pos:"동사구", ko:"어울려 놀다, 시간을 보내다",
    ex:"We hung out at the park all afternoon.", exKo:"우리는 오후 내내 공원에서 놀았다.",
    tip:"목적 없이 같이 시간을 보내는 것. 어른들 사이에서도 흔히 쓴다." },

  { word:"catch up", ipa:"/kætʃ ʌp/", kr:"캐치 업", pos:"동사구", ko:"밀린 이야기를 나누다, 따라잡다",
    ex:"Let's catch up over coffee.", exKo:"커피 마시면서 그동안 얘기하자.",
    tip:"오랜만에 만난 사람에게 쓰는 인사. 밀린 일을 따라잡을 때도 쓴다." },

  { word:"show up", ipa:"/ʃoʊ ʌp/", kr:"쇼 업", pos:"동사구", ko:"나타나다, 모습을 보이다",
    ex:"He didn't show up at the meeting.", exKo:"그는 회의에 나타나지 않았다.",
    tip:"appear보다 훨씬 입에 붙는 말. 약속 자리에 오는 것을 말한다." },

  { word:"run into", ipa:"/rʌn ˈɪntuː/", kr:"런 인투", pos:"동사구", ko:"우연히 마주치다",
    ex:"I ran into an old friend downtown.", exKo:"시내에서 옛 친구를 우연히 만났다.",
    tip:"문제에 부딪히는 것도 run into a problem이라고 한다." },

  { word:"get along", ipa:"/ɡet əˈlɔːŋ/", kr:"겟 얼롱", pos:"동사구", ko:"사이좋게 지내다",
    ex:"They get along well with each other.", exKo:"그들은 서로 잘 지낸다.",
    tip:"뒤에 with를 붙여 누구와 잘 지내는지 밝힌다." },

  { word:"neighbor", ipa:"/ˈneɪbər/", kr:"네이버", pos:"명사", ko:"이웃",
    ex:"Our neighbor watches our cat.", exKo:"이웃이 우리 고양이를 봐 준다.",
    tip:"gh는 소리 나지 않는다. 영국식 철자는 neighbour." },

  { word:"relative", ipa:"/ˈrelətɪv/", kr:"렐러티브", pos:"명사", ko:"친척",
    ex:"All our relatives came for the holiday.", exKo:"명절이라 친척들이 다 모였다.",
    tip:"형용사로 쓰면 '상대적인'. 뜻이 둘이라 문맥으로 가른다." },

  { word:"text", ipa:"/tekst/", kr:"텍스트", pos:"동사·명사", ko:"문자를 보내다, 문자",
    ex:"Text me when you get home.", exKo:"집에 도착하면 문자 줘.",
    tip:"동사로 쓰는 게 더 흔하다. 카톡 보내는 것도 그냥 text라고 한다." },

  { word:"reply", ipa:"/rɪˈplaɪ/", kr:"리플라이", pos:"동사·명사", ko:"답장하다, 답",
    ex:"Sorry for the late reply.", exKo:"답장이 늦어 미안합니다.",
    tip:"메일 첫 줄에 가장 많이 쓰이는 문장이다. 뒤에는 to가 붙는다." },

  /* ── 일·학교 ───────────────────────────────── */

  { word:"deadline", ipa:"/ˈdedlaɪn/", kr:"데드라인", pos:"명사", ko:"마감 기한",
    ex:"The deadline is this Friday.", exKo:"마감은 이번 주 금요일이다.",
    tip:"마감을 맞추다는 meet the deadline, 놓치다는 miss the deadline." },

  { word:"overtime", ipa:"/ˈoʊvərtaɪm/", kr:"오버타임", pos:"명사·부사", ko:"초과 근무, 야근",
    ex:"I worked overtime three days this week.", exKo:"이번 주에 사흘이나 야근했다.",
    tip:"야근하다는 work overtime. 수당은 overtime pay." },

  { word:"day off", ipa:"/deɪ ɔːf/", kr:"데이 오프", pos:"명사", ko:"쉬는 날, 휴무",
    ex:"Tomorrow is my day off.", exKo:"내일은 내가 쉬는 날이다.",
    tip:"휴가는 vacation, 그냥 하루 쉬는 건 day off." },

  { word:"break", ipa:"/breɪk/", kr:"브레이크", pos:"명사", ko:"휴식, 쉬는 시간",
    ex:"Let's take a ten-minute break.", exKo:"10분만 쉬자.",
    tip:"'깨다'라는 뜻이 먼저 떠오르지만 일상에서는 휴식이라는 뜻으로 더 자주 쓴다." },

  { word:"shift", ipa:"/ʃɪft/", kr:"시프트", pos:"명사", ko:"교대 근무 (시간)",
    ex:"She works the night shift.", exKo:"그는 야간 근무를 한다.",
    tip:"동사로 쓰면 '옮기다'. 근무조라는 뜻이 일상에서는 더 흔하다." },

  { word:"coworker", ipa:"/ˈkoʊwɜːrkər/", kr:"코워커", pos:"명사", ko:"직장 동료",
    ex:"My coworkers are easy to work with.", exKo:"우리 동료들은 같이 일하기 편하다.",
    tip:"colleague도 같은 뜻이지만 coworker가 더 편한 말이다." },

  { word:"resume", ipa:"/ˈrezəmeɪ/", kr:"레주메이", pos:"명사", ko:"이력서",
    ex:"Send me your resume by Monday.", exKo:"월요일까지 이력서를 보내 주세요.",
    tip:"똑같이 생긴 동사 resume(/rɪˈzuːm/, 재개하다)과 발음이 다르다." },

  { word:"paycheck", ipa:"/ˈpeɪtʃek/", kr:"페이첵", pos:"명사", ko:"급여, 월급",
    ex:"My paycheck comes on the tenth.", exKo:"월급은 10일에 들어온다.",
    tip:"월급날 자체는 payday. 월급쟁이 생활은 paycheck to paycheck." },

  { word:"raise", ipa:"/reɪz/", kr:"레이즈", pos:"명사·동사", ko:"임금 인상 / 올리다",
    ex:"He asked his boss for a raise.", exKo:"그는 상사에게 월급을 올려 달라고 했다.",
    tip:"영국에서는 rise라고 한다. 손을 드는 것도 raise your hand." },

  { word:"quit", ipa:"/kwɪt/", kr:"큇", pos:"동사", ko:"그만두다",
    ex:"She quit her job last month.", exKo:"그는 지난달에 일을 그만뒀다.",
    tip:"현재형·과거형·과거분사가 모두 quit으로 같다." },

  { word:"hire", ipa:"/ˈhaɪər/", kr:"하이어", pos:"동사", ko:"고용하다, 뽑다",
    ex:"They hired two new people.", exKo:"그들은 두 명을 새로 뽑았다.",
    tip:"반대는 fire(해고하다). 소리가 비슷해서 헷갈리기 쉽다." },

  { word:"assignment", ipa:"/əˈsaɪnmənt/", kr:"어사인먼트", pos:"명사", ko:"과제, 맡은 일",
    ex:"I finished the assignment early.", exKo:"과제를 일찍 끝냈다.",
    tip:"학교 숙제는 homework, 회사에서 맡은 일은 assignment." },

  { word:"schedule", ipa:"/ˈskedʒuːl/", kr:"스케줄", pos:"명사·동사", ko:"일정, 일정을 잡다",
    ex:"Let's schedule the call for Thursday.", exKo:"통화를 목요일로 잡자.",
    tip:"영국에서는 '셰줄'에 가깝게 읽는다. 미국은 '스케줄'." },

  { word:"postpone", ipa:"/poʊstˈpoʊn/", kr:"포스트폰", pos:"동사", ko:"연기하다, 미루다",
    ex:"They postponed the trip to next month.", exKo:"그들은 여행을 다음 달로 미뤘다.",
    tip:"격식 있는 말. 편하게 말할 때는 put off를 쓴다." },

  { word:"remind", ipa:"/rɪˈmaɪnd/", kr:"리마인드", pos:"동사", ko:"일깨우다, 상기시키다",
    ex:"Remind me to call her tonight.", exKo:"오늘 밤에 그에게 전화하라고 좀 알려 줘.",
    tip:"remind me to+동사 형태로 통째로 외워 두면 쓸 데가 많다." },

  /* ── 폰·인터넷 ───────────────────────────────── */

  { word:"charger", ipa:"/ˈtʃɑːrdʒər/", kr:"차저", pos:"명사", ko:"충전기",
    ex:"I left my charger at the office.", exKo:"충전기를 사무실에 두고 왔다.",
    tip:"충전하다는 charge. 배터리가 다 되면 My phone died." },

  { word:"log in", ipa:"/lɔːɡ ɪn/", kr:"로그 인", pos:"동사구", ko:"로그인하다",
    ex:"I can't log in to my account.", exKo:"계정에 로그인이 안 된다.",
    tip:"동사는 띄어서 log in, 명사·형용사는 붙여서 login." },

  { word:"sign up", ipa:"/saɪn ʌp/", kr:"사인 업", pos:"동사구", ko:"가입하다, 신청하다",
    ex:"I signed up for a free trial.", exKo:"무료 체험을 신청했다.",
    tip:"가입은 sign up, 로그인은 sign in. 한 글자 차이로 뜻이 다르다." },

  { word:"subscribe", ipa:"/səbˈskraɪb/", kr:"서브스크라이브", pos:"동사", ko:"구독하다",
    ex:"I subscribe to two newsletters.", exKo:"나는 뉴스레터를 두 개 구독한다.",
    tip:"뒤에 to가 붙는다. 구독료는 subscription." },

  { word:"attach", ipa:"/əˈtætʃ/", kr:"어태치", pos:"동사", ko:"첨부하다, 붙이다",
    ex:"I attached the file to the email.", exKo:"메일에 파일을 첨부했다.",
    tip:"첨부파일은 attachment. 메일 쓸 때 늘 나오는 단어다." },

  { word:"delete", ipa:"/dɪˈliːt/", kr:"딜리트", pos:"동사", ko:"지우다, 삭제하다",
    ex:"I deleted the message by mistake.", exKo:"실수로 메시지를 지웠다.",
    tip:"파일을 지우는 건 delete, 글씨를 지우는 건 erase." },

  { word:"post", ipa:"/poʊst/", kr:"포스트", pos:"동사·명사", ko:"올리다, 게시물",
    ex:"She posted the photos last night.", exKo:"그는 어젯밤에 사진을 올렸다.",
    tip:"영국에서는 '우편'이라는 뜻으로도 쓴다. 미국은 mail." },

  /* ── 매일 쓰는 표현 ───────────────────────────────── */

  { word:"figure out", ipa:"/ˈfɪɡjər aʊt/", kr:"피겨 아웃", pos:"동사구", ko:"알아내다, 해결하다",
    ex:"I finally figured out the problem.", exKo:"드디어 문제를 알아냈다.",
    tip:"머리를 써서 답을 찾아낸다는 뜻. 회화에서 가장 많이 쓰는 표현 중 하나다." },

  { word:"run out of", ipa:"/rʌn aʊt əv/", kr:"런 아웃 오브", pos:"동사구", ko:"다 떨어지다, 바닥나다",
    ex:"We ran out of milk again.", exKo:"우유가 또 떨어졌다.",
    tip:"시간이 모자랄 때도 run out of time이라고 한다." },

  { word:"put off", ipa:"/pʊt ɔːf/", kr:"풋 오프", pos:"동사구", ko:"미루다, 뒤로 넘기다",
    ex:"Don't put it off until tomorrow.", exKo:"내일로 미루지 마.",
    tip:"postpone의 편한 말. 대명사는 사이에 넣어 put it off로 쓴다." },

  { word:"drop by", ipa:"/drɑːp baɪ/", kr:"드랍 바이", pos:"동사구", ko:"잠깐 들르다",
    ex:"Drop by anytime you like.", exKo:"아무 때나 편하게 들러.",
    tip:"약속 없이 가볍게 들르는 느낌. stop by도 같은 뜻이다." },

  { word:"end up", ipa:"/end ʌp/", kr:"엔드 업", pos:"동사구", ko:"결국 ~하게 되다",
    ex:"We ended up staying home.", exKo:"결국 우리는 집에 있었다.",
    tip:"뒤에는 -ing가 온다. end up to stay는 틀린 표현." },

  { word:"take care of", ipa:"/teɪk ker əv/", kr:"테이크 케어 오브", pos:"동사구", ko:"돌보다, 처리하다",
    ex:"I'll take care of the rest.", exKo:"나머지는 내가 처리할게.",
    tip:"사람을 돌보는 것도, 일을 맡아 처리하는 것도 같은 표현을 쓴다." },

  { word:"get rid of", ipa:"/ɡet rɪd əv/", kr:"겟 리드 오브", pos:"동사구", ko:"없애다, 처분하다",
    ex:"I need to get rid of these old clothes.", exKo:"이 낡은 옷들을 좀 처분해야겠다.",
    tip:"물건을 버리는 것도, 습관이나 감기를 떨쳐 내는 것도 get rid of." },

  { word:"come up with", ipa:"/kʌm ʌp wɪð/", kr:"컴 업 위드", pos:"동사구", ko:"생각해 내다, 떠올리다",
    ex:"She came up with a better idea.", exKo:"그가 더 나은 생각을 떠올렸다.",
    tip:"아이디어나 계획을 짜낼 때 쓴다. 세 단어를 한 덩어리로 외운다." },

  { word:"make sure", ipa:"/meɪk ʃʊr/", kr:"메이크 슈어", pos:"동사구", ko:"확실히 하다, 꼭 ~하다",
    ex:"Make sure you lock the door.", exKo:"문 꼭 잠그고 나가.",
    tip:"당부할 때 쓰는 표현. 뒤에는 문장이 그대로 이어진다." },

  { word:"look for", ipa:"/lʊk fɔːr/", kr:"룩 포", pos:"동사구", ko:"찾다, 구하다",
    ex:"I'm looking for my keys.", exKo:"열쇠를 찾고 있다.",
    tip:"찾는 중이면 look for, 찾아냈으면 find. 결과가 다르다." },

  { word:"give up", ipa:"/ɡɪv ʌp/", kr:"기브 업", pos:"동사구", ko:"포기하다, 끊다",
    ex:"He gave up smoking last year.", exKo:"그는 작년에 담배를 끊었다.",
    tip:"뒤에 -ing가 온다. 습관을 끊는다는 뜻으로도 자주 쓴다." },

  { word:"work out", ipa:"/wɜːrk aʊt/", kr:"워크 아웃", pos:"동사구", ko:"잘 풀리다 / 운동하다",
    ex:"Everything worked out in the end.", exKo:"결국 다 잘 풀렸다.",
    tip:"뜻이 둘이다. 몸을 움직이면 운동, 일에 쓰면 '잘 되다'." },

  { word:"on the way", ipa:"/ɑːn ðə weɪ/", kr:"온 더 웨이", pos:"부사구", ko:"가는 길에, 오는 중인",
    ex:"I'm on the way. Give me five minutes.", exKo:"가는 중이야. 5분만 줘.",
    tip:"약속에 늦었을 때 가장 많이 보내는 문장이다." },

  { word:"just in case", ipa:"/dʒʌst ɪn keɪs/", kr:"저스트 인 케이스", pos:"부사구", ko:"혹시 몰라서",
    ex:"I brought an extra bag just in case.", exKo:"혹시 몰라 가방을 하나 더 가져왔다.",
    tip:"문장 끝에 툭 붙이면 '만약을 대비해서'라는 뜻이 된다." },
];
