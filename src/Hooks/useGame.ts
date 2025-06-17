import apiClient from "../Services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { FetchResponse } from "../utils/interfaces";
import { Platform } from "./usePlatform";
import { GameQuery } from "../store";
// set the type of the game, we need to expore it to use it elsewhere

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
// set the type of the response of the api

const useGame = (
  gameQuery: GameQuery
) => {
  const { data, isLoading, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery<FetchResponse<Game>, Error>({
      // we use useInfiniteQuery instead of useQuery because we want infinite games in the page
      queryKey: [
        "games",
        gameQuery.genreId,
        gameQuery.platformId,
        gameQuery.sortOrder,
        gameQuery.searchItem,
      ],
      queryFn: ({ pageParam = 1 }) =>
        apiClient
          .get("/games", {
            params: {
              genres: gameQuery.genreId,
              parent_platforms: gameQuery.platformId,
              ordering: gameQuery.sortOrder,
              search: gameQuery.searchItem,
              page: pageParam,
            },
          })
          .then((res) => res.data),
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.next ? allPages.length + 1 : undefined;
      },
      initialPageParam: 1,
      staleTime: ms("1d"), // 24H
    });

  /**********************************************/
  /**This is the method used before react query**/
  /**********************************************/

  /*   const [games, setGames] = useState<Game[]>([]); // to set the response of the API
  const [error, setError] = useState(""); // to retrieve the error
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    // setGames([]);
    apiClient
      .get<FetchResponse>("/games", {
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
  }, [selectedGenre?.id, selectedPlatform?.id, selectedOrder, searchItem]); */

  return {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  }; // we will get the games and error and use it in the componenet
};

export default useGame;
