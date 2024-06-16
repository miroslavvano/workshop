import { useState, useEffect, useMemo, useCallback } from "react";
import Worker from "./../workers/performance-worker.ts?worker";
import { findPrimes } from "../helpers/heavy-task";

export const PerformanceWorker = () => {
  const [primes, setPrimes] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false);

  //10_000_000 few sec
  const [workerLimit, setWorkerLimit] = useState<number>(10000);

  const worker = useMemo(() => {
    return new Worker();
  }, []);

  useEffect(() => {
    worker.onmessage = function (e: MessageEvent<number[]>) {
      setPrimes(e.data.length);
      setLoading(false);
    };

    worker.onerror = function (e) {
      console.error("Worker error:", e);
      setLoading(false);
    };

    return () => {
      worker.terminate();
    };
  }, [worker]);

  const handleFindPrimesWithMain = useCallback(() => {
    const primesLength = findPrimes(workerLimit).length;
    setPrimes(primesLength);
  }, [workerLimit]);

  const handleFindPrimes = useCallback(() => {
    setLoading(true);
    worker.postMessage(workerLimit);
  }, [worker, workerLimit]);

  return (
    <div>
      <h1>Prime Number Finder with Web Worker</h1>
      <div>
        <input
          type="number"
          onChange={(e) => setWorkerLimit(parseInt(e.target.value))}
          defaultValue={workerLimit}
        />
      </div>
      <div className="buttonGroup">
        <button onClick={handleFindPrimes}>Find Primes With Worker</button>
        <button onClick={handleFindPrimesWithMain}>
          Find Primes With Main Thread
        </button>
      </div>

      <div>{primes}</div>
      {loading && <p>Calculating...</p>}
      <textarea className="textarea" />
      {/* <ul>
        {primes.map((prime) => (
          <li key={prime}>{prime}</li>
        ))}
      </ul> */}
    </div>
  );
};
