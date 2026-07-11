// Chromatura Service Worker
// Caches the app shell and Google Fonts for offline use.

const CACHE_VERSION = 'chromatura-v2';
const FONT_CACHE = 'chromatura-fonts-v1';

const APP_SHELL = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
];

// ── Install: pre-cache app shell ──────────────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

// ── Activate: remove old caches ───────────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE_VERSION && k !== FONT_CACHE)
          .map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// ── Fetch: serve from cache, fall back to network ─────────────────────────────
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Google Fonts & other cross-origin font/style requests → cache-first
  // (these are versioned/immutable by URL, so stale content isn't a concern)
  const isFontRequest =
    url.hostname === 'fonts.googleapis.com' ||
    url.hostname === 'fonts.gstatic.com';

  if (isFontRequest) {
    event.respondWith(
      caches.open(FONT_CACHE).then(async cache => {
        const cached = await cache.match(event.request);
        if (cached) return cached;
        try {
          const response = await fetch(event.request);
          if (response.ok) cache.put(event.request, response.clone());
          return response;
        } catch {
          // Offline and not cached — nothing we can do for fonts
          return new Response('', { status: 503 });
        }
      })
    );
    return;
  }

  // App shell & same-origin assets → network-first, falling back to cache
  // only when offline. This is what actually matters: with cache-first,
  // this same sw.js file never changes between deploys of index.html/
  // style.css/app.js, so the browser never re-installs the worker and users
  // get stuck on whatever was cached the first time they visited — no matter
  // how many times the site itself is redeployed. Network-first means online
  // users always get the current version, while offline users still get a
  // working (if slightly stale) copy from cache.
  if (url.origin === self.location.origin) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response.ok) {
            caches.open(CACHE_VERSION).then(cache => cache.put(event.request, response.clone()));
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Everything else — just fetch
  event.respondWith(fetch(event.request));
});
