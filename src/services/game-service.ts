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
  platforms: PlatformData[];
}

export interface PlatformData {
  platform: { id: number; name: string[] };
}

export default create("/games");
