import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav"
            "aside main"`,
      }}
    >
      <GridItem bg="pink.300" area={"nav"}>
        Nav
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
