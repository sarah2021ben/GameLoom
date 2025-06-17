import { Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatform from "../Hooks/usePlatform";
import useGameQueryStore from "../store";


const PlatformSelector = () => {
  const { platforms, error } = usePlatform();
  const platformId = useGameQueryStore((state) => state.gameQuery.platformId);
  const onSelectedPlatform = useGameQueryStore((state) => state.setPlatformId);
  const selectedPlatformId = platforms?.find((p) => p.id === platformId)?.name;
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {selectedPlatformId || "Platforms"}
      </MenuButton>
      <MenuList>
   
        {platforms?.map((platform) => (
          <MenuItem key={platform.id} onClick={() => onSelectedPlatform(platform?.id)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
