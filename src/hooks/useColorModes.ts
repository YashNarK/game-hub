import { useColorModeValue } from "@chakra-ui/react";

const useColorModes = () => {
  const colorMode = useColorModeValue("gray.800", "white");
  const reverseColorMode = useColorModeValue("white", "gray.800");
  return {colorMode, reverseColorMode};
};

export default useColorModes;