import { configureStore } from "@reduxjs/toolkit";
import { throttle } from "lodash";
import { loadState, saveState } from "../utils";
import { log_slice } from "./log/log_slice";
import { navigationSlice } from "./navigation/navigationSlice";
import { playerSlice } from "./player/playerSlice";
import { recruit_slice } from "./recruit/recruitSlice";
import { storage_slice } from "./storage/storage_slice";
import { timer_slice } from "./timer/timer_slice";
import { uiSlice } from "./ui/uiSlice";

const persistedState = loadState();

const reducer = {
  players: playerSlice.reducer,
  storage: storage_slice.reducer,
  navigation: navigationSlice.reducer,
  timer: timer_slice.reducer,
  recruit: recruit_slice.reducer,
  log: log_slice.reducer,
  ui: uiSlice.reducer,
};

const store = configureStore({
  reducer: reducer,
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

store.subscribe(
  throttle(() => {
    saveState({
      players: store.getState().players,
      storage: store.getState().storage,
      navigation: store.getState().navigation,
      timer: store.getState().timer,
      recruit: store.getState().recruit,

      log: store.getState().log,
      ui: store.getState().ui,
    });
  }, 5000)
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
