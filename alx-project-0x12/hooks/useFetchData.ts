import { useEffect, useState } from "react";

interface FetchResult {
  data: unknown;
  loading: boolean;
  error: string | null;
}

export default function useFetchData(url: string): FetchResult {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error };
}
