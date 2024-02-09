import { GenreData } from "./genre.type";
import { PlatformData } from "./platform.type";

export interface GameData {
    id: number;
    name: string;
    description: string;
    background_image: string;
    website: string;
    rating: number;
    parent_platforms: PlatformData[];
    metacritic:number;
    genres:GenreData[]
  }