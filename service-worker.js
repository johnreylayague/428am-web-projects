// Version only when you intentionally update cache
const CACHE_NAME = "todo-app-v1";
const urlsToCache = ["/", "index.html", "styles.css", "example.html"];

// Install Service Worker
self.addEventListener("install", (event) => {
  console.log("[Service Worker] Installing...");

  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("[Service Worker] Pre-caching static assets");
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate Service Worker
self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Activated");

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          // Only delete old caches with a *different* prefix, not same version
          .filter((name) => name.startsWith("todo-app") && name !== CACHE_NAME)
          .map((name) => {
            console.log("[Service Worker] Deleting old cache:", name);
            return caches.delete(name);
          })
      );
    })
  );

  self.clients.claim();
});

// Fetch Event - Cache First for Static, Network First for API
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Ignore non-HTTP or browser-extension requests
  if (!request.url.startsWith("http")) return;

  // For API requests
  if (request.url.includes("/api/")) {
    if (request.method === "GET") {
      event.respondWith(
        fetch(request)
          .then((response) => {
            if (response.ok) {
              const responseClone = response.clone();
              caches
                .open(CACHE_NAME)
                .then((cache) => cache.put(request, responseClone));
            }
            return response;
          })
          .catch(async () => {
            const cachedResponse = await caches.match(request);
            if (cachedResponse) {
              console.log("[Service Worker] Serving /api/ from cache");
              return cachedResponse;
            } else {
              console.warn("[Service Worker] No cached API response found.");
              return new Response(JSON.stringify({ offline: true, data: [] }), {
                headers: { "Content-Type": "application/json" },
              });
            }
          })
      );
    } else {
      // Non-GET requests go directly to network
      event.respondWith(fetch(request));
    }
  } else {
    // Static files - Cache First
    event.respondWith(
      caches
        .match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse; // return from cache
          }
          return fetch(request).then((networkResponse) => {
            // Cache newly fetched static files
            if (networkResponse.ok) {
              const responseClone = networkResponse.clone();
              caches
                .open(CACHE_NAME)
                .then((cache) => cache.put(request, responseClone));
            }
            return networkResponse;
          });
        })
        .catch(() => caches.match("/index.html")) // fallback
    );
  }
});

// Background Sync (optional - syncing when back online)
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-todos") {
    event.waitUntil(syncTodos());
  }
});

async function syncTodos() {
  try {
    console.log("[Service Worker] Background Sync: syncing todos...");
    // Implement your sync logic here
  } catch (error) {
    console.error("[Service Worker] Background Sync failed:", error);
  }
}

// Utility function: Check if /api/todos cached
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
    })
    .catch((err) => console.error("Error checking todos cache:", err));
}

// Example call
checkIfTodosCached();
