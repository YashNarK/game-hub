import { Circle, HStack, Image } from "@chakra-ui/react";
import ToggleModeButton from "../ToggleModeButton";
import logo from "../../assets/logo.jpg";
import useColorModes from "../../hooks/useColorModes";

interface Props {
  className?: string;
}

const NavBar = ({ className = "" }: Props) => {
  const {colorMode,reverseColorMode} = useColorModes();
  const logoBorderColor = colorMode;
  const logoBorderColorReverse = reverseColorMode;
  return (
    <div className={className}>
      <HStack justifyContent={"space-between"} px={5} py={3}>
        <Circle size="60px" bg="tomato" bgColor={logoBorderColor}>
          <Circle size="55px" bg="tomato" bgColor={logoBorderColorReverse}>
            <Image src={logo} borderRadius={"30px"} boxSize={"50px"}></Image>
          </Circle>
        </Circle>
        <ToggleModeButton />
      </HStack>
    </div>
  );
};

export default NavBar;
