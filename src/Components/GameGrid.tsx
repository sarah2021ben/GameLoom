import { Text } from "@chakra-ui/react";
import useGame from "../Hooks/useGame";

const GameGrid = () => {
  const { games, error } = useGame(); // we have used the custum hook to keep our comp clean and no api call in it 
  return (
    <>
      { // display the error when it is true 
      error && <Text>{error}</Text>
      }
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
