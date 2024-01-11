import {
  Alert,
  AlertDescription,
  AlertIcon,
  Center,
  Grid,
  GridItem,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard";

const GameGrid = () => {
  const { games, isLoading, httpErrors } = useGames();
  // .platforms.map(x=>x.platform.name)
  console.log(games[0]);
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
          <Center h={'100px'} color={'white'} >
            <Spinner size={"xl"} />
            <Heading>Loading Games List...</Heading>
          </Center>
        ) : (
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap={4}
          >
            {games.map((game, index) => (
              <GridItem key={index}>
                <GameCard
                  imageUrl={game.background_image}
                  altText="Game Background image"
                  heading={game.name}
                  ratings={game.rating}
                />
              </GridItem>
            ))}
          </Grid>
        ))}
    </>
  );
};

export default GameGrid;
