import { createSlice } from "@reduxjs/toolkit";
import { E_Item_Category } from "../../config/config.d";
import { storageActions } from "./storage_actions";

export const storage_slice = createSlice({
  name: "storage",
  initialState: {
    storage: {},
    currentFilter: E_Item_Category.resource,
  },
  reducers: storageActions,
});

export const { setCurrentStorageFilter, addItem, removeItem } =
  storage_slice.actions;

export default storage_slice.reducer;
