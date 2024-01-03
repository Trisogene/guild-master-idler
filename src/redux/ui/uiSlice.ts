import { createSlice } from "@reduxjs/toolkit";
import { ID_Item_Categories } from "../../config/config.d";
import { uiActions } from "./uiActions";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    crafting: {
      currentFilter: "material" as ID_Item_Categories,
      currentSelectedItem: null,
    },
    guild: {
      selectedPlayer: null,
    },
    recruit: {
      selectedPlayer: null,
    },
    storage: {
      currentFilter: "material" as ID_Item_Categories,
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
} = uiSlice.actions;

export default uiSlice.reducer;
