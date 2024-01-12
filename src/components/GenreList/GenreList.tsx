import {
  Alert,
  AlertIcon,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import optimizeImage from "../../services/image-optimizer";

const GenreList = () => {
  const { genres, isLoading, httpErrors } = useGenres();

  return (
    <>
      {httpErrors && (
        <>
          <Alert status="error"><AlertIcon />{httpErrors}</Alert>
          <Alert status="info"><AlertIcon />There is an error while loading genre list</Alert>
        </>
      )}

      {isLoading && <Spinner size={"xl"} />}

      {!httpErrors && (
        <List spacing={2}>
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
                <Text fontSize={"lg"}>{genre.name}</Text>
              </HStack>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default GenreList;
