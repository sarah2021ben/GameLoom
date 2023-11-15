import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../Hooks/useGenres";
import getCroppedImageUrl from "../Services/image-url";

interface Props {
    onSelectedGenre: (genre: Genre) => void;
    selectedGenre: Genre | null
}
const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { genres, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />; // showing spinner when fetching the list of the GenreList

  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
            fontSize={'lg'}
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              variant="link"
              onClick={() => onSelectedGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
