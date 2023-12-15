/* -------------------------------------------------------------------------- */
/*                                    Item                                    */
/* -------------------------------------------------------------------------- */
export type T_Items = Record<string, T_Item>;

export type T_Item = {
  id: string;
  label: string;
  description: string;
  type: T_ItemType;
  subType: string;
  img: string;
};

const T_ItemType: "weapon" | "armor" | "consumable" | "misc" = "weapon";

export type T_Item_Stacks = Record<string, T_Item_Stack>;

export type T_Item_Stack = {
  id: string;
  quantity: number;
};

export type T_Item_igredients = {
  [key: string]: number;
};

/* -------------------------------------------------------------------------- */
/*                                   Content                                  */
/* -------------------------------------------------------------------------- */
export type T_Contents = Record<string, T_Content>;

export type T_Content = {
  id: string;
  label: string;
  timeToComplete: number;
  rewards: T_ContentReward[];
};

export type T_ContentReward = {
  item: string;
  possibility: number;
};

/* -------------------------------------------------------------------------- */
/*                                    LINK                                    */
/* -------------------------------------------------------------------------- */
export type T_Links = {
  [key: string]: T_Link;
};

export type T_Link = {
  id: string;
  label: string;
  component: JSX.Element;
};

/* -------------------------------------------------------------------------- */
/*                                   Recipe                                   */
/* -------------------------------------------------------------------------- */
export type T_Recipe = {
  description: string;
  icon: string;
  id: string;
  label: string;
  ingredients: Record<string, number>;
};

export type T_Recipes = Record<string, T_Recipe>;

/* -------------------------------------------------------------------------- */
/*                                   Recruit                                  */
/* -------------------------------------------------------------------------- */
export type T_Recruits = {
  [key: string]: T_Recruit;
};

export type T_Recruit = {
  name: string;
  race: string;
};

/* -------------------------------------------------------------------------- */
/*                                    Timer                                   */
/* -------------------------------------------------------------------------- */
export type T_Timers = {
  [key: string]: T_Timer;
};

export type T_Timer = {
  id: string;
  name: string;
  duration: number;
};

/* -------------------------------------------------------------------------- */
/*                                   Player                                   */
/* -------------------------------------------------------------------------- */
export type T_PlayersConfigs = {
  [key: string]: T_PlayerConfig;
};

export type T_PlayerConfig = {
  id: string;
  name: string;
  race: string;
  currentContent: string;
};

/* -------------------------------------------------------------------------- */
/*                                    Race                                    */
/* -------------------------------------------------------------------------- */
export type T_RacesConfig = {
  [key: string]: T_RaceConfig;
};

export type T_RaceConfig = {
  id: string;
  label: string;
  perks: string[];
  img: string;
};
