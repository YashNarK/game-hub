import { useQuery } from "@tanstack/react-query";
import gameService from "../services/game-service";
import { ResponseData } from "../interfaces/response.type";
import { Screenshot } from "../interfaces/screenshot.type";

const useGameScreenshots = (id: number) =>
  useQuery({
    queryKey: ["Screenshots", id],
    queryFn: async () => {
      const resp = await gameService.getDataByID<ResponseData<Screenshot>>(
        id,
        "/screenshots"
      );
      return resp.data;
    },
  });

export default useGameScreenshots;
