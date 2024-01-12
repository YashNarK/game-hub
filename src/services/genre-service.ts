import create from "./http-service";

interface GenreResponseData {
  count: number;
  results: GenreData[];
}

interface GenreData {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  description: string;
}

export default create("/genres");
export { GenreResponseData, GenreData };
