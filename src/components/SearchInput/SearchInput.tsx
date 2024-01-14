import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
        //   w={{
        //     base: 280,
        //     md: "sm",
        //     lg: "md",
        //     xl: "lg",
        //     "2xl": "xl",
        //   }}
        maxW={'30cm'}
          placeholder="Search Games..."
          variant={"filled"}
          borderRadius={20}
        />
      </InputGroup>
    </>
  );
};

export default SearchInput;
