import dungeoningIcon from "../assets/contents/dungeoning.svg";
import gatheringIcon from "../assets/contents/gathering.svg";
import sleepingIcon from "../assets/contents/sleeping.svg";
import artifact_icon from "../assets/items/artifact.svg";
import fiber_icon from "../assets/items/fiber.svg";
import hide_icon from "../assets/items/hide.svg";
import ore_icon from "../assets/items/ore.svg";
import relic_icon from "../assets/items/relic.svg";
import rune_icon from "../assets/items/rune.svg";
import soul_icon from "../assets/items/soul.svg";
import stone_icon from "../assets/items/stone.svg";
import temp_armor_icon from "../assets/items/temp_armor.svg";
import temp_weapon_icon from "../assets/items/temp_weapon.svg";
import {
  default as temp_material_icon,
  default as wood_icon,
} from "../assets/items/wood.svg";
import circleIcon from "../assets/pages/circle.svg";
import craftingIcon from "../assets/pages/crafting.svg";
import guildIcon from "../assets/pages/guild.svg";
import recruitIcon from "../assets/pages/recruit.svg";
import storageIcon from "../assets/pages/storage.svg";
import archerIcon from "../assets/roles/archer.svg";
import bruiserIcon from "../assets/roles/bruiser.svg";
import defensiveTankIcon from "../assets/roles/defensiveTank.svg";
import healerIcon from "../assets/roles/healer.svg";
import mageIcon from "../assets/roles/mage.svg";
import offensiveTankIcon from "../assets/roles/offensiveTank.svg";
import piercerIcon from "../assets/roles/piercer.svg";
import supportIcon from "../assets/roles/support.svg";
import CraftingView from "../pages/CraftingView";
import Guild from "../pages/GuildView/GuildView";
import Recruit from "../pages/RecruitView/RecruitView";
import Storage from "../pages/StorageView";
import temp_race from "./../assets/race.svg";
import faceImg from "./../assets/recruits/face.png";

import TerritoryView from "../pages/TerritoryView";
import {
  ID_Content,
  ID_Equip_Slot,
  ID_Item,
  ID_Item_Category,
  ID_Race,
  ID_Recipe,
  ID_Role,
  Item,
  ItemCategory,
  T_Contents,
  T_Links,
  T_Players,
  T_Races,
  T_Recipes,
  T_Roles,
  T_Timers,
} from "./config.d";

export const ROLES: T_Roles = {
  archer: {
    id: ID_Role.archer,
    label: "Archer",
    description: "Shoots arrows",
    icon: archerIcon,
  },
  mage: {
    id: ID_Role.mage,
    label: "Mage",
    description: "Casts spells",
    icon: mageIcon,
  },
  offensiveTank: {
    id: ID_Role.offensiveTank,
    label: "Offensive Tank",
    description: "Tanks and deals damage",
    icon: offensiveTankIcon,
  },
  defensiveTank: {
    id: ID_Role.defensiveTank,
    label: "Defensive Tank",
    description: "Tanks and protects allies",
    icon: defensiveTankIcon,
  },
  healer: {
    id: ID_Role.healer,
    label: "Healer",
    description: "Heals allies",
    icon: healerIcon,
  },
  bruiser: {
    id: ID_Role.bruiser,
    label: "Bruiser",
    description: "Deals damage",
    icon: bruiserIcon,
  },
  piercer: {
    id: ID_Role.piercer,
    label: "Piercer",
    description: "Deals damage",
    icon: piercerIcon,
  },
  support: {
    id: ID_Role.support,
    label: "Support",
    description: "Supports allies",
    icon: supportIcon,
  },
};

export const LINKS: T_Links = {
  guild: {
    id: "guild",
    label: "Guild",
    component: <Guild />,
    icon: guildIcon,
  },
  recruit: {
    id: "recruit",
    label: "Recruit",
    component: <Recruit />,
    icon: recruitIcon,
  },
  storage: {
    id: "storage",
    label: "Storage",
    component: <Storage />,
    icon: storageIcon,
  },
  crafting: {
    id: "crafting",
    label: "Crafting",
    component: <CraftingView />,
    icon: craftingIcon,
  },
  territory: {
    id: "territory",
    label: "Territory",
    component: <TerritoryView />,
    icon: circleIcon,
  },
};

export const RACES: T_Races = {
  human: {
    id: ID_Race.human,
    label: "Human",
    description: "Basic Humans",
    img: temp_race,
    perks: [],
  },
};

