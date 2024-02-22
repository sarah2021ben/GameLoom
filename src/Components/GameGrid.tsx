import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame  from "../Hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../Hooks/useGenres";
import { Platform } from "../Hooks/usePlatform";
import GameList from "./GameList";
interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  selectedOrder: string | null;
  searchItem: string | null;
  selectedLayout: string | null;
}
const GameGrid = ({
  selectedGenre,
  selectedPlatform,
  selectedOrder,
  searchItem,
  selectedLayout,
}: Props) => {
  const { games, error, isLoading } = useGame(
    selectedGenre,
    selectedPlatform,
    selectedOrder,
    searchItem,
  ); // we have used the custum hook to keep our comp clean and no api call in it
  console.log(selectedLayout);
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error.message}</Text>;
  return (
    <SimpleGrid columns={selectedLayout ==="grid" ? { sm: 1, md: 2, lg: 3 } : { lg: 1 }} spacing={3} padding={10}>
      {isLoading
        ? skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))
        : games?.map((game) => (
            <GameCardContainer key={game.id}>
              {selectedLayout === "grid" ? (
                <GameCard game={game} />
              ) : (
                <GameList game={game} />
              )}
            </GameCardContainer>
          ))}
    </SimpleGrid>
  );
};

export default GameGrid;
