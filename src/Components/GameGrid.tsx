import React from "react";
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import GameList from "./GameList";
import useGameQueryStore from "../store";
interface Props {
  selectedLayout: string | null;
}
const GameGrid = ({ selectedLayout }: Props) => {
  const gameQuery = useGameQueryStore((state) => state.gameQuery); // we have used the zustand store to get the gameQuery
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGames(gameQuery); // we have used the custum hook to keep our comp clean and no api call in it
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error.message}</Text>;
  const fetchedGameCount =
    data?.pages?.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <InfiniteScroll
      dataLength={fetchedGameCount} //This is important field to render the next data
      next={() => fetchNextPage()}
      hasMore={hasNextPage}
      loader={
        <Spinner
          size="xl"
          color="white"
          thickness="4px"
          speed="0.65s"
          mx="auto"
        />
      }
      style={{ overflow: "hidden" }} // To prevent scroll bar from showing
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      // below props only if you need pull down functionality
      /* refreshFunction={fetchNextPage}
      pullDownToRefresh
      pullDownToRefreshThreshold={50}
      pullDownToRefreshContent={
        <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
      }
      releaseToRefreshContent={
        <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
      } */
    >
      {
        <SimpleGrid
          columns={
            selectedLayout === "grid" ? { sm: 1, md: 2, lg: 3 } : { lg: 1 }
          }
          spacing={3}
          padding={10}
        >
          {isLoading
            ? skeletons.map((skeleton) => (
                <GameCardContainer key={skeleton}>
                  <GameCardSkeleton />
                </GameCardContainer>
              ))
            : data?.pages.map((page, index) => (
                <React.Fragment key={index}>
                  {page?.results.map((game) => (
                    <GameCardContainer key={game.id}>
                      {selectedLayout === "grid" ? (
                        <GameCard game={game} />
                      ) : (
                        <GameList game={game} />
                      )}
                    </GameCardContainer>
                  ))}
                </React.Fragment>
              ))}
        </SimpleGrid>
      }
    </InfiniteScroll>
  );
};

export default GameGrid;