const RECIPES_MATERIAL = {
  cloth: {
    description: "A piece of cloth",
    icon: temp_material_icon,
    id: ID_Recipe.cloth,
    label: "Cloth",
    ingredients: {
      [ID_Item.fiber]: 2,
    },
  },
  plank: {
    description: "A piece of wood",
    icon: temp_material_icon,
    id: ID_Recipe.plank,
    label: "Plank",
    ingredients: {
      [ID_Item.wood]: 2,
    },
  },
  metalBar: {
    description: "A piece of metal",
    icon: temp_material_icon,
    id: ID_Recipe.metalBar,
    label: "Metal",
    ingredients: {
      [ID_Item.ore]: 2,
    },
  },
  stoneBlock: {
    description: "A block of stone",
    icon: temp_material_icon,
    id: ID_Recipe.stoneBlock,
    label: "Stone Block",
    ingredients: {
      [ID_Item.stone]: 2,
    },
  },
  leather: {
    description: "A piece of leather",
    icon: temp_material_icon,
    id: ID_Recipe.leather,
    label: "Leather",
    ingredients: {
      [ID_Item.hide]: 2,
    },
  },
};

const RECIPE_EQUIPS = {
  fireStaff: {
    description: "A staff",
    icon: temp_material_icon,
    id: ID_Recipe.fireStaff,
    ingredients: {
      [ID_Item.metalBar]: 2,
    },
    label: "Fire Staff",
  },
  holyStaff: {
    description: "A staff",
    icon: temp_material_icon,
    id: ID_Recipe.holyStaff,
    ingredients: {
      [ID_Item.plank]: 2,
    },
    label: "Holy Staff",
  },
  mace: {
    description: "A mace",
    icon: temp_material_icon,
    id: ID_Recipe.mace,
    ingredients: {
      [ID_Item.metalBar]: 2,
    },
    label: "Mace",
  },
  spear: {
    description: "A spear",
    icon: temp_material_icon,
    id: ID_Recipe.spear,
    ingredients: {
      [ID_Item.metalBar]: 2,
    },
    label: "Spear",
  },
  sword: {
    description: "A sword",
    icon: temp_material_icon,
    id: ID_Recipe.sword,
    ingredients: {
      [ID_Item.metalBar]: 2,
    },
    label: "Sword",
  },
  clothHelmet: {
    description: "A helmet",
    icon: temp_material_icon,
    id: ID_Recipe.clothHelmet,
    ingredients: {
      [ID_Item.cloth]: 2,
    },
    label: "Cloth Helmet",
  },
  clothChest: {
    description: "A chest",
    icon: temp_material_icon,
    id: ID_Recipe.clothChest,
    ingredients: {
      [ID_Item.cloth]: 2,
    },
    label: "Cloth Chest",
  },
  clothBoots: {
    description: "A boots",
    icon: temp_material_icon,
    id: ID_Recipe.clothBoots,
    ingredients: {
      [ID_Item.cloth]: 2,
    },
    label: "Cloth Boots",
  },
  leatherHelmet: {
    description: "A helmet",
    icon: temp_material_icon,
    id: ID_Recipe.leatherHelmet,
    ingredients: {
      [ID_Item.leather]: 2,
    },
    label: "Leather Helmet",
  },
  leatherChest: {
    description: "A chest",
    icon: temp_material_icon,
    id: ID_Recipe.leatherChest,
    ingredients: {
      [ID_Item.leather]: 2,
    },
    label: "Leather Chest",
  },
  leatherBoots: {
    description: "A boots",
    icon: temp_material_icon,
    id: ID_Recipe.leatherBoots,
    ingredients: {
      [ID_Item.leather]: 2,
    },
    label: "Leather Boots",
  },
  ironHelmet: {
    description: "A helmet",
    icon: temp_material_icon,
    id: ID_Recipe.ironHelmet,
    ingredients: {
      [ID_Item.metalBar]: 2,
    },
    label: "Iron Helmet",
  },
  ironChest: {
    description: "A chest",
    icon: temp_material_icon,
    id: ID_Recipe.ironChest,
    ingredients: {
      [ID_Item.metalBar]: 2,
    },
    label: "Iron Chest",
  },
  ironBoots: {
    description: "A boots",
    icon: temp_material_icon,
    id: ID_Recipe.ironBoots,
    ingredients: {
      [ID_Item.metalBar]: 2,
    },
    label: "Iron Boots",
  },
  bow: {
    description: "A bow",
    icon: temp_material_icon,
    id: ID_Recipe.bow,
    ingredients: {
      [ID_Item.plank]: 2,
    },
    label: "Bow",
  },
};

export const RECIPES: T_Recipes = {
  ...RECIPES_MATERIAL,
  ...RECIPE_EQUIPS,
};

