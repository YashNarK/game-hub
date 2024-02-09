import { GenreData } from "../interfaces/genre.type";
import { AxiosRequestConfig } from "../services/api-client";
import genreService from "../services/genre-service";
import useData from "./useData";

const useGenres = (requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const { data, httpErrors, isLoading } = useData<GenreData>(
    genreService,
    requestConfig,
    deps || ["genres"],
    1000*60*60*24*1
  );

  return {
    genres: data,
    httpErrors,
    isLoading,
  };
};

export default useGenres;
