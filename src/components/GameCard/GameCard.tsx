import { Card, CardBody, Heading, Stack, Image } from "@chakra-ui/react";
import StarRatings from "../StarRatings";

interface Props {
  imageUrl: string;
  altText:string;
  heading:string;
  ratings:number;
  url:string;
}

const GameCard = ({imageUrl,altText,heading,ratings,url}:Props) => {
  return (
    <>
      <Card as={'a'} href={url} target="_blank" w={"280px"} boxShadow={'2xl'} h={'350px'} overflow={'hidden'}>
        <CardBody>
          <Image
            src={imageUrl}
            alt={altText}
            borderRadius={"lg"}
            h={200}
            w={275}
          />
          <Stack mt="6" spacing="3">
            <Heading noOfLines={2} size={"md"}>{heading}</Heading>
            <StarRatings ratings={ratings} />
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
