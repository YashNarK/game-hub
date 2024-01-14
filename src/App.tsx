import { Button, Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { GenreData } from "./services/genre-service";
import PlatformSelector from "./components/PlatformSelector";
import { ParentPlatformData } from "./services/platfrom-service";
import OrderSelector from "./components/OrderSelector";

export interface GameQuery {
  genre: GenreData | null;
  platform: ParentPlatformData | null;
  ordering: string | null;
  isAscending: boolean;
}

function App() {
  // Use States
  // const [selectedGenre, setSelectedGenre] = useState<GenreData | null>(null);
  // const [selectedPlatform, setSelectedPlatform] =
  //   useState<ParentPlatformData | null>(null);
  // const [selectedOrderOption, setSelectedOrderOption] = useState<string | null>(
  //   null
  // );

  // const [isAscending, setIsAscending] = useState(true);

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  // Use Refs

  // Use Effects

  // handler functions
  const handleGenreSelect = (selectedGenre: GenreData | null) => {
    setGameQuery({ ...gameQuery, genre: selectedGenre });
  };

  const handlePlatformSelect = (
    selectedPlatform: ParentPlatformData | null
  ) => {
    setGameQuery({ ...gameQuery, platform: selectedPlatform });
  };
  const handleSortSelect = (selectedSortOption: string | null) => {
    setGameQuery({
      ...gameQuery,
      ordering: selectedSortOption,
      isAscending: true,
    });
  };

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav nav" "main main"`,
          md: `"nav nav" "aside main"`,
        }}
        gridTemplateColumns={{
          base: "180px 1fr",
          lg: "200px 1fr",
          xl: "200px 1fr",
          "2xl": "250px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="md">
          <GridItem area={"aside"} px={3}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onGenreSelect={handleGenreSelect}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
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
                gameQuery.isAscending === true &&
                gameQuery.ordering === null &&
                gameQuery.platform === null
              }
              onClick={() => {
                setGameQuery({
                  ...gameQuery,
                  isAscending: false,
                  ordering: null,
                  platform: null,
                });
              }}
            >
              Clear
            </Button>
          </Stack>

          <GameGrid
            selectedPlatform={gameQuery.platform}
            selectedGenre={gameQuery.genre}
            selectedOrderBy={gameQuery.ordering}
          />
        </GridItem>
      </Grid>
    </>
  );
}
export default App;
