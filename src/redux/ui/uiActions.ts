import { PayloadAction } from "@reduxjs/toolkit";
import {
  ID_Item_Category,
  ID_Notification,
  ID_Player_Job,
  ID_Recipe,
} from "../../config/config.d";
import { T_UiSlice } from "../../config/store.d";

const setCraftingFilter = (
  state: T_UiSlice,
  {
    payload: { filterId, value },
  }: PayloadAction<{ filterId: ID_Item_Category; value: boolean }>
) => {
  state.crafting.currentFilter[filterId] = value;
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

//arguments are filter id and value
const setStorageFilter = (
  state: T_UiSlice,
  {
    payload: { filterId, value },
  }: PayloadAction<{ filterId: ID_Item_Category; value: boolean }>
) => {
  state.storage.currentFilter[filterId] = value;
};

const setPlayersFilter = (
  state: T_UiSlice,
  { payload: filter }: PayloadAction<ID_Player_Job>
) => {
  state.players.currentFilter = filter;
};

const setModalIsOpen = (
  state: T_UiSlice,
  { payload: isOpen }: PayloadAction<boolean>
) => {
  state.modal.isOpen = isOpen;
};

const addNotification = (
  state: T_UiSlice,
  { payload }: PayloadAction<ID_Notification>
) => {
  state.notification.messages.push(payload);
};

const removeNotification = (
  state: T_UiSlice,
  { payload }: PayloadAction<ID_Notification>
) => {
  const index = state.notification.messages.indexOf(payload);
  state.notification.messages.splice(index, 1);
};

export const uiActions = {
  setCraftingFilter,
  setCurrentCraftingItem,
  setSelectedGuildPlayer,
  setSelectedRecruitPlayer,
  setStorageFilter,
  setPlayersFilter,
  setModalIsOpen,
  addNotification,
  removeNotification,
};
