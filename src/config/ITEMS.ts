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
import wood_icon from "../assets/items/wood.svg";
import { T_Items } from "./config";

/* -------------------------------------------------------------------------- */
/*                                    Enums                                   */
/* -------------------------------------------------------------------------- */

export const ITEM_CATEGORIES = {
  resource: "resource",
  drop: "drop",
  material: "material",
  equip: "equip",
};

export const CRAFTABLE_CATEGORIES = {
  material: "material",
  equip: "equip",
};

/* -------------------------------------------------------------------------- */
/*                                    Items                                   */
/* -------------------------------------------------------------------------- */

/* -------------------------------- Resources ------------------------------- */
export const ITEMS_RESOURCES = {
  fiber: {
    description: "A bundle of fiber.",
    id: "fiber",
    img: fiber_icon,
    label: "Fiber",
    subType: "",
    type: ITEM_CATEGORIES.resource,
  },
  hide: {
    description: "A bundle of hide.",
    id: "hide",
    img: hide_icon,
    label: "Hide",
    subType: "",
    type: ITEM_CATEGORIES.resource,
  },
  ore: {
    description: "A bundle of ore.",
    id: "ore",
    img: ore_icon,
    label: "Ore",
    subType: "",
    type: ITEM_CATEGORIES.resource,
  },
  stone: {
    description: "A bundle of stone.",
    id: "stone",
    img: stone_icon,
    label: "Stone",
    subType: "",
    type: ITEM_CATEGORIES.resource,
  },
  wood: {
    description: "A bundle of wood.",
    id: "wood",
    img: wood_icon,
    label: "Wood",
    subType: "",
    type: ITEM_CATEGORIES.resource,
  },
};

/* -------------------------------- Materials ------------------------------- */
export const ITEMS_MATERIALS = {
  cloth: {
    id: "cloth",
    label: "Cloth",
    description: "A bundle of cloth.",
    type: ITEM_CATEGORIES.material,
    subType: "",
    img: fiber_icon,
  },
  plank: {
    id: "plank",
    label: "Plank",
    description: "A bundle of planks.",
    type: ITEM_CATEGORIES.material,
    subType: "",
    img: wood_icon,
  },
  stoneBlock: {
    id: "stoneBlock",
    label: "Stone Block",
    description: "A bundle of stone blocks.",
    type: ITEM_CATEGORIES.material,
    subType: "",
    img: stone_icon,
  },
  metalBar: {
    id: "metalBar",
    label: "Metal Bar",
    description: "A bundle of metal bars.",
    type: ITEM_CATEGORIES.material,
    subType: "",
    img: ore_icon,
  },
  leather: {
    id: "leather",
    label: "Leather",
    description: "A bundle of leather.",
    type: ITEM_CATEGORIES.material,
    subType: "",
    img: hide_icon,
  },
};

/* ---------------------------------- Drops --------------------------------- */
export const ITEMS_DROP = {
  artifact: {
    description: "An artifact.",
    id: "artifact",
    img: artifact_icon,
    label: "Artifact",
    subType: "",
    type: "drop",
  },
  relic: {
    description: "A relic.",
    id: "relic",
    img: relic_icon,
    label: "Relic",
    subType: "",
    type: "drop",
  },
  rune: {
    description: "A rune.",
    id: "rune",
    img: rune_icon,
    label: "Rune",
    subType: "",
    type: "drop",
  },
  soul: {
    description: "A soul.",
    id: "soul",
    img: soul_icon,
    label: "Soul",
    subType: "",
    type: "drop",
  },
};

/* ---------------------------------- Equip --------------------------------- */
export const ITEMS_EQUIP = {
  arcaneStaff: {
    description: "An arcane staff.",
    id: "arcaneStaff",
    img: temp_weapon_icon,
    label: "Arcane Staff",
    subType: "weapon",
    type: "equip",
  },
  axe: {
    description: "An axe.",
    id: "axe",
    img: temp_weapon_icon,
    label: "Axe",
    subType: "weapon",
    type: "equip",
  },
  bow: {
    description: "A bow.",
    id: "bow",
    img: temp_weapon_icon,
    label: "Bow",
    subType: "weapon",
    type: "equip",
  },
  clothBoots: {
    description: "Cloth boots.",
    id: "clothBoots",
    img: temp_armor_icon,
    label: "Cloth Boots",
    subType: "armor",
    type: "equip",
  },
  clothChest: {
    description: "A cloth chest.",
    id: "clothChest",
    img: temp_armor_icon,
    label: "Cloth Chest",
    subType: "armor",
    type: "equip",
  },
  clothHelmet: {
    description: "A cloth helmet.",
    id: "clothHelmet",
    img: temp_armor_icon,
    label: "Cloth Helmet",
    subType: "armor",
    type: "equip",
  },
  fireStaff: {
    description: "A fire staff.",
    id: "fireStaff",
    img: temp_weapon_icon,
    label: "Fire Staff",
    subType: "weapon",
    type: "equip",
  },
  hammer: {
    description: "A hammer.",
    id: "hammer",
    img: temp_weapon_icon,
    label: "Hammer",
    subType: "weapon",
    type: "equip",
  },
  holyStaff: {
    description: "A holy staff.",
    id: "holyStaff",
    img: temp_weapon_icon,
    label: "Holy Staff",
    subType: "weapon",
    type: "equip",
  },
  ironBoots: {
    description: "Iron boots.",
    id: "ironBoots",
    img: temp_armor_icon,
    label: "Iron Boots",
    subType: "armor",
    type: "equip",
  },
  ironChest: {
    description: "An iron chest.",
    id: "ironChest",
    img: temp_armor_icon,
    label: "Iron Chest",
    subType: "armor",
    type: "equip",
  },
  ironHelmet: {
    description: "An iron helmet.",
    id: "ironHelmet",
    img: temp_armor_icon,
    label: "Iron Helmet",
    subType: "armor",
    type: "equip",
  },
  leatherBoots: {
    description: "Leather boots.",
    id: "leatherBoots",
    img: temp_armor_icon,
    label: "Leather Boots",
    subType: "armor",
    type: "equip",
  },
  leatherChest: {
    description: "A leather chest.",
    id: "leatherChest",
    img: temp_armor_icon,
    label: "Leather Chest",
    subType: "armor",
    type: "equip",
  },
  leatherHelmet: {
    description: "A leather helmet.",
    id: "leatherHelmet",
    img: temp_armor_icon,
    label: "Leather Helmet",
    subType: "armor",
    type: "equip",
  },
  mace: {
    description: "A mace.",
    id: "mace",
    img: temp_weapon_icon,
    label: "Mace",
    subType: "weapon",
    type: "equip",
  },
  shield: {
    description: "A shield.",
    id: "shield",
    img: temp_armor_icon,
    label: "Shield",
    subType: "armor",
    type: "equip",
  },
  spear: {
    description: "A spear.",
    id: "spear",
    img: temp_weapon_icon,
    label: "Spear",
    subType: "weapon",
    type: "equip",
  },
  sword: {
    description: "A sword.",
    id: "sword",
    img: temp_weapon_icon,
    label: "Sword",
    subType: "weapon",
    type: "equip",
  },
};

export const ITEMS: T_Items = {
  ...ITEMS_RESOURCES,
  ...ITEMS_MATERIALS,
  ...ITEMS_DROP,
  ...ITEMS_EQUIP,
};
