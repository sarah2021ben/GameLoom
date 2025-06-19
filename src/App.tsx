import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./App.css";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box padding={5}>
      <Navbar />
      <Outlet />
    </Box>
  );
}

export default App;
