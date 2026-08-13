/* 서비스 워커 — 앱 파일을 폰에 저장해 두어 비행기 모드에서도 열리게 한다.
   파일을 고친 뒤에는 아래 VERSION 숫자를 올려야 새 버전이 반영된다. */

const VERSION = "v2";
const CACHE   = `mallang-${VERSION}`;

const SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png",
];

/* 설치할 때 앱 파일을 통째로 받아 둔다 */
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
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
