import { createSlice } from "@reduxjs/toolkit";
import { craftingActions } from "./crafting_actions";

export const crafting_slice = createSlice({
  name: "crafting",
  initialState: {
    currentFilter: "material",
    currentSelectedCraft: null,
  },
  reducers: craftingActions,
});

export const { setCurrentFilter, setCurrentSelectedCraft } =
  crafting_slice.actions;

export default crafting_slice.reducer;
