// import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { FetchPlatformsResponse } from "../utils/interfaces";

const usePlatform = () => {
  const {
    data: platforms,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchPlatformsResponse>("/platforms/lists/parents")
        .then((res) => res.data.results),
    staleTime: ms("1d"), // 24H
  });
  /**********************************************/
  /**This is the method used instead of  react query**/
  /**********************************************/

  /*const [platforms, setPlatform] = useState<Platform[]>([]); // to set the response of the API
  const [error, setError] = useState(""); // to retrieve the error
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    apiClient
      .get<FetchPlatformsResponse>("/platforms/lists/parents")
      .then((res) => {
        setPlatform(res.data.results), setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, []);*/
  return { platforms, error, isLoading }; // we will get the games and error and use it in the componenet
};

export default usePlatform;
