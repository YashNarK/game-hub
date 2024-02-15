import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import useColorModes from "../../hooks/useColorModes";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

interface Props {
  numberOfLines: number;
  children: string;
}

const ExpandableText = ({ children, numberOfLines }: Props) => {
  const { highlightColor } = useColorModes();
  const [isMaxLine, setIsMaxLine] = useState(true);
  return (
    <>
      <Text noOfLines={isMaxLine ? numberOfLines : -1}>{children}</Text>
      <Box textAlign={"center"} my={3}>
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
      </Box>
    </>
  );
};

export default ExpandableText;
