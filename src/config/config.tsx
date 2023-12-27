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
import CraftingView from "../pages/CraftingView";
import Guild from "../pages/GuildView";
import Recruit from "../pages/RecruitView";
import Storage from "../pages/StorageView";
import temp_race from "./../assets/race.svg";

import archerIcon from "../assets/roles/archer.svg";
import bruiserIcon from "../assets/roles/bruiser.svg";
import defensiveTankIcon from "../assets/roles/defensiveTank.svg";
import healerIcon from "../assets/roles/healer.svg";
import mageIcon from "../assets/roles/mage.svg";
import offensiveTankIcon from "../assets/roles/offensiveTank.svg";
import piercerIcon from "../assets/roles/piercer.svg";
import supportIcon from "../assets/roles/support.svg";

import circleIcon from "../assets/pages/circle.svg";
import craftingIcon from "../assets/pages/crafting.svg";
import guildIcon from "../assets/pages/guild.svg";
import recruitIcon from "../assets/pages/recruit.svg";
import storageIcon from "../assets/pages/storage.svg";

import TerritoryView from "../pages/TerritoryView";
import {
  E_Content,
  E_Item,
  E_Item_Category,
  E_Race,
  E_Recipe,
  E_Role,
  T_Contents,
  T_Items,
  T_Items_Category_Ext,
  T_Links,
  T_Players,
  T_Races,
  T_Recipes,
  T_Roles,
  T_Timers,
} from "./config.d";

export const ROLES: T_Roles = {
  archer: {
    id: E_Role.archer,
    label: "Archer",
    description: "Shoots arrows",
    icon: archerIcon,
  },
  mage: {
    id: E_Role.mage,
    label: "Mage",
    description: "Casts spells",
    icon: mageIcon,
  },
  offensiveTank: {
    id: E_Role.offensiveTank,
    label: "Offensive Tank",
    description: "Tanks and deals damage",
    icon: offensiveTankIcon,
  },
  defensiveTank: {
    id: E_Role.defensiveTank,
    label: "Defensive Tank",
    description: "Tanks and protects allies",
    icon: defensiveTankIcon,
  },
  healer: {
    id: E_Role.healer,
    label: "Healer",
    description: "Heals allies",
    icon: healerIcon,
  },
  bruiser: {
    id: E_Role.bruiser,
    label: "Bruiser",
    description: "Deals damage",
    icon: bruiserIcon,
  },
  piercer: {
    id: E_Role.piercer,
    label: "Piercer",
    description: "Deals damage",
    icon: piercerIcon,
  },
  support: {
    id: E_Role.support,
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
    id: E_Race.human,
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
    id: E_Recipe.cloth,
    label: "Cloth",
    ingredients: {
      [E_Item.fiber]: 2,
    },
  },
  plank: {
    description: "A piece of wood",
    icon: temp_material_icon,
    id: E_Recipe.plank,
    label: "Plank",
    ingredients: {
      [E_Item.wood]: 2,
    },
  },
  metalBar: {
    description: "A piece of metal",
    icon: temp_material_icon,
    id: E_Recipe.metalBar,
    label: "Metal",
    ingredients: {
      [E_Item.ore]: 2,
    },
  },
  stoneBlock: {
    description: "A block of stone",
    icon: temp_material_icon,
    id: E_Recipe.stoneBlock,
    label: "Stone Block",
    ingredients: {
      [E_Item.stone]: 2,
    },
  },
  leather: {
    description: "A piece of leather",
    icon: temp_material_icon,
    id: E_Recipe.leather,
    label: "Leather",
    ingredients: {
      [E_Item.hide]: 2,
    },
  },
};

