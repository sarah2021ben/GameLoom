import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
// set the type of the game, we need to expore it to use it elsewhere
export interface Game {
  id: number;
  name: string;
  background_image: string;
}
// set the type of the response of the api
interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const useGame = () => {
  const [games, setGames] = useState<Game[]>([]); // to set the response of the API
  const [error, setError] = useState("");// to retrieve the error
  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);
  return { games, error }; // we will get the games and error and use it in the componenet
};

export default useGame;
