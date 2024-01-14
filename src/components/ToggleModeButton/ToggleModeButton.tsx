import { Button, useColorMode, Text, Show } from "@chakra-ui/react";
import { BsMoonStarsFill } from "react-icons/bs";
import { ImSun } from "react-icons/im";

interface Props {
  className?: string;
}

const ToggleModeButton = ({ className = "" }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className={className}>
      <Button variant={"outline"} colorScheme="white" onClick={toggleColorMode}>
        {colorMode === "light" ? (
          <>
            <BsMoonStarsFill color="black" />
            <Show above="md">
              <Text mx={2} color={"black"}>
                {" "}
                Dark Mode
              </Text>
            </Show>
          </>
        ) : (
          <>
            <ImSun color="yellow" />
            <Show above="md">
              <Text mx={2} color={"yellow"}>
                {" "}
                Light Mode
              </Text>
            </Show>
          </>
        )}
      </Button>
    </div>
  );
};

export default ToggleModeButton;
