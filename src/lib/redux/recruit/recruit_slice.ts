import { createSlice } from "@reduxjs/toolkit";
import { recruitActions } from "./recruit_actions";

export const recruit_slice = createSlice({
  name: "recruit",
  initialState: {
    recruits: {},
    currentlySelectedRecruit: null,
  },
  reducers: recruitActions,
});

export default recruit_slice.reducer;
export const { updateRecruits, removeRecruit, setCurrentSelectedRecruit } =
  recruit_slice.actions;
