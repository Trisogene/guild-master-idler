import { configureStore } from "@reduxjs/toolkit";
import { throttle } from "lodash";
import { loadState, saveState } from "../utils";
import { crafting_slice } from "./crafting/crafting_slice";
import { navigation_slice } from "./navigation/navigation_slice";
import { player_slice } from "./player/players_slice";
import { recruit_slice } from "./recruit/recruit_slice";
import { storage_slice } from "./storage/storage_slice";
import { timer_slice } from "./timer/timer_slice";

const persistedState = loadState();

const reducer = {
  players: player_slice.reducer,
  storage: storage_slice.reducer,
  navigation: navigation_slice.reducer,
  timer: timer_slice.reducer,
  recruit: recruit_slice.reducer,
  crafting: crafting_slice.reducer,
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
      crafting: store.getState().crafting,
    });
  }, 5000)
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
