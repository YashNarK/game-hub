import { useQuery } from "@tanstack/react-query";
import gameService from "../services/game-service";
import { ResponseData } from "../interfaces/response.type";

const useGameTrailers = (id: number) =>
  useQuery({
    queryKey: ["trailers", id],
    queryFn: async () => {
      const resp = await gameService.getDataByID<ResponseData<Movie>>(id, "/movies");
      return resp.data;
    },
  });

export default useGameTrailers;
