self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (e) => {
  // Memenuhi syarat PWA agar bisa diinstal offline
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
