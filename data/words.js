/* 오늘의 단어 — 하루에 하나씩 순서대로 보여준다.
   추가하려면 이 배열 끝에 항목을 덧붙이면 된다.
   뜻풀이와 예문은 직접 작성한 것이라 저작권 문제가 없다.

   word  단어       ipa  발음기호   kr   한글 발음   pos  품사
   ko    우리말 뜻   ex   예문       exKo 예문 해석   tip  쓰임새 한 줄 */

const WORDS = [
  { word:"resilient", ipa:"/rɪˈzɪliənt/", kr:"리질리언트", pos:"형용사", ko:"회복력이 좋은, 잘 견뎌내는",
    ex:"She stayed resilient after losing her job.", exKo:"그는 실직하고도 잘 버텨냈다.",
    tip:"사람뿐 아니라 경제·소재에도 쓴다. 명사는 resilience." },

  { word:"subtle", ipa:"/ˈsʌtl/", kr:"서틀", pos:"형용사", ko:"미묘한, 은근한",
    ex:"There is a subtle difference between the two.", exKo:"둘 사이에는 미묘한 차이가 있다.",
    tip:"b는 발음하지 않는다. '섭틀'이 아니라 '서틀'." },

  { word:"overwhelm", ipa:"/ˌoʊvərˈwelm/", kr:"오버웰름", pos:"동사", ko:"압도하다, 감당 못 할 만큼 밀려오다",
    ex:"The amount of work overwhelmed him.", exKo:"업무량이 그를 압도했다.",
    tip:"I'm overwhelmed. 는 '벅차다, 정신없다'는 뜻으로 자주 쓴다." },

  { word:"reluctant", ipa:"/rɪˈlʌktənt/", kr:"릴럭턴트", pos:"형용사", ko:"내키지 않는, 꺼리는",
    ex:"He was reluctant to answer the question.", exKo:"그는 그 질문에 답하기를 꺼렸다.",
    tip:"뒤에 to+동사가 온다. reluctant to go 처럼." },

  { word:"thorough", ipa:"/ˈθɜːroʊ/", kr:"써로우", pos:"형용사", ko:"철저한, 빈틈없는",
    ex:"The doctor did a thorough examination.", exKo:"의사가 철저히 진찰했다.",
    tip:"through(통과하여)와 철자가 비슷하니 주의. 부사는 thoroughly." },

  { word:"accommodate", ipa:"/əˈkɑːmədeɪt/", kr:"어카머데이트", pos:"동사", ko:"수용하다, 맞춰주다",
    ex:"The hall can accommodate 300 people.", exKo:"그 홀은 300명을 수용할 수 있다.",
    tip:"c와 m이 각각 두 번씩. 철자 틀리기 쉬운 단어 상위권." },

  { word:"inevitable", ipa:"/ɪnˈevɪtəbl/", kr:"이네비터블", pos:"형용사", ko:"피할 수 없는, 필연적인",
    ex:"Change is inevitable in any organization.", exKo:"어떤 조직에서든 변화는 피할 수 없다.",
    tip:"It was inevitable. 은 '어차피 그렇게 될 일이었다'는 뉘앙스." },

  { word:"genuine", ipa:"/ˈdʒenjuɪn/", kr:"제뉴인", pos:"형용사", ko:"진짜의, 진심 어린",
    ex:"She showed genuine interest in my work.", exKo:"그는 내 일에 진심으로 관심을 보였다.",
    tip:"물건의 '정품'과 사람의 '진심' 양쪽에 다 쓴다." },

  { word:"tedious", ipa:"/ˈtiːdiəs/", kr:"티디어스", pos:"형용사", ko:"지루하고 지겨운",
    ex:"Filling out the forms was tedious.", exKo:"양식을 채우는 일은 지겨웠다.",
    tip:"boring이 '재미없다'라면 tedious는 '길고 반복돼서 질린다'에 가깝다." },

  { word:"versatile", ipa:"/ˈvɜːrsətl/", kr:"버서틀", pos:"형용사", ko:"다재다능한, 여러 용도로 쓰이는",
    ex:"This jacket is versatile enough for any season.", exKo:"이 재킷은 어느 계절에나 입을 만큼 활용도가 높다.",
    tip:"사람에게 쓰면 '팔방미인', 물건에 쓰면 '활용도 높은'." },

  { word:"cope", ipa:"/koʊp/", kr:"코웁", pos:"동사", ko:"(어려움을) 감당하다, 대처하다",
    ex:"He is learning to cope with stress.", exKo:"그는 스트레스에 대처하는 법을 익히고 있다.",
    tip:"거의 항상 cope with 형태로 쓴다." },

  { word:"blunt", ipa:"/blʌnt/", kr:"블런트", pos:"형용사", ko:"직설적인 / 무딘",
    ex:"To be blunt, the plan will not work.", exKo:"솔직히 말하면 그 계획은 안 될 겁니다.",
    tip:"To be blunt, 로 문장을 열면 '돌직구지만' 하고 양해를 구하는 표현이 된다." },

  { word:"thrive", ipa:"/θraɪv/", kr:"쓰라이브", pos:"동사", ko:"번창하다, 잘 자라다",
    ex:"These plants thrive in cold weather.", exKo:"이 식물들은 추운 날씨에서 잘 자란다.",
    tip:"survive(간신히 살아남다)보다 훨씬 긍정적인 단계." },

  { word:"hesitate", ipa:"/ˈhezɪteɪt/", kr:"헤지테이트", pos:"동사", ko:"망설이다, 주저하다",
    ex:"Do not hesitate to ask if you need help.", exKo:"도움이 필요하면 주저 말고 물어보세요.",
    tip:"Don't hesitate to ~ 는 이메일 맺음말 단골 표현." },

  { word:"compelling", ipa:"/kəmˈpelɪŋ/", kr:"컴펠링", pos:"형용사", ko:"설득력 있는, 눈을 뗄 수 없는",
    ex:"He made a compelling argument.", exKo:"그는 설득력 있는 주장을 폈다.",
    tip:"이야기나 영화에 쓰면 '몰입하게 만드는'이라는 뜻이 된다." },

  { word:"redundant", ipa:"/rɪˈdʌndənt/", kr:"리던던트", pos:"형용사", ko:"쓸데없이 중복된, 군더더기의",
    ex:"Remove the redundant sentences.", exKo:"불필요하게 겹치는 문장을 지우세요.",
    tip:"영국에서는 '정리해고된'이라는 뜻으로도 쓴다." },

  { word:"anticipate", ipa:"/ænˈtɪsɪpeɪt/", kr:"앤티시페이트", pos:"동사", ko:"예상하다, 미리 대비하다",
    ex:"We anticipate a busy season ahead.", exKo:"우리는 바쁜 시즌을 예상하고 있다.",
    tip:"expect가 단순 예상이라면 anticipate는 '대비까지 한다'는 뉘앙스." },

  { word:"modest", ipa:"/ˈmɑːdɪst/", kr:"마디스트", pos:"형용사", ko:"겸손한 / 그리 크지 않은",
    ex:"Despite his success, he remained modest.", exKo:"성공했음에도 그는 겸손했다.",
    tip:"a modest increase 는 '소폭 상승'. 사람 아닌 수치에도 쓴다." },

  { word:"deliberate", ipa:"/dɪˈlɪbərət/", kr:"딜리버렛", pos:"형용사", ko:"의도적인, 신중한",
    ex:"It was a deliberate choice, not an accident.", exKo:"그건 실수가 아니라 의도한 선택이었다.",
    tip:"동사로 쓰면 발음이 /dɪˈlɪbəreɪt/로 바뀌고 '숙고하다'가 된다." },

  { word:"fragile", ipa:"/ˈfrædʒl/", kr:"프래절", pos:"형용사", ko:"깨지기 쉬운, 취약한",
    ex:"Handle the box carefully; it is fragile.", exKo:"상자를 조심히 다루세요. 깨지기 쉽습니다.",
    tip:"택배 상자의 '취급주의' 스티커에 적힌 그 단어." },

  { word:"abundant", ipa:"/əˈbʌndənt/", kr:"어번던트", pos:"형용사", ko:"풍부한, 넘칠 만큼 많은",
    ex:"The region has abundant natural resources.", exKo:"그 지역은 천연자원이 풍부하다.",
    tip:"명사는 abundance. in abundance 는 '넘치도록'." },

  { word:"cautious", ipa:"/ˈkɔːʃəs/", kr:"코셔스", pos:"형용사", ko:"조심스러운, 신중한",
    ex:"Be cautious when crossing the street.", exKo:"길을 건널 때는 조심하세요.",
    tip:"cautiously optimistic 은 뉴스에 자주 나오는 '조심스럽게 낙관적인'." },

  { word:"eloquent", ipa:"/ˈeləkwənt/", kr:"엘러퀀트", pos:"형용사", ko:"말을 잘하는, 유창하고 설득력 있는",
    ex:"Her speech was short but eloquent.", exKo:"그의 연설은 짧았지만 설득력이 있었다.",
    tip:"fluent가 '막힘없이'라면 eloquent는 '마음을 움직이게'." },

  { word:"sustain", ipa:"/səˈsteɪn/", kr:"서스테인", pos:"동사", ko:"지속하다, 버텨내다",
    ex:"It is hard to sustain that pace for long.", exKo:"그 속도를 오래 유지하기는 어렵다.",
    tip:"sustainable(지속 가능한)의 뿌리가 되는 단어." },

  { word:"vague", ipa:"/veɪɡ/", kr:"베이그", pos:"형용사", ko:"모호한, 흐릿한",
    ex:"His answer was too vague to be useful.", exKo:"그의 답은 너무 모호해서 쓸모가 없었다.",
    tip:"'베이그'로 읽는다. gu는 소리 나지 않는다." },

  { word:"prompt", ipa:"/prɑːmpt/", kr:"프람프트", pos:"형용사·동사", ko:"즉각적인 / 유도하다",
    ex:"Thank you for your prompt reply.", exKo:"빠른 답장 감사합니다.",
    tip:"이메일에서 '신속한'이라는 뜻으로 특히 자주 쓴다." },

  { word:"diminish", ipa:"/dɪˈmɪnɪʃ/", kr:"디미니시", pos:"동사", ko:"줄어들다, 약해지다",
    ex:"Interest in the topic has diminished.", exKo:"그 주제에 대한 관심이 줄었다.",
    tip:"decrease보다 문어체이고, '점차 사그라든다'는 느낌이 강하다." },

  { word:"profound", ipa:"/prəˈfaʊnd/", kr:"프러파운드", pos:"형용사", ko:"깊이 있는, 지대한",
    ex:"The book had a profound effect on me.", exKo:"그 책은 내게 깊은 영향을 주었다.",
    tip:"deep이 물리적 깊이라면 profound는 생각과 영향의 깊이." },

  { word:"adequate", ipa:"/ˈædɪkwət/", kr:"애디쿼트", pos:"형용사", ko:"충분한, 적당한",
    ex:"The room was small but adequate.", exKo:"방은 작았지만 지내기에 충분했다.",
    tip:"칭찬은 아니다. '넘치지도 모자라지도 않는' 정도의 뉘앙스." },

  { word:"intuitive", ipa:"/ɪnˈtuːɪtɪv/", kr:"인투이티브", pos:"형용사", ko:"직관적인, 배우지 않아도 알 만한",
    ex:"The app has an intuitive design.", exKo:"그 앱은 직관적인 디자인을 갖췄다.",
    tip:"제품 리뷰에서 '쓰기 쉽다'는 뜻으로 가장 흔히 쓰이는 칭찬." },

  { word:"acknowledge", ipa:"/əkˈnɑːlɪdʒ/", kr:"어크날리지", pos:"동사", ko:"인정하다, 받았음을 알리다",
    ex:"He acknowledged his mistake right away.", exKo:"그는 곧바로 자기 실수를 인정했다.",
    tip:"이메일에서 '잘 받았습니다'는 뜻으로도 쓴다." },

  { word:"ambiguous", ipa:"/æmˈbɪɡjuəs/", kr:"앰비규어스", pos:"형용사", ko:"두 가지로 해석되는, 애매한",
    ex:"The contract was ambiguous about payment.", exKo:"계약서는 대금 지급에 대해 애매했다.",
    tip:"vague는 흐릿한 것, ambiguous는 뜻이 둘로 갈리는 것." },

  { word:"arbitrary", ipa:"/ˈɑːrbɪtreri/", kr:"아비트러리", pos:"형용사", ko:"근거 없는, 제멋대로인",
    ex:"The deadline felt arbitrary to the team.", exKo:"그 마감일은 팀에게 근거 없어 보였다.",
    tip:"'임의의'라고도 옮기지만, 대개 부정적인 뉘앙스가 있다." },

  { word:"assert", ipa:"/əˈsɜːrt/", kr:"어서트", pos:"동사", ko:"단언하다, 강하게 주장하다",
    ex:"She asserted that the data was correct.", exKo:"그는 그 자료가 맞다고 단언했다.",
    tip:"근거를 대기보다 확신을 갖고 말할 때 쓴다." },

  { word:"boost", ipa:"/buːst/", kr:"부스트", pos:"동사·명사", ko:"끌어올리다, 북돋우다",
    ex:"The news boosted everyone's mood.", exKo:"그 소식이 모두의 기분을 끌어올렸다.",
    tip:"매출·자신감·속도 등 수치와 감정 양쪽에 다 쓴다." },

  { word:"candid", ipa:"/ˈkændɪd/", kr:"캔디드", pos:"형용사", ko:"솔직한, 꾸밈없는",
    ex:"I appreciate your candid feedback.", exKo:"솔직한 의견 감사합니다.",
    tip:"자연스러운 순간을 찍은 사진을 candid shot 이라 한다." },

  { word:"coherent", ipa:"/koʊˈhɪrənt/", kr:"코히런트", pos:"형용사", ko:"앞뒤가 맞는, 조리 있는",
    ex:"He gave a coherent explanation.", exKo:"그는 조리 있게 설명했다.",
    tip:"반대말 incoherent 는 '횡설수설하는'." },

  { word:"comprehensive", ipa:"/ˌkɑːmprɪˈhensɪv/", kr:"캄프리헨시브", pos:"형용사", ko:"빠짐없이 다 아우르는",
    ex:"We need a comprehensive review.", exKo:"빠짐없는 검토가 필요하다.",
    tip:"comprehensible(이해할 수 있는)과 헷갈리기 쉽다." },

  { word:"concise", ipa:"/kənˈsaɪs/", kr:"컨사이스", pos:"형용사", ko:"군더더기 없이 간결한",
    ex:"Keep your answer concise.", exKo:"답변은 간결하게 해 주세요.",
    tip:"short는 그냥 짧은 것, concise는 짧으면서 알맹이가 있는 것." },

  { word:"consistent", ipa:"/kənˈsɪstənt/", kr:"컨시스턴트", pos:"형용사", ko:"한결같은, 앞뒤가 어긋나지 않는",
    ex:"His results have been consistent all year.", exKo:"그의 성적은 일 년 내내 한결같았다.",
    tip:"be consistent with ~ 는 '~와 들어맞는'." },

  { word:"convey", ipa:"/kənˈveɪ/", kr:"컨베이", pos:"동사", ko:"(뜻·감정을) 전하다",
    ex:"Words cannot convey how grateful I am.", exKo:"얼마나 고마운지 말로 다 전할 수 없다.",
    tip:"물건을 나르는 컨베이어 벨트와 같은 뿌리." },

  { word:"credible", ipa:"/ˈkredəbl/", kr:"크레더블", pos:"형용사", ko:"믿을 만한",
    ex:"We need a credible source for this.", exKo:"이건 믿을 만한 출처가 필요하다.",
    tip:"credit(신용)과 같은 뿌리. 반대는 incredible이 아니라 not credible." },

  { word:"crucial", ipa:"/ˈkruːʃl/", kr:"크루셜", pos:"형용사", ko:"결정적으로 중요한",
    ex:"The first week is crucial.", exKo:"첫 주가 결정적으로 중요하다.",
    tip:"important보다 세다. '이게 어긋나면 다 무너진다'는 느낌." },

  { word:"curb", ipa:"/kɜːrb/", kr:"커브", pos:"동사·명사", ko:"억제하다 / 연석",
    ex:"The city tried to curb traffic.", exKo:"시는 교통량을 억제하려 했다.",
    tip:"길가의 턱(연석)도 curb다. 곡선의 curve와 철자가 다르니 주의." },

  { word:"dedicate", ipa:"/ˈdedɪkeɪt/", kr:"데디케이트", pos:"동사", ko:"바치다, 전념하다",
    ex:"She dedicated her life to teaching.", exKo:"그는 평생을 가르치는 일에 바쳤다.",
    tip:"dedicated 는 '전용의'라는 뜻으로도 쓴다. dedicated server 처럼." },

  { word:"demonstrate", ipa:"/ˈdemənstreɪt/", kr:"데먼스트레이트", pos:"동사", ko:"보여 주다, 입증하다",
    ex:"Let me demonstrate how it works.", exKo:"어떻게 작동하는지 보여 드리겠습니다.",
    tip:"시위(demonstration)라는 뜻도 있다." },

  { word:"deteriorate", ipa:"/dɪˈtɪriəreɪt/", kr:"디티리어레이트", pos:"동사", ko:"나빠지다, 악화되다",
    ex:"His health deteriorated over the winter.", exKo:"겨울 동안 그의 건강이 나빠졌다.",
    tip:"서서히 나빠지는 것. 갑작스러운 악화에는 잘 안 쓴다." },

  { word:"diverse", ipa:"/daɪˈvɜːrs/", kr:"다이버스", pos:"형용사", ko:"다양한, 여러 종류의",
    ex:"The team has diverse backgrounds.", exKo:"그 팀은 배경이 다양하다.",
    tip:"명사는 diversity. various보다 '서로 다름'을 강조한다." },

  { word:"elaborate", ipa:"/ɪˈlæbərət/", kr:"일래버럿", pos:"형용사·동사", ko:"정교한 / 자세히 설명하다",
    ex:"Could you elaborate on that point?", exKo:"그 부분을 더 자세히 말씀해 주시겠어요?",
    tip:"동사로 쓸 때는 발음이 /ɪˈlæbəreɪt/ 로 바뀐다." },

  { word:"embrace", ipa:"/ɪmˈbreɪs/", kr:"임브레이스", pos:"동사", ko:"기꺼이 받아들이다 / 껴안다",
    ex:"They embraced the new system quickly.", exKo:"그들은 새 제도를 빠르게 받아들였다.",
    tip:"변화·기술을 '흔쾌히' 받아들일 때 특히 자주 쓴다." },

  { word:"emerge", ipa:"/ɪˈmɜːrdʒ/", kr:"이머지", pos:"동사", ko:"드러나다, 나타나다",
    ex:"New problems emerged during testing.", exKo:"시험 중에 새 문제들이 드러났다.",
    tip:"emergency(비상)와 같은 뿌리. 갑자기 튀어나오는 느낌." },

  { word:"endorse", ipa:"/ɪnˈdɔːrs/", kr:"인도스", pos:"동사", ko:"지지하다, (제품을) 보증하다",
    ex:"The mayor endorsed the plan.", exKo:"시장이 그 계획을 지지했다.",
    tip:"연예인이 제품 광고에 나서는 것도 endorse." },

  { word:"enhance", ipa:"/ɪnˈhæns/", kr:"인핸스", pos:"동사", ko:"(이미 좋은 것을) 더 낫게 하다",
    ex:"The update enhanced battery life.", exKo:"업데이트로 배터리 수명이 좋아졌다.",
    tip:"improve는 고쳐서 낫게, enhance는 이미 괜찮은 걸 더 낫게." },

  { word:"evident", ipa:"/ˈevɪdənt/", kr:"에비던트", pos:"형용사", ko:"누가 봐도 분명한",
    ex:"It was evident that he was tired.", exKo:"그가 피곤한 것은 누가 봐도 분명했다.",
    tip:"명사 evidence(증거)와 짝. '증거가 보이는' 상태." },

  { word:"exceed", ipa:"/ɪkˈsiːd/", kr:"익시드", pos:"동사", ko:"넘어서다, 초과하다",
    ex:"The results exceeded our expectations.", exKo:"결과가 기대를 넘어섰다.",
    tip:"exceed expectations 는 칭찬 표현으로 자주 쓴다." },

  { word:"explicit", ipa:"/ɪkˈsplɪsɪt/", kr:"익스플리시트", pos:"형용사", ko:"분명히 드러낸, 명시적인",
    ex:"She gave explicit instructions.", exKo:"그는 분명한 지시를 내렸다.",
    tip:"반대말 implicit 은 '말하지 않아도 통하는'." },

  { word:"feasible", ipa:"/ˈfiːzəbl/", kr:"피저블", pos:"형용사", ko:"해낼 수 있는, 실현 가능한",
    ex:"Is this schedule feasible?", exKo:"이 일정이 실현 가능한가요?",
    tip:"possible은 '있을 수 있는', feasible은 '실제로 해낼 만한'." },

  { word:"foster", ipa:"/ˈfɔːstər/", kr:"포스터", pos:"동사", ko:"북돋우다, 기르다",
    ex:"The program fosters creativity.", exKo:"그 프로그램은 창의성을 북돋운다.",
    tip:"위탁 양육을 뜻하기도 한다. foster family 처럼." },

  { word:"grasp", ipa:"/ɡræsp/", kr:"그래스프", pos:"동사·명사", ko:"파악하다 / 꽉 쥐다",
    ex:"It took me a while to grasp the idea.", exKo:"그 개념을 파악하는 데 시간이 걸렸다.",
    tip:"손으로 쥐는 것과 머리로 붙잡는 것 양쪽에 쓴다." },

  { word:"hinder", ipa:"/ˈhɪndər/", kr:"힌더", pos:"동사", ko:"가로막다, 방해하다",
    ex:"Bad weather hindered the rescue.", exKo:"악천후가 구조를 가로막았다.",
    tip:"완전히 막는 게 아니라 진행을 더디게 하는 쪽." },

  { word:"imply", ipa:"/ɪmˈplaɪ/", kr:"임플라이", pos:"동사", ko:"넌지시 뜻하다, 암시하다",
    ex:"Are you implying that I lied?", exKo:"내가 거짓말했다는 뜻인가요?",
    tip:"말하는 쪽이 imply, 듣는 쪽이 짐작하는 것은 infer." },

  { word:"incentive", ipa:"/ɪnˈsentɪv/", kr:"인센티브", pos:"명사", ko:"할 마음이 나게 하는 유인",
    ex:"There is no incentive to finish early.", exKo:"일찍 끝낼 이유가 없다.",
    tip:"돈뿐 아니라 '동기'라는 넓은 뜻으로도 쓴다." },

  { word:"inherent", ipa:"/ɪnˈhɪrənt/", kr:"인히런트", pos:"형용사", ko:"본래부터 있는, 타고난",
    ex:"There are inherent risks in any surgery.", exKo:"어떤 수술에나 본래 위험이 따른다.",
    tip:"떼어낼 수 없이 붙어 있는 성질을 말한다." },

  { word:"integrate", ipa:"/ˈɪntɪɡreɪt/", kr:"인티그레이트", pos:"동사", ko:"하나로 합치다, 통합하다",
    ex:"We integrated the two systems.", exKo:"우리는 두 시스템을 하나로 합쳤다.",
    tip:"단순히 붙이는 게 아니라 매끄럽게 어우러지게 하는 것." },

  { word:"intricate", ipa:"/ˈɪntrɪkət/", kr:"인트리컷", pos:"형용사", ko:"얽히고설킨, 정교한",
    ex:"The pattern is surprisingly intricate.", exKo:"그 무늬는 놀랍도록 정교하다.",
    tip:"complicated가 '골치 아픈'이면 intricate은 '섬세한'에 가깝다." },

  { word:"legitimate", ipa:"/lɪˈdʒɪtɪmət/", kr:"러지터멋", pos:"형용사", ko:"정당한, 합법적인",
    ex:"That is a legitimate concern.", exKo:"그건 정당한 우려다.",
    tip:"줄여서 legit 이라고 쓰면 '진짜다, 믿을 만하다'는 구어." },

  { word:"linger", ipa:"/ˈlɪŋɡər/", kr:"링거", pos:"동사", ko:"쉬 가시지 않고 남다",
    ex:"The smell lingered for hours.", exKo:"냄새가 몇 시간이나 가시지 않았다.",
    tip:"냄새·여운·미련처럼 서서히 사라지는 것에 쓴다." },

  { word:"mitigate", ipa:"/ˈmɪtɪɡeɪt/", kr:"미티게이트", pos:"동사", ko:"(피해를) 누그러뜨리다",
    ex:"Steps were taken to mitigate the damage.", exKo:"피해를 줄이기 위한 조치가 취해졌다.",
    tip:"없애는 게 아니라 정도를 낮추는 것. 뉴스와 보고서 단골." },

  { word:"mundane", ipa:"/mʌnˈdeɪn/", kr:"먼데인", pos:"형용사", ko:"특별할 것 없는, 일상적인",
    ex:"He described his mundane daily routine.", exKo:"그는 특별할 것 없는 일과를 이야기했다.",
    tip:"'평범해서 지루한'이라는 뉘앙스가 섞여 있다." },

  { word:"negligible", ipa:"/ˈneɡlɪdʒəbl/", kr:"네글리저블", pos:"형용사", ko:"무시해도 될 만큼 작은",
    ex:"The difference is negligible.", exKo:"그 차이는 무시해도 될 정도다.",
    tip:"neglect(무시하다)와 같은 뿌리." },

  { word:"notion", ipa:"/ˈnoʊʃn/", kr:"노션", pos:"명사", ko:"생각, 개념",
    ex:"I have no notion of what he means.", exKo:"그가 무슨 말을 하는지 전혀 모르겠다.",
    tip:"idea보다 막연하고 개인적인 생각에 가깝다." },

  { word:"obscure", ipa:"/əbˈskjʊr/", kr:"업스큐어", pos:"형용사·동사", ko:"잘 알려지지 않은 / 가리다",
    ex:"He quoted an obscure poet.", exKo:"그는 잘 알려지지 않은 시인을 인용했다.",
    tip:"동사로 쓰면 '시야를 가리다'. Clouds obscured the view." },

  { word:"optimal", ipa:"/ˈɑːptɪməl/", kr:"압티멀", pos:"형용사", ko:"가장 알맞은, 최적의",
    ex:"This is the optimal temperature.", exKo:"이것이 가장 알맞은 온도다.",
    tip:"best가 '제일 좋은'이면 optimal은 '조건상 가장 알맞은'." },

  { word:"overlook", ipa:"/ˌoʊvərˈlʊk/", kr:"오버룩", pos:"동사", ko:"못 보고 지나치다 / 내려다보다",
    ex:"We overlooked one small detail.", exKo:"우리는 작은 사항 하나를 놓쳤다.",
    tip:"뜻이 정반대로 둘이다. '눈감아 주다'로도 쓴다." },

  { word:"persist", ipa:"/pərˈsɪst/", kr:"퍼시스트", pos:"동사", ko:"고집스럽게 계속하다, 계속되다",
    ex:"The problem persisted after the update.", exKo:"업데이트 후에도 문제가 계속됐다.",
    tip:"사람이 주어면 '끈질기게 하다', 사물이면 '없어지지 않다'." },

  { word:"plausible", ipa:"/ˈplɔːzəbl/", kr:"플로저블", pos:"형용사", ko:"그럴듯한, 있음 직한",
    ex:"That sounds like a plausible excuse.", exKo:"그럴듯한 변명처럼 들린다.",
    tip:"'맞다'가 아니라 '맞을 법하다'. 미묘하게 의심이 섞인다." },

  { word:"pragmatic", ipa:"/præɡˈmætɪk/", kr:"프래그매틱", pos:"형용사", ko:"현실적인, 실용 위주의",
    ex:"We need a pragmatic solution.", exKo:"현실적인 해법이 필요하다.",
    tip:"이상론과 대비되는 말. 칭찬으로 쓰이는 경우가 많다." },

  { word:"prevail", ipa:"/prɪˈveɪl/", kr:"프리베일", pos:"동사", ko:"우세하다, 이겨 내다",
    ex:"Common sense finally prevailed.", exKo:"결국 상식이 이겼다.",
    tip:"prevailing 은 '널리 퍼진'. prevailing view 처럼." },

  { word:"prone", ipa:"/proʊn/", kr:"프론", pos:"형용사", ko:"~하기 쉬운 (주로 나쁜 쪽)",
    ex:"This model is prone to overheating.", exKo:"이 모델은 과열되기 쉽다.",
    tip:"be prone to ~ 형태로 쓴다. 좋은 일에는 잘 안 쓴다." },

  { word:"refine", ipa:"/rɪˈfaɪn/", kr:"리파인", pos:"동사", ko:"다듬어 더 낫게 하다",
    ex:"We refined the design over three months.", exKo:"우리는 석 달에 걸쳐 디자인을 다듬었다.",
    tip:"큰 틀은 그대로 두고 세부를 손보는 것." },

  { word:"relevant", ipa:"/ˈreləvənt/", kr:"렐러번트", pos:"형용사", ko:"관련 있는, 딱 들어맞는",
    ex:"Please keep your comments relevant.", exKo:"관련 있는 이야기만 해 주세요.",
    tip:"반대말 irrelevant 는 '상관없는'." },

  { word:"resent", ipa:"/rɪˈzent/", kr:"리젠트", pos:"동사", ko:"속으로 불쾌해하다, 원망하다",
    ex:"He resented being left out.", exKo:"그는 소외된 것을 속으로 언짢아했다.",
    tip:"겉으로 터뜨리지 않고 담아 두는 감정이다." },

  { word:"retain", ipa:"/rɪˈteɪn/", kr:"리테인", pos:"동사", ko:"계속 지니다, 유지하다",
    ex:"The soil retains water well.", exKo:"그 흙은 물을 잘 머금는다.",
    tip:"고객을 잃지 않는 것도 retain. customer retention 처럼." },

  { word:"robust", ipa:"/roʊˈbʌst/", kr:"로버스트", pos:"형용사", ko:"튼튼한, 어지간해선 흔들리지 않는",
    ex:"We need a more robust system.", exKo:"더 튼튼한 시스템이 필요하다.",
    tip:"strong이 힘이라면 robust는 '잘 망가지지 않음'." },

  { word:"scrutiny", ipa:"/ˈskruːtəni/", kr:"스크루터니", pos:"명사", ko:"꼼꼼한 조사, 면밀한 검토",
    ex:"The plan came under public scrutiny.", exKo:"그 계획은 대중의 면밀한 검토를 받았다.",
    tip:"under scrutiny 는 '눈총을 받는' 상황을 뜻하기도 한다." },

  { word:"seamless", ipa:"/ˈsiːmləs/", kr:"심리스", pos:"형용사", ko:"이음매 없이 매끄러운",
    ex:"The transition was seamless.", exKo:"전환이 매끄러웠다.",
    tip:"seam(솔기)이 없다는 뜻. 서비스 설명에 자주 쓴다." },

  { word:"skeptical", ipa:"/ˈskeptɪkl/", kr:"스켑티컬", pos:"형용사", ko:"미심쩍어하는, 회의적인",
    ex:"I am skeptical about that claim.", exKo:"나는 그 주장에 회의적이다.",
    tip:"부정이 아니라 '증거를 더 보고 싶다'는 태도." },

  { word:"sophisticated", ipa:"/səˈfɪstɪkeɪtɪd/", kr:"서피스티케이티드", pos:"형용사", ko:"정교한, 세련된",
    ex:"It uses a sophisticated algorithm.", exKo:"그것은 정교한 알고리즘을 쓴다.",
    tip:"기계에 쓰면 '고도화된', 사람에 쓰면 '세련된'." },

  { word:"spontaneous", ipa:"/spɑːnˈteɪniəs/", kr:"스판테이니어스", pos:"형용사", ko:"즉흥적인, 저절로 일어나는",
    ex:"It was a spontaneous decision.", exKo:"그건 즉흥적인 결정이었다.",
    tip:"계획 없이 자연스럽게 나온 것. 대체로 긍정적이다." },

  { word:"streamline", ipa:"/ˈstriːmlaɪn/", kr:"스트림라인", pos:"동사", ko:"군더더기를 걷어 효율화하다",
    ex:"They streamlined the approval process.", exKo:"그들은 승인 절차를 간소화했다.",
    tip:"원래는 물이 매끄럽게 흐르는 유선형을 뜻했다." },

  { word:"strive", ipa:"/straɪv/", kr:"스트라이브", pos:"동사", ko:"애써 노력하다",
    ex:"We strive to do better each year.", exKo:"우리는 해마다 더 나아지려 애쓴다.",
    tip:"strive for ~ 또는 strive to ~ 형태로 쓴다." },

  { word:"substantial", ipa:"/səbˈstænʃl/", kr:"섭스탠셜", pos:"형용사", ko:"상당한, 꽤 큰",
    ex:"There was a substantial increase in sales.", exKo:"매출이 상당히 늘었다.",
    tip:"막연히 '큰'이 아니라 '무시 못 할 정도로'라는 어감." },

  { word:"surge", ipa:"/sɜːrdʒ/", kr:"서지", pos:"명사·동사", ko:"갑자기 치솟다, 급증",
    ex:"There was a surge in demand.", exKo:"수요가 갑자기 치솟았다.",
    tip:"전압이 튀는 것도 surge. 그래서 서지 보호기라 부른다." },

  { word:"tackle", ipa:"/ˈtækl/", kr:"태클", pos:"동사", ko:"(문제에) 달려들어 해결하다",
    ex:"Let us tackle the hardest part first.", exKo:"가장 어려운 부분부터 붙어 보자.",
    tip:"운동경기 태클과 같은 말. 정면으로 부딪친다는 느낌." },

  { word:"tangible", ipa:"/ˈtændʒəbl/", kr:"탠저블", pos:"형용사", ko:"손에 잡히는, 눈에 보이는",
    ex:"We need tangible results.", exKo:"눈에 보이는 성과가 필요하다.",
    tip:"반대말 intangible 은 '무형의'. 무형자산이 intangible assets." },

  { word:"tentative", ipa:"/ˈtentətɪv/", kr:"텐터티브", pos:"형용사", ko:"확정 아닌, 잠정적인",
    ex:"The date is tentative for now.", exKo:"날짜는 아직 잠정적이다.",
    tip:"일정 메일에서 '가안'이라는 뜻으로 아주 자주 쓴다." },

  { word:"trivial", ipa:"/ˈtrɪviəl/", kr:"트리비얼", pos:"형용사", ko:"사소한, 대수롭지 않은",
    ex:"Do not waste time on trivial issues.", exKo:"사소한 문제에 시간을 낭비하지 마라.",
    tip:"잡학 상식을 뜻하는 trivia 와 같은 뿌리." },

  { word:"undermine", ipa:"/ˌʌndərˈmaɪn/", kr:"언더마인", pos:"동사", ko:"밑에서부터 갉아먹다, 약화시키다",
    ex:"The rumors undermined his authority.", exKo:"소문이 그의 권위를 갉아먹었다.",
    tip:"원래는 성벽 밑을 파는 것. 서서히 무너뜨린다는 그림이다." },

  { word:"viable", ipa:"/ˈvaɪəbl/", kr:"바이어블", pos:"형용사", ko:"제대로 굴러갈 만한, 실행 가능한",
    ex:"That is the only viable option.", exKo:"그것이 유일하게 쓸 만한 선택지다.",
    tip:"feasible이 '해낼 수 있는'이면 viable은 '해낸 뒤에도 유지되는'." },

  { word:"vital", ipa:"/ˈvaɪtl/", kr:"바이털", pos:"형용사", ko:"없어서는 안 될, 생명과 직결된",
    ex:"Sleep is vital for recovery.", exKo:"회복에는 잠이 없어서는 안 된다.",
    tip:"life와 같은 뿌리. 병원의 '바이털 사인'이 그 뜻이다." },

  { word:"abrupt", ipa:"/əˈbrʌpt/", kr:"어브럽트", pos:"형용사", ko:"갑작스러운, 퉁명스러운",
    ex:"The meeting came to an abrupt end.", exKo:"회의가 갑작스럽게 끝났다.",
    tip:"사람 태도에 쓰면 '무뚝뚝한'이라는 부정적 뜻이 된다." },

  { word:"accumulate", ipa:"/əˈkjuːmjəleɪt/", kr:"어큐뮬레이트", pos:"동사", ko:"차곡차곡 쌓이다",
    ex:"Dust accumulated on the shelf.", exKo:"선반에 먼지가 쌓였다.",
    tip:"돈·경험·피로처럼 시간이 지나며 늘어나는 것에 쓴다." },

  { word:"acute", ipa:"/əˈkjuːt/", kr:"어큐트", pos:"형용사", ko:"극심한, 예리한",
    ex:"There is an acute shortage of housing.", exKo:"주택이 극심하게 부족하다.",
    tip:"의학에서 acute는 '급성', 반대는 chronic(만성)." },

  { word:"adjacent", ipa:"/əˈdʒeɪsnt/", kr:"어제이슨트", pos:"형용사", ko:"바로 옆에 붙어 있는",
    ex:"Our office is adjacent to the station.", exKo:"우리 사무실은 역 바로 옆이다.",
    tip:"near보다 가깝다. 맞닿아 있다는 뜻." },

  { word:"alleviate", ipa:"/əˈliːvieɪt/", kr:"얼리비에이트", pos:"동사", ko:"덜어 주다, 완화하다",
    ex:"The medicine alleviated the pain.", exKo:"약이 통증을 덜어 주었다.",
    tip:"통증·부담·빈곤처럼 괴로운 것에 쓴다." },

  { word:"allocate", ipa:"/ˈæləkeɪt/", kr:"앨러케이트", pos:"동사", ko:"몫을 나눠 배정하다",
    ex:"We allocated two hours for the review.", exKo:"검토에 두 시간을 배정했다.",
    tip:"예산·시간·자원을 나눌 때 쓰는 사무용 단어." },

  { word:"amend", ipa:"/əˈmend/", kr:"어멘드", pos:"동사", ko:"(문서를) 고치다, 수정하다",
    ex:"The rules were amended last year.", exKo:"규정이 작년에 개정되었다.",
    tip:"법·계약처럼 공식 문서에 주로 쓴다. 명사는 amendment." },

  { word:"ample", ipa:"/ˈæmpl/", kr:"앰플", pos:"형용사", ko:"넉넉한, 남을 만큼 충분한",
    ex:"There is ample time to prepare.", exKo:"준비할 시간이 넉넉하다.",
    tip:"enough가 '딱 충분'이면 ample은 '여유 있게 충분'." },

  { word:"apt", ipa:"/æpt/", kr:"앱트", pos:"형용사", ko:"딱 들어맞는 / ~하기 쉬운",
    ex:"That is an apt description.", exKo:"그건 딱 들어맞는 표현이다.",
    tip:"be apt to ~ 는 '~하는 경향이 있다'." },

  { word:"articulate", ipa:"/ɑːrˈtɪkjələt/", kr:"아티큘럿", pos:"형용사·동사", ko:"조리 있게 말하는 / 또렷이 표현하다",
    ex:"She is an articulate speaker.", exKo:"그는 조리 있게 말하는 사람이다.",
    tip:"동사일 때는 발음이 /-leɪt/ 로 바뀐다." },

  { word:"aspire", ipa:"/əˈspaɪər/", kr:"어스파이어", pos:"동사", ko:"간절히 바라다, 열망하다",
    ex:"He aspires to become a pilot.", exKo:"그는 조종사가 되기를 열망한다.",
    tip:"aspire to ~ 형태. 명사는 aspiration." },

  { word:"assess", ipa:"/əˈses/", kr:"어세스", pos:"동사", ko:"살펴 판단하다, 평가하다",
    ex:"We need to assess the risk first.", exKo:"먼저 위험을 판단해야 한다.",
    tip:"점수를 매기는 것보다 '가늠한다'는 쪽에 가깝다." },

  { word:"attain", ipa:"/əˈteɪn/", kr:"어테인", pos:"동사", ko:"노력 끝에 이루다",
    ex:"She attained her goal after years.", exKo:"그는 수년 만에 목표를 이뤘다.",
    tip:"get보다 격식 있고, 힘든 과정을 거쳤다는 뉘앙스." },

  { word:"attribute", ipa:"/əˈtrɪbjuːt/", kr:"어트리뷰트", pos:"동사·명사", ko:"~의 덕으로 돌리다 / 속성",
    ex:"He attributes his success to luck.", exKo:"그는 자신의 성공을 운 덕으로 돌린다.",
    tip:"명사로 쓸 때는 앞에 강세가 와서 /ˈætrɪbjuːt/ 가 된다." },

  { word:"avert", ipa:"/əˈvɜːrt/", kr:"어버트", pos:"동사", ko:"미리 막다 / 눈길을 돌리다",
    ex:"Quick action averted a disaster.", exKo:"빠른 조치가 참사를 막았다.",
    tip:"avert one's eyes 는 '시선을 피하다'." },

  { word:"benign", ipa:"/bɪˈnaɪn/", kr:"비나인", pos:"형용사", ko:"해롭지 않은, 온화한",
    ex:"The tumor turned out to be benign.", exKo:"종양은 양성으로 판명됐다.",
    tip:"g는 소리 나지 않는다. 반대는 malignant(악성)." },

  { word:"bleak", ipa:"/bliːk/", kr:"블리크", pos:"형용사", ko:"암울한, 황량한",
    ex:"The outlook remains bleak.", exKo:"전망은 여전히 암울하다.",
    tip:"풍경이 삭막할 때도, 미래가 어두울 때도 쓴다." },

  { word:"bolster", ipa:"/ˈboʊlstər/", kr:"볼스터", pos:"동사", ko:"떠받쳐 강화하다",
    ex:"The data bolstered his argument.", exKo:"그 자료가 그의 주장을 뒷받침했다.",
    tip:"원래는 긴 베개. 밑에서 받쳐 준다는 그림이다." },

  { word:"cease", ipa:"/siːs/", kr:"시스", pos:"동사", ko:"그치다, 멈추다",
    ex:"The rain finally ceased.", exKo:"마침내 비가 그쳤다.",
    tip:"stop보다 격식 있다. 휴전은 ceasefire." },

  { word:"chronic", ipa:"/ˈkrɑːnɪk/", kr:"크라닉", pos:"형용사", ko:"오래 이어지는, 만성적인",
    ex:"The city faces chronic traffic problems.", exKo:"그 도시는 만성적인 교통 문제를 안고 있다.",
    tip:"시간을 뜻하는 chrono- 와 같은 뿌리." },

  { word:"clarify", ipa:"/ˈklærəfaɪ/", kr:"클래러파이", pos:"동사", ko:"분명히 하다, 명확히 설명하다",
    ex:"Could you clarify what you mean?", exKo:"무슨 뜻인지 명확히 해 주시겠어요?",
    tip:"회의에서 되묻기 좋은 정중한 표현." },

  { word:"coincide", ipa:"/ˌkoʊɪnˈsaɪd/", kr:"코인사이드", pos:"동사", ko:"동시에 일어나다, 일치하다",
    ex:"The holiday coincides with my birthday.", exKo:"그 공휴일이 내 생일과 겹친다.",
    tip:"명사 coincidence 는 '우연의 일치'." },

  { word:"compensate", ipa:"/ˈkɑːmpenseɪt/", kr:"캄펜세이트", pos:"동사", ko:"보상하다, 메우다",
    ex:"Nothing can compensate for lost time.", exKo:"잃어버린 시간은 무엇으로도 메울 수 없다.",
    tip:"compensate for ~ 형태로 쓴다." },

  { word:"comply", ipa:"/kəmˈplaɪ/", kr:"컴플라이", pos:"동사", ko:"규정에 따르다",
    ex:"All staff must comply with the policy.", exKo:"전 직원은 그 방침을 따라야 한다.",
    tip:"comply with ~ 형태. 명사 compliance 는 '준법·규정 준수'." },

  { word:"conceal", ipa:"/kənˈsiːl/", kr:"컨실", pos:"동사", ko:"감추다, 숨기다",
    ex:"He could not conceal his disappointment.", exKo:"그는 실망을 감추지 못했다.",
    tip:"화장품 컨실러가 여기서 온 이름이다." },

  { word:"consensus", ipa:"/kənˈsensəs/", kr:"컨센서스", pos:"명사", ko:"두루 모인 의견, 합의",
    ex:"We reached a consensus after hours.", exKo:"몇 시간 만에 합의에 도달했다.",
    tip:"만장일치가 아니라 '대체로 뜻이 모인 상태'." },

  { word:"constrain", ipa:"/kənˈstreɪn/", kr:"컨스트레인", pos:"동사", ko:"제약하다, 옭아매다",
    ex:"Budget constrains what we can do.", exKo:"예산이 우리가 할 수 있는 일을 제약한다.",
    tip:"명사 constraint 는 개발·기획에서 '제약 조건'." },

  { word:"contend", ipa:"/kənˈtend/", kr:"컨텐드", pos:"동사", ko:"주장하다 / 겨루다",
    ex:"Critics contend that the law is unfair.", exKo:"비평가들은 그 법이 불공정하다고 주장한다.",
    tip:"contend with ~ 는 '~와 씨름하다'." },

  { word:"cultivate", ipa:"/ˈkʌltɪveɪt/", kr:"컬티베이트", pos:"동사", ko:"기르다, 가꾸다",
    ex:"He cultivated good habits early on.", exKo:"그는 일찍부터 좋은 습관을 길렀다.",
    tip:"밭을 갈다는 뜻에서 왔다. 관계·재능에도 쓴다." },

  { word:"cumbersome", ipa:"/ˈkʌmbərsəm/", kr:"컴버섬", pos:"형용사", ko:"다루기 번거로운, 거추장스러운",
    ex:"The process is slow and cumbersome.", exKo:"그 절차는 느리고 번거롭다.",
    tip:"물건이 크고 무거워 불편할 때도, 절차가 복잡할 때도 쓴다." },

  { word:"deem", ipa:"/diːm/", kr:"딤", pos:"동사", ko:"~라고 여기다",
    ex:"The plan was deemed too risky.", exKo:"그 계획은 너무 위험하다고 여겨졌다.",
    tip:"공식적인 판단에 자주 쓰인다. 문어체." },

  { word:"defer", ipa:"/dɪˈfɜːr/", kr:"디퍼", pos:"동사", ko:"미루다 / 뜻을 따르다",
    ex:"We decided to defer the decision.", exKo:"우리는 결정을 미루기로 했다.",
    tip:"defer to ~ 는 '~의 뜻을 존중해 따르다'." },

  { word:"defy", ipa:"/dɪˈfaɪ/", kr:"디파이", pos:"동사", ko:"거스르다, 저항하다",
    ex:"The result defied all expectations.", exKo:"결과는 모든 예상을 뒤엎었다.",
    tip:"defy description 은 '말로 표현할 수 없다'." },

  { word:"delegate", ipa:"/ˈdelɪɡeɪt/", kr:"델리게이트", pos:"동사·명사", ko:"맡기다 / 대표자",
    ex:"A good leader knows how to delegate.", exKo:"좋은 리더는 일을 맡길 줄 안다.",
    tip:"명사일 때는 발음이 /ˈdelɪɡət/ 로 바뀐다." },

  { word:"deploy", ipa:"/dɪˈplɔɪ/", kr:"디플로이", pos:"동사", ko:"배치하다, (시스템을) 내보내다",
    ex:"We deployed the update last night.", exKo:"어젯밤에 업데이트를 배포했다.",
    tip:"원래 군대 용어였는데 지금은 소프트웨어 배포에 더 자주 쓴다." },

  { word:"derive", ipa:"/dɪˈraɪv/", kr:"디라이브", pos:"동사", ko:"~에서 나오다, 얻다",
    ex:"The word derives from Latin.", exKo:"그 단어는 라틴어에서 나왔다.",
    tip:"derive from ~ 형태가 가장 흔하다." },

  { word:"deter", ipa:"/dɪˈtɜːr/", kr:"디터", pos:"동사", ko:"겁을 주어 못 하게 하다",
    ex:"High prices deter buyers.", exKo:"비싼 가격이 구매자를 망설이게 한다.",
    tip:"명사 deterrent 는 '억지력'." },

  { word:"devise", ipa:"/dɪˈvaɪz/", kr:"디바이즈", pos:"동사", ko:"궁리해 만들어 내다",
    ex:"They devised a clever solution.", exKo:"그들은 기발한 해법을 고안했다.",
    tip:"device(장치)와 같은 뿌리지만 발음이 다르다." },

  { word:"disclose", ipa:"/dɪsˈkloʊz/", kr:"디스클로즈", pos:"동사", ko:"공개하다, 밝히다",
    ex:"The company disclosed its earnings.", exKo:"그 회사는 실적을 공개했다.",
    tip:"close(닫다)에 dis가 붙어 '열어 보이다'." },

  { word:"discreet", ipa:"/dɪˈskriːt/", kr:"디스크릿", pos:"형용사", ko:"입이 무거운, 조심스러운",
    ex:"Please be discreet about this.", exKo:"이 일은 조심히 다뤄 주세요.",
    tip:"discrete(별개의)와 발음이 같고 뜻이 다르니 주의." },

  { word:"disrupt", ipa:"/dɪsˈrʌpt/", kr:"디스럽트", pos:"동사", ko:"흐름을 끊다, 뒤흔들다",
    ex:"The strike disrupted train service.", exKo:"파업이 열차 운행을 마비시켰다.",
    tip:"업계 판도를 바꾸는 것도 disrupt. 그래서 disruptive innovation." },

  { word:"distort", ipa:"/dɪˈstɔːrt/", kr:"디스토트", pos:"동사", ko:"비틀다, 왜곡하다",
    ex:"The report distorted the facts.", exKo:"그 보도는 사실을 왜곡했다.",
    tip:"소리나 이미지가 일그러지는 것도 distortion." },

  { word:"dubious", ipa:"/ˈduːbiəs/", kr:"두비어스", pos:"형용사", ko:"미심쩍은, 꺼림칙한",
    ex:"The claim rests on dubious evidence.", exKo:"그 주장은 미심쩍은 증거에 기대고 있다.",
    tip:"doubt(의심)와 같은 뿌리." },

  { word:"dwindle", ipa:"/ˈdwɪndl/", kr:"드윈들", pos:"동사", ko:"점점 줄어들다",
    ex:"Our savings dwindled quickly.", exKo:"저축이 빠르게 줄어들었다.",
    tip:"서서히 사라져 가는 그림. 인구·재고에 자주 쓴다." },

  { word:"elicit", ipa:"/ɪˈlɪsɪt/", kr:"일리시트", pos:"동사", ko:"이끌어 내다",
    ex:"The question elicited no response.", exKo:"그 질문은 아무 반응도 이끌어 내지 못했다.",
    tip:"illicit(불법의)와 발음이 비슷하니 주의." },

  { word:"elusive", ipa:"/ɪˈluːsɪv/", kr:"일루시브", pos:"형용사", ko:"좀처럼 잡히지 않는",
    ex:"A solution remains elusive.", exKo:"해법은 여전히 손에 잡히지 않는다.",
    tip:"동물·사람뿐 아니라 개념이 '이해하기 어렵다'에도 쓴다." },

  { word:"encompass", ipa:"/ɪnˈkʌmpəs/", kr:"인컴퍼스", pos:"동사", ko:"아우르다, 포함하다",
    ex:"The course encompasses both theory and practice.", exKo:"그 과정은 이론과 실습을 모두 아우른다.",
    tip:"include보다 '넓게 감싼다'는 느낌이 강하다." },

  { word:"endure", ipa:"/ɪnˈdʊr/", kr:"인듀어", pos:"동사", ko:"견뎌 내다 / 오래 지속되다",
    ex:"They endured months of hardship.", exKo:"그들은 몇 달의 고난을 견뎌 냈다.",
    tip:"명사 endurance 는 지구력." },

  { word:"entail", ipa:"/ɪnˈteɪl/", kr:"인테일", pos:"동사", ko:"필연적으로 수반하다",
    ex:"The job entails a lot of travel.", exKo:"그 일은 출장이 많이 따른다.",
    tip:"'~하면 자연히 ~가 따라온다'는 관계를 나타낸다." },

  { word:"erode", ipa:"/ɪˈroʊd/", kr:"이로드", pos:"동사", ko:"조금씩 깎아 내다",
    ex:"Distrust eroded the relationship.", exKo:"불신이 관계를 서서히 갉아먹었다.",
    tip:"바위의 침식에도, 신뢰가 무너지는 데에도 쓴다." },

  { word:"escalate", ipa:"/ˈeskəleɪt/", kr:"에스컬레이트", pos:"동사", ko:"단계가 높아지다, 격화되다",
    ex:"The argument escalated quickly.", exKo:"말다툼이 순식간에 격해졌다.",
    tip:"고객 응대에서 '윗선으로 넘기다'라는 뜻으로도 쓴다." },

  { word:"evoke", ipa:"/ɪˈvoʊk/", kr:"이보크", pos:"동사", ko:"불러일으키다",
    ex:"The song evokes old memories.", exKo:"그 노래는 옛 기억을 불러일으킨다.",
    tip:"감정·기억·이미지처럼 마음속에 떠오르는 것에 쓴다." },

  { word:"exempt", ipa:"/ɪɡˈzempt/", kr:"이그젬프트", pos:"형용사·동사", ko:"면제된, 면제하다",
    ex:"Students are exempt from the fee.", exKo:"학생은 그 비용이 면제된다.",
    tip:"면세점의 '면세'가 tax-exempt." },

  { word:"expedite", ipa:"/ˈekspədaɪt/", kr:"엑스퍼다이트", pos:"동사", ko:"일을 빨리 진행시키다",
    ex:"We can expedite the shipment.", exKo:"배송을 앞당겨 드릴 수 있습니다.",
    tip:"업무 메일에서 '서둘러 처리하다'로 자주 쓴다." },

  { word:"exploit", ipa:"/ɪkˈsplɔɪt/", kr:"익스플로이트", pos:"동사", ko:"활용하다 / 착취하다",
    ex:"They exploited a gap in the market.", exKo:"그들은 시장의 빈틈을 파고들었다.",
    tip:"사람에게 쓰면 '착취'라는 나쁜 뜻이 되니 주의." },

  { word:"facilitate", ipa:"/fəˈsɪlɪteɪt/", kr:"퍼실리테이트", pos:"동사", ko:"수월하게 해 주다",
    ex:"The app facilitates communication.", exKo:"그 앱은 소통을 수월하게 해 준다.",
    tip:"회의 진행자를 facilitator 라고 한다." },

  { word:"fluctuate", ipa:"/ˈflʌktʃueɪt/", kr:"플럭추에이트", pos:"동사", ko:"오르내리며 변동하다",
    ex:"Prices fluctuate throughout the year.", exKo:"가격이 연중 오르내린다.",
    tip:"한 방향이 아니라 위아래로 흔들리는 것." },

  { word:"formidable", ipa:"/ˈfɔːrmɪdəbl/", kr:"포미더블", pos:"형용사", ko:"만만치 않은, 벅찬",
    ex:"They face a formidable opponent.", exKo:"그들은 만만치 않은 상대를 만났다.",
    tip:"두렵지만 존경스럽다는 뉘앙스가 섞여 있다." },

  { word:"gauge", ipa:"/ɡeɪdʒ/", kr:"게이지", pos:"동사·명사", ko:"가늠하다 / 계기",
    ex:"It is hard to gauge his reaction.", exKo:"그의 반응을 가늠하기 어렵다.",
    tip:"'게이지'로 읽는다. 철자와 발음이 어긋나는 대표 단어." },

  { word:"glimpse", ipa:"/ɡlɪmps/", kr:"글림스", pos:"명사·동사", ko:"언뜻 봄, 흘끗 보다",
    ex:"I caught a glimpse of her in the crowd.", exKo:"인파 속에서 그를 언뜻 봤다.",
    tip:"catch a glimpse of ~ 형태로 자주 쓴다." },

  { word:"halt", ipa:"/hɔːlt/", kr:"홀트", pos:"동사·명사", ko:"멈추다, 정지",
    ex:"Production came to a halt.", exKo:"생산이 멈췄다.",
    tip:"come to a halt 는 '완전히 멎다'." },

  { word:"hamper", ipa:"/ˈhæmpər/", kr:"햄퍼", pos:"동사", ko:"발목을 잡다, 방해하다",
    ex:"Snow hampered the search.", exKo:"눈이 수색을 방해했다.",
    tip:"빨래 바구니라는 뜻도 있어 문맥으로 구별해야 한다." },

  { word:"harness", ipa:"/ˈhɑːrnɪs/", kr:"하니스", pos:"동사·명사", ko:"끌어다 활용하다 / 마구",
    ex:"We must harness solar energy.", exKo:"태양 에너지를 활용해야 한다.",
    tip:"말에 마구를 채워 힘을 쓰게 한다는 그림에서 왔다." },

  { word:"hierarchy", ipa:"/ˈhaɪərɑːrki/", kr:"하이어라키", pos:"명사", ko:"위아래로 나뉜 서열, 계층",
    ex:"The company has a flat hierarchy.", exKo:"그 회사는 위계가 단순하다.",
    tip:"h 다음이 '하이'로 시작한다. '히에라르키'가 아니다." },

  { word:"hostile", ipa:"/ˈhɑːstl/", kr:"하스틀", pos:"형용사", ko:"적대적인, 험악한",
    ex:"The crowd turned hostile.", exKo:"군중이 적대적으로 변했다.",
    tip:"hostile takeover 는 '적대적 인수'." },

  { word:"imminent", ipa:"/ˈɪmɪnənt/", kr:"이미넌트", pos:"형용사", ko:"곧 닥칠, 임박한",
    ex:"A storm is imminent.", exKo:"폭풍이 임박했다.",
    tip:"대개 나쁜 일이 코앞일 때 쓴다." },

  { word:"impartial", ipa:"/ɪmˈpɑːrʃl/", kr:"임파셜", pos:"형용사", ko:"어느 쪽에도 치우치지 않은",
    ex:"We need an impartial judge.", exKo:"공정한 심판이 필요하다.",
    tip:"partial(편파적인)에 im이 붙어 뜻이 뒤집힌다." },

  { word:"impose", ipa:"/ɪmˈpoʊz/", kr:"임포즈", pos:"동사", ko:"부과하다, 강요하다",
    ex:"They imposed a new tax.", exKo:"그들은 새 세금을 부과했다.",
    tip:"impose on ~ 는 '~에게 폐를 끼치다'." },

  { word:"incorporate", ipa:"/ɪnˈkɔːrpəreɪt/", kr:"인코퍼레이트", pos:"동사", ko:"녹여 넣다, 포함시키다",
    ex:"We incorporated your feedback.", exKo:"주신 의견을 반영했습니다.",
    tip:"회사명 뒤의 Inc. 가 이 단어의 약자다." },

  { word:"induce", ipa:"/ɪnˈduːs/", kr:"인듀스", pos:"동사", ko:"유도하다, 일으키다",
    ex:"The drug induces drowsiness.", exKo:"그 약은 졸음을 유발한다.",
    tip:"설득해서 하게 만드는 뜻도 있다." },

  { word:"inhibit", ipa:"/ɪnˈhɪbɪt/", kr:"인히빗", pos:"동사", ko:"억제하다, 못 하게 막다",
    ex:"Cold weather inhibits growth.", exKo:"추운 날씨가 성장을 억제한다.",
    tip:"inhabit(거주하다)과 철자가 한 글자 차이니 주의." },

  { word:"innate", ipa:"/ɪˈneɪt/", kr:"이네이트", pos:"형용사", ko:"타고난",
    ex:"She has an innate sense of rhythm.", exKo:"그는 타고난 리듬감이 있다.",
    tip:"배워서 얻은 acquired 와 짝을 이룬다." },

  { word:"intact", ipa:"/ɪnˈtækt/", kr:"인택트", pos:"형용사", ko:"손상 없이 온전한",
    ex:"The package arrived intact.", exKo:"소포가 온전한 상태로 도착했다.",
    tip:"'전혀 손대지 않은'이라는 뜻도 된다." },

  { word:"interfere", ipa:"/ˌɪntərˈfɪr/", kr:"인터피어", pos:"동사", ko:"끼어들다, 방해하다",
    ex:"Do not interfere with their work.", exKo:"그들의 일에 끼어들지 마라.",
    tip:"interfere with(방해하다), interfere in(참견하다)로 뜻이 갈린다." },

  { word:"intervene", ipa:"/ˌɪntərˈviːn/", kr:"인터빈", pos:"동사", ko:"중간에 나서다, 개입하다",
    ex:"The teacher intervened in the fight.", exKo:"선생님이 싸움에 끼어들어 말렸다.",
    tip:"interfere는 부정적, intervene은 중립·긍정적인 개입." },

  { word:"lag", ipa:"/læɡ/", kr:"래그", pos:"동사·명사", ko:"뒤처지다, 지연",
    ex:"Sales lagged behind last year.", exKo:"매출이 작년보다 뒤처졌다.",
    tip:"게임의 '랙'과 시차의 'jet lag'이 같은 단어." },

  { word:"liable", ipa:"/ˈlaɪəbl/", kr:"라이어블", pos:"형용사", ko:"법적 책임이 있는 / ~하기 쉬운",
    ex:"The driver is liable for the damage.", exKo:"운전자가 그 손해에 책임이 있다.",
    tip:"be liable to ~ 는 '~하기 쉽다'로 뜻이 달라진다." },

  { word:"magnitude", ipa:"/ˈmæɡnɪtuːd/", kr:"매그니튜드", pos:"명사", ko:"규모, 중요도",
    ex:"We underestimated the magnitude of the task.", exKo:"우리는 그 일의 규모를 과소평가했다.",
    tip:"지진 규모를 나타내는 그 단어." },

  { word:"mandate", ipa:"/ˈmændeɪt/", kr:"맨데이트", pos:"명사·동사", ko:"의무화하다 / 위임",
    ex:"The law mandates seat belts.", exKo:"법이 안전벨트 착용을 의무화한다.",
    tip:"mandatory(필수의)와 같은 뿌리." },

  { word:"marginal", ipa:"/ˈmɑːrdʒɪnl/", kr:"마지널", pos:"형용사", ko:"미미한, 가장자리의",
    ex:"The improvement was marginal.", exKo:"개선은 미미했다.",
    tip:"margin(여백·이익률)에서 왔다." },

  { word:"meticulous", ipa:"/məˈtɪkjələs/", kr:"머티큘러스", pos:"형용사", ko:"아주 꼼꼼한",
    ex:"He is meticulous about details.", exKo:"그는 세부 사항에 아주 꼼꼼하다.",
    tip:"careful보다 훨씬 강하다. 거의 결벽에 가까운 꼼꼼함." },

  { word:"momentum", ipa:"/moʊˈmentəm/", kr:"모멘텀", pos:"명사", ko:"밀고 나가는 힘, 탄력",
    ex:"The campaign is gaining momentum.", exKo:"캠페인이 탄력을 받고 있다.",
    tip:"물리학의 '운동량'이 원뜻이다." },

  { word:"obsolete", ipa:"/ˌɑːbsəˈliːt/", kr:"압설리트", pos:"형용사", ko:"한물간, 더는 쓰이지 않는",
    ex:"That format is now obsolete.", exKo:"그 형식은 이제 쓰이지 않는다.",
    tip:"고장 난 게 아니라 시대에 밀려난 것." },

  { word:"offset", ipa:"/ˌɔːfˈset/", kr:"오프셋", pos:"동사·명사", ko:"상쇄하다",
    ex:"Higher sales offset the rising costs.", exKo:"매출 증가가 비용 상승을 상쇄했다.",
    tip:"탄소 배출을 상쇄하는 carbon offset 으로도 익숙하다." },

  { word:"outweigh", ipa:"/ˌaʊtˈweɪ/", kr:"아웃웨이", pos:"동사", ko:"~보다 더 중요하다",
    ex:"The benefits outweigh the risks.", exKo:"이득이 위험보다 크다.",
    tip:"저울에 올려 더 무겁다는 그림. 결정을 설명할 때 유용하다." },

  { word:"overhaul", ipa:"/ˈoʊvərhɔːl/", kr:"오버홀", pos:"동사·명사", ko:"전면적으로 뜯어고치다",
    ex:"The system needs a complete overhaul.", exKo:"그 시스템은 전면 개편이 필요하다.",
    tip:"부분 수리가 아니라 뜯어서 다시 조립하는 수준." },

  { word:"paramount", ipa:"/ˈpærəmaʊnt/", kr:"패러마운트", pos:"형용사", ko:"무엇보다 중요한",
    ex:"Safety is paramount here.", exKo:"여기서는 안전이 무엇보다 중요하다.",
    tip:"more important than anything 의 한 단어 표현." },

  { word:"perceive", ipa:"/pərˈsiːv/", kr:"퍼시브", pos:"동사", ko:"알아채다, ~로 받아들이다",
    ex:"He is perceived as reliable.", exKo:"그는 믿음직하다고 여겨진다.",
    tip:"명사 perception 은 '인식·인상'." },

  { word:"pertinent", ipa:"/ˈpɜːrtnənt/", kr:"퍼트넌트", pos:"형용사", ko:"딱 들어맞는, 적절한",
    ex:"That is a pertinent question.", exKo:"그건 딱 들어맞는 질문이다.",
    tip:"relevant와 비슷하지만 더 격식 있는 말." },

  { word:"pivotal", ipa:"/ˈpɪvətl/", kr:"피버틀", pos:"형용사", ko:"결정적인, 축이 되는",
    ex:"He played a pivotal role.", exKo:"그는 결정적인 역할을 했다.",
    tip:"pivot(회전축)에서 왔다. 그것을 중심으로 판이 도는 것." },

  { word:"precede", ipa:"/prɪˈsiːd/", kr:"프리시드", pos:"동사", ko:"앞서다, 먼저 일어나다",
    ex:"A short talk preceded the show.", exKo:"짧은 강연이 공연에 앞섰다.",
    tip:"proceed(진행하다)와 철자가 비슷하니 주의." },

  { word:"preliminary", ipa:"/prɪˈlɪmɪneri/", kr:"프릴리머네리", pos:"형용사", ko:"예비의, 초기의",
    ex:"These are preliminary results.", exKo:"이건 잠정 결과다.",
    tip:"스포츠의 '예선'도 preliminary round." },

  { word:"presume", ipa:"/prɪˈzuːm/", kr:"프리줌", pos:"동사", ko:"~일 것이라 여기다",
    ex:"I presume you have read the report.", exKo:"보고서를 읽으셨으리라 생각합니다.",
    tip:"assume보다 근거가 조금 더 있는 추정." },

  { word:"prolong", ipa:"/prəˈlɔːŋ/", kr:"프럴롱", pos:"동사", ko:"질질 끌다, 길게 늘이다",
    ex:"Do not prolong the meeting.", exKo:"회의를 질질 끌지 마세요.",
    tip:"extend가 중립적이라면 prolong은 '필요 이상으로'라는 뉘앙스." },

  { word:"prominent", ipa:"/ˈprɑːmɪnənt/", kr:"프라미넌트", pos:"형용사", ko:"눈에 띄는, 저명한",
    ex:"She holds a prominent position.", exKo:"그는 요직에 있다.",
    tip:"물리적으로 튀어나온 것에도, 사회적 명성에도 쓴다." },

  { word:"prudent", ipa:"/ˈpruːdnt/", kr:"프루던트", pos:"형용사", ko:"앞을 내다보고 신중한",
    ex:"It would be prudent to wait.", exKo:"기다리는 편이 현명할 것이다.",
    tip:"cautious가 겁내는 쪽이면 prudent는 계산이 선 신중함." },

  { word:"reconcile", ipa:"/ˈrekənsaɪl/", kr:"레컨사일", pos:"동사", ko:"화해시키다, 아귀를 맞추다",
    ex:"We must reconcile the two accounts.", exKo:"두 장부를 맞춰 봐야 한다.",
    tip:"사람 사이의 화해와 숫자의 대조 양쪽에 쓴다." },

  { word:"reinforce", ipa:"/ˌriːɪnˈfɔːrs/", kr:"리인포스", pos:"동사", ko:"보강하다, 더 굳히다",
    ex:"The result reinforced our belief.", exKo:"그 결과가 우리 믿음을 굳혔다.",
    tip:"철근 콘크리트가 reinforced concrete." },

  { word:"relentless", ipa:"/rɪˈlentləs/", kr:"릴렌틀리스", pos:"형용사", ko:"수그러들 줄 모르는",
    ex:"The rain was relentless all week.", exKo:"비가 일주일 내내 그칠 줄 몰랐다.",
    tip:"칭찬으로 쓰면 '끈질긴', 비판으로 쓰면 '가차 없는'." },

  { word:"render", ipa:"/ˈrendər/", kr:"렌더", pos:"동사", ko:"~한 상태로 만들다 / 표현하다",
    ex:"The injury rendered him unable to work.", exKo:"부상으로 그는 일을 할 수 없게 됐다.",
    tip:"컴퓨터가 화면을 그려 내는 것도 render." },

  { word:"resort", ipa:"/rɪˈzɔːrt/", kr:"리조트", pos:"동사·명사", ko:"(어쩔 수 없이) 기대다 / 휴양지",
    ex:"They resorted to legal action.", exKo:"그들은 결국 법적 대응에 나섰다.",
    tip:"as a last resort 는 '최후의 수단으로'." },

  { word:"scarce", ipa:"/skers/", kr:"스케어스", pos:"형용사", ko:"턱없이 부족한, 귀한",
    ex:"Clean water is scarce there.", exKo:"그곳은 깨끗한 물이 귀하다.",
    tip:"명사 scarcity 는 경제학의 '희소성'." },

  { word:"shrewd", ipa:"/ʃruːd/", kr:"슈루드", pos:"형용사", ko:"눈치 빠르고 셈이 밝은",
    ex:"That was a shrewd investment.", exKo:"그건 영리한 투자였다.",
    tip:"smart보다 '실리를 잘 챙긴다'는 뉘앙스." },

  { word:"speculate", ipa:"/ˈspekjuleɪt/", kr:"스페큘레이트", pos:"동사", ko:"추측하다 / 투기하다",
    ex:"It is too early to speculate.", exKo:"추측하기엔 너무 이르다.",
    tip:"근거 없이 짐작한다는 부정적 어감이 섞일 때가 많다." },

  { word:"stagnant", ipa:"/ˈstæɡnənt/", kr:"스태그넌트", pos:"형용사", ko:"고여 있는, 정체된",
    ex:"The economy has been stagnant.", exKo:"경제가 정체되어 있다.",
    tip:"고인 물에서 온 말. 경기·성장에 자주 쓴다." },

  { word:"straightforward", ipa:"/ˌstreɪtˈfɔːrwərd/", kr:"스트레이트포워드", pos:"형용사", ko:"간단명료한, 솔직한",
    ex:"The instructions are straightforward.", exKo:"설명이 간단명료하다.",
    tip:"일에 쓰면 '복잡하지 않은', 사람에 쓰면 '솔직한'." },

  { word:"susceptible", ipa:"/səˈseptəbl/", kr:"서셉터블", pos:"형용사", ko:"쉽게 영향받는, 취약한",
    ex:"Children are susceptible to colds.", exKo:"아이들은 감기에 잘 걸린다.",
    tip:"be susceptible to ~ 형태로 쓴다." },

  { word:"transcend", ipa:"/trænˈsend/", kr:"트랜센드", pos:"동사", ko:"뛰어넘다, 초월하다",
    ex:"Music transcends language.", exKo:"음악은 언어를 뛰어넘는다.",
    tip:"경계나 한계를 넘어선다는 뜻." },

  { word:"unanimous", ipa:"/juˈnænɪməs/", kr:"유내니머스", pos:"형용사", ko:"만장일치의",
    ex:"The vote was unanimous.", exKo:"표결은 만장일치였다.",
    tip:"uni(하나) + animus(마음). 마음이 하나라는 뜻." },

  { word:"vulnerable", ipa:"/ˈvʌlnərəbl/", kr:"벌너러블", pos:"형용사", ko:"상처받기 쉬운, 취약한",
    ex:"The system is vulnerable to attack.", exKo:"그 시스템은 공격에 취약하다.",
    tip:"보안에서는 '취약점'을 vulnerability 라고 한다." },

  { word:"withstand", ipa:"/wɪðˈstænd/", kr:"위드스탠드", pos:"동사", ko:"버텨 내다, 견디다",
    ex:"The bridge can withstand strong winds.", exKo:"그 다리는 강풍을 견딜 수 있다.",
    tip:"물리적인 힘을 이겨 낸다는 뜻이 중심." },

  { word:"yield", ipa:"/jiːld/", kr:"일드", pos:"동사·명사", ko:"내주다 / 산출하다 / 수확량",
    ex:"The experiment yielded clear results.", exKo:"그 실험은 분명한 결과를 냈다.",
    tip:"도로 표지판의 YIELD 는 '양보'. 금융에서는 '수익률'." },
];
