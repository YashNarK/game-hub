import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useReducer, useRef } from "react";
import { BsSearch, BsXCircleFill } from "react-icons/bs";
import styles from "./SearchInput.module.css";
import hasSearchInputReducer from "../../reducers/HasSearchInputReducer";

interface Props {
  onSearch: (searchString: string | undefined) => void;
  onTyping: (serachString: string | undefined) => void;
}

const SearchInput = ({ onTyping, onSearch }: Props) => {
  // const [hasInput, setHasInput] = useState(false);
  const [hasSearchInput, dispatchHasSearchInput] = useReducer(hasSearchInputReducer,false);
  const ref = useRef<HTMLInputElement>(null);

  const clearInput = () => {
    if (ref.current) {
      ref.current.value = "";
      dispatchHasSearchInput({type:'NO'});
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
          {hasSearchInput ? (
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
              dispatchHasSearchInput({type:Boolean(event.target.value)?'YES':'NO'});
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
