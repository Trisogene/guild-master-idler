import { createSlice } from "@reduxjs/toolkit";
import { recruitActions } from "./recruitActions";

export const recruit_slice = createSlice({
  name: "recruit",
  initialState: {
    recruits: {},
    avaialablePicks: 0,
  },
  reducers: recruitActions,
});

export default recruit_slice.reducer;
export const { updateRecruits, removeRecruit, decreaseAvailablePicks } =
  recruit_slice.actions;
