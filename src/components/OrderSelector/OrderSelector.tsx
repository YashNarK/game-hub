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

type OrderSortOptions =
  | "name"
  | "released"
  | "added"
  | "created"
  | "updated"
  | "rating"
  | "metacritic"
  | null;

interface Props {
  onSortOptionSelection: (selectedOption: OrderSortOptions) => void;
  selectedOption: OrderSortOptions;
}

const OrderSelector = ({ selectedOption, onSortOptionSelection }: Props) => {


  const sortByOptions: OrderSortOptions[] = [
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
            Order by: {selectedOption ? toCapitalize(selectedOption) : "None"}
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
        <Badge as={Button} colorScheme="yellow" h={"20px"}>
          ASC
        </Badge>
      </HStack>
    </>
  );
};

export default OrderSelector;
export type { OrderSortOptions };
