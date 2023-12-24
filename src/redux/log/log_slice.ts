import { createSlice } from "@reduxjs/toolkit";
import { logActions } from "./log_actions";

export const log_slice = createSlice({
  name: "log",
  initialState: {
    logs: [],
  },
  reducers: logActions,
});

export const { addLog } = log_slice.actions;
export default log_slice.reducer;
