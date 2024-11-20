import { useSession } from "@clerk/clerk-react";
import { useState, useEffect } from "react";

const useFetch = (cb, options = {}) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const { session } = useSession();

  useEffect(() => {
    const controller = new AbortController();

    return () => controller.abort();
  }, []);

  const fn = async (...args) => {
    try {
      setLoading(true);
      setError(null);

      if (!session) {
        throw new Error("No session available");
      }

      const token = await session.getToken({
        template: "supabase",
      });

      const response = await cb(token, options, ...args);
      setData(response);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { fn, data, loading, error };
};

export default useFetch;
