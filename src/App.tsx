import { Box, Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import OrderSelector from "./components/OrderSelector";
import Gameheading from "./components/GameHeading";
import Footer from "./components/Footer";
import useColorModes from "./hooks/useColorModes";
import ClearButton from "./components/ClearButton";
import Pagination from "./components/Pagination";
import { GenreData } from "./interfaces/genre.type";
import { ParentPlatformData } from "./interfaces/platform.type";
import { GameQuery } from "./interfaces/game.type";
import { Page } from "./interfaces/page.type";

function App() {
  // Use States
  const [pageNumber, setPageNumber] = useState(1);
  const [page, setPage] = useState<Page>({
    hasNextPage: false,
    hasPrevPage: false,
  });

  const [gameQuery, setGameQuery] = useState<GameQuery>({
    page: pageNumber,
  } as GameQuery);

  const { reverseColorModeRegular } = useColorModes();

  // Use Refs

  // Use Effects

  // handler functions
  const onSetPage = (
    nextPage: string | null | undefined,
    prevPage: string | null | undefined
  ) => {
    setPage({
      hasNextPage: Boolean(nextPage),
      hasPrevPage: Boolean(prevPage),
    });
  };

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
    if (selectedSortOption)
      setGameQuery({
        ...gameQuery,
        ordering: selectedSortOption,
        isAscending: true,
      });
    else
      setGameQuery({
        ...gameQuery,
        ordering: null,
        isAscending: undefined,
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
                    Boolean(!gameQuery.isAscending) &&
                    Boolean(!gameQuery.ordering) &&
                    Boolean(!gameQuery.platform)
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
            mb={"1cm"}
            position="sticky"
            left="0"
            top="212"
            zIndex="99" // Ensure it's behind the NavBar
            height="70vh"
            overflowY={"auto"}
          >
            <GenreList
              selectedGenre={gameQuery.genre}
              onGenreSelect={handleGenreSelect}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"} px={5} overflowY="auto">
          <GameGrid gameQuery={gameQuery} setPage={onSetPage} />
        </GridItem>

        <GridItem area="footer">
          <Pagination
            hasNext={Boolean(page.hasNextPage)}
            hasPrev={Boolean(page.hasPrevPage)}
            pageNumber={pageNumber}
            onNext={handleNextPage}
            onPrev={handlePrevPage}
          />
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
}
export default App;
