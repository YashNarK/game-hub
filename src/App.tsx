import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useEffect, useState } from "react";
import { GenreData } from "./services/genre-service";
import PlatformSelector from "./components/PlatformSelector";
import { ParentPlatformData } from "./services/platfrom-service";
import OrderSelector from "./components/OrderSelector";

function App() {
  // Use States
  const [selectedGenre, setSelectedGenre] = useState<GenreData | null>(null);
  const [selectedPlatform, setSelectedPlatform] =
    useState<ParentPlatformData | null>(null);
  const [selectedOrderOption, setSelectedOrderOption] = useState<string | null>(
    null
  );

  const [isAscending, setIsAscending] = useState(true);

  // Use Effects
  useEffect(() => {
    setSelectedOrderOption(selectedOrderOption);
  }, []);

  // handler functions
  const handleGenreSelect = (selectedGenre: GenreData | null) => {
    setSelectedGenre(selectedGenre);
  };

  const handlePlatformSelect = (
    selectedPlatform: ParentPlatformData | null
  ) => {
    setSelectedPlatform(selectedPlatform);
    console.log(selectedPlatform);
  };
  const handleSortSelect = (selectedSortOption: string | null) => {
    setSelectedOrderOption(selectedSortOption);
    setIsAscending(true);
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
              selectedGenre={selectedGenre}
              onGenreSelect={handleGenreSelect}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <HStack gap={10} my={5} px={5}>
            <OrderSelector
              selectedOption={selectedOrderOption}
              isAscending={isAscending}
              onSortOptionSelection={handleSortSelect}
              onAscDescToggle={() => {
                if (isAscending)
                  setSelectedOrderOption("-" + selectedOrderOption);
                else {
                  selectedOrderOption?.slice(0, 1) === "-"
                    ? setSelectedOrderOption(selectedOrderOption?.slice(1))
                    : null;
                }
                setIsAscending(!isAscending);
              }}
            />
            <PlatformSelector
              selectedPlatform={selectedPlatform}
              onPlatformSelect={handlePlatformSelect}
            />
          </HStack>

          <GameGrid
            selectedPlatform={selectedPlatform}
            selectedGenre={selectedGenre}
            selectedOrderBy={selectedOrderOption}
          />
        </GridItem>
      </Grid>
    </>
  );
}
export default App;
