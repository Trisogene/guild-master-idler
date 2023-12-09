import { PayloadAction } from "@reduxjs/toolkit";
import { T_NavigationSlice } from "../../../types/types.d";

const changePage = (
  state: T_NavigationSlice,
  { payload: currentPage }: PayloadAction<string>
) => {
  state.currentPage = currentPage;
};

export const navigationActions = {
  changePage,
};
