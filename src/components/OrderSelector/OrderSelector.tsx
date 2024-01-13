import {
  Badge,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { toCapitalize } from "../../services/utility";

interface Props {
  onSortOptionSelection: (selectedOption: string | null) => void;
  onAscDescToggle: () => void;
  selectedOption: string | null;
  isAscending: boolean;
}

const OrderSelector = ({
  isAscending,
  onAscDescToggle,
  selectedOption,
  onSortOptionSelection,
}: Props) => {
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
            Order by: {selectedOption ? toCapitalize(selectedOption.replace(/-/g, '')) : "None"}
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
        {selectedOption && <Badge
          onClick={onAscDescToggle}
          as={Button}
          colorScheme="yellow"
          h={"20px"}
        >
          {isAscending ? "ASC" : "DESC"}
        </Badge>}
      </HStack>
    </>
  );
};

export default OrderSelector;
