import { createSlice } from "@reduxjs/toolkit";
import { E_Item_Category } from "../../config/config.d";
import { uiActions } from "./uiActions";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    crafting: {
      currentFilter: E_Item_Category.material,
      currentSelectedItem: null,
    },
    guild: {
      selectedPlayer: null,
    },
    recruit: {
      selectedPlayer: null,
    },
    storage: {
      currentFilter: E_Item_Category.material,
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
