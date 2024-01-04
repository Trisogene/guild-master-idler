/* -------------------------------------------------------------------------- */
/*                                    Enums                                   */
/* -------------------------------------------------------------------------- */

export enum ID_Item {
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

export enum ID_Item_Category {
  resource = "resource",
  drop = "drop",
  material = "material",
  equip = "equip",
}

export enum ID_Content {
  sleeping = "sleeping",
  gathering = "gathering",
  dungeoning = "dungeoning",
}

export enum ID_Link {
  recruit = "recruit",
  guild = "guild",
  storage = "storage",
  crafting = "crafting",
  territory = "territory",
}

export enum ID_Timer {
  recruit = "recruit",
  player = "player",
  clock = "clock",
}

export enum ID_Race {
  human = "human",
}

export enum ID_Role {
  archer = "archer",
  bruiser = "bruiser",
  defensiveTank = "defensiveTank",
  offensiveTank = "offensiveTank",
  mage = "mage",
  healer = "healer",
  piercer = "piercer",
  support = "support",
}

export enum ID_Recipe {
  cloth = ID_Item.cloth,
  plank = ID_Item.plank,
  stoneBlock = ID_Item.stoneBlock,
  metalBar = ID_Item.metalBar,
  leather = ID_Item.leather,
  clothBoots = ID_Item.clothBoots,
  clothChest = ID_Item.clothChest,
  clothHelmet = ID_Item.clothHelmet,
  leatherBoots = ID_Item.leatherBoots,
  leatherChest = ID_Item.leatherChest,
  leatherHelmet = ID_Item.leatherHelmet,
  ironBoots = ID_Item.ironBoots,
  ironChest = ID_Item.ironChest,
  ironHelmet = ID_Item.ironHelmet,
  fireStaff = ID_Item.fireStaff,
  holyStaff = ID_Item.holyStaff,
  mace = ID_Item.mace,
  spear = ID_Item.spear,
  sword = ID_Item.sword,
  bow = ID_Item.bow,
}

export enum ID_Equip_Slot {
  head = "head",
  chest = "chest",
  boots = "boots",
  weapon = "weapon",
}

export enum ID_Stat {
  hp = "hp",
  mp = "mp",
  atk = "atk",
  ap = "ap",
  def = "def",
}

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

/* ---------------------------------- Item ---------------------------------- */
type ItemBase = {
  id: ID_Item;
  label: string;
  description: string;
  img: string;
  tier: number;
};

type Equip = ItemBase & {
  category: ID_Item_Category.equip;
  slot: ID_Equip_Slot;
  statBonus: Partial<Record<ID_Stat, number>>;
};

type Resource = ItemBase & {
  category: ID_Item_Category.resource;
};

type Material = ItemBase & {
  category: ID_Item_Category.material;
};

type Drop = ItemBase & {
  category: ID_Item_Category.drop;
};

export type Item = Equip | Resource | Material | Drop;

export type ItemStack = {
  id: ID_Item;
  quantity: number;
};

export type ItemStacks = Record<ID_Item, ItemStack>;

export type ItemCategory = {
  id: ID_Item_Category;
  label: string;
  craftable: boolean;
  icon: string;
};

export type Content = {
  id: ID_Content;
  label: string;
  timeToComplete: number;
  rewards: ContentReward[];
  icon: string;
};

export type ContentReward = {
  item: ID_Item;
  possibility: number;
};

export type T_Contents = Record<ID_Content, Content>;

export type T_Link = {
  id: string;
  label: string;
  component: JSX.Element;
  icon: string;
};

export type T_Links = Record<ID_Link, T_Link>;

export type T_Recipe = {
  description: string;
  icon: string;
  id: ID_Recipe;
  label: string;
  ingredients: Partial<Record<ID_Item, number>>;
};

export type T_Recipes = Record<ID_Recipe, T_Recipe>;

export type T_Timer = {
  id: string;
  name: string;
  duration: number;
};

export type T_Timers = Record<ID_Timer, T_Timer>;

export type T_Players = {
  [key: string]: T_Player;
};

export type T_Player = {
  id: string;
  name: string;
  race: ID_Race;
  currentContent: ID_Content;
  stats: Record<ID_Stat, number>;
  masteries: T_Player_Mastery;
  lore: string;
  description: string;
  role: ID_Role;
  img: string;
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

export type T_Races = Record<ID_Race, T_Race>;

export type T_Race = {
  id: string;
  label: string;
  description: string;
  perks: string[];
  img: string;
};

export type T_Roles = Record<ID_Role, T_Role>;

export type T_Role = {
  id: ID_Role;
  label: string;
  description: string;
  icon: string;
};
