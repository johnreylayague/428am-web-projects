const CACHE_NAME = "todo-app-v1";
const urlsToCache = [
  "/",
  "plugins/dexie.min.js",
  "index.html",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "styles.css",
  "example.html",
];

// Install Service Worker
self.addEventListener("install", (event) => {
  console.log("Service Worker: Installing...");

  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

// Activate Service Worker
self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activated");

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Service Worker: Clearing old cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );

  return self.clients.claim();
});

// Fetch Event - Network First, Cache Fallback
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // For API requests, try network first
  if (request.url.includes("/api/")) {
    // Only cache GET requests - Cache API doesn't support POST, PUT, DELETE, etc.
    if (request.method === "GET") {
      event.respondWith(
        fetch(request)
          .then((response) => {
            // Only cache successful responses
            if (response.ok) {
              // Clone the response
              const responseClone = response.clone();
              // Cache the GET response
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(request, responseClone);
              });
            }

            return response;
          })
          .catch(() => {
            // If network fails, try cache
            return caches.match(request);
          })
      );
    } else {
      // For non-GET requests (POST, PUT, DELETE), don't cache - just fetch directly
      event.respondWith(fetch(request));
    }
  } else {
    // For other requests, cache first
    event.respondWith(
      caches
        .match(request)
        .then((response) => {
          return response || fetch(request);
        })
        .catch(() => {
          // Fallback for offline
          return caches.match("/index.html");
        })
    );
  }
});

// Background Sync (optional - for syncing when back online)
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-todos") {
    event.waitUntil(syncTodos());
  }
});

async function syncTodos() {
  try {
    // This would sync local changes to the server
    console.log("Background sync: Syncing todos");
  } catch (error) {
    console.error("Background sync failed:", error);
  }
}

// How to check if todos API response is cached, and get/fetch if not
function checkIfTodosCached() {
  const url = "http://localhost:3000/api/todos";
  caches
    .match(url)
    .then((response) => {
      if (response) {
        console.log("✅ /api/todos is cached!");
        return response.json();
      } else {
        console.log("❌ /api/todos not cached. Fetching from network...");
        return fetch(url).then((res) => res.json());
      }
    })
    .then((data) => {
      console.log("Todos data:", data);
    });
}

// Example call to check and log if cached:
checkIfTodosCached();
