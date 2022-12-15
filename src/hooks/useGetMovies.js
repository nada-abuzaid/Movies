import { useEffect, useState } from "react";
import axios from "axios";
import { HTTP_REQUEST } from "../http";

export const useGetMovies = (url) => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  let source = axios.CancelToken.source();

  useEffect(() => {
    const getMovies = async (url) => {
      try {
        setLoading(true);
        const response = await HTTP_REQUEST.get(url, {
          cancelToken: source.token,
        });
        setMovie(response.data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setMovie([]);
        setLoading(false);
        setError(true);
      }
    };

    getMovies(url);

    return () => {
      source.cancel();
    };
  }, []);

  return [movie, loading, error];
};
