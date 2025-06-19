import { SimpleGrid, Text } from "@chakra-ui/react";
import BoxItem from "./BoxItem";
import CriticScore from "./CriticScore";
import { Game } from "../utils/interfaces";
interface Props {
  game: Game;
}

function GameAttributes({ game }: Props) {
  return (
    <SimpleGrid columns={2} as="dl">
      <BoxItem term="Platforms">
        {game?.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </BoxItem>
      <BoxItem term="Metascore">
        <CriticScore score={game?.metacritic} />
      </BoxItem>
      <BoxItem term="Genres">
        {game?.genres?.map((genre) => <Text key={genre.id}>{genre.name}</Text>)}
      </BoxItem>
      <BoxItem term="Publishers">
        {game?.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </BoxItem>
    </SimpleGrid>
  );
}

export default GameAttributes;
