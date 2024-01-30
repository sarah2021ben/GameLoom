import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

interface Props {
  onSearchItem: (searchItem: string) => void;
}
function InputSearch({ onSearchItem }: Props) {
 const ref = useRef<HTMLInputElement>(null)
  return (
    <form onSubmit={(event)=>{
      event.preventDefault();
      if(ref.current) { onSearchItem(ref.current.value); }
    }}>
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

export default InputSearch