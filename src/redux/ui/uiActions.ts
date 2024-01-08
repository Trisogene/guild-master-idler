import { PayloadAction } from "@reduxjs/toolkit";
import {
  ID_Item_Category,
  ID_Player_FightClass,
  ID_Recipe,
} from "../../config/config.d";
import { T_UiSlice } from "../../config/store.d";

const setCraftingFilter = (
  state: T_UiSlice,
  { payload: filter }: PayloadAction<ID_Item_Category>
) => {
  state.crafting.currentFilter = filter;
};

const setCurrentCraftingItem = (
  state: T_UiSlice,
  { payload: item }: PayloadAction<ID_Recipe>
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
  { payload: filter }: PayloadAction<ID_Item_Category>
) => {
  state.storage.currentFilter = filter;
};

const setPlayersFilter = (
  state: T_UiSlice,
  { payload: filter }: PayloadAction<ID_Player_FightClass>
) => {
  state.players.currentFilter = filter;
};

export const uiActions = {
  setCraftingFilter,
  setCurrentCraftingItem,
  setSelectedGuildPlayer,
  setSelectedRecruitPlayer,
  setStorageFilter,
  setPlayersFilter,
};
