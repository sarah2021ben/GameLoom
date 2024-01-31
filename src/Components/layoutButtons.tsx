import { HStack, IconButton } from "@chakra-ui/react";
import { BsGrid3X3GapFill, BsListUl } from "react-icons/bs";
interface Props {
  onSelectedLayout: (layout: string) => void;
}

function layoutButtons({ onSelectedLayout }:Props) {
  return (
    <HStack spacing={2} paddingRight={10}>
      <IconButton
        aria-label="grid"
        icon={<BsGrid3X3GapFill />}
        onClick={() => onSelectedLayout("grid")}
      />
      <IconButton
        aria-label="list"
        icon={<BsListUl />}
        onClick={() => onSelectedLayout("list")}
      />
    </HStack>
  );
}

export default layoutButtons;
