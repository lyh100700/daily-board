/* 기상청 날씨 받아서 data/kma.js 만들기
   ─────────────────────────────────────────────
   GitHub Actions 가 하루 네 번 돌린다. 손으로 돌려도 된다.

     node scripts/build-kma.mjs
     node scripts/build-kma.mjs 서울 부산        (몇 곳만 시험)

   인증키가 필요 없다
     기상청이 자기 날씨 위젯에 쓰는 주소(queryDFS.jsp)를 그대로 부른다.
     브라우저에서는 이 주소를 못 부른다. 응답에 CORS 허가가 없어서다.
     하지만 여기는 GitHub 서버라 그 규칙이 적용되지 않는다.

     대신 이 주소는 문서로 공개된 API 가 아니다. 기상청이 말없이 바꾸거나
     닫을 수 있다. 그래서 절반 넘게 실패하면 파일을 건드리지 않고,
     앱도 자료가 낡으면 알아서 Open-Meteo 로 넘어가게 해 두었다.

     공식 API(data.go.kr)로 갈아타려면 인증키를 받아 fetchOne 만 고치면 된다.

   무엇을 담나
     40개 도시 × 3일(오늘·내일·모레) × 오전/오후.
     4일 뒤부터는 기상청 단기예보에 없다. 그건 앱이 Open-Meteo 로 채운다.

   출처: 기상청 (공공누리 제1유형 — 출처표시) */

import { writeFileSync } from "node:fs";

const OUT = new URL("../data/kma.js", import.meta.url);
const API = "https://www.kma.go.kr/wid/queryDFS.jsp";

/* 앱의 지역 목록과 같은 40곳. nx·ny 는 기상청 격자 좌표다.
   시청 위경도를 아래 toGrid 로 옮긴 값이고, 모두 시청에서 3.2km 안쪽이다.
   (격자 한 칸이 5km 이므로 같은 칸 안이라고 보면 된다) */
const PLACES = [
  { ko: "서울", nx: 60, ny: 127 },
  { ko: "부산", nx: 98, ny: 76 },
  { ko: "대구", nx: 89, ny: 91 },
  { ko: "인천", nx: 55, ny: 124 },
  { ko: "광주", nx: 58, ny: 74 },
  { ko: "대전", nx: 67, ny: 100 },
  { ko: "울산", nx: 102, ny: 84 },
  { ko: "세종", nx: 66, ny: 103 },
  { ko: "수원", nx: 61, ny: 120 },
  { ko: "성남", nx: 62, ny: 124 },
  { ko: "고양", nx: 57, ny: 129 },
  { ko: "용인", nx: 63, ny: 120 },
  { ko: "부천", nx: 56, ny: 125 },
  { ko: "안산", nx: 57, ny: 121 },
  { ko: "평택", nx: 62, ny: 114 },
  { ko: "파주", nx: 56, ny: 131 },
  { ko: "춘천", nx: 73, ny: 134 },
  { ko: "원주", nx: 76, ny: 122 },
  { ko: "강릉", nx: 92, ny: 132 },
  { ko: "속초", nx: 87, ny: 141 },
  { ko: "청주", nx: 69, ny: 107 },
  { ko: "충주", nx: 76, ny: 115 },
  { ko: "천안", nx: 62, ny: 110 },
  { ko: "아산", nx: 60, ny: 110 },
  { ko: "전주", nx: 63, ny: 89 },
  { ko: "군산", nx: 56, ny: 92 },
  { ko: "익산", nx: 60, ny: 92 },
  { ko: "목포", nx: 50, ny: 67 },
  { ko: "여수", nx: 73, ny: 66 },
  { ko: "순천", nx: 70, ny: 70 },
  { ko: "포항", nx: 102, ny: 94 },
  { ko: "경주", nx: 100, ny: 91 },
  { ko: "구미", nx: 84, ny: 96 },
  { ko: "안동", nx: 91, ny: 106 },
  { ko: "창원", nx: 91, ny: 77 },
  { ko: "진주", nx: 81, ny: 75 },
  { ko: "김해", nx: 94, ny: 77 },
  { ko: "거제", nx: 90, ny: 69 },
  { ko: "제주", nx: 53, ny: 38 },
  { ko: "서귀포", nx: 53, ny: 33 },
];

