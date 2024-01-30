import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { Genre } from "./useGenres";
// set the type of the game, we need to expore it to use it elsewhere
export interface Platform {
  id: number;
  name: string;
  slug: string;
}


export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
// set the type of the response of the api
interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const useGame = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
  selectedOrder: string | null,
  searchItem: string | null,
) => {
  const [games, setGames] = useState<Game[]>([]); // to set the response of the API
  const [error, setError] = useState(""); // to retrieve the error
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    // setGames([]);
    apiClient
      .get<FetchGamesResponse>("/games", {
        params: {
          genres: selectedGenre?.id,
          platforms: selectedPlatform?.id,
          ordering: selectedOrder,
          search: searchItem,
        },
      })
      .then((res) => {
        setGames(res.data.results), setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, [selectedGenre?.id, selectedPlatform?.id, selectedOrder, searchItem]);
  return { games, error, isLoading }; // we will get the games and error and use it in the componenet
};

export default useGame;
