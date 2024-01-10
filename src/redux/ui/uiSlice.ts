import { createSlice } from "@reduxjs/toolkit";
import {
  ID_Item_Category,
  ID_Modal,
  ID_Player_Job,
} from "../../config/config.d";
import { uiActions } from "./uiActions";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    modal: {
      isOpen: false,
      id: ID_Modal.recruit,
    },
    players: {
      currentFilter: ID_Player_Job.fighter,
      selectedPlayer: null,
    },
    crafting: {
      currentFilter: {
        [ID_Item_Category.resource]: true,
        [ID_Item_Category.material]: true,
        [ID_Item_Category.drop]: true,
        [ID_Item_Category.equip]: true,
      },
      currentSelectedItem: null,
    },
    guild: {
      selectedPlayer: null,
    },
    recruit: {
      selectedPlayer: null,
    },
    storage: {
      currentFilter: {
        [ID_Item_Category.resource]: true,
        [ID_Item_Category.material]: true,
        [ID_Item_Category.drop]: true,
        [ID_Item_Category.equip]: true,
      },
    },
    notification: {
      messages: [],
    },
  },
  reducers: uiActions,
});

export const {
  setCraftingFilter,
  setCurrentCraftingItem,
  setSelectedGuildPlayer,
  setSelectedRecruitPlayer,
  setStorageFilter,
  setPlayersFilter,
  setModalIsOpen,
  addNotification,
  removeNotification,
} = uiSlice.actions;

export default uiSlice.reducer;
