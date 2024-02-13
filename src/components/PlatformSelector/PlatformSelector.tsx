import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import usePlatform from "../../hooks/usePlatform";
import useGameQueryStore from "../../store";

const PlatformSelector = () => {
  const { platforms } = usePlatform();

  const { selectedPlatform, onPlatformSelect } = useGameQueryStore((s) => ({
    selectedPlatform: s.gameQuery.platform,
    onPlatformSelect: s.handlePlatformSelect,
  }));

  return (
    <Menu isLazy>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        Platforms :{" "}
        <Text display={"inline"} fontWeight={"bolder"}>
          {selectedPlatform ? selectedPlatform.name : "All"}
        </Text>
      </MenuButton>
      <MenuList maxH="8cm" overflowY="auto">
        <MenuItem
          onClick={() => {
            onPlatformSelect(null);
          }}
        >
          All
        </MenuItem>
        {platforms?.map((platform) => (
          <MenuItem
            onClick={() => {
              onPlatformSelect(platform);
            }}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
