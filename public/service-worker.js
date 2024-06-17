// const CACHE_NAME = "my-cache-v1";
// const urlsToCache = [
//   "/",
//   "/index.html",
//   "/styles.css",
//   "/script.js",
//   "/image.png",
// ];

// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       console.log("Opened cache");
//       return cache.addAll(urlsToCache);
//     })
//   );
// });

// self.addEventListener("activate", (event) => {
//   const cacheWhitelist = [CACHE_NAME];
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((cacheName) => {
//           if (cacheWhitelist.indexOf(cacheName) === -1) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });

// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       if (response) {
//         // Cache hit - return the cached response
//         return response;
//       }
//       // Cache miss - fetch from the network
//       return fetch(event.request).then((networkResponse) => {
//         // Check if we received a valid response
//         if (!networkResponse || networkResponse.status !== 200) {
//           return networkResponse;
//         }
//         // Clone the response
//         var responseToCache = networkResponse.clone();

//         caches.open(CACHE_NAME).then((cache) => {
//           cache.put(event.request, responseToCache);
//         });

//         return networkResponse;
//       });
//     })
//   );
// });


/**
 * does NOT run when browser is closed
 * but thet run when browser is running even if page is not active
 * https://developer.chrome.com/blog/background-sync
 */
// self.addEventListener("sync", function (event) {
//   if (event.tag === "sync-tag") {
//     event.waitUntil(performBackgroundSync());
//   }
// });

// async function performBackgroundSync() {
//   // Example: Send stored form data to the server
//   try {
//     const formData = await getStoredFormData();
//     const response = await fetch("/submit", {
//       method: "POST",
//       body: formData,
//     });
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//     console.log("Successfully sent data:", data);
//   } catch (error) {
//     console.error("Background sync failed:", error);
//   }
// }

// function getStoredFormData() {
//   // Example: Retrieve stored data from IndexedDB or another storage
//   return new Promise(() => {
//     // Retrieve data logic here...
//     // resolve(storedData);
//   });
// }

self.addEventListener("push", async (event) => {
  const options = {
    body: event.data?.text(),
  };
  await self.registration.showNotification("Push event listener", options);
});

//SHOWCASE TRIGGER NOTIFICATION ON MESSAGE
self.addEventListener("message", async (event) => {
  const title = event.data.payload.title;
  const options = {
    body: event.data.payload.body,
  };
  if (event.data.type === "PUSH_NOTIFICATION") {
    //important to have enabled notifications permissions in browser and on device for browser
    await self.registration.showNotification(title, options);
  }
});
