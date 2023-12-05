import { configureStore } from "@reduxjs/toolkit";
import { crafting_slice } from "./slices/crafting_slice";
import { gameManager_slice } from "./slices/gameManager_slice";
import { navigation_slice } from "./slices/navigation_slice";
import { player_slice } from "./slices/players_slice";
import { recruit_slice } from "./slices/recruit_slice";
import { storage_slice } from "./slices/storage_slice";

const reducer = {
  players: player_slice.reducer,
  storage: storage_slice.reducer,
  navigation: navigation_slice.reducer,
  gameManager: gameManager_slice.reducer,
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
