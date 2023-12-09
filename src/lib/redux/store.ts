import { configureStore } from "@reduxjs/toolkit";
import { crafting_slice } from "./crafting/crafting_slice";
import { navigation_slice } from "./navigation/navigation_slice";
import { player_slice } from "./player/players_slice";
import { recruit_slice } from "./recruit/recruit_slice";
import { storage_slice } from "./storage/storage_slice";
import { timer_slice } from "./timer/timer_slice";

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
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
