import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import InputSearch from "./InputSearch";

interface Props {
  onSearchItem: (searchItem: string) => void;
}

const Navbar = ({ onSearchItem } : Props) => {
  return (
    <HStack padding="15px">
      <Image src={logo} boxSize="60px" />
      <InputSearch onSearchItem ={onSearchItem} />
      <ColorModeSwitch />
    </HStack>
  );
};
export default Navbar;
