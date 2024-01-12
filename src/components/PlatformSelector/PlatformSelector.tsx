import { Button, Menu, MenuButton } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
const PlatformSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        Platforms
      </MenuButton>
    </Menu>
  );
};

export default PlatformSelector;
