import { Badge } from "@chakra-ui/react";

interface Props {
  criticScore: number;
}

const MetaCriticBadge = ({ criticScore }: Props) => {
  const colorForBadge =
    criticScore >= 95 ? "green" : criticScore >= 85 ? "yellow" : "red";
  return (
    <Badge
      fontSize={"14px"}
      px={1}
      borderRadius={"8px"}
      colorScheme={colorForBadge}
      w={criticScore ? 6 : 7}
    >
      {criticScore ? criticScore : "NA"}
    </Badge>
  );
};

export default MetaCriticBadge;
