/* 기상청 단기예보 받아서 data/kma.js 만들기
   ─────────────────────────────────────────────
   GitHub Actions 가 하루 네 번 돌린다. 손으로 돌려도 된다.

     KMA_KEY=발급받은키 node scripts/build-kma.mjs
     KMA_KEY=... node scripts/build-kma.mjs 서울 부산      (몇 곳만 시험)

   왜 이렇게 하나
     기상청 API 는 인증키가 있어야 한다. 앱은 정적 사이트라 키를 넣으면
     소스에 그대로 드러나고, 남이 가져다 쓰면 하루 한도가 소진된다.
     그래서 GitHub 이 키를 감춘 채 미리 받아다 파일로 만들어 두고,
     앱은 그 파일만 읽는다. 경제뉴스와 같은 방식이다.

   무엇을 담나
     40개 도시 × 3일(오늘·내일·모레) × 오전/오후.
     4일 뒤부터는 단기예보에 없다. 그건 앱이 Open-Meteo 로 채운다.

   키 발급
     https://www.data.go.kr → '단기예보 조회서비스' 활용신청 (무료) */

import { writeFileSync, readFileSync } from "node:fs";

const KEY = process.env.KMA_KEY;
if (!KEY) {
  console.error(`인증키가 없습니다.

  KMA_KEY=발급받은키 node scripts/build-kma.mjs

  발급: https://www.data.go.kr 에서 '단기예보 조회서비스' 활용신청`);
  process.exit(1);
}

const OUT  = new URL("../data/kma.js", import.meta.url);
const API  = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst";

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
   도시를 더할 때 쓰라고 남겨 둔다. (지금 목록은 이미 옮겨 둔 값이다) */
export function toGrid(lat, lon) {
  const RE = 6371.00877, GRID = 5.0, SLAT1 = 30, SLAT2 = 60, OLON = 126, OLAT = 38, XO = 43, YO = 136;
  const D = Math.PI / 180, re = RE / GRID;
  const s1 = SLAT1 * D, s2 = SLAT2 * D, ol = OLON * D, oa = OLAT * D;
  const sn = Math.log(Math.cos(s1) / Math.cos(s2))
           / Math.log(Math.tan(Math.PI * .25 + s2 * .5) / Math.tan(Math.PI * .25 + s1 * .5));
  const sf = Math.pow(Math.tan(Math.PI * .25 + s1 * .5), sn) * Math.cos(s1) / sn;
  const ro = re * sf / Math.pow(Math.tan(Math.PI * .25 + oa * .5), sn);
  const ra = re * sf / Math.pow(Math.tan(Math.PI * .25 + lat * D * .5), sn);
  let th = lon * D - ol;
  th = ((th + Math.PI) % (2 * Math.PI)) - Math.PI;
  th *= sn;
  return { nx: Math.floor(ra * Math.sin(th) + XO + .5), ny: Math.floor(ro - ra * Math.cos(th) + YO + .5) };
}

/* 기상청은 하루 여덟 번(02·05·08·11·14·17·20·23시) 발표한다.
   발표 직후에는 아직 자료가 안 올라와 있어서, 10분 여유를 두고
   그 이전 발표를 고른다. */
function baseTime(now = new Date()) {
  const kst = new Date(now.getTime() + (9 * 60 + now.getTimezoneOffset()) * 60000);
  const HOURS = [23, 20, 17, 14, 11, 8, 5, 2];
  const mins = kst.getHours() * 60 + kst.getMinutes() - 10;
  for (const h of HOURS) {
    if (mins >= h * 60) return { date: ymd(kst), time: String(h).padStart(2, "0") + "00" };
  }
  const y = new Date(kst); y.setDate(y.getDate() - 1);   // 02시 이전이면 어제 23시 발표
  return { date: ymd(y), time: "2300" };
}

