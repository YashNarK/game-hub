import { useState, useEffect } from "react";
import gameService, {
  GameData,
  GameDataResponse,
} from "./../services/game-service";
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
        const delay = (delayInMilliseconds: number) =>
          new Promise((resolve) => setTimeout(resolve, delayInMilliseconds));
        await delay(0);
        const { resp, cancel } = await gameService.get<GameDataResponse>();
        controllerAbort = cancel;

        const gamesList = resp.data.results;
        const gamesListWithWebsites = await Promise.all(
          gamesList.map(async (game) => {
            const gamePlatformNames = game.parent_platforms.map(
              (platformObject) => platformObject.platform.name
            );
            console.log(gamePlatformNames);
            game.platform_names = gamePlatformNames;
            const resp = await gameService.getByID<GameData>(game);
            game.website = resp.data.website;
            return game;
          })
        );

        setGames(gamesListWithWebsites);
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
