import { SimpleGrid, Text } from "@chakra-ui/react";
import DefinitionItem from "../DefinitionItem";
import MetaCriticBadge from "../MetaCriticBadge";
import { GameData } from "../../interfaces/game.type";

interface Props {
  game: GameData;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Platforms">
        {game.parent_platforms.length === 0 ? (
          <Text>No Platforms</Text>
        ) : (
          game.parent_platforms?.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))
        )}
      </DefinitionItem>
      <DefinitionItem term="MetaCritic Score">
        <MetaCriticBadge criticScore={game.metacritic}></MetaCriticBadge>
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres.length === 0 ? (
          <Text>No Genre</Text>
        ) : (
          game.genres?.map((genre) => <Text key={genre.id}>{genre.name}</Text>)
        )}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers.length === 0 ? (
          <Text>No Publishers</Text>
        ) : (
          game.publishers?.map((publisher) => (
            <Text key={publisher.id}>{publisher.name}</Text>
          ))
        )}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
