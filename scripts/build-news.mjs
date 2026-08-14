/* 경제뉴스 받아서 data/news.js 만들기
   ─────────────────────────────────────────────
   GitHub Actions 가 하루 한 번 돌린다. 손으로 돌려도 된다.

     node scripts/build-news.mjs

   왜 이렇게 하나
     이 앱은 서버가 없는 정적 사이트다. 브라우저에서 직접 뉴스를 받아오면
     (1) 뉴스 사이트가 CORS 로 막아 두었고
     (2) API 키를 쓰는 방식이면 그 키가 소스코드에 그대로 노출된다.
     그래서 GitHub 이 미리 받아다 파일로 만들어 두고, 앱은 그 파일만 읽는다.

   저작권
     제목과 원문 링크만 담는다. 기사 본문이나 요약문은 옮기지 않는다.
     연합뉴스 RSS 에는 '무단 전재-재배포 금지' 가 명시돼 있다.
     제목을 보여주고 원문으로 보내는 것은 RSS 를 쓰라고 만든 용도지만,
     본문을 옮겨 싣는 것은 그 선을 넘는다. 그래서 링크로만 연결한다. */

import { writeFileSync, readFileSync } from "node:fs";

const FEED  = "https://www.yna.co.kr/rss/economy.xml";
const OUT   = new URL("../data/news.js", import.meta.url);
const COUNT = 5;                       // 카드에서 '다른 것 보기' 로 넘길 만큼만

/* CDATA 를 벗기고 남은 엔티티를 되돌린다 */
function clean(s = "") {
  return s
    .replace(/^\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*$/, "$1")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

const pick = (block, tag) => {
  const m = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  return m ? clean(m[1]) : "";
};

/* "Fri, 14 Aug 2026 16:00:01 +0900" → "8월 14일 16:00" (한국시간 기준) */
function when(pubDate) {
  const d = new Date(pubDate);
  if (Number.isNaN(d.getTime())) return "";
  const p = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: false,
  }).formatToParts(d).reduce((o, x) => (o[x.type] = x.value, o), {});
  return `${p.month}월 ${p.day}일 ${p.hour}:${p.minute}`;
}

const res = await fetch(FEED, {
  headers: { "user-agent": "calbee-daily-board/1.0 (+https://github.com/lyh100700/daily-board)" },
});
if (!res.ok) throw new Error(`RSS 응답이 ${res.status} 입니다`);

const xml   = await res.text();
const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(m => m[1]);
if (!items.length) throw new Error("RSS 에 기사가 하나도 없습니다");

const news = items
  .map(b => ({ q: pick(b, "title"), url: pick(b, "link"), at: when(pick(b, "pubDate")) }))
  .filter(n => n.q && /^https:\/\/www\.yna\.co\.kr\//.test(n.url))
  .slice(0, COUNT);

if (news.length < 3) throw new Error(`쓸 만한 기사가 ${news.length}건뿐입니다`);

/* 제목만 바뀌지 않았다면 파일을 건드리지 않는다.
   내용이 같은데 시각만 달라 매일 커밋이 쌓이는 걸 막는다. */
let before = "";
try { before = readFileSync(OUT, "utf8"); } catch {}
const sameTitles = news.every(n => before.includes(JSON.stringify(n.q)));
if (before && sameTitles) {
  console.log("제목이 그대로라 그냥 둡니다.");
  process.exit(0);
}

const stamp = new Intl.DateTimeFormat("ko-KR", {
  timeZone: "Asia/Seoul", dateStyle: "long", timeStyle: "short",
}).format(new Date());

const body = news.map(n =>
  `  { q: ${JSON.stringify(n.q)},\n` +
  `    at: ${JSON.stringify(n.at)}, url: ${JSON.stringify(n.url)} },`
).join("\n\n");

writeFileSync(OUT, `/* 오늘의 경제뉴스 — 연합뉴스 경제 RSS 에서 받아온 제목입니다.
   ${stamp} 에 scripts/build-news.mjs 가 만들었습니다. 직접 고치지 마세요.

   제목과 원문 링크만 담습니다. 기사 본문은 옮기지 않습니다.
   기사를 읽으려면 앱에서 '기사 읽기' 를 눌러 연합뉴스로 갑니다.
   저작권자(c) 연합뉴스 */

const NEWS = [
${body}
];
`);

console.log(`${news.length}건 저장했습니다.`);
news.forEach(n => console.log(`  · ${n.at}  ${n.q}`));
