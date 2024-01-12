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
  useColorMode,
} from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import optimizeImage from "../../services/image-optimizer";
import { GiVibratingBall } from "react-icons/gi";
import { GenreData } from "../../services/genre-service";
import { useState } from "react";

interface Props {
  onGenreSelect: (selectedGenre: GenreData | null) => void;
  selectedGenre: GenreData | null;
}

const GenreList = ({ onGenreSelect, selectedGenre }: Props) => {
  const { genres, isLoading, httpErrors } = useGenres();
  const [hoveredGenre, setHoveredGenre] = useState<number>(-1);
  const { colorMode } = useColorMode();
  
  const highlightProps = {
    color: colorMode === "dark" ? "yellow" : "black",
    height: colorMode === "dark" ? 0.5 : 2,
  };
  
  const underLineGenre = (color?: string, heightInPixels?: number) => {
    return (
      <Box
        as="span"
        display="block"
        height={heightInPixels ? `${heightInPixels}px` : "2px"}
        width="100px"
        bg={color ? color : "gray"}
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
        <List spacing={2} maxH={"15cm"} overflow={"auto"}>
          <ListItem py={1}>
            <HStack spacing={2}>
              <ListIcon as={GiVibratingBall} boxSize={"32px"} />{" "}
              <Button
                _hover={{ textDecoration: "none" }}
                justifyContent={"start"}
                whiteSpace={"normal"}
                width={"200px"}
                fontWeight={!selectedGenre ? "bold" : "normal"}
                onClick={() => {
                  onGenreSelect(null);
                }}
                variant={"link"}
                fontSize={"lg"}
                onMouseEnter={() => setHoveredGenre(0)}
                onMouseLeave={() => setHoveredGenre(-1)}
              >
                All
              </Button>
            </HStack>

            {(!hoveredGenre && underLineGenre(highlightProps.color,highlightProps.height)) ||
              (!selectedGenre && underLineGenre())}
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
                  _hover={{ textDecoration: "none" }}
                  justifyContent={"start"}
                  whiteSpace={"normal"}
                  width={"200px"}
                  fontWeight={
                    selectedGenre?.id === genre.id ? "bold" : "normal"
                  }
                  onClick={() => {
                    onGenreSelect(genre);
                  }}
                  variant={"link"}
                  fontSize={"lg"}
                  onMouseEnter={() => setHoveredGenre(genre.id)}
                  onMouseLeave={() => setHoveredGenre(-1)}
                  
                >
                  {genre.name}
                </Button>
              </HStack>
              {(hoveredGenre === genre.id &&
                underLineGenre(highlightProps.color,highlightProps.height)) ||
                (selectedGenre?.id === genre.id && underLineGenre())}
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default GenreList;
