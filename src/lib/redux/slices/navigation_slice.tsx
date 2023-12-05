import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LINKS } from "../../../config/LINKS";
import { T_NavigationSlice } from "../../../types/types.d";

const changePageHandler = (
  state: T_NavigationSlice,
  { payload: currentPage }: PayloadAction<string>
) => {
  state.currentPage = currentPage;
};

export const navigation_slice = createSlice({
  name: "players",
  initialState: { currentPage: LINKS.recruit.id },
  reducers: {
    redux_changePage: changePageHandler,
  },
});

export const { redux_changePage } = navigation_slice.actions;
