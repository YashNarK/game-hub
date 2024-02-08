import { Box, Button, Grid, GridItem, Show, Stack } from "@chakra-ui/react";
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

export interface GameQuery {
  genre: GenreData | null;
  platform: ParentPlatformData | null;
  ordering: string | null;
  isAscending: boolean;
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

  // Use Refs

  // Use Effects

  // handler functions
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
        <GridItem area={"nav"}>
          <NavBar onTyping={handleTyping} onSearch={handleSearch} />
        </GridItem>
        <Show above="md">
          <GridItem area={"aside"} px={3}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onGenreSelect={handleGenreSelect}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"} px={5}>
          <Stack
            direction={{
              base: "column",
              md: "row",
            }}
            gap={10}
            my={5}
            px={5}
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
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onPlatformSelect={handlePlatformSelect}
            />
            <Button
              isDisabled={
                (gameQuery.isAscending === undefined ||
                  gameQuery.isAscending === false) &&
                (gameQuery.ordering === undefined ||
                  gameQuery.ordering === null) &&
                (gameQuery.platform === undefined ||
                  gameQuery.platform === null)
              }
              onClick={() => {
                setGameQuery({
                  ...gameQuery,
                  isAscending: false,
                  ordering: null,
                  platform: null,
                  platformName: undefined,
                  page: 1,
                });
                setPageNumber(1);
              }}
            >
              Clear
            </Button>
          </Stack>
          <Box m={4}>
            <Gameheading gameQuery={gameQuery} />
          </Box>

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
