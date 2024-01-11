import { Card, CardBody, Grid, GridItem, Heading, Image, Stack, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import StarRatings from "../StarRatings";

const GameGrid = () => {
  const { games, isLoading, httpErrors, setGames, setHttpErrors } = useGames();
  // .platforms.map(x=>x.platform.name)
  console.log(games[0])
  return (
    <>
      <Grid templateColumns={{
        base:"repeat(1, 1fr)",
        md: "repeat(3, 1fr)"
      }} gap={4}>
        {games.map((game) => (
          <GridItem key={game.id}>
            <Card maxW={'sm'} >
            <CardBody>
              <Image src={game.background_image} alt="Game background Image" borderRadius={'lg'} h={200} w={350}/>
              <Stack mt='6' spacing='3'>
                <Heading size={'md'} >{game.name}</Heading>
                <StarRatings ratings={game.rating} />
              </Stack>
            </CardBody>
          </Card>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default GameGrid;
