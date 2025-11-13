importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js"
);

// Precache files
workbox.precaching.precacheAndRoute([
  { url: "index.html", revision: null },
  { url: "offline.html", revision: null },
  { url: "nav.html", revision: null },
  { url: "js/app.js", revision: null },
  { url: "css/main.css", revision: null },
]);

// Runtime caching for API
workbox.routing.registerRoute(
  /^https:\/\/jsonplaceholder\.typicode\.com\/users.*$/,
  new workbox.strategies.NetworkFirst({
    cacheName: "api-cache",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 5 * 60,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// Navigation fallback for offline pages
workbox.routing.registerRoute(
  ({ request }) => request.mode === "navigate",
  new workbox.strategies.NetworkFirst({
    cacheName: "pages",
    networkTimeoutSeconds: 2,
    plugins: [
      {
        handlerDidError: async () => {
          return caches.match("offline.html");
        },
      },
    ],
  })
);

// ✅ Pre-cache API manually on install so it's immediately available offline
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("api-cache").then((cache) => {
      return fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          if (response.ok) {
            return cache.put(
              "https://jsonplaceholder.typicode.com/users",
              response.clone()
            );
          }
        })
        .catch(() => {
          // Fail silently if offline during install
        });
    })
  );
});

// Claim clients immediately so SW controls pages right away
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});
