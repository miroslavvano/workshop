export const PushWorker = () => {
  function triggerNotification() {
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: "PUSH_NOTIFICATION",
        payload: {
          title: "Service Worker Push Notification",
          body: "This is a push notification triggered from the service worker.",
        },
      });
    } else {
      console.log("No service worker controller found.");
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Service Worker Push Notification Demo</h1>
        <p>Click the button below to trigger a push notification.</p>
        <button onClick={triggerNotification}>Trigger Push Notification</button>
      </header>
    </div>
  );
};
