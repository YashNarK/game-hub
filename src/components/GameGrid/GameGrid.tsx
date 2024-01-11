import {
  Alert,
  AlertDescription,
  AlertIcon,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import StarRatings from "../StarRatings";
import GameCard from "../GameCard";

const GameGrid = () => {
  const { games, isLoading, httpErrors, setGames, setHttpErrors } = useGames();
  // .platforms.map(x=>x.platform.name)
  console.log(games[0]);
  return (
    <>
      {httpErrors && (
        <Alert status="error" variant={"solid"}  mb={3}>
          <AlertIcon />
          <AlertDescription>{httpErrors}</AlertDescription>
        </Alert>
      )}
      {!httpErrors &&
        <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={4}
      >
        {games.map((game, index) => (
          <GridItem key={index}>
            <GameCard imageUrl={game.background_image} altText="Game Background image" heading={game.name} ratings={game.rating} />
          </GridItem>
        ))}
      </Grid>
      }
    </>
  );
};

export default GameGrid;
