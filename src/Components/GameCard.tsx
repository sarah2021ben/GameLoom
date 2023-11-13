import { Card, CardBody } from "@chakra-ui/card";
import { Game } from "../Hooks/useGame";
import { Badge, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  let color =
    game.metacritic > 75 ? "green" : game.metacritic > 60 ? "yellow" : "";
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <Badge
            colorScheme={color}
            fontSize="14px"
            paddingX={2}
            borderRadius={"5px"}
          >
            {game.metacritic}
          </Badge>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
