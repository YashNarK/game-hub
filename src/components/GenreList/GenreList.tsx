import {
  Alert,
  AlertIcon,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
  ListIcon,
  Box,
} from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import optimizeImage from "../../services/image-optimizer";
import { GiVibratingBall } from "react-icons/gi";
import { GenreData } from "../../services/genre-service";

interface Props {
  onGenreSelect: (selectedGenre: GenreData | null) => void;
  selectedGenre: GenreData | null;
}

const GenreList = ({ onGenreSelect, selectedGenre }: Props) => {
  const { genres, isLoading, httpErrors } = useGenres();
  const underLineGenre = () => {
    return (
      <Box
        as="span"
        display="block"
        height="2px"
        width="100px"
        bg="gray"
        ml={"40px"}
      />
    );
  };

  return (
    <>
      {httpErrors && (
        <>
          <Alert status="error">
            <AlertIcon />
            {httpErrors}
          </Alert>
          <Alert status="info">
            <AlertIcon />
            There is an error while loading genre list
          </Alert>
        </>
      )}

      {isLoading && <Spinner size={"xl"} />}

      {!httpErrors && (
        <List spacing={2}>
          <ListItem py={1}>
            <HStack spacing={2}>
              <ListIcon as={GiVibratingBall} boxSize={"32px"} />{" "}
              <Button
                fontWeight={!selectedGenre ? "bold" : "normal"}
                onClick={() => {
                  onGenreSelect(null);
                }}
                variant={"link"}
                fontSize={"lg"}
              >
                All
              </Button>
            </HStack>

            {!selectedGenre && underLineGenre()}
          </ListItem>
          {genres.map((genre) => (
            <ListItem key={genre.id} py={1}>
              <HStack spacing={2}>
                {" "}
                <Image
                  src={optimizeImage(genre.image_background)}
                  alt="genre-icon"
                  boxSize={"32px"}
                  borderRadius={8}
                />
                <Button
                  fontWeight={
                    selectedGenre?.id === genre.id ? "bold" : "normal"
                  }
                  onClick={() => {
                    onGenreSelect(genre);
                  }}
                  variant={"link"}
                  fontSize={"lg"}
                >
                  {genre.name}
                </Button>
              </HStack>
              {selectedGenre?.id === genre.id && underLineGenre()}
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default GenreList;