export const RECRUITS: T_Players = {
  marco: {
    id: "",
    currentContent: ID_Content.dungeoning,
    name: "Marco",
    race: ID_Race.human,
    stats: {
      hp: 50,
      mp: 10,
      atk: 50,
      ap: 20,
      def: 60,
      mdef: 10,
    },
    masteries: {
      gathering: 0,
      crafting: 0,
      clothArmor: 0,
      leatherArmor: 0,
      metalArmor: 0,
      fireStaff: 0,
      holyStaff: 0,
      mace: 0,
      spear: 0,
      sword: 0,
      bow: 0,
    },
    lore: "A Young adventurer, ready to explore the world, and make a name for himself.",
    role: ID_Role.archer,
    img: faceImg,
    description: "the basic recruit",
  },
  luca: {
    id: "",
    currentContent: ID_Content.dungeoning,
    name: "Luca",
    race: ID_Race.human,
    stats: {
      hp: 50,
      mp: 10,
      atk: 50,
      ap: 20,
      def: 60,
      mdef: 10,
    },
    masteries: {
      gathering: 0,
      crafting: 0,
      clothArmor: 0,
      leatherArmor: 0,
      metalArmor: 0,
      fireStaff: 0,
      holyStaff: 0,
      mace: 0,
      spear: 0,
      sword: 0,
      bow: 0,
    },
    lore: "A Young adventurer, ready to explore the world, and make a name for himself.",
    role: ID_Role.archer,
    img: faceImg,
    description: "the basic recruit",
  },
};

export const TIMERS: T_Timers = {
  recruit: {
    id: "recruit",
    name: "Recruit",
    duration: 60,
  },
  player: {
    id: "player",
    name: "Player",
    duration: 60,
  },
  clock: {
    id: "clock",
    name: "Clock",
    duration: 1440,
  },
};

/* ---------------------------------- Items --------------------------------- */

