import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
 gameQuery: GameQuery;
}
function GameHading({ gameQuery }: Props) {
  return (
    <Heading as="h1" paddingLeft={8} paddingBottom={8}>
      {`${gameQuery.platform?.name || ''} ${gameQuery?.genre?.name || ''} Games`}
    </Heading>
  );
}

export default GameHading;
