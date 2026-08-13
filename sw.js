/* 서비스 워커 — 앱 파일을 폰에 저장해 두어 비행기 모드에서도 열리게 한다.
   파일을 고친 뒤에는 아래 VERSION 숫자를 올려야 새 버전이 반영된다. */

const VERSION = "v18";
const CACHE   = `calbee-${VERSION}`;

const SHELL = [
  "./",
  "./index.html",
  "./install.html",
  "./manifest.webmanifest",
  "./data/knowledge.js",
  "./data/words.js",
  "./data/holidays.js",
  "./fonts/nunito-latin.woff2",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/icon-maskable-512.png",
  "./icons/brand-144.png",
  "./assets/splash.jpg",
  "./assets/qr.png",
];

/* 설치할 때 앱 파일을 미리 받아 둔다.

   파일을 하나씩 따로 받는다. addAll 은 하나만 실패해도 전체가 취소되는데,
   그러면 서비스 워커 자체가 설치되지 않고 브라우저가 '앱 설치'를 막아 버린다.
   그림 한 장 못 받았다고 앱을 못 깔게 되는 일은 없어야 한다. */
self.addEventListener("install", e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await Promise.all(SHELL.map(url => c.add(url).catch(() => {})));
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
   이렇게 해야 새로 배포한 내용이 바로 반영되면서도 오프라인이 된다. */
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;

  e.respondWith(
    fetch(e.request)
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request).then(hit => hit || caches.match("./index.html")))
  );
});