export const ITEMS: Record<ID_Item, Item> = {
  fiber: {
    category: ID_Item_Category.resource,
    description: "A bundle of fiber.",
    id: ID_Item.fiber,
    img: fiber_icon,
    label: "Fiber",
    tier: 1,
  },
  hide: {
    category: ID_Item_Category.resource,
    description: "A bundle of hide.",
    id: ID_Item.hide,
    img: hide_icon,
    label: "Hide",
    tier: 1,
  },
  ore: {
    category: ID_Item_Category.resource,
    description: "A bundle of ore.",
    id: ID_Item.ore,
    img: ore_icon,
    label: "Ore",
    tier: 1,
  },
  stone: {
    category: ID_Item_Category.resource,
    description: "A bundle of stone.",
    id: ID_Item.stone,
    img: stone_icon,
    label: "Stone",
    tier: 1,
  },
  wood: {
    category: ID_Item_Category.resource,
    description: "A bundle of wood.",
    id: ID_Item.wood,
    img: wood_icon,
    label: "Wood",
    tier: 1,
  },
  cloth: {
    category: ID_Item_Category.material,
    description: "A bundle of cloth.",
    id: ID_Item.cloth,
    img: fiber_icon,
    label: "Cloth",
    tier: 1,
  },
  leather: {
    category: ID_Item_Category.material,
    description: "A bundle of leather.",
    id: ID_Item.leather,
    img: hide_icon,
    label: "Leather",
    tier: 1,
  },
  metalBar: {
    category: ID_Item_Category.material,
    description: "A bundle of metal bars.",
    id: ID_Item.metalBar,
    img: ore_icon,
    label: "Metal Bar",
    tier: 1,
  },
  plank: {
    category: ID_Item_Category.material,
    description: "A bundle of planks.",
    id: ID_Item.plank,
    img: wood_icon,
    label: "Plank",
    tier: 1,
  },
  stoneBlock: {
    category: ID_Item_Category.material,
    description: "A bundle of stone blocks.",
    id: ID_Item.stoneBlock,
    img: stone_icon,
    label: "Stone Block",
    tier: 1,
  },
  artifact: {
    category: ID_Item_Category.drop,
    description: "An artifact.",
    id: ID_Item.artifact,
    img: artifact_icon,
    label: "Artifact",
    tier: 1,
  },
  relic: {
    category: ID_Item_Category.drop,
    description: "A relic.",
    id: ID_Item.relic,
    img: relic_icon,
    label: "Relic",
    tier: 1,
  },
  rune: {
    category: ID_Item_Category.drop,
    description: "A rune.",
    id: ID_Item.rune,
    img: rune_icon,
    label: "Rune",
    tier: 1,
  },
  soul: {
    category: ID_Item_Category.drop,
    description: "A soul.",
    id: ID_Item.soul,
    img: soul_icon,
    label: "Soul",
    tier: 1,
  },
  clothBoots: {
    category: ID_Item_Category.equip,
    description: "Cloth boots.",
    id: ID_Item.clothBoots,
    img: temp_armor_icon,
    label: "Cloth Boots",
    tier: 1,
    slot: ID_Equip_Slot.boots,
    statBonus: {
      def: 1,
    },
  },
  clothChest: {
    category: ID_Item_Category.equip,
    description: "A cloth chest.",
    id: ID_Item.clothChest,
    img: temp_armor_icon,
    label: "Cloth Chest",
    tier: 1,
    slot: ID_Equip_Slot.chest,
    statBonus: {
      def: 1,
    },
  },
  clothHelmet: {
    category: ID_Item_Category.equip,
    description: "A cloth helmet.",
    id: ID_Item.clothHelmet,
    img: temp_armor_icon,
    label: "Cloth Helmet",
    tier: 1,
    slot: ID_Equip_Slot.head,
    statBonus: {
      def: 1,
    },
  },
  ironBoots: {
    category: ID_Item_Category.equip,
    description: "Iron boots.",
    id: ID_Item.ironBoots,
    img: temp_armor_icon,
    label: "Iron Boots",
    tier: 1,
    slot: ID_Equip_Slot.boots,
    statBonus: {
      def: 1,
    },
  },
  ironChest: {
    category: ID_Item_Category.equip,
    description: "An iron chest.",
    id: ID_Item.ironChest,
    img: temp_armor_icon,
    label: "Iron Chest",
    tier: 1,
    slot: ID_Equip_Slot.chest,
    statBonus: {
      def: 1,
    },
  },
  ironHelmet: {
    category: ID_Item_Category.equip,
    description: "An iron helmet.",
    id: ID_Item.ironHelmet,
    img: temp_armor_icon,
    label: "Iron Helmet",
    tier: 1,
    slot: ID_Equip_Slot.head,
    statBonus: {
      def: 1,
    },
  },
  leatherBoots: {
    category: ID_Item_Category.equip,
    description: "Leather boots.",
    id: ID_Item.leatherBoots,
    img: temp_armor_icon,
    label: "Leather Boots",
    tier: 1,
    slot: ID_Equip_Slot.boots,
    statBonus: {
      def: 1,
    },
  },
  leatherChest: {
    category: ID_Item_Category.equip,
    description: "A leather chest.",
    id: ID_Item.leatherChest,
    img: temp_armor_icon,
    label: "Leather Chest",
    tier: 1,
    slot: ID_Equip_Slot.chest,
    statBonus: {
      def: 1,
    },
  },
  leatherHelmet: {
    category: ID_Item_Category.equip,
    description: "A leather helmet.",
    id: ID_Item.leatherHelmet,
    img: temp_armor_icon,
    label: "Leather Helmet",
    tier: 1,
    slot: ID_Equip_Slot.head,
    statBonus: {
      def: 1,
    },
  },
  bow: {
    category: ID_Item_Category.equip,
    description: "A bow.",
    id: ID_Item.bow,
    img: temp_weapon_icon,
    label: "Bow",
    tier: 1,
    slot: ID_Equip_Slot.weapon,
    statBonus: {
      atk: 1,
    },
  },
  fireStaff: {
    category: ID_Item_Category.equip,
    description: "A fire staff.",
    id: ID_Item.fireStaff,
    img: temp_weapon_icon,
    label: "Fire Staff",
    tier: 1,
    slot: ID_Equip_Slot.weapon,
    statBonus: {
      atk: 1,
    },
  },
  holyStaff: {
    category: ID_Item_Category.equip,
    description: "A holy staff.",
    id: ID_Item.holyStaff,
    img: temp_weapon_icon,
    label: "Holy Staff",
    tier: 1,
    slot: ID_Equip_Slot.weapon,
    statBonus: {
      atk: 1,
    },
  },
  mace: {
    category: ID_Item_Category.equip,
    description: "A mace.",
    id: ID_Item.mace,
    img: temp_weapon_icon,
    label: "Mace",
    tier: 1,
    slot: ID_Equip_Slot.weapon,
    statBonus: {
      atk: 1,
    },
  },
  spear: {
    category: ID_Item_Category.equip,
    description: "A spear.",
    id: ID_Item.spear,
    img: temp_weapon_icon,
    label: "Spear",
    tier: 1,
    slot: ID_Equip_Slot.weapon,
    statBonus: {
      atk: 1,
    },
  },
  sword: {
    category: ID_Item_Category.equip,
    description: "A sword.",
    id: ID_Item.sword,
    img: temp_weapon_icon,
    label: "Sword",
    tier: 1,
    slot: ID_Equip_Slot.weapon,
    statBonus: {
      atk: 1,
    },
  },
};

