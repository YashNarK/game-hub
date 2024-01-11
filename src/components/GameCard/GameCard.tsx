import { Card, CardBody, Heading, Stack, Image } from "@chakra-ui/react";
import StarRatings from "../StarRatings";

interface Props {
  imageUrl: string;
  altText: string;
  heading: string;
  ratings: number;
  gameUrl: string;
}

const GameCard = ({ imageUrl, altText, heading, ratings, gameUrl }: Props) => {
  return (
    <>
      <Card
        as={"a"}
        href={gameUrl}
        target="_blank"
        w={{
          base: "sm",
          md: "250px",
          lg: "260px",
          xl: "280px",
        }}
        boxShadow={"2xl"}
        h={{
          base: "sm",
          md: "350px",
        }}
        overflow={"hidden"}
        border="3px"
        borderColor="black"
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
            <Heading noOfLines={2} size={"md"}>
              {heading}
            </Heading>
            <StarRatings ratings={ratings} />
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
