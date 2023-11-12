import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../Hooks/useGame";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGame(); // we have used the custum hook to keep our comp clean and no api call in it 
  return (
    <>
      {
        // display the error when it is true
        error && <Text>{error}</Text>
      }
      <SimpleGrid columns={{sm:1, md:2,xl:3}} spacing={10} padding={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game}/>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
