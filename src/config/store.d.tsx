import {
  E_Content,
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
  log: T_LogSlice;
  ui: T_UiSlice;
};

/* -------------------------------------------------------------------------- */
/*                                  LogSlice                                  */
/* -------------------------------------------------------------------------- */
export type T_LogSlice = {
  logs: T_Log[];
};

export enum E_Log_Type {
  recruit = "recruit",
  reward = "reward",
}

export type T_Log = T_Log_Recruit | T_Log_Reward;

export type T_Log_Recruit = {
  timestamp: number;
  type: E_Log_Type.recruit;
  playerName: string;
};

export type T_Log_Reward = {
  timestamp: number;
  type: E_Log_Type.reward;
  playerName: string;
  contentId: E_Content;
  reward: T_Item_Stack;
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
};

/* -------------------------------------------------------------------------- */
/*                                RecruitSlice                                */
/* -------------------------------------------------------------------------- */
export type T_RecruitSlice = {
  recruits: T_Players;
  avaialablePicks: number;
};

/* -------------------------------------------------------------------------- */
/*                                StorageSlice                                */
/* -------------------------------------------------------------------------- */
export type T_StorageSlice = {
  storage: {
    [key: string]: T_Item_Stack;
  };
};

/* -------------------------------------------------------------------------- */
/*                               NavigationSlice                              */
/* -------------------------------------------------------------------------- */
export type T_NavigationSlice = {
  currentPage: E_Link;
};

/* -------------------------------------------------------------------------- */
/*                                   UiSlice                                  */
/* -------------------------------------------------------------------------- */
export type T_UiSlice = {
  [E_Link.crafting]: {
    currentSelectedItem: E_Recipe | null;
    currentFilter: E_Item_Category;
  };
  [E_Link.guild]: {
    selectedPlayer: string | null;
  };
  [E_Link.recruit]: {
    selectedPlayer: string | null;
  };
  [E_Link.storage]: {
    currentFilter: E_Item_Category;
  };
};
