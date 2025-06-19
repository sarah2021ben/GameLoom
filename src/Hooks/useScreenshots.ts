import apiClient from "../Services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { FetchResponse, Screenshot } from "../utils/interfaces";

const useScreenshots = (
  gameId: number
) => {
  const { data, isLoading, error } =
    useQuery<FetchResponse<Screenshot>, Error>({
      queryKey: [
        "screenshots",
         gameId
      ],
      queryFn: () =>
        apiClient
          .get(`/games/${gameId}/screenshots`)
          .then((res) => res?.data),
      staleTime: ms("1d"), // 24H
    });


 
  return {
    data,
    error,
    isLoading,
  }; 
};

export default useScreenshots;
