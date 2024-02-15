import { useColorModeValue } from "@chakra-ui/react";

const useColorModes = () => {
  const colorModeRegular = useColorModeValue("gray.800", "white");
  const reverseColorModeRegular = useColorModeValue("white", "gray.800");

  const colorModeLighter = useColorModeValue("teal.600", "gray.500");
  const reverseColorModeLighter = useColorModeValue("gray.500", "teal.600");
  const colorModeDarker = useColorModeValue("black", "white");
  const reverseColorModeDarker = useColorModeValue("white", "black");
  const highlightColor = useColorModeValue("blue.600", "yellow");
  const highlightColorText = useColorModeValue("white", "black");
  return {
    colorModeRegular,
    reverseColorModeRegular,
    colorModeDarker,
    reverseColorModeDarker,
    colorModeLighter,
    reverseColorModeLighter,
    highlightColor,
    highlightColorText,
  };
};

export default useColorModes;
