import { useState, useEffect, useMemo } from "react";

type FetchResult<T> = {
  data: T | null;
  error: string | null;
  loading: boolean;
  refetch: () => void;
};

type UseFetchArgs<T> = {
  url: string;
  options?: RequestInit;
  onSuccess?: (data: T) => void;
  onError?: () => void;
};

export const useFetch = <T>({
  url,
  options,
  onError,
  onSuccess,
}: UseFetchArgs<T>): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [trigger, setTrigger] = useState<number>(0);

  const memoizedOptions = useMemo(() => options, [options]);

  const refetch = () => {
    setTrigger(Math.random());
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, memoizedOptions);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result: T = await response.json();
        setData(result);
        onSuccess?.(result);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          const unknownErrorMessage = "Unknown error occured";
          setError(unknownErrorMessage);
        }
        onError?.();
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, onSuccess, onError, memoizedOptions, trigger]);

  return { data, error, loading, refetch };
};
