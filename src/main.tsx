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

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
