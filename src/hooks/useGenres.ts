import genreService, {
  GenreData,
} from "../services/genre-service";
import useData from "./useData";

const useGenres = () => {
  const {data, httpErrors,isLoading} = useData<GenreData>(genreService,undefined,["genre"]);

  return {
    genres:data,
    httpErrors,
    isLoading,
  };
};

export default useGenres;
