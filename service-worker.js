/* =====================================================================
   3Ls (Language Learning Library) — Service Worker
   ---------------------------------------------------------------
   전략: stale-while-revalidate
     - 오프라인에서도 즉시 캐시로 응답
     - 온라인이면 백그라운드로 새 버전을 받아 다음 실행에 반영
   업데이트: 아래 CACHE 버전 숫자만 올리면(예: v1 → v2) 옛 캐시가 정리됩니다.
   경로는 모두 상대경로 → GitHub Pages 하위경로(/repo/)에서도 그대로 동작.
   ===================================================================== */
const CACHE = '3ls-v2';

// 오프라인 첫 실행에 필요한 앱 셸. 언어팩을 추가하면 여기에도 넣어주세요.
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './icon-maskable.svg',
  './languages/fr.js',
  './languages/es.js',
  './languages/ja-food.js'
];

// 설치: 앱 셸을 개별 캐시(하나가 실패해도 설치는 계속)
self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await Promise.all(APP_SHELL.map(url =>
      cache.add(url).catch(err => console.warn('[SW] 캐시 실패:', url, err))
    ));
    self.skipWaiting();
  })());
});

// 활성화: 옛 버전 캐시 삭제 + 즉시 제어권 확보
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

// 요청 처리: 동일 출처 GET만 처리 (stale-while-revalidate)
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // 외부(CDN 등)는 그대로 통과

  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(req);

    const network = fetch(req).then(res => {
      if (res && res.status === 200 && res.type === 'basic') cache.put(req, res.clone());
      return res;
    }).catch(() => null);

    // 캐시가 있으면 즉시 반환하고 네트워크는 백그라운드 갱신
    if (cached) { network; return cached; }

    const res = await network;
    if (res) return res;

    // 오프라인 + 캐시 미스: 네비게이션이면 앱 셸로 폴백
    if (req.mode === 'navigate') return cache.match('./index.html');
    return new Response('', { status: 504, statusText: 'Offline' });
  })());
});
