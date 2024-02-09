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
} from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard";
import GameCardSkeleton from "../GameCardSkeleton";
import useColorModes from "../../hooks/useColorModes";
import optimizeImage from "../../services/image-optimizer";
import { GameQuery } from "../../App";
import Pagination from "../Pagination";

interface Props {
  gameQuery: GameQuery;
  pageNumber: number;
  onNext: () => void;
  onPrev: () => void;
}

const GameGrid = ({ gameQuery, pageNumber, onNext, onPrev }: Props) => {
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
    [{...gameQuery,platform:undefined,genre:undefined}]
  );

  const { colorModeRegular } = useColorModes();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <>
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
      ) : (
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
      )}

      <Pagination
        hasNext={Boolean(nextPage)}
        hasPrev={Boolean(prevPage)}
        pageNumber={pageNumber}
        onNext={onNext}
        onPrev={onPrev}
      />
    </>
  );
};

export default GameGrid;
