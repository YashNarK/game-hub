import { Link, useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import {
  Box,
  Button,
  GridItem,
  Heading,
  Show,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";
import { RiArrowGoBackFill } from "react-icons/ri";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGameDetails(slug!);

  if (isLoading)
    return (
      <Box textAlign={"center"} px={4}>
        <Spinner size={"xl"} />{" "}
        <Heading>The game details are being fetched</Heading>
      </Box>
    );

  if (error || !game)
    return (
      <Box textAlign={"center"} px={4}>
        <Text>The game was not found. </Text>
        <Heading as="h3">Error: {error?.message}</Heading>
      </Box>
    );

  return (
    <Box py={3} px={4}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <GridItem>
          <Heading>{game?.name}</Heading>
          <ExpandableText>{game?.description_raw}</ExpandableText>
          <GameAttributes game={game} />
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game.id} />
          <GameScreenshots gameId={game.id} />
        </GridItem>
      </SimpleGrid>
      <Button
        as={Link}
        to={"/game-hub"}
        variant={"solid"}
        position={"sticky"}
        bottom={0}
        left={0}
        colorScheme={"teal"}
        size={{ base: "md", md: "sm" }}
        borderRadius={{ base: "75%", md: 3 }}
      >
        <RiArrowGoBackFill /> <Show above="md">Back to Home</Show>
      </Button>
    </Box>
  );
};

export default GameDetailsPage;
