import { createSlice } from "@reduxjs/toolkit";
import { CRAFTABLE_CATEGORIES } from "../../../config/ITEMS";
import { craftingActions } from "./crafting_actions";

export const crafting_slice = createSlice({
  name: "crafting",
  initialState: {
    currentFilter: CRAFTABLE_CATEGORIES.weapon,
    currentSelectedCraft: null,
  },
  reducers: craftingActions,
});

export const { setCurrentFilter, setCurrentSelectedCraft } =
  crafting_slice.actions;

export default crafting_slice.reducer;
