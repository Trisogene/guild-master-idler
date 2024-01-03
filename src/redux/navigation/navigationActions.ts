import { PayloadAction } from "@reduxjs/toolkit";
import { ID_Link } from "../../config/config.d";
import { T_NavigationSlice } from "../../config/store.d";

const setPage = (
  state: T_NavigationSlice,
  { payload: currentPage }: PayloadAction<ID_Link>
) => {
  state.currentPage = currentPage;
};

export const navigationActions = {
  setPage,
};
