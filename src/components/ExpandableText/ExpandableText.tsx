import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import useColorModes from "../../hooks/useColorModes";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const { highlightColor } = useColorModes();
  const [isMaxLine, setIsMaxLine] = useState(true);

  const finalText = isMaxLine ? children.substring(0, 650) + "..." : children;
  return (
    <>
      <Text>{finalText}</Text>
      {children.length>650 && <Box textAlign={"center"} my={3}>
        {" "}
        <Button
          variant={"outline"}
          onClick={() => {
            setIsMaxLine(!isMaxLine);
          }}
          colorScheme={highlightColor}
          fontSize={"bolder"}
        >
          {isMaxLine ? (
            <>
              <FaAngleDoubleDown /> Read More...
            </>
          ) : (
            <>
              <FaAngleDoubleUp /> Show Less...
            </>
          )}
        </Button>
      </Box>}
    </>
  );
};

export default ExpandableText;
