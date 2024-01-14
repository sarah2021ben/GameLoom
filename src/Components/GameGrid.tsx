import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../Hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../Hooks/useGenres";
import { Platform } from "../Hooks/usePlatform";
interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}
const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { games, error, isLoading } = useGame(selectedGenre, selectedPlatform); // we have used the custum hook to keep our comp clean and no api call in it
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {
        // display the error when it is true
        error && <Text>{error}</Text>
      }
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={3} padding={10}>
        {isLoading?
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          )):
        games?.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
