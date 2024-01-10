import { Button, useColorMode } from "@chakra-ui/react";
import { BsMoonStarsFill } from "react-icons/bs";
import { ImSun } from "react-icons/im";

interface Props {
  className?: string;
}

const ToggleModeButton = ({ className="" }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className={className}>
      <Button colorScheme="white" onClick={toggleColorMode}>
        {colorMode === "light" ? (
          <BsMoonStarsFill color="black" />
        ) : (
          <ImSun color="yellow" />
        )}
      </Button>
    </div>
  );
};

export default ToggleModeButton;
