import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CRAFTABLE_CATEGORIES } from "../../../config/ITEMS";
import { T_CraftingSlice } from "../../../types/types.d";

const changeCurrentFilterHandler = (
  state: T_CraftingSlice,
  { payload: filter }: PayloadAction<string>
) => {
  state.currentFilter = filter;
};

export const crafting_slice = createSlice({
  name: "crafting",
  initialState: {
    currentFilter: CRAFTABLE_CATEGORIES.weapon,
  },
  reducers: {
    changeCurrentFilter: changeCurrentFilterHandler,
  },
});

export const { changeCurrentFilter } = crafting_slice.actions;

export default crafting_slice.reducer;
