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
];
