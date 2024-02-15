import { Box, Heading, Spinner } from "@chakra-ui/react";
import useGameTrailers from "../../hooks/useGameTrailers";

interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data: Trailer, error, isLoading } = useGameTrailers(gameId);
  if (isLoading)
    return (
      <Box>
        <Spinner size={"xl"} /> <Heading>Trailer is Loading...</Heading>
      </Box>
    );

  if (error)
    return (
      <Heading as={"h3"}>
        Error while loading Trailer: {error.message}
      </Heading>
    );

  const first = Trailer?.results[0];
  return first ? (
    <Box display={"flex"} justifyContent={"center"}>
      <video
        width="100%"
        src={first.data[480]}
        poster={first.preview}
        controls
      />
    </Box>
  ) : null;
};

export default GameTrailer;
