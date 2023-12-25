import { createSlice } from "@reduxjs/toolkit";
import { E_Link } from "../../config/config.d";
import { navigationActions } from "./navigationActions";

export const navigationSlice = createSlice({
  name: "navigation",
  initialState: { currentPage: E_Link.guild },
  reducers: navigationActions,
});

export const { setPage } = navigationSlice.actions;
