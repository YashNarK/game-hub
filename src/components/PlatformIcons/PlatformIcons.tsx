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
import { PlatformData } from "../../interfaces/platform.type";
import { FaQuestionCircle } from "react-icons/fa";

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
  const { colorModeLighter } = useColorModes();
  return (
    <>
      <HStack>
        {platforms ? (
          platforms.map(({ platform }) => (
            <Icon
              color={colorModeLighter}
              key={platform.id}
              as={iconMap[platform.slug]}
            />
          ))
        ) : (
          <Icon
            color={colorModeLighter}
            key={-1}
            as={FaQuestionCircle}
          />
        )}
      </HStack>
    </>
  );
};

export default PlatformIcons;
