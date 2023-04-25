import React, { useState } from "react";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount
} from "./counterSlice";

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Box sx={{ my: 1, display: "flex", alignItems: "center" }}>
        <IconButton size="large" color="primary" onClick={() => dispatch(decrement())}>
          <RemoveCircleIcon />
        </IconButton>
        <Typography mx={2}>{count}</Typography>
        <IconButton size="large" color="primary" onClick={() => dispatch(increment())}>
          <AddCircleIcon />
        </IconButton>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <TextField
          variant="outlined"
          size="small"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <Button variant="contained" onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </Button>
        <Button variant="contained" onClick={() => dispatch(incrementAsync(incrementValue))}>
          Add Async
        </Button>
        <Button variant="contained" onClick={() => dispatch(incrementIfOdd(incrementValue))}>
          Add If Odd
        </Button>
      </Box>
    </Box>
  );
}
