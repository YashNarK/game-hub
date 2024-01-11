import { Card, CardBody, Heading, Stack, Image } from "@chakra-ui/react";
import StarRatings from "../StarRatings";

interface Props {
  imageUrl: string;
  altText:string;
  heading:string;
  ratings:number;
}

const GameCard = ({imageUrl,altText,heading,ratings}:Props) => {
  return (
    <>
      <Card maxW={"300"}>
        <CardBody>
          <Image
            src={imageUrl}
            alt={altText}
            borderRadius={"lg"}
            h={200}
            w={275}
          />
          <Stack mt="6" spacing="3">
            <Heading size={"md"}>{heading}</Heading>
            <StarRatings ratings={ratings} />
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
