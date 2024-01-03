import { createSlice } from "@reduxjs/toolkit";
import { ID_Link } from "../../config/config.d";
import { navigationActions } from "./navigationActions";

export const navigationSlice = createSlice({
  name: "navigation",
  initialState: { currentPage: ID_Link.guild },
  reducers: navigationActions,
});

export const { setPage } = navigationSlice.actions;
