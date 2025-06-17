import { Heading } from "@chakra-ui/react";
import usePlatform from "../Hooks/usePlatform";
import useGameQueryStore from "../store";
import useGenres from "../Hooks/useGenres";

function GameHading() {
  const { platforms } = usePlatform();
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = platforms?.find((p) => p.id === platformId);

  const {data :genres } = useGenres();
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const selectedGenre = genres?.find((p) => p.id === genreId);

  return (
    <Heading as="h1" paddingLeft={8} paddingBottom={8}>
       {`${selectedPlatform?.name || ''} ${selectedGenre?.name || ''} Games`} 
    </Heading>
  );
}

export default GameHading;
