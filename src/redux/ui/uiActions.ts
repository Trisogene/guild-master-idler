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

const setSelectedGuildPlayer = (
  state: T_UiSlice,
  { payload: playerId }: PayloadAction<string>
) => {
  state.guild.selectedPlayer = playerId;
};

const setSelectedRecruitPlayer = (
  state: T_UiSlice,
  { payload: playerId }: PayloadAction<string | null>
) => {
  state.recruit.selectedPlayer = playerId;
};

const setStorageFilter = (
  state: T_UiSlice,
  { payload: filter }: PayloadAction<E_Item_Category>
) => {
  state.storage.currentFilter = filter;
};

export const uiActions = {
  setCraftingFilter,
  setCurrentCraftingItem,
  setSelectedGuildPlayer,
  setSelectedRecruitPlayer,
  setStorageFilter,
};
