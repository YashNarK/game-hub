import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import Footer from "./components/Footer";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import Pagination from "./components/Pagination";
import useColorModes from "./hooks/useColorModes";

function App() {
  const { reverseColorModeRegular } = useColorModes();

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav nav" "main main" "footer footer"`,
          md: `"nav nav" "aside main" "footer footer"`,
        }}
        gridTemplateColumns={{
          base: "180px 1fr",
          lg: "200px 1fr",
          xl: "200px 1fr",
          "2xl": "250px 1fr",
        }}
      >
        <GridItem
          area={"nav"}
          position={"sticky"}
          top="0"
          zIndex="100"
          as={Box}
          bg={reverseColorModeRegular}
        >
          <NavBar />

          
        </GridItem>
        <Show above="md">
          <GridItem
            area={"aside"}
            px={3}
            mb={"1cm"}
            position="sticky"
            left="0"
            top="212"
            zIndex="99" // Ensure it's behind the NavBar
            height="70vh"
            overflowY={"auto"}
          >
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area={"main"} px={5} overflowY="auto">
          <GameGrid />
        </GridItem>

        <GridItem area="footer">
          <Pagination />
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
}
export default App;
