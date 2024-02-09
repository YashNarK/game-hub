import { Heading } from "@chakra-ui/react";
import { toCapitalize } from "../../services/utility";
import { GameQuery } from "../../interfaces/game.type";

interface Props {
  gameQuery: GameQuery;
}

const Gameheading = ({ gameQuery }: Props) => {
  const heading = `${toCapitalize(gameQuery.platform?.slug) || ""} ${
    toCapitalize(gameQuery.genre?.slug) || ""
  } Games`;

  return (
    <>
      <Heading fontSize={{
        base: '15px',
        md:'30px',
        lg:'35px',
        xl:'45px'
      }}>{heading}</Heading>
    </>
  );
};

export default Gameheading;
