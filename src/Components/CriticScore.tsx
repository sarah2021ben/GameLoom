import { Badge } from "@chakra-ui/react";

interface Props {
  score: number | undefined;
}
function CriticScore({ score }: Props) {
  if (!score) return null;
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      colorScheme={color}
      fontSize="14px"
      paddingX={2}
      borderRadius={"5px"}
    >
      {score}
    </Badge>
  );
}

export default CriticScore;
