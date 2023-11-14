import { useEffect, useState } from 'react'
import apiClient from '../Services/api-client';

interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
  games_count: number;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]); // to set the response of the API
  const [error, setError] = useState(""); // to retrieve the error
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres")
      .then((res) => {
        setGenres(res.data.results), setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, []);
  return { genres, error, isLoading }; // we will get the games and error and use it in the componenet
}

export default useGenres