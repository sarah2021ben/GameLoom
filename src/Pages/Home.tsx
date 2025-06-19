import { useState } from "react";
import { Grid, Show, GridItem, HStack } from "@chakra-ui/react";
import GameGrid from "../Components/GameGrid";
import GameHeading from "../Components/GameHeading";
import GenreList from "../Components/GenreList";
import LayoutButtons from "../Components/layoutButtons";
import PlatformSelector from "../Components/PlatformSelector";
import SortSelector from "../Components/SortSelector";

function Home() {
  const [selectedLayout, setSelectedLayout] = useState<string | null>("grid");
  /*******We have replace the state by using zustand ********/
  // const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  /*******instead of using seperate state for each filter, we can use a single state for the selected genre, platform, and order********/
  /*  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null); // because selectedGenre can be an array or can be nothing we have to this or
   const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null,
  );
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  const [searchItem, setSearchItem] = useState<string | null>(null); */

  // we can use this to set the layout of the game grid
  // const [selectedLayout, setSelectedLayout] = useState<string | null>("grid");

  return (
    <Grid
      templateAreas={{
        base: ` "main"`,
        lg: `
            "aside main"`,
      }}
      templateColumns={{
        base: "1fr", // the coluom strach and take all the  available space
        lg: "250px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area={"aside"}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameHeading />
        <HStack justifyContent="space-between">
          <HStack spacing={5} paddingLeft={8}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
          <LayoutButtons
            onSelectedLayout={(layout) => setSelectedLayout(layout)}
          />
        </HStack>
        <GameGrid selectedLayout={selectedLayout} />
      </GridItem>
    </Grid>
  );
}

export default Home;
