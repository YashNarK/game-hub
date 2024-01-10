import axios, { AxiosError, CanceledError } from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  headers: {
    key: API_KEY,
  },
});

export { CanceledError, AxiosError };
