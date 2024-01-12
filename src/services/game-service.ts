import create from "./http-service";

 interface GameDataResponse {
  count: number;
  results: GameData[];
}

 interface GameData {
  id: number;
  name: string;
  description: string;
  background_image: string;
  website: string;
  rating: number;
  parent_platforms: PlatformData[];
  platform_slugs: string[];
  metacritic:number;
}

 interface PlatformData {
  platform: { id: number; name: string; slug: string };
}

export default create("/games");
export type {GameData,GameDataResponse,PlatformData}
