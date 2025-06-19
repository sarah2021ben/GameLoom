import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";
interface Props {
  children: string;
}
function ExpandableText({ children }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 300;
  if (children.length <= limit) return <Text>{children}</Text>;
  const summary = isExpanded ? children : children.substring(0, limit) + "...";
  return (
    <Text>
      {summary}
      <Button
        fontWeight="bold"
        size="xs"
        colorScheme="green"
        marginLeft={4}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "show less" : "show more"}
      </Button>
    </Text>
  );
}

export default ExpandableText;
