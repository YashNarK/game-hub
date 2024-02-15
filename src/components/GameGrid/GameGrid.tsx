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
  HStack,
  Text,
} from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard";
import GameCardSkeleton from "../GameCardSkeleton";
import useColorModes from "../../hooks/useColorModes";
import optimizeImage from "../../services/image-optimizer";
import { useEffect } from "react";
import { FaFaceSadCry } from "react-icons/fa6";
import useGameQueryStore from "../../store";

const GameGrid = () => {
  const { gameQuery, setPage } = useGameQueryStore((s) => ({
    gameQuery: s.gameQuery,
    setPage: s.onSetPage,
  }));
  const { games, isLoading, httpErrors, nextPage, prevPage } = useGames(
    {
      params: {
        genres: gameQuery.genreName,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.ordering,
        search: gameQuery.search,
        page: gameQuery.page,
      },
    },
    [{ ...gameQuery, platform: undefined, genre: undefined }]
  );

  // Update page information when next/prev pages change
  useEffect(() => {
    setPage(nextPage, prevPage);
  }, [nextPage, prevPage]);
  const { colorModeRegular } = useColorModes();
  const skeletons = Array.from({ length: 13 }, (_, i) => i + 1);
  return (
    <Box py={5}>
      {httpErrors && (
        <Alert status="error" variant={"solid"} mb={3}>
          <AlertIcon />
          <AlertDescription>{httpErrors}</AlertDescription>
        </Alert>
      )}
      {!httpErrors && isLoading ? (
        <VStack>
          <Box color={colorModeRegular}>
            <Spinner size={"xl"} />{" "}
            <Heading
              display={"inline"}
              fontSize={{
                base: "sm",
                sm: "lg",
                md: "2xl",
              }}
            >
              Games List is Loading ...
            </Heading>{" "}
          </Box>
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 3,
              xl: 4,
              "2xl": 5,
            }}
            spacing={6}
          >
            {skeletons.map((skeleton) => (
              <GameCardSkeleton key={skeleton} />
            ))}
          </SimpleGrid>
        </VStack>
      ) : games?.length != 0 ? (
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
            xl: 4,
            "2xl": 5,
          }}
          spacing={6}
        >
          {games?.map((game, index) => {
            return (
              <GridItem key={index} m={"auto"}>
                <GameCard
                  imageUrl={optimizeImage(game.background_image)}
                  altText="Game Background image"
                  heading={game.name}
                  ratings={game.rating}
                  parent_platforms={game.parent_platforms}
                  criticScore={game.metacritic}
                  slug={game.slug}
                />
              </GridItem>
            );
          })}
        </SimpleGrid>
      ) : (
        <HStack justifyContent={"center"}>
          <FaFaceSadCry as={Text} fontSize="xx-large" />
          <Text fontSize={{ base: "x-large", md: "xx-large" }}>
            No games found...
          </Text>
        </HStack>
      )}
    </Box>
  );
};

export default GameGrid;
