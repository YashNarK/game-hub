import { GenreData } from "./genre-service";
import create from "./http-service";
import { PlatformData } from "./platfrom-service";


 interface GameData {
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



export default create("/games");
export type {GameData}
