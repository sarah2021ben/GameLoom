import { SimpleGrid, Image } from "@chakra-ui/react";
import useScreenshots from "../Hooks/useScreenshots";

interface Props {
  gameId: number;
}

function GameScreenshots({ gameId }: Props) {
  const { data, error, isLoading } = useScreenshots(gameId);
  if (isLoading) return null;
  if (error) throw error;
  console.log(data);
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((file) => <Image key={file.id} src={file.image} />)}
    </SimpleGrid>
  );
}

export default GameScreenshots;
