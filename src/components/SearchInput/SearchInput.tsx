import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchString: string | undefined) => void;
  onTyping: (serachString: string | undefined) => void;
}

const SearchInput = ({ onTyping, onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSearch(ref.current?.value);
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            onChange={(event) => {
              onTyping(event.target.value);
            }}
            ref={ref}
            maxW={"30cm"}
            placeholder="Search Games..."
            variant={"filled"}
            borderRadius={20}
          />
        </InputGroup>
      </form>
    </>
  );
};

export default SearchInput;
