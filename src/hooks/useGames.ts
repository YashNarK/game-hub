import { AxiosRequestConfig } from "axios";
import gameService from "./../services/game-service";
import useData from "./useData";
import { GameData } from "../interfaces/game.type";

const useGames = (requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const { data, httpErrors, isLoading, nextPage, prevPage } = useData<GameData>(
    gameService,
    requestConfig,
    Object.keys(deps![0]).length > 0 ? deps : ["games"]
  );

  return {
    games: data,
    httpErrors,
    isLoading,
    nextPage,
    prevPage,
  };
};

export default useGames;