/* 기상청은 위경도 대신 자체 격자를 쓴다. 옮기는 공식은 기상청이 공개한 것이다.
   도시를 더할 때 쓰라고 남겨 둔다. (위 목록은 이미 옮겨 둔 값이다) */
export function toGrid(lat, lon) {
  const RE = 6371.00877, GRID = 5, SLAT1 = 30, SLAT2 = 60, OLON = 126, OLAT = 38, XO = 43, YO = 136;
  const D = Math.PI / 180, re = RE / GRID;
  const s1 = SLAT1 * D, s2 = SLAT2 * D, ol = OLON * D, oa = OLAT * D;
  const sn = Math.log(Math.cos(s1) / Math.cos(s2))
           / Math.log(Math.tan(Math.PI * .25 + s2 * .5) / Math.tan(Math.PI * .25 + s1 * .5));
  const sf = Math.pow(Math.tan(Math.PI * .25 + s1 * .5), sn) * Math.cos(s1) / sn;
  const ro = re * sf / Math.pow(Math.tan(Math.PI * .25 + oa * .5), sn);
  const ra = re * sf / Math.pow(Math.tan(Math.PI * .25 + lat * D * .5), sn);
  let th = lon * D - ol;
  th = ((th + Math.PI) % (2 * Math.PI)) - Math.PI;
  return { nx: Math.floor(ra * Math.sin(th * sn) + XO + .5),
           ny: Math.floor(ro - ra * Math.cos(th * sn) + YO + .5) };
}

const tag = (block, name) => {
  const m = block.match(new RegExp(`<${name}>([^<]*)</${name}>`));
  return m ? m[1].trim() : "";
};

/* 하늘상태(sky)와 강수형태(pty)를 앱이 쓰는 그림 이름으로 옮긴다.
   비나 눈이 오면 하늘이 어떻든 그쪽이 먼저다.

   기상청 단기예보에는 안개와 천둥번개가 따로 없다. 그 둘은 4일 뒤부터
   Open-Meteo 가 채우는 자리에서만 나온다. */
function toKind(sky, pty) {
  if (pty === 3) return "snow";              // 눈
  if (pty >= 1)  return "rain";              // 비 · 비/눈 · 소나기
  if (sky <= 1)  return "clear";             // 맑음
  if (sky === 2) return "partly";            // 구름 조금
  return "cloudy";                           // 구름 많음 · 흐림
}

/* 궂은 정도. 반나절 안에서 가장 궂은 때를 그 반나절의 대표로 삼는다 */
const RANK = { clear: 0, partly: 1, cloudy: 2, rain: 3, snow: 3 };

