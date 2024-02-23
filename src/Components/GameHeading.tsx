import { Heading } from "@chakra-ui/react";
import { Platform } from "../Hooks/usePlatform";
import { Genre } from "../Hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}
function GameHading({ selectedGenre, selectedPlatform }: Props) {
  return (
    <Heading as="h1" paddingLeft={8} paddingBottom={8}>
      {`${selectedPlatform?.name || ''} ${selectedGenre?.name || ''} Games`}
    </Heading>
  );
}

export default GameHading;
