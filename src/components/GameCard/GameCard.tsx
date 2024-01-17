import { Card, CardBody, Heading, Stack, Image, Flex } from "@chakra-ui/react";
import StarRatings from "../StarRatings";
import PlatformIcons from "../PlatformIcons";
import MetaCriticBadge from "../MetaCriticBadge";
import { PlatformData } from "../../services/platfrom-service";

interface Props {
  imageUrl: string;
  altText: string;
  heading: string;
  ratings: number;
  gameUrl: string;
  parent_platforms: PlatformData[];
  criticScore: number;
}

const GameCard = ({
  imageUrl,
  altText,
  heading,
  ratings,
  gameUrl,
  parent_platforms,
  criticScore,
}: Props) => {
  return (
    <>
      <Card
        as={"a"}
        href={gameUrl}
        target="_blank"
        // w={{
        //   base: "300px",
        //   md: "230px",
        //   lg: "250px",
        //   xl: "280px",
        //   "2xl": "300px",
        // }}
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
              {heading}
            </Heading>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
