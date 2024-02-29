// import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
// import { Genre } from "./useGenres";
import { useInfiniteQuery } from "@tanstack/react-query";
import { FetchResponse } from "../utils/interfaces";
import { Platform } from "./usePlatform";
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
  selectedOrder: string | null,
  searchItem: string | null,
  selectedGenreId?: number,
  selectedPlatformId?: number,
) => {
  const { data, isLoading, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery<FetchResponse<Game>, Error>({
      // we use useInfiniteQuery instead of useQuery because we want infinite games in the page
      queryKey: [
        "games",
        selectedGenreId,
        selectedPlatformId,
        selectedOrder,
        searchItem,
      ],
      queryFn: ({ pageParam = 1 }) =>
        apiClient
          .get("/games", {
            params: {
              genres: selectedGenreId,
              parent_platforms: selectedPlatformId,
              ordering: selectedOrder,
              search: searchItem,
              page: pageParam,
            },
          })
          .then((res) => res.data),
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.next ? allPages.length + 1 : undefined;
      },
      initialPageParam: 1,
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
