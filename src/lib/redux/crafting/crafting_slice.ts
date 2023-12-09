import { createSlice } from "@reduxjs/toolkit";
import { CRAFTABLE_CATEGORIES } from "../../../config/ITEMS";
import { craftingActions } from "./crafting_actions";

export const crafting_slice = createSlice({
  name: "crafting",
  initialState: {
    currentFilter: CRAFTABLE_CATEGORIES.weapon,
  },
  reducers: craftingActions,
});

export const { changeCurrentFilter } = crafting_slice.actions;

export default crafting_slice.reducer;
