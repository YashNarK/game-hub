import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";

const GameGrid = () => {
  const { games, isLoading, httpErrors, setGames, setHttpErrors } = useGames();
  // .platforms.map(x=>x.platform.name)
  console.log(games[0])
  return (
    <>
      <ul>
        {games.map((game) => (
          <Card maxW={'sm'} key={game.id}>
            <CardBody>
              <Image src={game.background_image} alt="Game background Image" borderRadius={'lg'} />
              <Stack mt='6' spacing='3'>
                <Heading size={'md'} >{game.name}</Heading>

              </Stack>
            </CardBody>
          </Card>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
