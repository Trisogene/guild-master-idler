import { createSlice } from "@reduxjs/toolkit";
import { ID_Item_Category, ID_Player_Job } from "../../config/config.d";
import { uiActions } from "./uiActions";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    players: {
      currentFilter: ID_Player_Job.fighter,
      selectedPlayer: null,
    },
    crafting: {
      currentFilter: "material" as ID_Item_Category,
      currentSelectedItem: null,
    },
    guild: {
      selectedPlayer: null,
    },
    recruit: {
      selectedPlayer: null,
    },
    storage: {
      currentFilter: "material" as ID_Item_Category,
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
} = uiSlice.actions;

export default uiSlice.reducer;
