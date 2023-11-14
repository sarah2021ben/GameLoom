import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../Hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGame(); // we have used the custum hook to keep our comp clean and no api call in it
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {
        // display the error when it is true
        error && <Text>{error}</Text>
      }
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing={3} padding={10}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
