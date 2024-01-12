import { useEffect, useState } from "react";
import genreService, {
  GenreData,
  GenreResponseData,
} from "../services/genre-service";
import { AxiosError } from "../services/api-client";

const useGenres = () => {
  const [genres, setGenres] = useState<GenreData[]>([]);
  const [httpErrors, setHttpErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let controllerAbort: () => void;

    const fetchGenres = async () => {
      try {
        setIsLoading(true);
        const { resp, cancel } = await genreService.get<GenreResponseData>();
        controllerAbort = cancel;
        const genresList = resp.data.results;
        setGenres(genresList);
        setHttpErrors("");
      } catch (error) {
        const err = error as AxiosError;
        setHttpErrors(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGenres();

    return () => controllerAbort && controllerAbort();
  }, []);

  return {
    genres,
    httpErrors,
    isLoading,
    setGenres,
    setHttpErrors,
    setIsLoading,
  };
};

export default useGenres;
