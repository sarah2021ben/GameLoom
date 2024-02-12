import { Card, CardBody } from "@chakra-ui/card";
import { Game } from "../Hooks/useGame";
import { Badge, Heading, Image, Stack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageUrl from "../Services/image-url";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}
const GameList = ({ game }: Props) => {
  let color =
    game.metacritic > 75 ? "green" : game.metacritic > 60 ? "yellow" : "";
  return (
    <Link to={`/${game.id}`}>
      <Card direction={{ base: "row" }} variant="outline">
        <Image
          src={getCroppedImageUrl(game.background_image)}
          objectFit="cover"
          maxW={{ base: "300px" }}
        />
        <Stack>
          <CardBody>
            <Heading fontSize={"2xl"}>{game.name}</Heading>

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
          </CardBody>
        </Stack>
      </Card>
    </Link>
  );
};

export default GameList;
