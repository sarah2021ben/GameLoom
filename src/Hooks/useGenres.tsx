import apiClient from "../Services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
  games_count: number;
}
// we can use this interface to fetch all the data response from the api without specify the results (res) => res.data.results
/* interface FetchGenresResponse {
  count: number;
  results: Genre[];
}
 */
const useGenres = () => {
  const { data, error, isLoading } = useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: () => apiClient.get("/genres").then((res) => res.data.results),
    // staleTime is a time parameter used to specify after what time the data become old in our situation genres doesn't change much so we set it to 24H
    staleTime: ms("1d"), // 24H
    // this is an initial data that we can give to the cache genres is a js file that contain initial genres, we use this to improve the performance of the app
    // initialData: genres,
  });

  /**********************************************/
  /**This is the method used before react query**/
  /**********************************************/

  /* const [genres, setGenres] = useState<Genre[]>([]); // to set the response of the API
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
  }, []); */

  return { data , error, isLoading }; // we will get the games and error and use it in the componenet
};

export default useGenres;
