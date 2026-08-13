/* 오늘의 단어 — 하루에 하나씩 순서대로 보여준다.
   추가하려면 이 배열 끝에 항목을 덧붙이면 된다.
   뜻풀이와 예문은 직접 작성한 것이라 저작권 문제가 없다.

   word  단어      ipa  발음      pos  품사
   ko    우리말 뜻  ex   예문      exKo 예문 해석   tip  쓰임새 한 줄 */

const WORDS = [
  { word:"resilient", ipa:"/rɪˈzɪliənt/", pos:"형용사", ko:"회복력이 좋은, 잘 견뎌내는",
    ex:"She stayed resilient after losing her job.", exKo:"그는 실직하고도 잘 버텨냈다.",
    tip:"사람뿐 아니라 경제·소재에도 쓴다. 명사는 resilience." },

  { word:"subtle", ipa:"/ˈsʌtl/", pos:"형용사", ko:"미묘한, 은근한",
    ex:"There is a subtle difference between the two.", exKo:"둘 사이에는 미묘한 차이가 있다.",
    tip:"b는 발음하지 않는다. '섭틀'이 아니라 '서틀'." },

  { word:"overwhelm", ipa:"/ˌoʊvərˈwelm/", pos:"동사", ko:"압도하다, 감당 못 할 만큼 밀려오다",
    ex:"The amount of work overwhelmed him.", exKo:"업무량이 그를 압도했다.",
    tip:"I'm overwhelmed. 는 '벅차다, 정신없다'는 뜻으로 자주 쓴다." },

  { word:"reluctant", ipa:"/rɪˈlʌktənt/", pos:"형용사", ko:"내키지 않는, 꺼리는",
    ex:"He was reluctant to answer the question.", exKo:"그는 그 질문에 답하기를 꺼렸다.",
    tip:"뒤에 to+동사가 온다. reluctant to go 처럼." },

  { word:"thorough", ipa:"/ˈθɜːroʊ/", pos:"형용사", ko:"철저한, 빈틈없는",
    ex:"The doctor did a thorough examination.", exKo:"의사가 철저히 진찰했다.",
    tip:"through(통과하여)와 철자가 비슷하니 주의. 부사는 thoroughly." },

  { word:"accommodate", ipa:"/əˈkɑːmədeɪt/", pos:"동사", ko:"수용하다, 맞춰주다",
    ex:"The hall can accommodate 300 people.", exKo:"그 홀은 300명을 수용할 수 있다.",
    tip:"c와 m이 각각 두 번씩. 철자 틀리기 쉬운 단어 상위권." },

  { word:"inevitable", ipa:"/ɪnˈevɪtəbl/", pos:"형용사", ko:"피할 수 없는, 필연적인",
    ex:"Change is inevitable in any organization.", exKo:"어떤 조직에서든 변화는 피할 수 없다.",
    tip:"It was inevitable. 은 '어차피 그렇게 될 일이었다'는 뉘앙스." },

  { word:"genuine", ipa:"/ˈdʒenjuɪn/", pos:"형용사", ko:"진짜의, 진심 어린",
    ex:"She showed genuine interest in my work.", exKo:"그는 내 일에 진심으로 관심을 보였다.",
    tip:"물건의 '정품'과 사람의 '진심' 양쪽에 다 쓴다." },

  { word:"tedious", ipa:"/ˈtiːdiəs/", pos:"형용사", ko:"지루하고 지겨운",
    ex:"Filling out the forms was tedious.", exKo:"양식을 채우는 일은 지겨웠다.",
    tip:"boring이 '재미없다'라면 tedious는 '길고 반복돼서 질린다'에 가깝다." },

  { word:"versatile", ipa:"/ˈvɜːrsətl/", pos:"형용사", ko:"다재다능한, 여러 용도로 쓰이는",
    ex:"This jacket is versatile enough for any season.", exKo:"이 재킷은 어느 계절에나 입을 만큼 활용도가 높다.",
    tip:"사람에게 쓰면 '팔방미인', 물건에 쓰면 '활용도 높은'." },

  { word:"cope", ipa:"/koʊp/", pos:"동사", ko:"(어려움을) 감당하다, 대처하다",
    ex:"He is learning to cope with stress.", exKo:"그는 스트레스에 대처하는 법을 익히고 있다.",
    tip:"거의 항상 cope with 형태로 쓴다." },

  { word:"blunt", ipa:"/blʌnt/", pos:"형용사", ko:"직설적인 / 무딘",
    ex:"To be blunt, the plan will not work.", exKo:"솔직히 말하면 그 계획은 안 될 겁니다.",
    tip:"To be blunt, 로 문장을 열면 '돌직구지만' 하고 양해를 구하는 표현이 된다." },

  { word:"thrive", ipa:"/θraɪv/", pos:"동사", ko:"번창하다, 잘 자라다",
    ex:"These plants thrive in cold weather.", exKo:"이 식물들은 추운 날씨에서 잘 자란다.",
    tip:"survive(간신히 살아남다)보다 훨씬 긍정적인 단계." },

  { word:"hesitate", ipa:"/ˈhezɪteɪt/", pos:"동사", ko:"망설이다, 주저하다",
    ex:"Do not hesitate to ask if you need help.", exKo:"도움이 필요하면 주저 말고 물어보세요.",
    tip:"Don't hesitate to ~ 는 이메일 맺음말 단골 표현." },

  { word:"compelling", ipa:"/kəmˈpelɪŋ/", pos:"형용사", ko:"설득력 있는, 눈을 뗄 수 없는",
    ex:"He made a compelling argument.", exKo:"그는 설득력 있는 주장을 폈다.",
    tip:"이야기나 영화에 쓰면 '몰입하게 만드는'이라는 뜻이 된다." },

  { word:"redundant", ipa:"/rɪˈdʌndənt/", pos:"형용사", ko:"쓸데없이 중복된, 군더더기의",
    ex:"Remove the redundant sentences.", exKo:"불필요하게 겹치는 문장을 지우세요.",
    tip:"영국에서는 '정리해고된'이라는 뜻으로도 쓴다." },

  { word:"anticipate", ipa:"/ænˈtɪsɪpeɪt/", pos:"동사", ko:"예상하다, 미리 대비하다",
    ex:"We anticipate a busy season ahead.", exKo:"우리는 바쁜 시즌을 예상하고 있다.",
    tip:"expect가 단순 예상이라면 anticipate는 '대비까지 한다'는 뉘앙스." },

  { word:"modest", ipa:"/ˈmɑːdɪst/", pos:"형용사", ko:"겸손한 / 그리 크지 않은",
    ex:"Despite his success, he remained modest.", exKo:"성공했음에도 그는 겸손했다.",
    tip:"a modest increase 는 '소폭 상승'. 사람 아닌 수치에도 쓴다." },

  { word:"deliberate", ipa:"/dɪˈlɪbərət/", pos:"형용사", ko:"의도적인, 신중한",
    ex:"It was a deliberate choice, not an accident.", exKo:"그건 실수가 아니라 의도한 선택이었다.",
    tip:"동사로 쓰면 발음이 /dɪˈlɪbəreɪt/로 바뀌고 '숙고하다'가 된다." },

  { word:"fragile", ipa:"/ˈfrædʒl/", pos:"형용사", ko:"깨지기 쉬운, 취약한",
    ex:"Handle the box carefully; it is fragile.", exKo:"상자를 조심히 다루세요. 깨지기 쉽습니다.",
    tip:"택배 상자의 '취급주의' 스티커에 적힌 그 단어." },

  { word:"abundant", ipa:"/əˈbʌndənt/", pos:"형용사", ko:"풍부한, 넘칠 만큼 많은",
    ex:"The region has abundant natural resources.", exKo:"그 지역은 천연자원이 풍부하다.",
    tip:"명사는 abundance. in abundance 는 '넘치도록'." },

  { word:"cautious", ipa:"/ˈkɔːʃəs/", pos:"형용사", ko:"조심스러운, 신중한",
    ex:"Be cautious when crossing the street.", exKo:"길을 건널 때는 조심하세요.",
    tip:"cautiously optimistic 은 뉴스에 자주 나오는 '조심스럽게 낙관적인'." },

  { word:"eloquent", ipa:"/ˈeləkwənt/", pos:"형용사", ko:"말을 잘하는, 유창하고 설득력 있는",
    ex:"Her speech was short but eloquent.", exKo:"그의 연설은 짧았지만 설득력이 있었다.",
    tip:"fluent가 '막힘없이'라면 eloquent는 '마음을 움직이게'." },

  { word:"sustain", ipa:"/səˈsteɪn/", pos:"동사", ko:"지속하다, 버텨내다",
    ex:"It is hard to sustain that pace for long.", exKo:"그 속도를 오래 유지하기는 어렵다.",
    tip:"sustainable(지속 가능한)의 뿌리가 되는 단어." },

  { word:"vague", ipa:"/veɪɡ/", pos:"형용사", ko:"모호한, 흐릿한",
    ex:"His answer was too vague to be useful.", exKo:"그의 답은 너무 모호해서 쓸모가 없었다.",
    tip:"'베이그'로 읽는다. gu는 소리 나지 않는다." },

  { word:"prompt", ipa:"/prɑːmpt/", pos:"형용사·동사", ko:"즉각적인 / 유도하다",
    ex:"Thank you for your prompt reply.", exKo:"빠른 답장 감사합니다.",
    tip:"이메일에서 '신속한'이라는 뜻으로 특히 자주 쓴다." },

  { word:"diminish", ipa:"/dɪˈmɪnɪʃ/", pos:"동사", ko:"줄어들다, 약해지다",
    ex:"Interest in the topic has diminished.", exKo:"그 주제에 대한 관심이 줄었다.",
    tip:"decrease보다 문어체이고, '점차 사그라든다'는 느낌이 강하다." },

  { word:"profound", ipa:"/prəˈfaʊnd/", pos:"형용사", ko:"깊이 있는, 지대한",
    ex:"The book had a profound effect on me.", exKo:"그 책은 내게 깊은 영향을 주었다.",
    tip:"deep이 물리적 깊이라면 profound는 생각과 영향의 깊이." },

  { word:"adequate", ipa:"/ˈædɪkwət/", pos:"형용사", ko:"충분한, 적당한",
    ex:"The room was small but adequate.", exKo:"방은 작았지만 지내기에 충분했다.",
    tip:"칭찬은 아니다. '넘치지도 모자라지도 않는' 정도의 뉘앙스." },

  { word:"intuitive", ipa:"/ɪnˈtuːɪtɪv/", pos:"형용사", ko:"직관적인, 배우지 않아도 알 만한",
    ex:"The app has an intuitive design.", exKo:"그 앱은 직관적인 디자인을 갖췄다.",
    tip:"제품 리뷰에서 '쓰기 쉽다'는 뜻으로 가장 흔히 쓰이는 칭찬." },
];
