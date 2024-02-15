import { Card, CardBody, Heading, Stack, Image, Flex } from "@chakra-ui/react";
import StarRatings from "../StarRatings";
import PlatformIcons from "../PlatformIcons";
import MetaCriticBadge from "../MetaCriticBadge";
import { PlatformData } from "../../interfaces/platform.type";
import { Link } from "react-router-dom";
import useColorModes from "../../hooks/useColorModes";

interface Props {
  imageUrl: string;
  altText: string;
  heading: string;
  ratings: number;
  parent_platforms: PlatformData[];
  criticScore: number;
  slug: string;
}

const GameCard = ({
  imageUrl,
  altText,
  heading,
  ratings,
  parent_platforms,
  criticScore,
  slug,
}: Props) => {
  const { highlightColor } = useColorModes();

  return (
    <Card
      _hover={{
        transform: "scale(1.03)",
        color: highlightColor,
        transition: "transform  .1s ease-in",
      }}
      boxShadow={"2xl"}
      h={{
        base: "440px",
        md: "380px",
      }}
      overflow={"hidden"}
    >
      <CardBody>
        <Image
          src={imageUrl}
          alt={altText}
          borderRadius={"lg"}
          h={{
            base: "250px",
            md: "200px",
          }}
          w={"100%"}
        />
        <Stack mt="6" spacing="3">
          <Flex justifyContent={"space-between"}>
            <PlatformIcons platforms={parent_platforms} />
            <MetaCriticBadge criticScore={criticScore} />
          </Flex>

          <StarRatings ratings={ratings} />
          <Heading noOfLines={2} size={"md"}>
            <Link to={"games/" + slug}>{heading}</Link>
          </Heading>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
