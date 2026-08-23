/* 경제뉴스 받아서 data/news.js 만들기
   ─────────────────────────────────────────────
   GitHub Actions 가 하루 세 번 돌린다. 손으로 돌려도 된다.

     node scripts/build-news.mjs

   왜 이렇게 하나
     이 앱은 서버가 없는 정적 사이트다. 브라우저에서 직접 뉴스를 받아오면
     (1) 뉴스 사이트가 CORS 로 막아 두었고
     (2) API 키를 쓰는 방식이면 그 키가 소스코드에 그대로 노출된다.
     그래서 GitHub 이 미리 받아다 파일로 만들어 두고, 앱은 그 파일만 읽는다.

   왜 언론사를 넷이나 받아오나
     RSS 는 '최신순' 이지 '중요순' 이 아니다. 한 곳만 받아서 위에서부터
     자르면 인사이동이나 단순 사건사고가 헤드라인 자리를 차지한다.
     여러 곳을 한꺼번에 받으면 '여러 신문이 같이 쓴 기사' 를 가려낼 수 있고,
     그게 서버도 인공지능도 없이 중요도를 재는 가장 확실한 방법이다.
     덤으로 한 곳의 시각만 보여주지 않게 된다.

   저작권
     제목과 원문 링크만 담는다. 기사 본문이나 요약문은 옮기지 않는다.
     연합뉴스 RSS 에는 '무단 전재-재배포 금지' 가 명시돼 있고 다른 곳도 같다.
     제목을 보여주고 원문으로 보내는 것은 RSS 를 쓰라고 만든 용도지만,
     본문을 옮겨 싣는 것은 그 선을 넘는다. 그래서 링크로만 연결한다. */

import { writeFileSync, readFileSync } from "node:fs";

/* 언론사를 고른 기준
     · 경제 전용 RSS 가 있고, 기사마다 발행시각이 붙어 있을 것
     · 성향이 한쪽으로 몰리지 않을 것
   한겨레와 이데일리도 후보였지만, 한겨레 RSS 는 기사별 날짜가 없고
   이데일리 서버는 요즘 Node 가 쓰는 TLS 를 받아주지 않아 뺐다. */
const FEEDS = [
  { src: "연합뉴스", host: "www.yna.co.kr",     url: "https://www.yna.co.kr/rss/economy.xml" },
  { src: "한국경제", host: "www.hankyung.com",  url: "https://www.hankyung.com/feed/economy" },
  { src: "매일경제", host: "www.mk.co.kr",      url: "https://www.mk.co.kr/rss/30100041/" },
  { src: "경향신문", host: "www.khan.co.kr",    url: "https://www.khan.co.kr/rss/rssdata/economy_news.xml" },
];

const OUT        = new URL("../data/news.js", import.meta.url);
const COUNT      = 6;    // 카드에서 '다른 것 보기' 로 넘길 만큼
const PER_SOURCE = 2;    // 한 언론사가 목록을 독차지하지 못하게
const FRESH_H    = 30;   // 하루 세 번 도니 30시간이면 빈 날이 안 생긴다
const LEAST      = 4;    // 이보다 적게 모이면 실패로 본다

const UA = "calbee-daily-board/1.0 (+https://github.com/lyh100700/daily-board)";

/* CDATA 를 벗기고 남은 엔티티를 되돌린다 */
function clean(s = "") {
  return s
    .replace(/^\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*$/, "$1")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#0?39;/g, "'").replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

const pick = (block, tag) => {
  const m = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  return m ? clean(m[1]) : "";
};

/* "Fri, 14 Aug 2026 16:00:01 +0900" → "8월 14일 16:00" (한국시간 기준) */
function when(ms) {
  const p = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: false,
  }).formatToParts(new Date(ms)).reduce((o, x) => (o[x.type] = x.value, o), {});
  return `${p.month}월 ${p.day}일 ${p.hour}:${p.minute}`;
}

