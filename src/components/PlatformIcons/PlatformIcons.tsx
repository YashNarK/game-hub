import {
  FaWindows,
  FaLinux,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { HStack, Icon } from "@chakra-ui/react";

interface Props {
  listOfPlatformSlugs: string[];
}

const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,
  mac: FaApple,
  linux: FaLinux,
  ios: MdPhoneIphone,
  web: BsGlobe,
  android: FaAndroid,
};

const PlatformIcons = ({listOfPlatformSlugs}:Props) => {
  return (<>
  <HStack>
    {
        listOfPlatformSlugs.map((slug,index)=><Icon key={index} as={iconMap[slug]} />)
    }
    
  </HStack>
  </>);
};

export default PlatformIcons;
