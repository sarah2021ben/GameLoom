import apiClient from "../Services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { FetchResponse, Trailer } from "../utils/interfaces";

const useTrailers = (
  gameId: number
) => {
  const { data, isLoading, error } =
    useQuery<FetchResponse<Trailer>, Error>({
      queryKey: [
        "trailers",
         gameId
      ],
      queryFn: () =>
        apiClient
          .get(`/games/${gameId}/movies`)
          .then((res) => res?.data),
      staleTime: ms("1d"), // 24H
    });


 
  return {
    data,
    error,
    isLoading,
  }; 
};

export default useTrailers;
