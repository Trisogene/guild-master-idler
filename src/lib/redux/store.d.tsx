import { T_Item_Stack, T_PlayersConfigs } from "../../config/config";

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
};

/* -------------------------------------------------------------------------- */
/*                                CraftingSlice                               */
/* -------------------------------------------------------------------------- */
export type T_CraftingSlice = {
  currentFilter: string;
  currentSelectedCraft: string | null;
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
  players: T_PlayersConfigs;
  currentlySelectedPlayer: string | null;
};

/* -------------------------------------------------------------------------- */
/*                                RecruitSlice                                */
/* -------------------------------------------------------------------------- */
export type T_RecruitSlice = {
  recruits: T_PlayersConfigs;
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
  currentFilter: string;
};

/* -------------------------------------------------------------------------- */
/*                               NavigationSlice                              */
/* -------------------------------------------------------------------------- */
export type T_NavigationSlice = {
  currentPage: string;
  notifications: {
    [key: string]: number;
  };
};
