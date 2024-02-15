import { Grid, GridItem, Show } from "@chakra-ui/react";
import Footer from "../components/Footer";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import Pagination from "../components/Pagination";

const HomePage = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: ` "main main" "footer footer"`,
          md: ` "aside main" "footer footer"`,
        }}
        gridTemplateColumns={{
          base: "180px 1fr",
          lg: "200px 1fr",
          xl: "200px 1fr",
          "2xl": "250px 1fr",
        }}
      >
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
};

export default HomePage;
