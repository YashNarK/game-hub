import { useState, useEffect } from "react";
import gameService, { GameData, GameDataResponse } from "./../services/game-service";
import { AxiosError, CanceledError } from "../services/api-client";

const useGames = () => {
  const [games, setGames] = useState<GameData[]>([]);
  const [httpErrors, setHttpErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let controllerAbort: () => void;

    async function fetchGames(): Promise<void> {
      try {
        setIsLoading(true);
        const { resp, cancel } = await gameService.get<GameDataResponse>();
        controllerAbort = cancel;
        setGames(resp.data.results);
        setHttpErrors("");
      } catch (error) {
        if (error instanceof CanceledError) return;
        const err = error as AxiosError;
        setHttpErrors(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchGames();

    return () => controllerAbort && controllerAbort();
  }, []);

  return {
    games,
    httpErrors,
    isLoading,
    setGames,
    setHttpErrors,
    setIsLoading,
  };
};

export default useGames;
