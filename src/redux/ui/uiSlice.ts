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
  },
  reducers: uiActions,
});

export const { setCraftingFilter, setCurrentCraftingItem, setSelectedPlayer } =
  uiSlice.actions;

export default uiSlice.reducer;
