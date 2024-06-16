import { sendNotification, setVapidDetails, type Subscription } from "web-push";

setVapidDetails(
  "mailto:  [email protected]",
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

const subscription: Subscription = {
  endpoint: "https://example.com",
  keys: {
    auth: "auth",
    p256dh: "p256dh",
  },
};

sendNotification(subscription, "Hello, World!");
