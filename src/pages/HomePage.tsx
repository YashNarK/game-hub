import { Box, Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import Footer from "../components/Footer";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import Pagination from "../components/Pagination";
import ClearButton from "../components/ClearButton";
import Gameheading from "../components/GameHeading";
import OrderSelector from "../components/OrderSelector";
import PlatformSelector from "../components/PlatformSelector";

const HomePage = () => {
  return (
    <>
      {" "}
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
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
          >
            <PlatformSelector />
            <ClearButton />
          </Box>
        </Stack>
        <Box m={4} textAlign={"center"}>
          <Gameheading />
        </Box>
      </Box>
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
            zIndex="98" // Ensure it's behind the NavBar
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
