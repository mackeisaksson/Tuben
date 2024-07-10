const CACHE_NAME = 'esp32-settings-v1';
const urlsToCache = [
  '/',
  '/index.html',
  'https://cdn.jsdelivr.net/gh/mackeisaksson/Tuben@main/portal/icons/icon-120x120.png',
  'https://cdn.jsdelivr.net/gh/mackeisaksson/Tuben@main/portal/icons/icon-128x128.png',
  'https://cdn.jsdelivr.net/gh/mackeisaksson/Tuben@main/portal/icons/icon-144x144.png',
  'https://cdn.jsdelivr.net/gh/mackeisaksson/Tuben@main/portal/icons/icon-152x152.png',
  'https://cdn.jsdelivr.net/gh/mackeisaksson/Tuben@main/portal/icons/icon-16x16.png',
  'https://cdn.jsdelivr.net/gh/mackeisaksson/Tuben@main/portal/icons/icon-180x180.png',
  'https://cdn.jsdelivr.net/gh/mackeisaksson/Tuben@main/portal/icons/icon-192x192.png',
  'https://cdn.jsdelivr.net/gh/mackeisaksson/Tuben@main/portal/icons/icon-32x32.png',
  'https://cdn.jsdelivr.net/gh/mackeisaksson/Tuben@main/portal/icons/icon-384x384.png',
  'https://cdn.jsdelivr.net/gh/mackeisaksson/Tuben@main/portal/icons/icon-512x512.png',
  'https://cdn.jsdelivr.net/gh/mackeisaksson/Tuben@main/portal/icons/icon-72x72.png',
  'https://cdn.jsdelivr.net/gh/mackeisaksson/Tuben@main/portal/icons/icon-96x96.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
