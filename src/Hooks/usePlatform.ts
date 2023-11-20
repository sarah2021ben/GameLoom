import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface FetchPlatformsResponse {
  count: number;
  results: Platform[];
}

const usePlatform = () => {
  const [platforms, setPlatform] = useState<Platform[]>([]); // to set the response of the API
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
  }, []);
  return { platforms, error, isLoading }; // we will get the games and error and use it in the componenet
};

export default usePlatform;
