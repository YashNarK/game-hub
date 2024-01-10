import { HStack, Image } from "@chakra-ui/react";
import logo from '../../assets/logo.jpg'
interface Props {
  className?: string;
}

const NavBar = ({className=""}:Props) => {
  return <div className={className}>
    <HStack>
        <Image src={logo}  borderRadius={"30px"} boxSize={'60px'}></Image>
    </HStack>
  </div>;
};

export default NavBar;
