import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronBarDown } from 'react-icons/bs';

interface Props {
  onSelectedOrder: (sortOrder: string) => void;
  selectedOrder: string | null;
}

function SortSelector({ onSelectedOrder, selectedOrder }: Props) {
  const sortOrders = [
    { label: "Relevence", value: "" },
    { label: "Name", value: "name" },
    { label: "Release date", value: "-released" },
    { label: "Date added", value: "-added" },
    { label: "Averge rating", value: "-rating" },
    { label: "Popularity", value: "-metacritic" },
  ];
  const currentSortOrder = sortOrders?.find((order) => order.value === selectedOrder)
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Order by : {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => onSelectedOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector