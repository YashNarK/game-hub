import {
  Alert,
  AlertDescription,
  AlertIcon,
  Center,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard";
import useColorModes from "../../hooks/useColorModes";

const GameGrid = () => {
  const { colorMode } = useColorModes();
  const { games, isLoading, httpErrors } = useGames();

  // .platforms.map(x=>x.platform.name)

  return (
    <>
      {httpErrors && (
        <Alert status="error" variant={"solid"} mb={3}>
          <AlertIcon />
          <AlertDescription>{httpErrors}</AlertDescription>
        </Alert>
      )}
      {!httpErrors &&
        (isLoading ? (
          <Center h={"100px"} color={"white"}>
            <Spinner color={colorMode} size={"xl"} mx="3" />
            <Heading color={colorMode}>Loading Games List...</Heading>
          </Center>
        ) : (
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 3,
              "2xl": 4,
            }}
            spacing={4}
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
                  />
                </GridItem>
              );
            })}
          </SimpleGrid>
        ))}
    </>
  );
};

export default GameGrid;
