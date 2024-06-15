self.addEventListener("push", async (event) => {
  const options = {
    body: event.data?.text(),
  };
  await self.registration.showNotification("Push event listener", options);
});

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
