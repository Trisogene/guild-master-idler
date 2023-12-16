import { PayloadAction } from "@reduxjs/toolkit";
import { T_NavigationSlice } from "../store.d";

const setPage = (
  state: T_NavigationSlice,
  { payload: currentPage }: PayloadAction<string>
) => {
  state.currentPage = currentPage;
  if (state.notifications?.[currentPage]) {
    state.notifications[currentPage] = 0;
  }
};

const sendNotification = (
  state: T_NavigationSlice,
  { payload: page }: PayloadAction<string>
) => {
  if (state.currentPage === page) {
    return;
  }

  if (!page) {
    if (!state.notifications?.[page]) {
      state.notifications[page] = 1;
    } else {
      state.notifications[page] += 1;
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
