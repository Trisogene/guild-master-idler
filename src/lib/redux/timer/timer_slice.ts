import { createSlice } from "@reduxjs/toolkit";
import { timerActions } from "./timer_action";

export const timer_slice = createSlice({
  name: "timer",
  initialState: {
    timers: {
      clock: 0,
      recruit: 0,
      players: {},
    },
  },
  reducers: timerActions,
});

export default timer_slice.reducer;
export const { tick, reset, initPlayerTimer } = timer_slice.actions;
