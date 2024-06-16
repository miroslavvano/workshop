import { useFetch } from "../hooks/useFetch.solution";
import { CatFactApiResponse } from "../types";

export const CatFacts = () => {
  const { data, loading, error, refetch } = useFetch<CatFactApiResponse>({
    url: "https://catfact.ninja/fact",
  });

  if (error) {
    return <p>Error: {error}</p>;
  }
  if (loading || data === null) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <p>{data.fact}</p>
      <button onClick={() => refetch()}>Next fact</button>
    </div>
  );
};
