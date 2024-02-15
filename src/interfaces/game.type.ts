import { GenreData } from "./genre.type";
import { ParentPlatformData, PlatformData } from "./platform.type";

export interface GameData {
  id: number;
  name: string;
  description: string;
  description_raw: string;
  background_image: string;
  website: string;
  rating: number;
  parent_platforms: PlatformData[];
  metacritic: number;
  genres: GenreData[];
  slug: string;
}

export interface GameQuery {
  genre?: GenreData | null | undefined;
  platform?: ParentPlatformData | null | undefined;
  ordering: string | null | undefined;
  isAscending: boolean | undefined;
  search: string | undefined;
  platformName: string | undefined;
  genreName: string | undefined;
  page: number;
}