const RECIPE_EQUIPS = {
  fireStaff: {
    description: "A staff",
    icon: temp_material_icon,
    id: E_Recipe.fireStaff,
    ingredients: {
      [E_Item.metalBar]: 2,
    },
    label: "Fire Staff",
  },
  holyStaff: {
    description: "A staff",
    icon: temp_material_icon,
    id: E_Recipe.holyStaff,
    ingredients: {
      [E_Item.plank]: 2,
    },
    label: "Holy Staff",
  },
  mace: {
    description: "A mace",
    icon: temp_material_icon,
    id: E_Recipe.mace,
    ingredients: {
      [E_Item.metalBar]: 2,
    },
    label: "Mace",
  },
  spear: {
    description: "A spear",
    icon: temp_material_icon,
    id: E_Recipe.spear,
    ingredients: {
      [E_Item.metalBar]: 2,
    },
    label: "Spear",
  },
  sword: {
    description: "A sword",
    icon: temp_material_icon,
    id: E_Recipe.sword,
    ingredients: {
      [E_Item.metalBar]: 2,
    },
    label: "Sword",
  },
  clothHelmet: {
    description: "A helmet",
    icon: temp_material_icon,
    id: E_Recipe.clothHelmet,
    ingredients: {
      [E_Item.cloth]: 2,
    },
    label: "Cloth Helmet",
  },
  clothChest: {
    description: "A chest",
    icon: temp_material_icon,
    id: E_Recipe.clothChest,
    ingredients: {
      [E_Item.cloth]: 2,
    },
    label: "Cloth Chest",
  },
  clothBoots: {
    description: "A boots",
    icon: temp_material_icon,
    id: E_Recipe.clothBoots,
    ingredients: {
      [E_Item.cloth]: 2,
    },
    label: "Cloth Boots",
  },
  leatherHelmet: {
    description: "A helmet",
    icon: temp_material_icon,
    id: E_Recipe.leatherHelmet,
    ingredients: {
      [E_Item.leather]: 2,
    },
    label: "Leather Helmet",
  },
  leatherChest: {
    description: "A chest",
    icon: temp_material_icon,
    id: E_Recipe.leatherChest,
    ingredients: {
      [E_Item.leather]: 2,
    },
    label: "Leather Chest",
  },
  leatherBoots: {
    description: "A boots",
    icon: temp_material_icon,
    id: E_Recipe.leatherBoots,
    ingredients: {
      [E_Item.leather]: 2,
    },
    label: "Leather Boots",
  },
  ironHelmet: {
    description: "A helmet",
    icon: temp_material_icon,
    id: E_Recipe.ironHelmet,
    ingredients: {
      [E_Item.metalBar]: 2,
    },
    label: "Iron Helmet",
  },
  ironChest: {
    description: "A chest",
    icon: temp_material_icon,
    id: E_Recipe.ironChest,
    ingredients: {
      [E_Item.metalBar]: 2,
    },
    label: "Iron Chest",
  },
  ironBoots: {
    description: "A boots",
    icon: temp_material_icon,
    id: E_Recipe.ironBoots,
    ingredients: {
      [E_Item.metalBar]: 2,
    },
    label: "Iron Boots",
  },
  bow: {
    description: "A bow",
    icon: temp_material_icon,
    id: E_Recipe.bow,
    ingredients: {
      [E_Item.plank]: 2,
    },
    label: "Bow",
  },
};

export const RECIPES: T_Recipes = {
  ...RECIPES_MATERIAL,
  ...RECIPE_EQUIPS,
};

