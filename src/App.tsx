import { Routes, Route } from "react-router-dom";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./Hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./Hooks/usePlatform";
import SortSelector from "./Components/SortSelector";
import "./App.css";
import GameHeading from "./Components/GameHeading";
import LayoutButtons from "./Components/layoutButtons";
import GameDetails from "./Components/GameDetails";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null); // because selectedGenre can be an array or can be nothing we have to this or
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null,
  );
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  const [searchItem, setSearchItem] = useState<string | null>(null);
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
        <Navbar onSearchItem={(searchItem) => setSearchItem(searchItem)} />
      </GridItem>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Show above="lg">
                <GridItem area={"aside"} paddingX={5}>
                  <GenreList
                    onSelectedGenre={(genre) => setSelectedGenre(genre)}
                    selectedGenre={selectedGenre}
                  />
                </GridItem>
              </Show>
              <GridItem area={"main"}>
                <GameHeading
                  selectedGenre={selectedGenre}
                  selectedPlatform={selectedPlatform}
                />
                <HStack justifyContent="space-between">
                  <HStack spacing={5} paddingLeft={8}>
                    <PlatformSelector
                      onSelectedPlatform={(platform) =>
                        setSelectedPlatform(platform)
                      }
                      selectedPlatform={selectedPlatform}
                    />
                    <SortSelector
                      onSelectedOrder={(sortOrder) =>
                        setSelectedOrder(sortOrder)
                      }
                      selectedOrder={selectedOrder}
                    />
                  </HStack>
                  <LayoutButtons
                    onSelectedLayout={(layout) => setSelectedLayout(layout)}
                  />
                </HStack>
                <GameGrid
                  selectedGenreId={selectedGenre?.id}
                  selectedPlatformId={selectedPlatform?.id}
                  selectedOrder={selectedOrder}
                  searchItem={searchItem}
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
