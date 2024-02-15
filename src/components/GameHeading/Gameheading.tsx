import { Heading } from "@chakra-ui/react";
import { toCapitalize } from "../../services/utility";
import useGameQueryStore from "../../store";

const Gameheading = () => {
  const { platformName, genreName } = useGameQueryStore((s) => ({
    platformName: s.gameQuery.platform?.slug,
    genreName: s.gameQuery.genre?.slug,
  }));
  const heading = `${toCapitalize(platformName) || ""} ${
    toCapitalize(genreName) || ""
  } Games`;

  return (
    <>
      <Heading
        fontSize={{
          base: "30px",
          lg: "35px",
          xl: "45px",
        }}
      >
        {heading}
      </Heading>
    </>
  );
};

export default Gameheading;
