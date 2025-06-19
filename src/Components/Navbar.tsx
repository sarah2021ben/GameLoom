import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import InputSearch from "./InputSearch";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack marginBottom={5}>
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <InputSearch />
      <ColorModeSwitch />
    </HStack>
  );
};
export default Navbar;
