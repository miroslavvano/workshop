import { findPrimes } from "../helpers/heavy-task";

self.onmessage = function (e: MessageEvent<number>) {
  const limit = e.data;
  const primes = findPrimes(limit);
  self.postMessage(primes);
};
