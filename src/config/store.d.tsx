import {
  E_Item_Category,
  E_Link,
  E_Recipe,
  T_Item_Stack,
  T_Players,
} from "./config.d";

/* -------------------------------------------------------------------------- */
/*                                    Redux                                   */
/* -------------------------------------------------------------------------- */
export type T_ReduxState = {
  players: T_PlayersSlice;
  storage: T_StorageSlice;
  navigation: T_NavigationSlice;
  timer: T_TimerSlice;
  recruit: T_RecruitSlice;
  crafting: T_CraftingSlice;
  log: T_LogSlice;
};

/* -------------------------------------------------------------------------- */
/*                                  LogSlice                                  */
/* -------------------------------------------------------------------------- */
export type T_LogSlice = {
  logs: string[];
};

/* -------------------------------------------------------------------------- */
/*                                CraftingSlice                               */
/* -------------------------------------------------------------------------- */
export type T_CraftingSlice = {
  currentFilter: string;
  currentSelectedCraft: E_Recipe | null;
};

/* -------------------------------------------------------------------------- */
/*                                 TimerSlice                                 */
/* -------------------------------------------------------------------------- */
export type T_TimerSlice = {
  timers: {
    recruit: number;
    clock: number;
    players: {
      [key: string]: number;
    };
  };
};

/* -------------------------------------------------------------------------- */
/*                                 PlayerSlice                                */
/* -------------------------------------------------------------------------- */
export type T_PlayersSlice = {
  players: T_Players;
  currentlySelectedPlayer: string | null;
};

/* -------------------------------------------------------------------------- */
/*                                RecruitSlice                                */
/* -------------------------------------------------------------------------- */
export type T_RecruitSlice = {
  recruits: T_Players;
  currentlySelectedRecruit: string | null;
  avaialablePicks: number;
};

/* -------------------------------------------------------------------------- */
/*                                StorageSlice                                */
/* -------------------------------------------------------------------------- */
export type T_StorageSlice = {
  storage: {
    [key: string]: T_Item_Stack;
  };
  currentFilter: E_Item_Category;
};

/* -------------------------------------------------------------------------- */
/*                               NavigationSlice                              */
/* -------------------------------------------------------------------------- */
export type T_NavigationSlice = {
  currentPage: E_Link;
  notifications: {
    [key: string]: number;
  };
};
