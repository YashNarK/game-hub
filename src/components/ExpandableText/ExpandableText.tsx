import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  numberOfLines: number;
  children: string;
}

const ExpandableText = ({ children, numberOfLines }: Props) => {
  const [isMaxLine, setIsMaxLine] = useState(true);
  return (
    <>
      <Text noOfLines={isMaxLine ? numberOfLines : -1}>{children}</Text>
      <Box textAlign={"center"} my={3}>
        {" "}
        <Button
          variant={"ghost"}
          onClick={() => {
            setIsMaxLine(!isMaxLine);
          }}
          colorScheme="green"
        >
          {isMaxLine ? "Load More..." : "Show Less..."}
        </Button>
      </Box>
    </>
  );
};

export default ExpandableText;
