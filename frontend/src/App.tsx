import React from "react";
import Box from "@mui/material/Box";

import { Counter } from "./features/counter/Counter";

function App() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2
      }}
    >
      <header>
        <Counter />
      </header>
    </Box>
  );
}

export default App;
