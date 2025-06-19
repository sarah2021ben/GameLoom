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

