import { HStack, Text } from "@chakra-ui/react";
import { IoIosStar, IoIosStarOutline, IoIosStarHalf } from "react-icons/io";

interface Props {
  ratings: number;
}

const generateStars = (numberOfStars: number) => {
  const absoluteStars = Math.floor(numberOfStars);
  const stars = [];
  for (let index = 0; index < absoluteStars; index++) {
    stars.push(<IoIosStar key={index} />);
  }
  if (numberOfStars - absoluteStars > 0)
    stars.push(<IoIosStarHalf key={absoluteStars + 1} />);

  return <HStack>{stars}</HStack>;
};

const StarRatings = ({ ratings }: Props) => {
  return (
    <>
      <HStack justifyContent={"start"} spacing={2}>
        <Text>{ratings ? ratings : "NA"}</Text>
        {ratings ? generateStars(ratings) : <IoIosStarOutline />}
      </HStack>
    </>
  );
};

export default StarRatings;
