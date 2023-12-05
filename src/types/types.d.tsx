/* -------------------------------------------------------------------------- */
/*                                 Components                                 */
/* -------------------------------------------------------------------------- */
/* ------------------------------- PlayerCard ------------------------------- */
export interface I_PlayerCard {
  player: T_PlayerConfig;
}

/* ------------------------- LinearProgressWithLabel ------------------------ */
export interface I_LinearProgressWithLabel {
  timerId: string;
}

/* -------------------------------- Navigator ------------------------------- */
export interface I_Navigator {}

/* -------------------------------- PerkIcon -------------------------------- */
export interface I_PerkIcon {
  perk: T_PerkConfig;
}

/* ------------------------------- RecruitCard ------------------------------ */
export interface I_RecruitCard {
  recruit: T_PlayerConfig;
  onCardClickHandler: (recruitId: string) => void;
  isSelected: boolean;
}
/* -------------------------------------------------------------------------- */
/*                                   CONFIG                                   */
/* -------------------------------------------------------------------------- */
/* --------------------------------- Recruit -------------------------------- */
export type T_RecruitsConfig = {
  [key: string]: T_RecruitConfig;
};

export type T_RecruitConfig = {
  name: string;
  race: string;
};

/* --------------------------------- Player --------------------------------- */
export type T_PlayersConfig = {
  [key: string]: T_PlayerConfig;
};

export type T_PlayerConfig = {
  id: string;
  name: string;
  race: string;
  currentContent: string;
};

/* --------------------------------- Timers --------------------------------- */
export type T_TimersConfig = {
  [key: string]: T_TimerConfig;
};

export type T_TimerConfig = {
  id: string;
  name: string;
  duration: number;
};

/* ---------------------------------- Links --------------------------------- */
export type T_LinksConfig = {
  [key: string]: T_LinkConfig;
};

export type T_LinkConfig = {
  id: string;
  label: string;
  component: JSX.Element;
};

/* ---------------------------------- Perks --------------------------------- */
export type T_PerksConfig = {
  [key: string]: T_PerkConfig;
};

export type T_PerkConfig = {
  id: string;
  label: string;
  description: string;
  img: string;
};

/* ---------------------------------- Races --------------------------------- */
export type T_RacesConfig = {
  [key: string]: T_RaceConfig;
};

export type T_RaceConfig = {
  id: string;
  label: string;
  perks: string[];
  color: string;
  img: string;
};

/* --------------------------------- CONTENTS ------------------------------- */
export type T_ContentsConfig = {
  [key: string]: T_ContentConfig;
};

export type T_ContentConfig = {
  id: string;
  label: string;
  timeToComplete: number;
  rewards: T_ContentRewardConfig[];
};

export type T_ContentRewardConfig = {
  item: string;
  possibility: number;
};

/* ---------------------------------- Items --------------------------------- */
export type T_Items = {
  [key: string]: T_Item;
};

export type T_Item = {
  id: string;
  label: string;
  description: string;
  type: string;
  subType: string;
  img: string;
};

export type T_ItemStack = {
  id: string;
  quantity: number;
};

/* -------------------------------------------------------------------------- */
/*                                    Redux                                   */
/* -------------------------------------------------------------------------- */
export type T_ReduxState = {
  players: T_PlayersSlice;
  storage: T_StorageSlice;
  navigation: T_NavigationSlice;
  gameManager: T_GameManager;
  recruit: T_RecruitSlice;
  crafting: T_CraftingSlice;
};

export type T_PlayersSlice = {
  players: T_PlayersConfig;
};

export type T_GameManager = {
  timers: {
    recruit: number;
    clock: number;
    players: {
      [key: string]: number;
    };
  };
};

export type T_RecruitSlice = {
  recruits: T_PlayersConfig;
  currentlySelectedRecruit: string | null;
};

export type T_NavigationSlice = {
  currentPage: string;
};

export type T_StorageSlice = {
  storage: {
    [key: string]: T_ItemStack;
  };
  currentFilter: string;
};

export type T_CraftingSlice = {
  currentFilter: string;
};
