import { AxiosRequestConfig } from "axios";
import gameService, { GameData } from "./../services/game-service";
import useData from "./useData";

const useGames = (requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const { data, httpErrors, isLoading } = useData<GameData>(
    gameService,
    requestConfig,
    Object.keys(deps![0]).length > 0? deps : ["games"]
  );

  return {
    games: data,
    httpErrors,
    isLoading,
  };
};

export default useGames;
