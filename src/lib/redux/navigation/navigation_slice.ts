import { createSlice } from "@reduxjs/toolkit";
import { LINKS } from "../../../config/LINKS";
import { navigationActions } from "./navigation_actions";

export const navigation_slice = createSlice({
  name: "players",
  initialState: { currentPage: LINKS.recruit.id },
  reducers: navigationActions,
});

export const { changePage } = navigation_slice.actions;
