import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsSearch, BsXCircleFill } from "react-icons/bs";
import styles from "./SearchInput.module.css";

interface Props {
  onSearch: (searchString: string | undefined) => void;
  onTyping: (serachString: string | undefined) => void;
}

const SearchInput = ({ onTyping, onSearch }: Props) => {
  const [hasInput, setHasInput] = useState(false);

  const ref = useRef<HTMLInputElement>(null);

  const clearInput = () => {
    if (ref.current) {
      ref.current.value = "";
      setHasInput(false);
      onTyping("");
    }
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSearch(ref.current?.value);
        }}
      >
        <InputGroup>
          {hasInput ? (
            <InputLeftElement
              className={styles.closeIcon}
              children={<BsXCircleFill onClick={clearInput} />}
            />
          ) : (
            <InputLeftElement children={<BsSearch />} />
          )}
          <Input
            onChange={(event) => {
              onTyping(event.target.value);
              setHasInput(Boolean(event.target.value));
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