/* ─── 받아오기 ───────────────────────────────
   한 곳이 죽어도 나머지로 만든다. 신문사 서버는 언제든 말썽을 부리는데
   그때마다 앱의 뉴스 카드가 통째로 사라지면 곤란하다. */
const now = Date.now();
const all = [];

for (const f of FEEDS) {
  try {
    const res = await fetch(f.url, {
      headers: { "user-agent": UA },
      signal: AbortSignal.timeout(20000),
    });
    if (!res.ok) throw new Error(`응답이 ${res.status}`);

    const xml   = await res.text();
    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(m => m[1]);
    let taken = 0;

    for (const b of items) {
      const q   = pick(b, "title");
      /* 경향신문 RSS 는 링크에 추적용 꼬리표(utm_...)를 붙여 보낸다.
         읽는 데 필요 없고 주소만 길어지므로 물음표 뒤를 떼어 낸다. */
      const url = pick(b, "link").split("?")[0];
      const at  = Date.parse(pick(b, "pubDate") || pick(b, "dc:date"));

      if (!q || !url) continue;
      if (!new RegExp(`^https://${f.host.replace(/\./g, "\\.")}/`).test(url)) continue;
      if (!Number.isFinite(at) || now - at > FRESH_H * 3600e3) continue;

      all.push({ src: f.src, q, url, at });
      taken++;
    }
    console.log(`${f.src} — 기사 ${items.length}건 중 최근 ${taken}건`);
  } catch (e) {
    console.log(`${f.src} — 못 받았습니다 (${e.message}). 건너뜁니다.`);
  }
}

if (!all.length) throw new Error("어느 언론사에서도 기사를 받지 못했습니다");

/* ─── 같은 사건끼리 묶기 ─────────────────────
   제목을 낱말로 쪼갠 뒤 두 낱말 이상 겹치면 같은 사건으로 본다.
   신문마다 제목을 다르게 달아도 사건의 이름(회사·기관·숫자)은 남기 때문에
   이 정도로도 '용산공원' 기사 두 건이 나란히 실리는 일은 없어진다. */
const SKIP = /^(그리고|하지만|위해|대한|관련|오늘|내일|올해|내년|작년|이번|종합|속보|사진|단독|기자|밝혀|나서|들어)$/;

const words = q => [...new Set(
  q.replace(/[^가-힣A-Za-z0-9 ]/g, " ").split(/\s+/)
    .map(w => w.replace(/(은|는|이|가|을|를|의|에|와|과|도|만|으로|로|에서|까지|부터|한다|했다|된다)$/, ""))
    .filter(w => w.length >= 2 && !SKIP.test(w))
)];

const clusters = [];
for (const a of all.sort((x, y) => y.at - x.at)) {     // 최신 기사가 묶음의 대표가 된다
  a.w = words(a.q);
  const found = clusters.find(c => c.some(m => m.w.filter(w => a.w.includes(w)).length >= 2));
  if (found) found.push(a); else clusters.push([a]);
}

/* ─── 점수 매기기 ───────────────────────────
   여러 신문이 함께 다뤘다는 것이 가장 센 신호다. 거기에 경제 기사다운
   낱말을 얹고, 보도자료를 옮겨 적은 홍보성 기사를 덜어낸다. */
const TOPIC = /금리|환율|물가|코스피|코스닥|증시|주가|부동산|집값|아파트|전세|반도체|수출|수입|관세|연준|한국은행|기재부|금감원|공정위|국세청|GDP|성장률|경기|고용|실업|임금|유가|가계부채|대출|세금|세제|예산|무역|경상수지|적자|흑자|파산|인수|합병|상장|배당|연금|보험료/;
const PR    = /출시|선정|수상|개최|협약|MOU|채용|기부|오픈|런칭|싹쓸이|맞손|간담회|위촉|취임|인사|부고|동정|사은|이벤트|할인행사/;

