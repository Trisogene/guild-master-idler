import { createSlice } from "@reduxjs/toolkit";
import { ITEM_CATEGORIES } from "../../../config/ITEMS";
import { storageActions } from "./storage_actions";

export const storage_slice = createSlice({
  name: "storage",
  initialState: {
    storage: {},
    currentFilter: ITEM_CATEGORIES.resource.id,
  },
  reducers: storageActions,
});

export const { setCurrentStorageFilter, addItem, removeItem } =
  storage_slice.actions;

export default storage_slice.reducer;
