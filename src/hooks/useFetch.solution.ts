import { useState, useEffect } from "react";

type FetchResult<T> = {
  data: T | null;
  error: string | null;
  loading: boolean;
};

type UseFetchArgs<T> = {
  url: string;
  options?: RequestInit;
  onSuccess?: (data: T) => void;
  onError?: () => void;
};

const useFetch = <T>({
  url,
  options,
  onError,
  onSuccess,
}: UseFetchArgs<T>): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);
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
  }, [url, options, onSuccess, onError]);

  return { data, error, loading };
};

export default useFetch;
