import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card
      // w={{
      //   base: "300px",
      //   md: "230px",
      //   lg: "250px",
      //   xl: "280px",
      //   "2xl": "300px",
      // }}
      w={"250px"}
      boxShadow={"2xl"}
      h={{
        base: "440px",
        md: "380px",
      }}
    >
      <Skeleton height={"200px"} startColor='green.500' endColor='blue.500' />
      <CardBody>
        <SkeletonText noOfLines={4} />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
