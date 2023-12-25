import { PayloadAction } from "@reduxjs/toolkit";
import { E_Item_Category, E_Recipe } from "../../config/config.d";
import { T_UiSlice } from "../../config/store.d";

const setCraftingFilter = (
  state: T_UiSlice,
  { payload: filter }: PayloadAction<E_Item_Category>
) => {
  state.crafting.currentFilter = filter;
};

const setCurrentCraftingItem = (
  state: T_UiSlice,
  { payload: item }: PayloadAction<E_Recipe>
) => {
  state.crafting.currentSelectedItem = item;
};

const setSelectedPlayer = (
  state: T_UiSlice,
  { payload: playerId }: PayloadAction<string>
) => {
  state.guild.selectedPlayer = playerId;
};

export const uiActions = {
  setCraftingFilter,
  setCurrentCraftingItem,
  setSelectedPlayer,
};
