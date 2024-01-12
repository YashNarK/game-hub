import create from "./http-service";



interface GenreData {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  description: string;
}

export default create("/genres");
export type {  GenreData };
