import { createSlice } from "@reduxjs/toolkit";
import { E_Link } from "../../config/config.d";
import { navigationActions } from "./navigation_actions";

export const navigation_slice = createSlice({
  name: "players",
  initialState: { notifications: {}, currentPage: E_Link.guild },
  reducers: navigationActions,
});

export const { setPage, sendNotification, removeNotification } =
  navigation_slice.actions;
