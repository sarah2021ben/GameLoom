import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

function BoxItem({ term, children }: Props) {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="gray">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
}

export default BoxItem;
