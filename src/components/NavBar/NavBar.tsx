import { HStack } from "@chakra-ui/react";
import Logo from "../Logo";
import SearchInput from "../SearchInput";
import ToggleModeButton from "../ToggleModeButton";

const NavBar = () => {
  return (
    <div>
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
    </div>
  );
};

export default NavBar;
