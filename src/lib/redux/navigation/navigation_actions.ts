import { PayloadAction } from "@reduxjs/toolkit";
import { T_NavigationSlice } from "../../../types/types.d";

const setPage = (
  state: T_NavigationSlice,
  { payload: currentPage }: PayloadAction<string>
) => {
  state.currentPage = currentPage;
  if (state.notifications[currentPage]) {
    state.notifications[currentPage] = 0;
  }
};

const sendNotification = (
  state: T_NavigationSlice,
  { payload: notification }: PayloadAction<string>
) => {
  if (state.currentPage !== notification) {
    if (!state.notifications[notification]) {
      state.notifications[notification] = 1;
    } else {
      state.notifications[notification] += 1;
    }
  }
};

const removeNotification = (
  state: T_NavigationSlice,
  { payload: notification }: PayloadAction<string>
) => {
  state.notifications[notification] = 0;
};

export const navigationActions = {
  setPage,
  sendNotification,
  removeNotification,
};
