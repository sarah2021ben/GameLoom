import apiClient from "../Services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { FetchResponse } from "../utils/interfaces";
import { Game } from "../utils/interfaces";

const useGameDetails = (
  slug: string
) => {
  const { data, isLoading, error } =
    useQuery<FetchResponse<Game>, Error>({
      queryKey: [
        "games",
         slug
      ],
      queryFn: () =>
        apiClient
          .get(`/games/${slug}`)
          .then((res) => res.data),
      staleTime: ms("1d"), // 24H
    });


 
  return {
    data,
    error,
    isLoading,
  }; 
};

export default useGameDetails;
