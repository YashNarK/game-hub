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
import { GameQuery } from "../../interfaces/game.type";
import { FaFaceSadCry } from "react-icons/fa6";

interface Props {
  gameQuery: GameQuery;
  setPage: (
    nextPage: string | null | undefined,
    prevPage: string | null | undefined
  ) => void;
}

const GameGrid = ({ gameQuery, setPage }: Props) => {
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
    <>
      {console.log(games?.length)}
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
                  gameUrl={game.website}
                  parent_platforms={game.parent_platforms}
                  criticScore={game.metacritic}
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
    </>
  );
};

export default GameGrid;
