// The reason your offline app is not working:
// - You're trying to cache files like `/src/App.tsx`, `/src/main.tsx`, `/src/assets/react.svg`, etc., but in a Vite (or any bundler) production build, **these don't exist at those URLs**. They are bundled and served from `/assets/*` or similar URLs after build.
// - You likely only need to cache `/`, `/index.html`, `/offline.html` (if you provide it), and the built JS/CSS/assets output by your build tool in `/dist`, such as `/assets/*.js`, `/assets/*.css`, etc.
// - You must also handle fetch events to serve cached files and show an offline page when offline.

const CACHE_NAME = "todo-app-cache-v3";
const urlsToCache = [
  "/",
  "/index.html",
  "/vite.svg", // main app icon (adjust if your favicon is different)
];

// Note: Service workers do not have direct access to navigator.storage.persist* APIs.
// The above should be in the main app (see src/main.tsx or similar).

// Install event: cache required URLs
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting(); // Activate new SW immediately
});

// Activate event: clean up old cache
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(function (keys) {
      keys.forEach(function (key) {});
      const deletePromise = Promise.all(
        keys
          .filter(function (key) {
            return key !== CACHE_NAME;
          })
          .map(function (key) {
            return caches.delete(key);
          })
      );

      deletePromise.then((results) => {});
      return deletePromise;
    })
  );
  self.clients.claim();
});

// Fetch event: serve from cache, fallback to network, fallback to offline page if needed
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).catch((error) => {
        return caches.match("/index.html");
      });
    })
  );
});
