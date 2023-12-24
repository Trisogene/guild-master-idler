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
import CraftingView from "../pages/Crafting/CraftingView";
import Guild from "../pages/Guild/GuildView";
import Recruit from "../pages/Recruit/RecruitView";
import Storage from "../pages/Storage/StorageView";
import temp_race from "./../assets/race.svg";
import {
  E_Content,
  E_Item,
  E_Item_Category,
  E_Race,
  E_Recipe,
  T_Contents,
  T_Items,
  T_Items_Category_Ext,
  T_Links,
  T_Players,
  T_Races,
  T_Recipes,
  T_Timers,
} from "./config.d";

export const LINKS: T_Links = {
  guild: {
    id: "guild",
    label: "Guild",
    component: <Guild />,
  },
  recruit: {
    id: "recruit",
    label: "Recruit",
    component: <Recruit />,
  },
  storage: {
    id: "storage",
    label: "Storage",
    component: <Storage />,
  },
  crafting: {
    id: "crafting",
    label: "Crafting",
    component: <CraftingView />,
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
    name: "Marco the human",
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
  },
  hide: {
    category: E_Item_Category.resource,
    description: "A bundle of hide.",
    id: E_Item.hide,
    img: hide_icon,
    label: "Hide",
  },
  ore: {
    category: E_Item_Category.resource,
    description: "A bundle of ore.",
    id: E_Item.ore,
    img: ore_icon,
    label: "Ore",
  },
  stone: {
    category: E_Item_Category.resource,
    description: "A bundle of stone.",
    id: E_Item.stone,
    img: stone_icon,
    label: "Stone",
  },
  wood: {
    category: E_Item_Category.resource,
    description: "A bundle of wood.",
    id: E_Item.wood,
    img: wood_icon,
    label: "Wood",
  },
};

export const ITEMS_MATERIALS = {
  cloth: {
    category: E_Item_Category.material,
    description: "A bundle of cloth.",
    id: E_Item.cloth,
    img: fiber_icon,
    label: "Cloth",
  },
  leather: {
    category: E_Item_Category.material,
    description: "A bundle of leather.",
    id: E_Item.leather,
    img: hide_icon,
    label: "Leather",
  },
  metalBar: {
    category: E_Item_Category.material,
    description: "A bundle of metal bars.",
    id: E_Item.metalBar,
    img: ore_icon,
    label: "Metal Bar",
  },
  plank: {
    category: E_Item_Category.material,
    description: "A bundle of planks.",
    id: E_Item.plank,
    img: wood_icon,
    label: "Plank",
  },
  stoneBlock: {
    category: E_Item_Category.material,
    description: "A bundle of stone blocks.",
    id: E_Item.stoneBlock,
    img: stone_icon,
    label: "Stone Block",
  },
};

export const ITEMS_DROP = {
  artifact: {
    category: E_Item_Category.drop,
    description: "An artifact.",
    id: E_Item.artifact,
    img: artifact_icon,
    label: "Artifact",
  },
  relic: {
    category: E_Item_Category.drop,
    description: "A relic.",
    id: E_Item.relic,
    img: relic_icon,
    label: "Relic",
  },
  rune: {
    category: E_Item_Category.drop,
    description: "A rune.",
    id: E_Item.rune,
    img: rune_icon,
    label: "Rune",
  },
  soul: {
    category: E_Item_Category.drop,
    description: "A soul.",
    id: E_Item.soul,
    img: soul_icon,
    label: "Soul",
  },
};

export const ITEMS_EQUIP = {
  bow: {
    category: E_Item_Category.equip,
    description: "A bow.",
    id: E_Item.bow,
    img: temp_weapon_icon,
    label: "Bow",
  },
  clothBoots: {
    category: E_Item_Category.equip,
    description: "Cloth boots.",
    id: E_Item.clothBoots,
    img: temp_armor_icon,
    label: "Cloth Boots",
  },
  clothChest: {
    category: E_Item_Category.equip,
    description: "A cloth chest.",
    id: E_Item.clothChest,
    img: temp_armor_icon,
    label: "Cloth Chest",
  },
  clothHelmet: {
    category: E_Item_Category.equip,
    description: "A cloth helmet.",
    id: E_Item.clothHelmet,
    img: temp_armor_icon,
    label: "Cloth Helmet",
  },
  fireStaff: {
    category: E_Item_Category.equip,
    description: "A fire staff.",
    id: E_Item.fireStaff,
    img: temp_weapon_icon,
    label: "Fire Staff",
  },
  holyStaff: {
    category: E_Item_Category.equip,
    description: "A holy staff.",
    id: E_Item.holyStaff,
    img: temp_weapon_icon,
    label: "Holy Staff",
  },
  ironBoots: {
    category: E_Item_Category.equip,
    description: "Iron boots.",
    id: E_Item.ironBoots,
    img: temp_armor_icon,
    label: "Iron Boots",
  },
  ironChest: {
    category: E_Item_Category.equip,
    description: "An iron chest.",
    id: E_Item.ironChest,
    img: temp_armor_icon,
    label: "Iron Chest",
  },
  ironHelmet: {
    category: E_Item_Category.equip,
    description: "An iron helmet.",
    id: E_Item.ironHelmet,
    img: temp_armor_icon,
    label: "Iron Helmet",
  },
  leatherBoots: {
    category: E_Item_Category.equip,
    description: "Leather boots.",
    id: E_Item.leatherBoots,
    img: temp_armor_icon,
    label: "Leather Boots",
  },
  leatherChest: {
    category: E_Item_Category.equip,
    description: "A leather chest.",
    id: E_Item.leatherChest,
    img: temp_armor_icon,
    label: "Leather Chest",
  },
  leatherHelmet: {
    category: E_Item_Category.equip,
    description: "A leather helmet.",
    id: E_Item.leatherHelmet,
    img: temp_armor_icon,
    label: "Leather Helmet",
  },
  mace: {
    category: E_Item_Category.equip,
    description: "A mace.",
    id: E_Item.mace,
    img: temp_weapon_icon,
    label: "Mace",
  },
  spear: {
    category: E_Item_Category.equip,
    description: "A spear.",
    id: E_Item.spear,
    img: temp_weapon_icon,
    label: "Spear",
  },
  sword: {
    category: E_Item_Category.equip,
    description: "A sword.",
    id: E_Item.sword,
    img: temp_weapon_icon,
    label: "Sword",
  },
};

export const ITEMS: T_Items = {
  ...ITEMS_RESOURCES,
  ...ITEMS_MATERIALS,
  ...ITEMS_DROP,
  ...ITEMS_EQUIP,
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