async function fetchOne(p) {
  const res = await fetch(`${API}?gridx=${p.nx}&gridy=${p.ny}`);
  if (!res.ok) throw new Error(`응답 ${res.status}`);

  const xml = await res.text();
  const stamp = (xml.match(/<tm>(\d+)<\/tm>/) || [])[1] || "";
  const blocks = [...xml.matchAll(/<data seq="\d+">([\s\S]*?)<\/data>/g)].map(m => m[1]);
  if (!blocks.length) throw new Error("예보 항목이 비어 있습니다");

  /* 발표 시각의 날짜에서 day(0·1·2)만큼 더하면 그 예보의 날짜가 된다 */
  const base = new Date(+stamp.slice(0, 4), +stamp.slice(4, 6) - 1, +stamp.slice(6, 8));
  const dateOf = n => {
    const d = new Date(base); d.setDate(d.getDate() + n);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  };

  const days = new Map();
  for (const b of blocks) {
    const day  = +tag(b, "day");
    const hour = +tag(b, "hour");
    const half = hour < 12 ? "am" : "pm";     // hour 24 는 그날 끝이라 오후로 친다
    const kind = toKind(+tag(b, "sky"), +tag(b, "pty"));
    const temp = parseFloat(tag(b, "temp"));
    const tmn  = parseFloat(tag(b, "tmn"));
    const tmx  = parseFloat(tag(b, "tmx"));
    const pop  = +tag(b, "pop") || 0;

    if (!days.has(day)) days.set(day, { date: dateOf(day), temps: [], hours: [], pop: 0, min: null, max: null });
    const d = days.get(day);

    if (Number.isFinite(temp)) {
      d.temps.push(temp);
      /* 세 시간 간격 값. 앱의 아침·낮·저녁·밤 칸과 지금 기온에 쓴다 */
      d.hours.push([hour, Math.round(temp), kind]);
    }
    if (tmn > -900) d.min = Math.round(tmn);
    if (tmx > -900) d.max = Math.round(tmx);
    d.pop = Math.max(d.pop, pop);

    /* 그 반나절에서 가장 궂은 것으로 갱신한다. 한글 표현도 같이 들고 간다 */
    if (!d[half] || RANK[kind] > RANK[d[half].k]) d[half] = { k: kind, t: tag(b, "wfKor") };
  }

  /* 오늘 오전은 이미 지나서 예보에 없는 것이 보통이다 (08시 발표는 12시부터 준다).
     그럴 때 오후 값을 몰래 베껴 넣으면 지나간 오전 날씨를 지어내는 셈이라,
     없으면 없다고 남긴다. 앱이 보고 알아서 처리한다. */
  const list = [...days.entries()].sort((a, b) => a[0] - b[0]).map(([, d]) => ({
    date: d.date,
    am: d.am?.k ?? null,
    pm: d.pm?.k ?? null,
    amT: d.am?.t ?? "",
    pmT: d.pm?.t ?? "",
    h: d.hours.sort((x, y) => x[0] - y[0]),
    min: d.min ?? (d.temps.length ? Math.round(Math.min(...d.temps)) : null),
    max: d.max ?? (d.temps.length ? Math.round(Math.max(...d.temps)) : null),
    pop: d.pop,
  })).filter(d => Number.isFinite(d.min) && Number.isFinite(d.max) && (d.am || d.pm));

  if (!list.length) throw new Error("쓸 만한 날이 없습니다");
  return { stamp, list };
}

/* ── 여기서부터 실행 ── */
const only = process.argv.slice(2);
const targets = only.length ? PLACES.filter(p => only.includes(p.ko)) : PLACES;
if (!targets.length) { console.error("그런 도시가 목록에 없습니다."); process.exit(1); }

const out = {};
const failed = [];
let stamp = "";

for (const p of targets) {
  try {
    const got = await fetchOne(p);
    stamp ||= got.stamp;
    out[p.ko] = got.list;
    const d = got.list[0];
    console.log(`  ${p.ko.padEnd(4)} ${d.date} ${d.min}/${d.max}° ${d.amT}/${d.pmT} 강수 ${d.pop}%`);
  } catch (e) {
    failed.push(`${p.ko}(${e.message})`);
    console.log(`  ${p.ko.padEnd(4)} 실패 — ${e.message}`);
  }
  await new Promise(r => setTimeout(r, 80));   // 남의 서버다. 몰아치지 않는다
}

/* 몇 곳 빠지는 것은 넘어가되, 절반 넘게 실패하면 파일을 건드리지 않는다.
   반쪽짜리로 덮어쓰면 멀쩡하던 지역까지 날씨가 사라진다. */
if (Object.keys(out).length < targets.length / 2) {
  console.error(`\n${failed.length}곳이 실패해 파일을 그대로 둡니다.`);
  process.exit(1);
}

const made = new Intl.DateTimeFormat("ko-KR", {
  timeZone: "Asia/Seoul", dateStyle: "long", timeStyle: "short",
}).format(new Date());

const body = Object.entries(out)
  .map(([ko, list]) => `  ${JSON.stringify(ko)}: ${JSON.stringify(list)},`)
  .join("\n");

writeFileSync(OUT, `/* 기상청 단기예보 — 오늘·내일·모레 사흘치입니다.
   ${made} 에 scripts/build-kma.mjs 가 만들었습니다. 직접 고치지 마세요.

   발표 기준: ${stamp}
   4일 뒤부터는 기상청 단기예보에 없습니다. 그 자리는 앱이 Open-Meteo 로 채웁니다.
   출처: 기상청 (공공누리 제1유형 — 출처표시) */

const KMA = {
  at: ${JSON.stringify(stamp)},
  place: {
${body}
  }
};
`);

console.log(`\n${Object.keys(out).length}곳 저장했습니다. (발표 ${stamp})`);
if (failed.length) console.log(`빠진 곳: ${failed.join(", ")}`);
