import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard";
import GameCardSkeleton from "../GameCardSkeleton";
import useColorModes from "../../hooks/useColorModes";

const GameGrid = () => {
  const { games, isLoading, httpErrors } = useGames();

  const { colorMode } = useColorModes();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {httpErrors && (
        <Alert status="error" variant={"solid"} mb={3}>
          <AlertIcon />
          <AlertDescription>{httpErrors}</AlertDescription>
        </Alert>
      )}
      {!httpErrors && isLoading ? (
        <VStack>
          <Box color={colorMode} my={5}>
            <Spinner mx={10} size={"xl"} />{" "}
            <Heading display={"inline"}>Games List is Loading ...</Heading>{" "}
          </Box>
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 2,
              xl: 3,
              "2xl": 4,
            }}
            spacing={6}
          >
            {skeletons.map((skeleton) => (
              <GameCardSkeleton key={skeleton} />
            ))}
          </SimpleGrid>
        </VStack>
      ) : (
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 2,
            xl: 3,
            "2xl": 4,
          }}
          spacing={6}
        >
          {games.map((game, index) => {
            // console.log(game.parent_platforms[0].platform.name)

            return (
              <GridItem key={index} m={"auto"}>
                <GameCard
                  imageUrl={game.background_image}
                  altText="Game Background image"
                  heading={game.name}
                  ratings={game.rating}
                  gameUrl={game.website}
                  listOfPlatformSlugs={game.platform_slugs}
                  criticScore={game.metacritic}
                />
              </GridItem>
            );
          })}
        </SimpleGrid>
      )}
    </>
  );
};

export default GameGrid;
