import genreService, {
  GenreData,
} from "../services/genre-service";
import useData from "./useData";

const useGenres = () => {
  const {data,setData, httpErrors,setHttpErrors,isLoading,setIsLoading} = useData<GenreData>(genreService);

  return {
    genres:data,
    httpErrors,
    isLoading,
    setGenres:setData,
    setHttpErrors,
    setIsLoading,
  };
};

export default useGenres;
