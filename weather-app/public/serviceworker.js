const CACHE_NAME = "version-1";
const urlsToCache = ["/index.html", "/offline.html"];

// Install Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting(); // activate SW immediately
});

// Activate Service Worker
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );

  self.clients.claim(); // take control of pages immediately
});

// Fetch event — serve cache first, fallback to network, then offline page
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // serve cached version if available
      }

      return fetch(event.request).catch(() => caches.match("/offline.html"));
    })
  );
});
