import gameService, { GameData } from "./../services/game-service";
import useData from "./useData";

const useGames = () => {
  const { data, setData, httpErrors, setHttpErrors, isLoading, setIsLoading } =
    useData<GameData>(gameService);

  return {
    games: data,
    httpErrors,
    isLoading,
    setGames: setData,
    setHttpErrors,
    setIsLoading,
  };
};

export default useGames;
