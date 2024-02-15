import { Box, HStack } from "@chakra-ui/react";
import useColorModes from "../../hooks/useColorModes";
import Logo from "../Logo";
import SearchInput from "../SearchInput";
import ToggleModeButton from "../ToggleModeButton";

const NavBar = () => {
  const { reverseColorModeRegular } = useColorModes();
  return (
    <Box position={"sticky"} top="0" zIndex="100" bg={reverseColorModeRegular}>
      <HStack
        justifyContent={"space-between"}
        px={{
          base: 2,
          md: 5,
        }}
        py={3}
        spacing={{
          base: 2,
          md: 5,
          lg: 20,
          xl: 30,
          "2xl": 40,
        }}
      >
        <Logo />
        <SearchInput />
        <ToggleModeButton />
      </HStack>

    </Box>
  );
};

export default NavBar;
