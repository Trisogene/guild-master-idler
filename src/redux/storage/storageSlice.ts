import { createSlice } from "@reduxjs/toolkit";
import { storageActions } from "./storageActions";

export const storage_slice = createSlice({
  name: "storage",
  initialState: {
    storage: {},
  },
  reducers: storageActions,
});

export const { addItem, removeItem } = storage_slice.actions;

export default storage_slice.reducer;
