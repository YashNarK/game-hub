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
import { BsFillPatchQuestionFill, BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { Badge, HStack, Icon } from "@chakra-ui/react";
import useColorModes from "../../hooks/useColorModes";
import { PlatformData } from "../../interfaces/platform.type";

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
          <>
            {platforms.slice(0, 5).map(({ platform }) => (
              <Icon
                color={colorModeLighter}
                key={platform.id}
                as={iconMap[platform.slug]}
              />
            ))}
            {platforms.slice(5).length != 0 && (
              <Badge>+{platforms.slice(5).length}</Badge>
            )}
          </>
        ) : (
          <Icon color={colorModeLighter} key={-1} as={BsFillPatchQuestionFill} />
        )}
      </HStack>
    </>
  );
};

export default PlatformIcons;
