import { Circle, HStack, Image } from "@chakra-ui/react";
import ToggleModeButton from "../ToggleModeButton";
import logo from "../../assets/logo.jpg";
interface Props {
  className?: string;
}

const NavBar = ({ className = "" }: Props) => {
  return (
    <div className={className}>
      <HStack justifyContent={"space-between"} px={5} py={3}>
        <Circle size="65px" bg="tomato" bgGradient="linear(to-t,gray.800 50%,white 50%)">
          <Image src={logo} borderRadius={"30px"} boxSize={"60px"}></Image>
        </Circle>
        <ToggleModeButton />
      </HStack>
    </div>
  );
};

export default NavBar;
