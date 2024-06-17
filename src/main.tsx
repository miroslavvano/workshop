import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

//register and install in browser internal storage
if ("serviceWorker" in navigator) {
  try {
    const registration = await navigator.serviceWorker.register(
      "/service-worker.js"
      //scope
    );
    if (registration) {
      console.log("Service Worker registered with scope:", registration.scope);
    }
  } catch (error) {
    console.error("Service Worker registration failed:", error);
  }
}

/**
 * Consider a scenario where a user fills out a form while offline.
 * You can save the form data in IndexedDB and then register a sync event.
 * When the sync event triggers (when connectivity is restored),
 * the service worker retrieves the data 
 * from IndexedDB and sends it to the server.
 */

//register sync event
// if ("serviceWorker" in navigator && "SyncManager" in window) {
//   navigator.serviceWorker.ready
//     .then((swRegistration) => {
//       return swRegistration.sync.register("sync-tag");
//     })
//     .then(() => {
//       console.log("Sync registered successfully");
//     })
//     .catch((error) => {
//       console.log("Sync registration failed:", error);
//     });
// }

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
