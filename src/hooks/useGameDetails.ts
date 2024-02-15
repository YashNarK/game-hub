import { useQuery } from "@tanstack/react-query";
import gameService from "../services/game-service";
import { GameData } from "../interfaces/game.type";

const useGameDetails = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: async () => {
      const resp = await gameService.getBySlug<GameData>(slug);
      return resp.data;
    },
  });

export default useGameDetails;
