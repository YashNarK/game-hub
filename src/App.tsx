import { Box, Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { GenreData } from "./services/genre-service";
import PlatformSelector from "./components/PlatformSelector";
import { ParentPlatformData } from "./services/platfrom-service";
import OrderSelector from "./components/OrderSelector";
import Gameheading from "./components/GameHeading";
import Footer from "./components/Footer";
import useColorModes from "./hooks/useColorModes";
import ClearButton from "./components/ClearButton";

export interface GameQuery {
  genre?: GenreData | null | undefined;
  platform?: ParentPlatformData | null | undefined;
  ordering: string | null | undefined;
  isAscending: boolean | undefined;
  search: string | undefined;
  platformName: string | undefined;
  genreName: string | undefined;
  page: number;
}

function App() {
  // Use States
  const [pageNumber, setPageNumber] = useState(1);

  const [gameQuery, setGameQuery] = useState<GameQuery>({
    page: pageNumber,
  } as GameQuery);

  const { reverseColorModeRegular } = useColorModes();

  // Use Refs

  // Use Effects

  // handler functions

  const handleClear = () => {
    setGameQuery({
      ...gameQuery,
      isAscending: undefined,
      ordering: undefined,
      platform: undefined,
      platformName: undefined,
      page: 1,
    });
    setPageNumber(1);
  };

  const handleGenreSelect = (selectedGenre: GenreData | null) => {
    setGameQuery({
      ...gameQuery,
      genreName: selectedGenre?.slug,
      genre: selectedGenre,
      page: 1,
    });
    setPageNumber(1);
  };

  const handlePlatformSelect = (
    selectedPlatform: ParentPlatformData | null
  ) => {
    setGameQuery({
      ...gameQuery,
      platformName: selectedPlatform?.slug,
      platform: selectedPlatform,
      page: 1,
    });
    setPageNumber(1);
  };
  const handleSortSelect = (selectedSortOption: string | null) => {
    setGameQuery({
      ...gameQuery,
      ordering: selectedSortOption,
      isAscending: true,
    });
  };

  const handleSearch = (searchString: string | undefined) => {
    setGameQuery({ ...gameQuery, search: searchString, page: 1 });
    setPageNumber(1);
  };

  const handleTyping = (searchString: string | undefined) => {
    if (!searchString) {
      setGameQuery({ ...gameQuery, search: searchString, page: 1 });
      setPageNumber(1);
    }
  };

  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
    setGameQuery({ ...gameQuery, page: gameQuery.page + 1 });
  };
  const handlePrevPage = () => {
    setPageNumber(pageNumber - 1);
    setGameQuery({ ...gameQuery, page: gameQuery.page - 1 });
  };

  // Component TSX markup

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
          <NavBar onTyping={handleTyping} onSearch={handleSearch} />

          <Box>
            <Stack
              display={"flex"}
              justifyContent={"space-between"}
              w={{
                base: "100%",
                md: "80%",
              }}
              direction={{
                base: "column",
                md: "row",
              }}
              gap={2}
              mx={"auto"}
              my={3}
              px={3}
            >
              <OrderSelector
                selectedOption={gameQuery.ordering}
                isAscending={gameQuery.isAscending}
                onSortOptionSelection={handleSortSelect}
                onAscDescToggle={() => {
                  let newOrdering: string | null;
                  if (gameQuery.isAscending)
                    newOrdering = `-${gameQuery.ordering}`;
                  else {
                    newOrdering =
                      gameQuery.ordering?.slice(0, 1) === "-"
                        ? gameQuery.ordering?.slice(1)
                        : null;
                  }
                  setGameQuery({
                    ...gameQuery,
                    isAscending: !gameQuery.isAscending,
                    ordering: newOrdering,
                  });
                }}
              />
              <Box>
                <PlatformSelector
                  selectedPlatform={gameQuery.platform}
                  onPlatformSelect={handlePlatformSelect}
                />
                <ClearButton
                  isDisabled={
                    gameQuery.isAscending === undefined &&
                    gameQuery.ordering === undefined &&
                    gameQuery.platform === undefined
                  }
                  onClick={handleClear}
                />
              </Box>
            </Stack>
            <Box m={4} textAlign={"center"}>
              <Gameheading gameQuery={gameQuery} />
            </Box>
          </Box>
        </GridItem>
        <Show above="md">
          <GridItem
            area={"aside"}
            px={3}
            position="sticky"
            left="0"
            top="200"
            height="100vh" // Adjust the height as needed
            overflowY="auto" // Enable vertical scrolling for the GenreList
            zIndex="99" // Ensure it's behind the NavBar
          >
            <GenreList
              selectedGenre={gameQuery.genre}
              onGenreSelect={handleGenreSelect}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"} px={5} overflowY="auto">
          <GameGrid
            gameQuery={gameQuery}
            pageNumber={pageNumber}
            onNext={handleNextPage}
            onPrev={handlePrevPage}
          />
        </GridItem>

        <GridItem area="footer">
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
}
export default App;
