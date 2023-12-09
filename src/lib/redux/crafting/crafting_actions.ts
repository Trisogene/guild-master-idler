import { PayloadAction } from "@reduxjs/toolkit";
import { T_CraftingSlice } from "../../../types/types.d";

const changeCurrentFilter = (
  state: T_CraftingSlice,
  { payload: filter }: PayloadAction<string>
) => {
  state.currentFilter = filter;
};

export const craftingActions = {
  changeCurrentFilter,
};
