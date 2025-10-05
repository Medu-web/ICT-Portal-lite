const CACHE = 'ict-portal-v2';
const PRECACHE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './packs/bootstrap.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];
self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(PRECACHE)));
  self.skipWaiting();
});
self.addEventListener('activate', (e)=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
  );
  self.clients.claim();
});
self.addEventListener('fetch', (e)=>{
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith((async ()=>{
    const cached = await caches.match(req);
    if (cached) return cached;
    try {
      const res = await fetch(req);
      const copy = res.clone();
      const cache = await caches.open(CACHE);
      if (new URL(req.url).origin === self.location.origin) cache.put(req, copy);
      return res;
    } catch (err) {
      return caches.match('./index.html');
    }
  })());
});