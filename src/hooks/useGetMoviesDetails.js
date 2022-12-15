import axios from "axios";
import { useEffect, useState } from "react";
import { HTTP_REQUEST } from "../http";

export const useGetMoviesDetails = (url) => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  let source = axios.CancelToken.source();

  useEffect(() => {
    const getMovieDetails = async (url) => {
      try {
        setLoading(true);
        const { data } = await HTTP_REQUEST.get(url, {
          cancelToken: source.token,
        });
        setMovie(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setMovie({});
        setLoading(false);
        setError(true);
      }
    };

    getMovieDetails(url);

    return () => {
      source.cancel();
    };
  }, []);

  return [movie, loading, error];
};
