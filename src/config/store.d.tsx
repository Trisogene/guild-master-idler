import {
  ID_Content,
  ID_Item_Category,
  ID_Link,
  ID_Modal,
  ID_Notification,
  ID_Player_Job,
  ID_Race,
  ID_Recipe,
  ItemStack,
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
  id: string;
  timestamp: number;
  type: E_Log_Type.recruit;
  playerName: string;
};

export type T_Log_Reward = {
  id: string;
  timestamp: number;
  type: E_Log_Type.reward;
  playerName: string;
  playerRace: ID_Race;
  contentId: ID_Content;
  reward: ItemStack;
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
    [key: string]: ItemStack;
  };
};

/* -------------------------------------------------------------------------- */
/*                               NavigationSlice                              */
/* -------------------------------------------------------------------------- */
export type T_NavigationSlice = {
  currentPage: ID_Link;
};

/* -------------------------------------------------------------------------- */
/*                                   UiSlice                                  */
/* -------------------------------------------------------------------------- */
export type T_UiSlice = {
  modal: {
    id: ID_Modal;
    isOpen: boolean;
  };
  players: {
    currentFilter: ID_Player_Job;
    selectedPlayer: string | null;
  };
  crafting: {
    currentSelectedItem: ID_Recipe | null;
    currentFilter: ID_Item_Category;
  };
  guild: {
    selectedPlayer: string | null;
  };
  recruit: {
    selectedPlayer: string | null;
  };
  storage: {
    currentFilter: ID_Item_Category;
  };
  notification: {
    messages: ID_Notification[];
  };
};
