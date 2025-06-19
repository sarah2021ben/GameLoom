import { useParams } from "react-router-dom";
import useGameDetails from "../Hooks/useGameDetails";

function GameDetailPage() {
  const { slug } = useParams();
  const { data, error, isLoading } = useGameDetails(slug!);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);
  return <div>GameDetailPage</div>;
}

export default GameDetailPage;
