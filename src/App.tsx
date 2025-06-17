import { Routes, Route } from "react-router-dom";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import PlatformSelector from "./Components/PlatformSelector";
import SortSelector from "./Components/SortSelector";
import "./App.css";
import GameHeading from "./Components/GameHeading";
import LayoutButtons from "./Components/layoutButtons";
import GameDetails from "./Components/GameDetails";

function App() {
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
  const [selectedLayout, setSelectedLayout] = useState<string | null>("grid");

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav"
            "aside main"`,
      }}
      templateColumns={{
        base: "1fr", // the coluom strach and take all the  available space
        lg: "250px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Show above="lg">
                <GridItem area={"aside"} paddingX={5}>
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
                <GameGrid
                  selectedLayout={selectedLayout}
                />
              </GridItem>
            </>
          }
        />
        <Route path="/:id" element={<GameDetails />} />
      </Routes>
    </Grid>
  );
}

export default App;
