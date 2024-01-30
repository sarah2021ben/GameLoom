import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./Hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./Hooks/usePlatform";
import SortSelector from "./Components/SortSelector";
import './App.css';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null); // because selectedGenre can be an array or can be nothing we have to this or 
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<string| null>(null);
  const [searchItem, setSearchItem] = useState<string | null>(null);

  console.log("searchItem", searchItem);
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
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList
            onSelectedGenre={(genre) => setSelectedGenre(genre)}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <HStack spacing={5} paddingLeft={8}>
          <PlatformSelector
            onSelectedPlatform={(platform) => setSelectedPlatform(platform)}
            selectedPlatform={selectedPlatform}
          />
          <SortSelector
            onSelectedOrder={(sortOrder) => setSelectedOrder(sortOrder)}
            selectedOrder={selectedOrder}
          />
        </HStack>

        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
          selectedOrder={selectedOrder}
          searchItem={searchItem}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
