declare module "web-push" {
  export function setVapidDetails(
    contact: string,
    publicKey?: string,
    privateKey?: string
  ): void;
  export function sendNotification(
    subscription: { endpoint: string; keys: { auth: string; p256dh: string } },
    payload: string
  ): void;
  export type Subscription = {
    endpoint: string;
    keys: { auth: string; p256dh: string };
  };
}
