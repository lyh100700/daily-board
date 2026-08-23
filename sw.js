/* 서비스 워커 — 앱 파일을 폰에 저장해 두어 비행기 모드에서도 열리게 한다.
   파일을 고친 뒤에는 아래 VERSION 숫자를 올려야 새 버전이 반영된다. */

const VERSION = "v42";
const CACHE   = `calbee-${VERSION}`;

const SHELL = [
  "./",
  "./index.html",
  "./install.html",
  "./manifest.webmanifest",
  "./data/knowledge.js",
  "./data/words.js",
  "./data/economy.js",
  "./data/holidays.js",
  "./data/news.js",
  "./data/kma.js",
  "./fonts/nunito-latin.woff2",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/icon-maskable-512.png",
  "./icons/brand-144.png",
  "./assets/splash.jpg",
  "./icons/weather/clear.jpg",
  "./icons/weather/cloudy.jpg",
  "./icons/weather/rain.jpg",
  "./icons/weather/snow.jpg",
  "./icons/weather/night.jpg",
  "./icons/weather/thunder.jpg",
  "./icons/weather/fog.jpg",
  "./assets/qr.png",
];

/* 깃허브는 파일을 보내면서 '10분 동안은 다시 묻지 마라'(max-age=600)를 함께 붙인다.
   그대로 두면 새 버전을 올려도 브라우저가 10분 가까이 옛 파일을 내놓는다.
   앱을 껐다 켜도 바뀐 게 안 보이던 이유가 이것이다.

   그래서 파일을 받을 때마다 서버에 '바뀐 것 있냐'고 한 번 물어보게 한다.
   그대로면 서버가 '그대로다' 한마디만 보내므로 데이터는 거의 안 쓴다.

   원래 요청을 고치지 않고 주소만 가지고 새로 만든다. 페이지 자체를 여는
   요청은 성격이 특별해서, 손대면 브라우저가 거부하는 경우가 있기 때문이다. */
const fresh = (req, mode) => {
  try { return new Request(req.url, { cache: mode, credentials: "same-origin" }); }
  catch { return req; }                 // 이 옵션을 모르는 옛 브라우저는 그냥 둔다
};

/* 설치할 때 앱 파일을 미리 받아 둔다.

   파일을 하나씩 따로 받는다. addAll 은 하나만 실패해도 전체가 취소되는데,
   그러면 서비스 워커 자체가 설치되지 않고 브라우저가 '앱 설치'를 막아 버린다.
   그림 한 장 못 받았다고 앱을 못 깔게 되는 일은 없어야 한다.

   reload 를 붙여 저장해 둔 것을 무시하고 서버에서 새로 받는다.
   새 버전을 깔면서 옛 파일을 담아 두면 아무 의미가 없다. */
self.addEventListener("install", e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await Promise.all(SHELL.map(url =>
      c.add(fresh(new Request(url), "reload")).catch(() => c.add(url).catch(() => {}))));
    await self.skipWaiting();
  })());
});

/* 새 버전이 설치되면 옛 캐시를 지운다 */
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* 네트워크를 먼저 시도하고, 안 되면 저장해 둔 파일을 쓴다.
   이렇게 해야 새로 배포한 내용이 바로 반영되면서도 오프라인이 된다.

   no-cache 는 '받지 마라'가 아니라 '받기 전에 바뀌었는지 물어봐라'는 뜻이다.
   이것이 있어야 위에서 말한 10분 지연 없이 그 자리에서 새 내용이 나온다. */
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;

  /* 날씨처럼 남의 서버로 나가는 요청은 손대지 않고 그냥 보낸다.
     여기서 가로채면 인터넷이 끊겼을 때 아래 catch 가 앱 화면(index.html)을
     날씨 응답인 척 돌려주게 되고, 앱은 그걸 날씨로 읽으려다 엉뚱하게 실패한다. */
  if (new URL(e.request.url).origin !== self.location.origin) return;

  e.respondWith(
    fetch(fresh(e.request, "no-cache"))
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(e.request).then(hit => hit || caches.match("./index.html")))
  );
});