const ranked = clusters.map(c => {
  const head    = c[0];
  const outlets = new Set(c.map(m => m.src));
  const score =
    outlets.size * 10 +                                   // 함께 다룬 신문 수
    (TOPIC.test(head.q) ? 5 : 0) +                        // 경제 기사다운가
    (PR.test(head.q) ? -8 : 0) +                          // 홍보성이면 뒤로
    Math.max(0, 4 - (now - head.at) / 3600e3);            // 갓 나온 기사에 약간의 가산
  return { members: c, score, seen: outlets.size };
}).sort((a, b) => b.score - a.score);

/* ─── 고르기 ────────────────────────────────
   같은 사건을 여러 신문이 썼다면 그중 어느 것을 실을지 고를 수 있다.
   이때 아직 적게 실린 신문의 기사를 세운다. 그냥 최신 것을 고르면
   그날 기사를 많이 쏟아낸 한 곳이 목록을 다 차지해 버린다.

   그렇게 대표를 세운 뒤, 한 언론사가 두 건을 넘지 않게 채운다.
   그래도 모자라면 남은 것 중 점수가 높은 순으로 채운다.
   비어 보이는 것보다는 한쪽으로 기우는 편이 낫다. */
const news = [];
const used = {};

const speaker = c =>
  c.slice().sort((a, b) =>
    (used[a.src] || 0) - (used[b.src] || 0) ||          // 적게 실린 신문 먼저
    b.at - a.at                                          // 그다음은 최신 기사
  )[0];

for (const pass of [PER_SOURCE, COUNT]) {                // 1차는 쿼터대로, 2차는 남은 자리 채우기
  for (const c of ranked) {
    if (news.length >= COUNT) break;
    if (news.some(n => n.cluster === c)) continue;        // 같은 사건을 두 번 싣지 않는다

    const a = speaker(c.members);
    if ((used[a.src] || 0) >= pass) continue;

    used[a.src] = (used[a.src] || 0) + 1;
    news.push({ ...a, seen: c.seen, cluster: c });
  }
}

if (news.length < LEAST) throw new Error(`쓸 만한 기사가 ${news.length}건뿐입니다`);

/* ─── 파일로 쓰기 ───────────────────────────
   제목이 하나도 바뀌지 않았다면 파일을 건드리지 않는다.
   내용이 같은데 시각만 달라 매일 커밋이 쌓이는 걸 막는다. */
let before = "";
try { before = readFileSync(OUT, "utf8"); } catch {}
if (before && news.every(n => before.includes(JSON.stringify(n.q)))) {
  console.log("\n제목이 그대로라 그냥 둡니다.");
  process.exit(0);
}

const stamp = new Intl.DateTimeFormat("ko-KR", {
  timeZone: "Asia/Seoul", dateStyle: "long", timeStyle: "short",
}).format(new Date());

const body = news.map(n =>
  `  { q: ${JSON.stringify(n.q)},\n` +
  `    src: ${JSON.stringify(n.src)}, at: ${JSON.stringify(when(n.at))},\n` +
  `    url: ${JSON.stringify(n.url)} },`
).join("\n\n");

writeFileSync(OUT, `/* 오늘의 경제뉴스 — 연합뉴스·한국경제·매일경제·경향신문의 경제 RSS 에서
   여러 신문이 함께 다룬 기사를 골라 담았습니다.
   ${stamp} 에 scripts/build-news.mjs 가 만들었습니다. 직접 고치지 마세요.

   제목과 원문 링크만 담습니다. 기사 본문은 옮기지 않습니다.
   기사를 읽으려면 앱에서 '기사 읽기' 를 눌러 해당 언론사로 갑니다.
   저작권은 각 기사를 쓴 언론사에 있습니다. */

const NEWS = [
${body}
];
`);

console.log(`\n${news.length}건 저장했습니다.`);
news.forEach((n, i) => console.log(`  ${i + 1}. [${n.src}] ${n.seen}곳 보도 · ${when(n.at)}\n     ${n.q}`));
