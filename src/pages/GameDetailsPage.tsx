import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";

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
      <Heading>{game?.name}</Heading>
      <Text>{game?.description_raw}</Text>
    </Box>
  );
};

export default GameDetailsPage;
