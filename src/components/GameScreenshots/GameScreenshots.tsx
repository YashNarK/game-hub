import { Box, Heading, Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useGameScreenshots from "../../hooks/useGameScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data: screenshots, error, isLoading } = useGameScreenshots(gameId);

  if (isLoading)
    return (
      <Box>
        <Spinner size={"lg"} />
      </Box>
    );

  if (error)
    return (
      <Heading as={"h3"}>
        Error while loading screenshots: {error.message}
      </Heading>
    );

  return screenshots?.results ? (
    <SimpleGrid
      spacing={2}
      columns={{
        base: 1,
        md: 2,
      }}
    >
      {screenshots.results.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image} />
      ))}
    </SimpleGrid>
  ) : null;
};

export default GameScreenshots;
