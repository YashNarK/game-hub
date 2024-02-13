import { Box, Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import OrderSelector from "./components/OrderSelector";
import Gameheading from "./components/GameHeading";
import Footer from "./components/Footer";
import useColorModes from "./hooks/useColorModes";
import ClearButton from "./components/ClearButton";
import Pagination from "./components/Pagination";

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

          <Box>
            <Stack
              display={"flex"}
              justifyContent={"space-between"}
              w={{
                base: "100%",
                md: "95%",
                lg: "80%",
                xl: "70%",
                "2xl": "60%",
              }}
              direction={{
                base: "column",
                md: "row",
              }}
              gap={2}
              mx={"auto"}
              my={3}
              px={2}
            >
              <OrderSelector />
              <Box>
                <PlatformSelector />
                <ClearButton />
              </Box>
            </Stack>
            <Box m={4} textAlign={"center"}>
              <Gameheading />
            </Box>
          </Box>
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
