import { T_ItemStack, T_PlayersConfig } from "./../../types/types.d";

export type T_ReduxState = {
  players: T_PlayersSlice;
  storage: T_StorageSlice;
  navigation: T_NavigationSlice;
  timer: T_TimerSlice;
  recruit: T_RecruitSlice;
  crafting: T_CraftingSlice;
};

export type T_CraftingSlice = {
  currentFilter: string;
};

export type T_TimerSlice = {
  timers: {
    recruit: number;
    clock: number;
    players: {
      [key: string]: number;
    };
  };
};

export type T_PlayersSlice = {
  players: T_PlayersConfig;
  currentlySelectedPlayer: string | null;
};

export type T_RecruitSlice = {
  recruits: T_PlayersConfig;
  currentlySelectedRecruit: string | null;
};

export type T_StorageSlice = {
  storage: {
    [key: string]: T_ItemStack;
  };
  currentFilter: string;
};

export type T_NavigationSlice = {
  currentPage: string;
};
