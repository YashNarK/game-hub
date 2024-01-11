import create from "./http-service";

export interface GameDataResponse {
  count: number;
  results: GameData[];
}

export interface GameData {
  id: number;
  name: string;
  description: string;
  background_image: string;
  website: string;
  rating: number;
  parent_platforms: PlatformData[];
  platform_names: string[];
}

export interface PlatformData {
  platform: { id: number; name: string };
}

export default create("/games");
