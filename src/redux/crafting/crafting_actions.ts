import { PayloadAction } from "@reduxjs/toolkit";
import { E_Recipe } from "../../config/config.d";
import { T_CraftingSlice } from "../../config/store.d";

const setCurrentFilter = (
  state: T_CraftingSlice,
  { payload: filter }: PayloadAction<string>
) => {
  state.currentFilter = filter;
};

const setCurrentSelectedCraft = (
  state: T_CraftingSlice,
  { payload: item }: PayloadAction<E_Recipe>
) => {
  state.currentSelectedCraft = item;
};

export const craftingActions = {
  setCurrentFilter,
  setCurrentSelectedCraft: setCurrentSelectedCraft,
};
