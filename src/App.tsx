import { Grid, GridItem, Show, useColorModeValue } from "@chakra-ui/react";
import ToggleModeButton from "./components/ToggleModeButton";

function App() {

  const navColor = useColorModeValue('coral','teal');
  const asideColor = useColorModeValue('grey','gold');
  const menuColor = useColorModeValue('blue','green');
  return (
    <>
      <ToggleModeButton />
      <Grid
        templateAreas={{
          base: `"nav nav" "menu menu"`,
          md: `"nav nav" "aside menu"`,
        }}
      >
        <GridItem area={"nav"} bg={navColor}>
          NAV
        </GridItem>
        <Show above="md">
          <GridItem area={"aside"} bg={asideColor}>
            ASIDE
          </GridItem>
        </Show>
        <GridItem area={"menu"} bg={menuColor}>
          MENU
        </GridItem>
      </Grid>
    </>
  );
}
export default App;
