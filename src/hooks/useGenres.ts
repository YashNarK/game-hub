import { AxiosRequestConfig } from "../services/api-client";
import genreService, { GenreData } from "../services/genre-service";
import useData from "./useData";

const useGenres = (requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const { data, httpErrors, isLoading } = useData<GenreData>(
    genreService,
    requestConfig,
    deps || ["genres"]
  );

  return {
    genres: data,
    httpErrors,
    isLoading,
  };
};

export default useGenres;
