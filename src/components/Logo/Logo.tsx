import { Circle, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.jpg";
import useColorModes from "../../hooks/useColorModes";


const Logo = () => {
  const { colorModeRegular, reverseColorModeRegular } = useColorModes();
  const logoBorderColor = colorModeRegular;
  const logoBorderColorReverse = reverseColorModeRegular;
  return (
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
          alt="Logo of game-hub app"
          borderRadius={"30px"}
          boxSize={{
            base: "30px",
            md: "50px",
          }}
        ></Image>
      </Circle>
    </Circle>
  );
};

export default Logo;
