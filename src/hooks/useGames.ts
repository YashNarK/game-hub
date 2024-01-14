import { AxiosRequestConfig } from "axios";
import gameService, { GameData } from "./../services/game-service";
import useData from "./useData";

const useGames = (requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const { data, setData, httpErrors, setHttpErrors, isLoading, setIsLoading } =
    useData<GameData>(gameService, requestConfig, deps);

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