const ymd = d => `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
const dash = s => `${s.slice(0, 4)}-${s.slice(4, 6)}-${s.slice(6, 8)}`;

/* 하늘상태(SKY)와 강수형태(PTY)를 앱이 쓰는 그림 이름으로 옮긴다.
   비·눈이 오면 하늘이 어떻든 그쪽이 먼저다. */
function toKind(sky, pty) {
  if (pty === 3 || pty === 7) return "snow";
  if (pty === 1 || pty === 2 || pty === 4 || pty === 5 || pty === 6) return "rain";
  if (sky === 1) return "clear";
  if (sky === 3) return "partly";
  if (sky === 4) return "cloudy";
  return "clear";
}

const KIND_TEXT = { clear: "맑음", partly: "구름 많음", cloudy: "흐림", rain: "비", snow: "눈" };

async function fetchOne(p, base) {
  const url = `${API}?serviceKey=${encodeURIComponent(KEY)}&pageNo=1&numOfRows=1000`
            + `&dataType=JSON&base_date=${base.date}&base_time=${base.time}&nx=${p.nx}&ny=${p.ny}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`응답 ${res.status}`);

  const text = await res.text();
  let j;
  try { j = JSON.parse(text); }
  catch { throw new Error(`JSON 이 아닙니다: ${text.slice(0, 120)}`); }

  const head = j?.response?.header;
  if (head && head.resultCode !== "00") throw new Error(`${head.resultCode} ${head.resultMsg}`);

  const items = j?.response?.body?.items?.item;
  if (!Array.isArray(items) || !items.length) throw new Error("예보 항목이 비어 있습니다");

  /* 날짜 → 오전(00~11)·오후(12~23) 로 모은다 */
  const days = {};
  for (const it of items) {
    const date = dash(it.fcstDate);
    const hour = +it.fcstTime.slice(0, 2);
    const half = hour < 12 ? "am" : "pm";
    const v = Number(it.fcstValue);
    const d = (days[date] ??= { date, am: {}, pm: {}, min: null, max: null, pop: 0 });

    switch (it.category) {
      case "TMP": (d[half].t ??= []).push(v); break;
      case "TMN": d.min = Math.round(v); break;
      case "TMX": d.max = Math.round(v); break;
      case "POP": d.pop = Math.max(d.pop, v); (d[half].pop = Math.max(d[half].pop ?? 0, v)); break;
      case "SKY": (d[half].sky ??= []).push(v); break;
      case "PTY": (d[half].pty ??= []).push(v); break;
    }
  }

  /* 반나절마다 가장 궂은 날씨를 그 반나절의 대표로 삼는다.
     (비 > 흐림 > 구름많음 > 맑음 순으로 궂다) */
  const RANK = { clear: 0, partly: 1, cloudy: 2, rain: 3, snow: 3 };
  const rep = h => {
    const sky = h.sky ?? [], pty = h.pty ?? [];
    let best = "clear";
    for (let i = 0; i < Math.max(sky.length, pty.length); i++) {
      const k = toKind(sky[i] ?? 1, pty[i] ?? 0);
      if (RANK[k] > RANK[best]) best = k;
    }
    return best;
  };

  const list = Object.values(days).sort((a, b) => a.date.localeCompare(b.date)).map(d => {
    const all = [...(d.am.t ?? []), ...(d.pm.t ?? [])];
    return {
      date: d.date,
      am:   rep(d.am),
      pm:   rep(d.pm),
      min:  d.min ?? (all.length ? Math.round(Math.min(...all)) : null),
      max:  d.max ?? (all.length ? Math.round(Math.max(...all)) : null),
      pop:  d.pop,
    };
  }).filter(d => Number.isFinite(d.min) && Number.isFinite(d.max));

  if (!list.length) throw new Error("쓸 만한 날이 없습니다");
  return list;
}

/* ── 여기서부터 실행 ── */
const only = process.argv.slice(2);
const targets = only.length ? PLACES.filter(p => only.includes(p.ko)) : PLACES;
const base = baseTime();
console.log(`기상청 ${base.date} ${base.time} 발표 기준 · ${targets.length}곳\n`);

const out = {};
const failed = [];
for (const p of targets) {
  try {
    out[p.ko] = await fetchOne(p, base);
    const d = out[p.ko][0];
    console.log(`  ${p.ko.padEnd(4)} ${d.date} ${d.min}/${d.max}° ${KIND_TEXT[d.am]}/${KIND_TEXT[d.pm]} ${d.pop}%`);
  } catch (e) {
    failed.push(`${p.ko}(${e.message})`);
    console.log(`  ${p.ko.padEnd(4)} 실패 — ${e.message}`);
  }
}

/* 몇 곳 빠지는 것은 넘어가되, 절반 넘게 실패하면 파일을 건드리지 않는다.
   반쪽짜리로 덮어쓰면 멀쩡하던 지역까지 날씨가 사라진다. */
if (Object.keys(out).length < targets.length / 2) {
  console.error(`\n${failed.length}곳이 실패해 파일을 그대로 둡니다.`);
  process.exit(1);
}

const stamp = new Intl.DateTimeFormat("ko-KR", {
  timeZone: "Asia/Seoul", dateStyle: "long", timeStyle: "short",
}).format(new Date());

const body = Object.entries(out)
  .map(([ko, list]) => `  ${JSON.stringify(ko)}: ${JSON.stringify(list)},`)
  .join("\n");

writeFileSync(OUT, `/* 기상청 단기예보 — 오늘·내일·모레 사흘치입니다.
   ${stamp} 에 scripts/build-kma.mjs 가 만들었습니다. 직접 고치지 마세요.

   발표 기준: ${base.date} ${base.time}
   4일 뒤부터는 단기예보에 없습니다. 그 부분은 앱이 Open-Meteo 로 채웁니다.
   출처: 기상청 국가기상종합정보 (공공누리 제1유형) */

const KMA = {
  at: ${JSON.stringify(`${base.date}${base.time}`)},
${body}
};
`);

console.log(`\n${Object.keys(out).length}곳 저장했습니다.`);
if (failed.length) console.log(`빠진 곳: ${failed.join(", ")}`);
