import { Box, HStack, Stack } from "@chakra-ui/react";
import Logo from "../Logo";
import SearchInput from "../SearchInput";
import ToggleModeButton from "../ToggleModeButton";
import Gameheading from "../GameHeading";
import ClearButton from "../ClearButton";
import PlatformSelector from "../PlatformSelector";
import OrderSelector from "../OrderSelector";

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
      <Box>
            <Stack
              display={"flex"}
              justifyContent={"space-between"}
              w={{
                base: "100%",
                md: "95%",
                lg: "80%",
                xl: "70%",
                "2xl": "60%",
              }}
              direction={{
                base: "column",
                md: "row",
              }}
              gap={2}
              mx={"auto"}
              my={3}
              px={2}
            >
              <OrderSelector />
              <Box display={"flex"} justifyContent={'space-between'} flexWrap={'wrap'}>
                <PlatformSelector />
                <ClearButton />
              </Box>
            </Stack>
            <Box m={4} textAlign={"center"}>
              <Gameheading />
            </Box>
          </Box>
    </div>
  );
};

export default NavBar;