export const ITEM_CATEGORIES: Record<ID_Item_Category, ItemCategory> = {
  drop: {
    craftable: false,
    icon: artifact_icon,
    id: ID_Item_Category.drop,
    label: "Drop",
  },
  equip: {
    craftable: true,
    icon: temp_weapon_icon,
    id: ID_Item_Category.equip,
    label: "Equip",
  },
  material: {
    craftable: true,
    icon: fiber_icon,
    id: ID_Item_Category.material,
    label: "Material",
  },
  resource: {
    craftable: false,
    icon: fiber_icon,
    id: ID_Item_Category.resource,
    label: "Resource",
  },
};

export const CONTENTS: T_Contents = {
  sleeping: {
    id: ID_Content.sleeping,
    label: "Sleeping",
    timeToComplete: 60,
    rewards: [],
    icon: sleepingIcon,
  },
  gathering: {
    id: ID_Content.gathering,
    icon: gatheringIcon,
    label: "Gathering",
    timeToComplete: 60,
    rewards: [
      {
        item: ID_Item.fiber,
        possibility: 0.2,
      },
      {
        item: ID_Item.wood,
        possibility: 0.2,
      },
      {
        item: ID_Item.stone,
        possibility: 0.2,
      },
      {
        item: ID_Item.ore,
        possibility: 0.2,
      },
      {
        item: ID_Item.hide,
        possibility: 0.2,
      },
    ],
  },
  dungeoning: {
    id: ID_Content.dungeoning,
    icon: dungeoningIcon,
    label: "Dungeoning",
    timeToComplete: 60,
    rewards: [
      {
        item: ITEMS.rune.id,
        possibility: 0.5,
      },
      {
        item: ITEMS.soul.id,
        possibility: 0.25,
      },
      {
        item: ITEMS.relic.id,
        possibility: 0.125,
      },
      {
        item: ITEMS.artifact.id,
        possibility: 0.125,
      },
    ],
  },
};

enum E_Territory {
  starvale = "starvale",
  frostwood = "frostwood",
  shadowreach = "shadowreach",
  emberstead = "emberstead",
}

export type T_Territory = {
  id: E_Territory;
  defenders: {
    min: number;
    max: number;
  };
  races: ID_Race[];
  unlocked: boolean;
  vulnerable: number;
  img: string;
};

type T_Territories = Record<E_Territory, T_Territory>;

export const TERRITORIES: T_Territories = {
  starvale: {
    id: E_Territory.starvale,
    defenders: {
      min: 5,
      max: 15,
    },
    races: [ID_Race.human],
    unlocked: true,
    vulnerable: 1260,
    img: "https://i0.wp.com/www.thecravetraveler.com/wp-content/uploads/2023/07/framlingham-castle-01.jpg?resize=980%2C600&ssl=1",
  },
  frostwood: {
    id: E_Territory.frostwood,
    defenders: {
      min: 15,
      max: 25,
    },
    races: [],
    unlocked: false,
    vulnerable: 0,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Burg_Hohenzollern_ak.jpg/1200px-Burg_Hohenzollern_ak.jpg",
  },
  shadowreach: {
    id: E_Territory.shadowreach,
    defenders: {
      min: 25,
      max: 35,
    },
    races: [],
    unlocked: false,
    vulnerable: 0,
    img: "https://img.freepik.com/free-photo/breathtaking-view-castles-fortresses-top-hill-surrounded-by-trees_181624-57449.jpg",
  },
  emberstead: {
    id: E_Territory.emberstead,
    defenders: {
      min: 35,
      max: 45,
    },
    races: [],
    unlocked: false,
    vulnerable: 0,
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25abe526-6c4c-4aa4-a7c3-79061e53b38a/de6vs3g-128afdf8-4845-4b6a-9cd8-99d742668913.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI1YWJlNTI2LTZjNGMtNGFhNC1hN2MzLTc5MDYxZTUzYjM4YVwvZGU2dnMzZy0xMjhhZmRmOC00ODQ1LTRiNmEtOWNkOC05OWQ3NDI2Njg5MTMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jlXBbndF9PUq0HxMTkv9_Nr50p4qPmpXRnCdAo6MGUw",
  },
};
