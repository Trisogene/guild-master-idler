import { createSlice } from "@reduxjs/toolkit";
import { logActions } from "./logActions";

export const logSlice = createSlice({
  name: "log",
  initialState: {
    logs: [],
  },
  reducers: logActions,
});

export const { addLog } = logSlice.actions;
export default logSlice.reducer;
