import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import usePlatform from "../../hooks/usePlatform";
const PlatformSelector = () => {
  const {platforms} = usePlatform();

  return (
    <Box mb={3}>
      <Menu isLazy>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList maxH="8cm" overflowY="auto">
        {platforms.map((platform)=><MenuItem >{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
    </Box>
  );
};

export default PlatformSelector;
