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
} from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import optimizeImage from "../../services/image-optimizer";
import { GiVibratingBall } from "react-icons/gi";

interface Props {
  onGenreSelect: (selectedGenre:string) => void;
}

const GenreList = ({onGenreSelect}:Props) => {
  const { genres, isLoading, httpErrors } = useGenres();


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
              <Button onClick={()=>{
                  onGenreSelect('')
                }} variant={"link"} fontSize={"lg"}>
                All
              </Button>
            </HStack>
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
                <Button onClick={()=>{
                  onGenreSelect(genre.name)
                }} variant={"link"} fontSize={"lg"}>
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default GenreList;
