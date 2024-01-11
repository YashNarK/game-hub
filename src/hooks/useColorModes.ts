import { useColorModeValue } from "@chakra-ui/react";

const useColorModes = () => {
  const colorMode = useColorModeValue("gray.800", "white");
  const reverseColorMode = useColorModeValue("white", "gray.800");

  const colorModeDarker = useColorModeValue("teal.600", "gray.500");
  const reverseColorModeDarker = useColorModeValue( "gray.500","black");
  return {colorMode, reverseColorMode,colorModeDarker,reverseColorModeDarker};
};

export default useColorModes;