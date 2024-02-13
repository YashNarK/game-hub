import { Button } from "@chakra-ui/react";
import useGameQueryStore from "../../store";

const ClearButton = () => {
  const { isDisabled, onClick } = useGameQueryStore((s) => ({
    isDisabled:
      Boolean(!s.gameQuery.isAscending) &&
      Boolean(!s.gameQuery.ordering) &&
      Boolean(!s.gameQuery.platform),
    onClick: s.handleClear,
  }));
  return (
    <Button variant={"ghost"} ms={2} isDisabled={isDisabled} onClick={onClick}>
      Clear
    </Button>
  );
};

export default ClearButton;
