import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav nav" "menu menu"`,
          md: `"nav nav" "aside menu"`,
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="md">
          <GridItem area={"aside"}>ASIDE</GridItem>
        </Show>
        <GridItem area={"menu"}>MENU</GridItem>
      </Grid>
    </>
  );
}
export default App;
