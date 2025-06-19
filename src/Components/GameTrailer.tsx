import useTrailers from "../Hooks/useTrailers";

interface Props {
  gameId: number;
}

function GameTrailer({ gameId }: Props) {
  const { data, error, isLoading } = useTrailers(gameId);
  if (isLoading || !data?.results.length) return null;
  if (error) throw error;

  return (
    <video
      src={data?.results[0]?.data[480]}
      poster={data?.results[0]?.preview}
      autoPlay
      loop
      controls
    />
  );
}

export default GameTrailer;
