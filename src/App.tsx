import { Button, useColorMode } from "@chakra-ui/react";
import { BsMoonStarsFill } from "react-icons/bs";
import { ImSun } from "react-icons/im";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
      <Button colorScheme="white" onClick={toggleColorMode}>
        {colorMode === "light" ? <BsMoonStarsFill color="black" /> : <ImSun color="yellow" />}
      </Button>
  );
}
export default App;
