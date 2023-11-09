import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav"
            "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <Navbar/>
      </GridItem>
      <Show above="lg">
        <GridItem bg="blue.300" area={"aside"}>
          aside
        </GridItem>
      </Show>

      <GridItem bg="green.300" area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
