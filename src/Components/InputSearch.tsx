import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

function InputSearch() {
  const setSearchItem = useGameQueryStore((state) => state.setSearchItem);
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchItem(ref.current.value);
          navigate("/");
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          variant="filled"
          placeholder="search here..."
          size="md"
          borderRadius={20}
          ref={ref}
        />
      </InputGroup>
    </form>
  );
}

export default InputSearch;