export const RECRUITS: T_Players = {
  human: {
    id: "",
    currentContent: E_Content.dungeoning,
    name: "Marco",
    race: E_Race.human,
    stats: {
      hp: 50,
      mp: 10,
      atk: 50,
      ap: 20,
      def: 60,
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
    role: E_Role.archer,
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

export const ITEMS_RESOURCES = {
  fiber: {
    category: E_Item_Category.resource,
    description: "A bundle of fiber.",
    id: E_Item.fiber,
    img: fiber_icon,
    label: "Fiber",
    tier: 1,
  },
  hide: {
    category: E_Item_Category.resource,
    description: "A bundle of hide.",
    id: E_Item.hide,
    img: hide_icon,
    label: "Hide",
    tier: 1,
  },
  ore: {
    category: E_Item_Category.resource,
    description: "A bundle of ore.",
    id: E_Item.ore,
    img: ore_icon,
    label: "Ore",
    tier: 1,
  },
  stone: {
    category: E_Item_Category.resource,
    description: "A bundle of stone.",
    id: E_Item.stone,
    img: stone_icon,
    label: "Stone",
    tier: 1,
  },
  wood: {
    category: E_Item_Category.resource,
    description: "A bundle of wood.",
    id: E_Item.wood,
    img: wood_icon,
    label: "Wood",
    tier: 1,
  },
};

export const ITEMS_MATERIALS = {
  cloth: {
    category: E_Item_Category.material,
    description: "A bundle of cloth.",
    id: E_Item.cloth,
    img: fiber_icon,
    label: "Cloth",
    tier: 1,
  },
  leather: {
    category: E_Item_Category.material,
    description: "A bundle of leather.",
    id: E_Item.leather,
    img: hide_icon,
    label: "Leather",
    tier: 1,
  },
  metalBar: {
    category: E_Item_Category.material,
    description: "A bundle of metal bars.",
    id: E_Item.metalBar,
    img: ore_icon,
    label: "Metal Bar",
    tier: 1,
  },
  plank: {
    category: E_Item_Category.material,
    description: "A bundle of planks.",
    id: E_Item.plank,
    img: wood_icon,
    label: "Plank",
    tier: 1,
  },
  stoneBlock: {
    category: E_Item_Category.material,
    description: "A bundle of stone blocks.",
    id: E_Item.stoneBlock,
    img: stone_icon,
    label: "Stone Block",
    tier: 1,
  },
};

export const ITEMS_DROP = {
  artifact: {
    category: E_Item_Category.drop,
    description: "An artifact.",
    id: E_Item.artifact,
    img: artifact_icon,
    label: "Artifact",
    tier: 1,
  },
  relic: {
    category: E_Item_Category.drop,
    description: "A relic.",
    id: E_Item.relic,
    img: relic_icon,
    label: "Relic",
    tier: 1,
  },
  rune: {
    category: E_Item_Category.drop,
    description: "A rune.",
    id: E_Item.rune,
    img: rune_icon,
    label: "Rune",
    tier: 1,
  },
  soul: {
    category: E_Item_Category.drop,
    description: "A soul.",
    id: E_Item.soul,
    img: soul_icon,
    label: "Soul",
    tier: 1,
  },
};

export const ITEMS_EQUIP_ARMOR = {
  clothBoots: {
    category: E_Item_Category.equip,
    description: "Cloth boots.",
    id: E_Item.clothBoots,
    img: temp_armor_icon,
    label: "Cloth Boots",
    tier: 1,
  },
  clothChest: {
    category: E_Item_Category.equip,
    description: "A cloth chest.",
    id: E_Item.clothChest,
    img: temp_armor_icon,
    label: "Cloth Chest",
    tier: 1,
  },
  clothHelmet: {
    category: E_Item_Category.equip,
    description: "A cloth helmet.",
    id: E_Item.clothHelmet,
    img: temp_armor_icon,
    label: "Cloth Helmet",
    tier: 1,
  },
  ironBoots: {
    category: E_Item_Category.equip,
    description: "Iron boots.",
    id: E_Item.ironBoots,
    img: temp_armor_icon,
    label: "Iron Boots",
    tier: 1,
  },
  ironChest: {
    category: E_Item_Category.equip,
    description: "An iron chest.",
    id: E_Item.ironChest,
    img: temp_armor_icon,
    label: "Iron Chest",
    tier: 1,
  },
  ironHelmet: {
    category: E_Item_Category.equip,
    description: "An iron helmet.",
    id: E_Item.ironHelmet,
    img: temp_armor_icon,
    label: "Iron Helmet",
    tier: 1,
  },
  leatherBoots: {
    category: E_Item_Category.equip,
    description: "Leather boots.",
    id: E_Item.leatherBoots,
    img: temp_armor_icon,
    label: "Leather Boots",
    tier: 1,
  },
  leatherChest: {
    category: E_Item_Category.equip,
    description: "A leather chest.",
    id: E_Item.leatherChest,
    img: temp_armor_icon,
    label: "Leather Chest",
    tier: 1,
  },
  leatherHelmet: {
    category: E_Item_Category.equip,
    description: "A leather helmet.",
    id: E_Item.leatherHelmet,
    img: temp_armor_icon,
    label: "Leather Helmet",
    tier: 1,
  },
};

const ITEMS_EQUIP_WEAPONS = {
  bow: {
    category: E_Item_Category.equip,
    description: "A bow.",
    id: E_Item.bow,
    img: temp_weapon_icon,
    label: "Bow",
    tier: 1,
  },
  fireStaff: {
    category: E_Item_Category.equip,
    description: "A fire staff.",
    id: E_Item.fireStaff,
    img: temp_weapon_icon,
    label: "Fire Staff",
    tier: 1,
  },
  holyStaff: {
    category: E_Item_Category.equip,
    description: "A holy staff.",
    id: E_Item.holyStaff,
    img: temp_weapon_icon,
    label: "Holy Staff",
    tier: 1,
  },
  mace: {
    category: E_Item_Category.equip,
    description: "A mace.",
    id: E_Item.mace,
    img: temp_weapon_icon,
    label: "Mace",
    tier: 1,
  },
  spear: {
    category: E_Item_Category.equip,
    description: "A spear.",
    id: E_Item.spear,
    img: temp_weapon_icon,
    label: "Spear",
    tier: 1,
  },
  sword: {
    category: E_Item_Category.equip,
    description: "A sword.",
    id: E_Item.sword,
    img: temp_weapon_icon,
    label: "Sword",
    tier: 1,
  },
};

export const ITEMS: T_Items = {
  ...ITEMS_RESOURCES,
  ...ITEMS_MATERIALS,
  ...ITEMS_DROP,
  ...ITEMS_EQUIP_ARMOR,
  ...ITEMS_EQUIP_WEAPONS,
};

export const ITEM_CATEGORIES: T_Items_Category_Ext = {
  drop: {
    craftable: false,
    icon: artifact_icon,
    id: E_Item_Category.drop,
    label: "Drop",
  },
  equip: {
    craftable: true,
    icon: temp_weapon_icon,
    id: E_Item_Category.equip,
    label: "Equip",
  },
  material: {
    craftable: true,
    icon: fiber_icon,
    id: E_Item_Category.material,
    label: "Material",
  },
  resource: {
    craftable: false,
    icon: fiber_icon,
    id: E_Item_Category.resource,
    label: "Resource",
  },
};

export const CONTENTS: T_Contents = {
  sleeping: {
    id: E_Content.sleeping,
    label: "Sleeping",
    timeToComplete: 20,
    rewards: [],
  },
  gathering: {
    id: E_Content.gathering,
    label: "Gathering",
    timeToComplete: 10,
    rewards: [
      {
        item: E_Item.fiber,
        possibility: 0.2,
      },
      {
        item: E_Item.wood,
        possibility: 0.2,
      },
      {
        item: E_Item.stone,
        possibility: 0.2,
      },
      {
        item: E_Item.ore,
        possibility: 0.2,
      },
      {
        item: E_Item.hide,
        possibility: 0.2,
      },
    ],
  },
  dungeoning: {
    id: E_Content.dungeoning,
    label: "Dungeoning",
    timeToComplete: 15,
    rewards: [
      {
        item: ITEMS_DROP.rune.id,
        possibility: 0.5,
      },
      {
        item: ITEMS_DROP.soul.id,
        possibility: 0.25,
      },
      {
        item: ITEMS_DROP.relic.id,
        possibility: 0.125,
      },
      {
        item: ITEMS_DROP.artifact.id,
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
  races: E_Race[];
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
    races: [E_Race.human],
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
