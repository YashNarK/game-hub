import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../../App";
import { toCapitalize } from "../../services/utility";

interface Props {
  gameQuery: GameQuery;
}

const Gameheading = ({ gameQuery }: Props) => {
  const heading = `${toCapitalize(gameQuery.platform?.slug) || ""} ${
    toCapitalize(gameQuery.genre?.slug) || ""
  } Games`;

  return (
    <>
      {console.log(gameQuery)}
      <Heading as="h1">{heading}</Heading>
    </>
  );
};

export default Gameheading;
