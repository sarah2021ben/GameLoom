import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <HStack marginBottom={5}>
      <Image src={logo} boxSize="60px" />
      <InputSearch />
      <ColorModeSwitch />
    </HStack>
  );
};
export default Navbar;
