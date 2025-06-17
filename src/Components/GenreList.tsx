import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../Hooks/useGenres";
import getCroppedImageUrl from "../Services/image-url";
import useGameQueryStore from "../store";


const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const setGenreId = useGameQueryStore((state) => state.setGenreId);
  const genreId = useGameQueryStore((state) => state.gameQuery.genreId);
  if (error) return null;
  if (isLoading) return <Spinner />; // showing spinner when fetching the list of the GenreList

  return (
    <>
      <Heading as="h3" size="md" paddingBottom={2}>
        Genres
      </Heading>
      <List>
        {data?.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontSize={"lg"}
                fontWeight={genre.id === genreId ? "bold" : "normal"}
                variant="link"
                onClick={() => setGenreId(genre?.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
