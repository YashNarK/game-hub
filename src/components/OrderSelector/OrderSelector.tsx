import {
  Badge,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { toCapitalize } from "../../services/utility";
import useGameQueryStore from "../../store";

const OrderSelector = () => {
  const {
    selectedOption,
    onSortOptionSelection,
    onAscDescToggle,
    isAscending,
  } = useGameQueryStore((s) => ({
    selectedOption: s.gameQuery.ordering,
    onSortOptionSelection: s.handleSortSelect,
    onAscDescToggle: s.handleAscDescToggle,
    isAscending: s.gameQuery.isAscending,
  }));
  const sortByOptions: string[] = [
    "name",
    "released",
    "added",
    "created",
    "updated",
    "rating",
    "metacritic",
  ];

  return (
    <>
      <HStack>
        <Menu isLazy>
          <MenuButton as={Button} rightIcon={<FaChevronDown />}>
            Order by:{" "}
            <Text display={"inline"} fontWeight={"bolder"}>
              {selectedOption
                ? toCapitalize(selectedOption.replace(/-/g, ""))
                : "None"}
            </Text>
          </MenuButton>
          <MenuList maxH={"8cm"} overflowY={"auto"}>
            <MenuItem
              onClick={() => {
                onSortOptionSelection(null);
              }}
            >
              None
            </MenuItem>
            {sortByOptions.map((option, index) => (
              <MenuItem
                onClick={() => {
                  onSortOptionSelection(option);
                }}
                key={index}
              >
                {toCapitalize(option)}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        {selectedOption && (
          <Badge
            onClick={onAscDescToggle}
            as={Button}
            colorScheme="yellow"
            h={"20px"}
          >
            {isAscending ? "ASC" : "DESC"}
          </Badge>
        )}
      </HStack>
    </>
  );
};

export default OrderSelector;
