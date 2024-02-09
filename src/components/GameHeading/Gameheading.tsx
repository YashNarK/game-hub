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
