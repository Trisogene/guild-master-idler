export enum E_Item {
  fiber = "fiber",
  hide = "hide",
  ore = "ore",
  stone = "stone",
  wood = "wood",
  cloth = "cloth",
  plank = "plank",
  stoneBlock = "stoneBlock",
  metalBar = "metalBar",
  leather = "leather",
  artifact = "artifact",
  relic = "relic",
  rune = "rune",
  soul = "soul",
  bow = "bow",
  clothBoots = "clothBoots",
  clothChest = "clothChest",
  clothHelmet = "clothHelmet",
  fireStaff = "fireStaff",
  holyStaff = "holyStaff",
  ironBoots = "ironBoots",
  ironChest = "ironChest",
  ironHelmet = "ironHelmet",
  leatherBoots = "leatherBoots",
  leatherChest = "leatherChest",
  leatherHelmet = "leatherHelmet",
  mace = "mace",
  spear = "spear",
  sword = "sword",
}

export enum E_Item_Category {
  resource = "resource",
  drop = "drop",
  material = "material",
  equip = "equip",
}

export type T_Item = {
  id: E_Item;
  category: E_Item_Category;
  label: string;
  description: string;
  img: string;
};

export type T_Item_Stack = {
  id: E_Item;
  quantity: number;
};

export type T_Item_Category = {
  id: E_Item_Category;
  label: string;
  craftable: boolean;
  icon: string;
};

export type T_Items_Ingredient = Record<E_Item, number>;
export type T_Items = Record<E_Item, T_Item>;
export type T_Items_Category_Ext = Record<E_Item_Category, T_Item_Category>;
export type T_Items_Stack = Record<E_Item, T_Item_Stack>;

export enum E_Content {
  sleeping = "sleeping",
  gathering = "gathering",
  dungeoning = "dungeoning",
}

export type T_Content = {
  id: E_Content;
  label: string;
  timeToComplete: number;
  rewards: T_ContentReward[];
};

export type T_ContentReward = {
  item: string;
  possibility: number;
};

export type T_Contents = Record<E_Content, T_Content>;

export enum E_Link {
  recruit = "recruit",
  guild = "guild",
  storage = "storage",
  crafting = "crafting",
  events = "events",
}

export type T_Link = {
  id: string;
  label: string;
  component: JSX.Element;
  icon: string;
};

export type T_Links = Record<E_Link, T_Link>;

export enum E_Recipe {
  cloth = "cloth",
  plank = "plank",
  stoneBlock = "stoneBlock",
  metalBar = "metalBar",
  leather = "leather",
  clothBoots = "clothBoots",
  clothChest = "clothChest",
  clothHelmet = "clothHelmet",
  leatherBoots = "leatherBoots",
  leatherChest = "leatherChest",
  leatherHelmet = "leatherHelmet",
  ironBoots = "ironBoots",
  ironChest = "ironChest",
  ironHelmet = "ironHelmet",
  fireStaff = "fireStaff",
  holyStaff = "holyStaff",
  mace = "mace",
  spear = "spear",
  sword = "sword",
  bow = "bow",
}

export type T_Recipe = {
  description: string;
  icon: string;
  id: E_Recipe;
  label: string;
  ingredients: Partial<Record<E_Item, number>>;
};

export type T_Recipes = Record<E_Recipe, T_Recipe>;

export enum E_Timer {
  recruit = "recruit",
  player = "player",
  clock = "clock",
}

export type T_Timer = {
  id: string;
  name: string;
  duration: number;
};

export type T_Timers = Record<E_Timer, T_Timer>;

export type T_Players = {
  [key: string]: T_Player;
};

export type T_Player = {
  id: string;
  name: string;
  race: E_Race;
  currentContent: E_Content;
  stats: T_Player_Stat;
  masteries: T_Player_Mastery;
  lore: string;
  role: E_Role;
};

type T_Player_Stat = {
  hp: number;
  mp: number;
  atk: number;
  ap: number;
  def: number;
};

type T_Player_Mastery = {
  gathering: number;
  crafting: number;
  clothArmor: number;
  leatherArmor: number;
  metalArmor: number;
  fireStaff: number;
  holyStaff: number;
  mace: number;
  spear: number;
  sword: number;
  bow: number;
};

export enum E_Race {
  human = "human",
}

export type T_Races = Record<E_Race, T_Race>;

export type T_Race = {
  id: string;
  label: string;
  description: string;
  perks: string[];
  img: string;
};

export enum E_Role {
  archer = "archer",
  bruiser = "bruiser",
  defensiveTank = "defensiveTank",
  offensiveTank = "offensiveTank",
  mage = "mage",
  healer = "healer",
  piercer = "piercer",
  support = "support",
}

export type T_Roles = Record<E_Role, T_Role>;

export type T_Role = {
  id: E_Role;
  label: string;
  description: string;
  icon: string;
};
