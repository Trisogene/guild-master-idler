import { createSlice } from "@reduxjs/toolkit";
import { navigationActions } from "./navigation_actions";

export const navigation_slice = createSlice({
  name: "players",
  initialState: { notifications: {}, currentPage: "recruit" },
  reducers: navigationActions,
});

export const { setPage, sendNotification, removeNotification } =
  navigation_slice.actions;
