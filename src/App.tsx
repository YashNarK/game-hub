import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav nav" "main main"`,
          md: `"nav nav" "aside main"`,
        }}
        gridTemplateColumns={{
          base: "180px 1fr",
          lg: "200px 1fr",
          xl: "200px 1fr",
          "2xl": "250px 1fr"
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="md">
          <GridItem area={"aside"}>ASIDE</GridItem>
        </Show>
        <GridItem area={"main"}>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}
export default App;
