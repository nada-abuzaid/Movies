import axios from "axios";
import { API_URL, API_KEY } from "@env";

export const HTTP_REQUEST = axios.create({
  baseURL: API_URL,
  params: {
    api_key: API_KEY,
  },
});

export const searchMovie = (query) =>
  HTTP_REQUEST.get(`${API_URL}/search/movie`, {
    params: {
      query: query,
      page: 1,
    },
  });
