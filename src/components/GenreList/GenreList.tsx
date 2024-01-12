import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <List spacing={2}>
      {genres.map((genre) => (
        <ListItem key={genre.id} px={3}>
          <HStack spacing={2}>
            {" "}
            <Image
              src={genre.image_background}
              alt="genre-icon"
              boxSize={'32px'}
              borderRadius={8}
            />
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
