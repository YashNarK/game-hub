import { HStack, Image } from "@chakra-ui/react";
import ToggleModeButton from "../ToggleModeButton";
import logo from '../../assets/logo.jpg'
interface Props {
  className?: string;
}

const NavBar = ({className=""}:Props) => {
  return <div className={className}>
    <HStack justifyContent={"space-between"} px={5} py={3}>
        <Image src={logo}  borderRadius={"30px"} boxSize={'60px'}></Image>
        <ToggleModeButton />
    </HStack>
  </div>;
};

export default NavBar;
