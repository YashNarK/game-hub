import { Button, useColorMode, Text } from "@chakra-ui/react";
import { BsMoonStarsFill } from "react-icons/bs";
import { ImSun } from "react-icons/im";

interface Props {
  className?: string;
}

const ToggleModeButton = ({ className = "" }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className={className}>
      <Button variant={'outline'} colorScheme="white" onClick={toggleColorMode}>
        {colorMode === "light" ? (
          <>
            <BsMoonStarsFill  color="black" />
            <Text mx={2} color={"black"}> Dark Mode</Text>
          </>
        ) : (
          <>
            <ImSun color="yellow" />
            <Text mx={2} color={"yellow"}> Light Mode</Text>
          </>
        )}
      </Button>
    </div>
  );
};

export default ToggleModeButton;
