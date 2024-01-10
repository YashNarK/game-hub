import { Grid, GridItem, Show } from "@chakra-ui/react";
import ToggleModeButton from "./components/ToggleModeButton";

function App() {
  return (
    <>
      <ToggleModeButton />
      <Grid
        templateAreas={{
          base: `"nav nav" "menu menu"`,
          md: `"nav nav" "aside menu"`,
        }}
      >
        <GridItem area={"nav"} bg="coral">
          NAV
        </GridItem>
        <Show above="md">
          <GridItem area={"aside"} bg="gold">
            ASIDE
          </GridItem>
        </Show>
        <GridItem area={"menu"} bg="red">
          MENU
        </GridItem>
      </Grid>
    </>
  );
}
export default App;
