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
import { GenreData } from "../../services/genre-service";

interface Props {
  selectedGenre: GenreData|null;
}

const GameGrid = ({ selectedGenre }: Props) => {

  const { games, isLoading, httpErrors } = useGames({params:{genres:selectedGenre?.id}}, [selectedGenre]);


  const { colorMode } = useColorModes();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
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
          <Box color={colorMode} my={5}>
            <Spinner mx={10} size={"xl"} />{" "}
            <Heading
              display={"inline"}
              fontSize={{
                base: "xl",
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
              lg: 2,
              xl: 3,
              "2xl": 4,
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
            lg: 2,
            xl: 3,
            "2xl": 4,
          }}
          spacing={6}
        >
          {games.map((game, index) => {

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
    </>
  );
};

export default GameGrid;
