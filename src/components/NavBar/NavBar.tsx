import { Circle, HStack, Image } from "@chakra-ui/react";
import ToggleModeButton from "../ToggleModeButton";
import logo from "../../assets/logo.jpg";
import useColorModes from "../../hooks/useColorModes";
import SearchInput from "../SearchInput";

interface Props {
  onSearch: (searchString: string | undefined) => void;
  onTyping: (serachString: string | undefined) => void;
}

const NavBar = ({onTyping, onSearch}: Props) => {
  const { colorModeRegular, reverseColorModeRegular } = useColorModes();
  const logoBorderColor = colorModeRegular;
  const logoBorderColorReverse = reverseColorModeRegular;


  return (
    <div >
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
        <Circle
          size={{
            base: "40px",
            md: "60px",
          }}
          bg="tomato"
          bgColor={logoBorderColor}
        >
          <Circle
            size={{
              base: "35px",
              md: "55px",
            }}
            bg="tomato"
            bgColor={logoBorderColorReverse}
          >
            <Image
              src={logo}
              borderRadius={"30px"}
              boxSize={{
                base: "30px",
                md: "50px",
              }}
            ></Image>
          </Circle>
        </Circle>
        <SearchInput onTyping={onTyping} onSearch={onSearch} />
        <ToggleModeButton />
      </HStack>
    </div>
  );
};

export default NavBar;
