export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}
// set the type of the game, we need to expore it to use it elsewhere
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  slug: string;
  description_raw: string;
  genres: Genre[];
  publishers: Publisher[];
}export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
  games_count: number;
}
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface FetchPlatformsResponse {
  count: number;
  results: Platform[];
}
export interface Publisher {
  id: number;
  name: string;
}
export interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };

}
export interface Screenshot {
  id: number;
  image: string;
  width: number;
  height: number;
}

