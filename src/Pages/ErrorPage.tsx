import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../Components/Navbar";

function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <Navbar />
      <Box padding={4} textAlign="center">
        <Heading>Oops! Something went wrong.</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "We are unable to process your request at the moment. Please try again later."}
        </Text>
      </Box>
    </>
  );
}

export default ErrorPage;
