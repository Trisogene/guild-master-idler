import { PayloadAction } from "@reduxjs/toolkit";
import { T_CraftingSlice } from "../../../types/types.d";

const setCurrentFilter = (
  state: T_CraftingSlice,
  { payload: filter }: PayloadAction<string>
) => {
  state.currentFilter = filter;
};

const setCurrentSelectedCraft = (
  state: T_CraftingSlice,
  { payload: item }: PayloadAction<string>
) => {
  state.currentSelectedCraft = item;
};

export const craftingActions = {
  setCurrentFilter,
  setCurrentSelectedCraft: setCurrentSelectedCraft,
};
