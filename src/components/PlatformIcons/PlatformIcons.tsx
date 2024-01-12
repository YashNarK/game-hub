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
import useColorModes from "../../hooks/useColorModes";
import { PlatformData } from "../../services/game-service";

interface Props {
  platforms: PlatformData[];
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

const PlatformIcons = ({ platforms }: Props) => {
  const { colorModeDarker } = useColorModes();
  return (
    <>
      <HStack>
        {
          // listOfPlatformSlugs.map((slug,index)=><Icon color={colorModeDarker} key={index} as={iconMap[slug]} />)
          platforms.map(({ platform }) => (
            <Icon
              color={colorModeDarker}
              key={platform.id}
              as={iconMap[platform.slug]}
            />
          ))
        }
      </HStack>
    </>
  );
};

export default PlatformIcons;
