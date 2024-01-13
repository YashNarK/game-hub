import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { toCapitalize } from "../../services/utility";

type OrderSortOptions =
  | "name"
  | "released"
  | "added"
  | "created"
  | "updated"
  | "rating"
  | "metacritic";

interface Props {
  onSortOptionSelection: (selectedOption: OrderSortOptions) => void;
  selectedOption: OrderSortOptions;
}

const OrderSelector = ({selectedOption, onSortOptionSelection }: Props) => {

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
      <Menu isLazy>
        <MenuButton as={Button} rightIcon={<FaChevronDown />}>
          Order by: {toCapitalize(selectedOption)}
        </MenuButton>
        <MenuList maxH={"8cm"} overflowY={"auto"}>
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
    </>
  );
};

export default OrderSelector;
export type { OrderSortOptions };
