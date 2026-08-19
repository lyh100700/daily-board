/* 날씨 강아지 그림 만들기 (Google Gemini)
   ─────────────────────────────────────────────
   기존 그림을 참고 이미지로 함께 보내서 같은 강아지가 나오게 한다.
   글로만 시키면 매번 다른 강아지가 나와서 넉 장과 따로 논다.

     node scripts/make-weather-art.mjs night thunder fog
     node scripts/make-weather-art.mjs --list        어떤 모델을 쓸 수 있는지만 보기

   API 키
     ~/.gemini-key 파일에서 읽는다. 명령줄에 적지 않는 이유는
     터미널 기록(history)에 키가 남기 때문이다.

     발급: https://aistudio.google.com/apikey

   결과물
     docs/날씨-원본/<이름>.png 로 떨어진다. 마음에 들면 앱에 넣는다.
       sips --resampleHeight 260 -s format jpeg -s formatOptions 72 \
            docs/날씨-원본/night.png --out icons/weather/night.jpg */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const KEY_FILE = join(homedir(), ".gemini-key");
const REF = join(ROOT, "docs/날씨-원본/맑음.jpg");   // 이 강아지가 기준이다
const OUT_DIR = join(ROOT, "docs/날씨-원본");
const API = "https://generativelanguage.googleapis.com/v1beta";

/* 어떤 장면을 그릴지. 여기에 줄을 더하면 종류가 늘어난다 */
const SCENES = {
  night:   "a peaceful night scene: deep navy blue night sky with a warm yellow crescent moon and a few small twinkling stars behind the puppy. The puppy is sitting calmly and looking sleepy-happy.",
  thunder: "a thunderstorm: dark grey storm clouds above and one bright yellow lightning bolt. The puppy looks a little startled but still cute, ears perked up.",
  fog:     "thick soft morning fog: pale grey mist rolling in horizontal layers around the puppy, who is peeking through the mist with a curious expression.",
  sunset:  "a warm sunset: a big orange sun low on the horizon, soft peach and cream sky. The puppy is lying down relaxed.",
};

/* 참고 이미지를 붙이더라도, 지켜야 할 것을 글로 한 번 더 못 박는다.
   안 그러면 강아지 종이나 선 굵기가 조금씩 흘러간다. */
const RULES = [
  "Use the attached illustration as the exact character and style reference.",
  "Draw the SAME white Maltese puppy: same fluffy fur, same round black eyes and nose, same face shape.",
  "The puppy MUST wear the same light blue bandana around its neck.",
  "Same hand-drawn cartoon style: clean dark outlines, soft cel shading, muted pastel palette.",
  "Same warm cream background tone at the edges of the image.",
  "Landscape composition, roughly 4:3, the puppy centered and taking about half the frame.",
  "No text, no letters, no watermark, no border frame, no speech bubbles.",
].join(" ");

const key = (() => {
  if (!existsSync(KEY_FILE)) {
    console.error(`API 키 파일이 없습니다: ${KEY_FILE}

  만드는 법 (키가 터미널 기록에 남지 않는 방법):

    cat > ~/.gemini-key
    (키를 붙여넣고 Enter, 그다음 Ctrl+D)
    chmod 600 ~/.gemini-key

  키 발급: https://aistudio.google.com/apikey`);
    process.exit(1);
  }
  const k = readFileSync(KEY_FILE, "utf8").trim();
  if (!k) { console.error("키 파일이 비어 있습니다."); process.exit(1); }
  return k;
})();

async function listModels() {
  const res = await fetch(`${API}/models?key=${key}`);
  const j = await res.json();
  if (j.error) throw new Error(`${j.error.status}: ${j.error.message}`);
  return j.models || [];
}

/* 그림을 내놓을 수 있는 모델을 고른다.
   모델 이름은 구글이 자주 바꾸므로 목록에서 찾는다. 이름을 박아 두면 어느 날 갑자기 멈춘다. */
function pickImageModel(models) {
  const cands = models
    .map(m => m.name.replace("models/", ""))
    .filter(n => /image/.test(n) && !/embedding/.test(n));
  /* 최신 flash image 계열을 우선 */
  return cands.sort((a, b) => {
    const score = n => (/flash/.test(n) ? 2 : 0) + (/2\.5|3\./.test(n) ? 1 : 0) - (/preview|exp/.test(n) ? .5 : 0);
    return score(b) - score(a);
  })[0] || null;
}

async function draw(model, name, scene, refB64) {
  const body = {
    contents: [{
      role: "user",
      parts: [
        { inline_data: { mime_type: "image/jpeg", data: refB64 } },
        { text: `${RULES}\n\nScene to draw: ${scene}` },
      ],
    }],
    generationConfig: { responseModalities: ["IMAGE"] },
  };

  const res = await fetch(`${API}/models/${model}:generateContent?key=${key}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
  const j = await res.json();
  if (j.error) throw new Error(`${j.error.status}: ${j.error.message}`);

  const parts = j.candidates?.[0]?.content?.parts || [];
  const img = parts.find(p => p.inline_data || p.inlineData);
  if (!img) {
    const said = parts.map(p => p.text).filter(Boolean).join(" ").slice(0, 200);
    throw new Error(`그림이 안 왔습니다${said ? " — 모델이 한 말: " + said : ""}`);
  }
  const data = (img.inline_data || img.inlineData).data;
  const out = join(OUT_DIR, `${name}.png`);
  writeFileSync(out, Buffer.from(data, "base64"));
  return out;
}

/* ── 여기서부터 실행 ── */
const args = process.argv.slice(2);
const models = await listModels();

if (args.includes("--list") || !args.length) {
  const imgs = models.map(m => m.name.replace("models/", "")).filter(n => /image/.test(n));
  console.log(`모델 ${models.length}개 중 그림용:`);
  imgs.forEach(n => console.log("  ·", n));
  console.log(`\n고른 것: ${pickImageModel(models) || "(없음)"}`);
  console.log(`\n그릴 수 있는 장면: ${Object.keys(SCENES).join(", ")}`);
  console.log(`쓰는 법: node scripts/make-weather-art.mjs night thunder fog`);
  process.exit(0);
}

const model = pickImageModel(models);
if (!model) { console.error("그림을 그릴 수 있는 모델이 목록에 없습니다."); process.exit(1); }
if (!existsSync(REF)) { console.error(`참고 그림이 없습니다: ${REF}`); process.exit(1); }

const refB64 = readFileSync(REF).toString("base64");
console.log(`모델: ${model}`);
console.log(`참고 그림: ${REF.split("/").pop()}\n`);

for (const name of args) {
  const scene = SCENES[name];
  if (!scene) { console.error(`· ${name} — 모르는 장면입니다. (${Object.keys(SCENES).join(", ")})`); continue; }
  try {
    process.stdout.write(`· ${name} 그리는 중… `);
    const out = await draw(model, name, scene, refB64);
    console.log(`완료 → ${out.replace(ROOT, "")}`);
  } catch (e) {
    console.log(`실패 — ${e.message}`);
  }
}
