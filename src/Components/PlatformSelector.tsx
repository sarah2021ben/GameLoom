import { Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatform from "../Hooks/usePlatform";
import { Platform } from "../Hooks/useGame";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform| null
}
const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { platforms, error } = usePlatform();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
   
        {platforms.map((platform) => (
          <MenuItem onClick={() => onSelectedPlatform(platform)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
