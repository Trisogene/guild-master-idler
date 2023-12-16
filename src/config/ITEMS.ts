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
  resource: {
    id: "resource",
    label: "Resource",
    icon: fiber_icon,
    craftable: false,
  },
  drop: {
    id: "drop",
    label: "Drop",
    icon: artifact_icon,
    craftable: false,
  },
  material: {
    id: "material",
    label: "Material",
    icon: fiber_icon,
    craftable: true,
  },
  equip: {
    id: "equip",
    label: "Equip",
    icon: temp_weapon_icon,
    craftable: true,
  },
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
    type: ITEM_CATEGORIES.resource.id,
  },
  hide: {
    description: "A bundle of hide.",
    id: "hide",
    img: hide_icon,
    label: "Hide",
    subType: "",
    type: ITEM_CATEGORIES.resource.id,
  },
  ore: {
    description: "A bundle of ore.",
    id: "ore",
    img: ore_icon,
    label: "Ore",
    subType: "",
    type: ITEM_CATEGORIES.resource.id,
  },
  stone: {
    description: "A bundle of stone.",
    id: "stone",
    img: stone_icon,
    label: "Stone",
    subType: "",
    type: ITEM_CATEGORIES.resource.id,
  },
  wood: {
    description: "A bundle of wood.",
    id: "wood",
    img: wood_icon,
    label: "Wood",
    subType: "",
    type: ITEM_CATEGORIES.resource.id,
  },
};

/* -------------------------------- Materials ------------------------------- */
export const ITEMS_MATERIALS = {
  cloth: {
    id: "cloth",
    label: "Cloth",
    description: "A bundle of cloth.",
    type: ITEM_CATEGORIES.material.id,
    subType: "",
    img: fiber_icon,
  },
  plank: {
    id: "plank",
    label: "Plank",
    description: "A bundle of planks.",
    type: ITEM_CATEGORIES.material.id,
    subType: "",
    img: wood_icon,
  },
  stoneBlock: {
    id: "stoneBlock",
    label: "Stone Block",
    description: "A bundle of stone blocks.",
    type: ITEM_CATEGORIES.material.id,
    subType: "",
    img: stone_icon,
  },
  metalBar: {
    id: "metalBar",
    label: "Metal Bar",
    description: "A bundle of metal bars.",
    type: ITEM_CATEGORIES.material.id,
    subType: "",
    img: ore_icon,
  },
  leather: {
    id: "leather",
    label: "Leather",
    description: "A bundle of leather.",
    type: ITEM_CATEGORIES.material.id,
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
    type: ITEM_CATEGORIES.drop.id,
  },
  relic: {
    description: "A relic.",
    id: "relic",
    img: relic_icon,
    label: "Relic",
    subType: "",
    type: ITEM_CATEGORIES.drop.id,
  },
  rune: {
    description: "A rune.",
    id: "rune",
    img: rune_icon,
    label: "Rune",
    subType: "",
    type: ITEM_CATEGORIES.drop.id,
  },
  soul: {
    description: "A soul.",
    id: "soul",
    img: soul_icon,
    label: "Soul",
    subType: "",
    type: ITEM_CATEGORIES.drop.id,
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
    type: ITEM_CATEGORIES.equip.id,
  },
  axe: {
    description: "An axe.",
    id: "axe",
    img: temp_weapon_icon,
    label: "Axe",
    subType: "weapon",
    type: ITEM_CATEGORIES.equip.id,
  },
  bow: {
    description: "A bow.",
    id: "bow",
    img: temp_weapon_icon,
    label: "Bow",
    subType: "weapon",
    type: ITEM_CATEGORIES.equip.id,
  },
  clothBoots: {
    description: "Cloth boots.",
    id: "clothBoots",
    img: temp_armor_icon,
    label: "Cloth Boots",
    subType: "armor",
    type: ITEM_CATEGORIES.equip.id,
  },
  clothChest: {
    description: "A cloth chest.",
    id: "clothChest",
    img: temp_armor_icon,
    label: "Cloth Chest",
    subType: "armor",
    type: ITEM_CATEGORIES.equip.id,
  },
  clothHelmet: {
    description: "A cloth helmet.",
    id: "clothHelmet",
    img: temp_armor_icon,
    label: "Cloth Helmet",
    subType: "armor",
    type: ITEM_CATEGORIES.equip.id,
  },
  fireStaff: {
    description: "A fire staff.",
    id: "fireStaff",
    img: temp_weapon_icon,
    label: "Fire Staff",
    subType: "weapon",
    type: ITEM_CATEGORIES.equip.id,
  },
  hammer: {
    description: "A hammer.",
    id: "hammer",
    img: temp_weapon_icon,
    label: "Hammer",
    subType: "weapon",
    type: ITEM_CATEGORIES.equip.id,
  },
  holyStaff: {
    description: "A holy staff.",
    id: "holyStaff",
    img: temp_weapon_icon,
    label: "Holy Staff",
    subType: "weapon",
    type: ITEM_CATEGORIES.equip.id,
  },
  ironBoots: {
    description: "Iron boots.",
    id: "ironBoots",
    img: temp_armor_icon,
    label: "Iron Boots",
    subType: "armor",
    type: ITEM_CATEGORIES.equip.id,
  },
  ironChest: {
    description: "An iron chest.",
    id: "ironChest",
    img: temp_armor_icon,
    label: "Iron Chest",
    subType: "armor",
    type: ITEM_CATEGORIES.equip.id,
  },
  ironHelmet: {
    description: "An iron helmet.",
    id: "ironHelmet",
    img: temp_armor_icon,
    label: "Iron Helmet",
    subType: "armor",
    type: ITEM_CATEGORIES.equip.id,
  },
  leatherBoots: {
    description: "Leather boots.",
    id: "leatherBoots",
    img: temp_armor_icon,
    label: "Leather Boots",
    subType: "armor",
    type: ITEM_CATEGORIES.equip.id,
  },
  leatherChest: {
    description: "A leather chest.",
    id: "leatherChest",
    img: temp_armor_icon,
    label: "Leather Chest",
    subType: "armor",
    type: ITEM_CATEGORIES.equip.id,
  },
  leatherHelmet: {
    description: "A leather helmet.",
    id: "leatherHelmet",
    img: temp_armor_icon,
    label: "Leather Helmet",
    subType: "armor",
    type: ITEM_CATEGORIES.equip.id,
  },
  mace: {
    description: "A mace.",
    id: "mace",
    img: temp_weapon_icon,
    label: "Mace",
    subType: "weapon",
    type: ITEM_CATEGORIES.equip.id,
  },
  shield: {
    description: "A shield.",
    id: "shield",
    img: temp_armor_icon,
    label: "Shield",
    subType: "armor",
    type: ITEM_CATEGORIES.equip.id,
  },
  spear: {
    description: "A spear.",
    id: "spear",
    img: temp_weapon_icon,
    label: "Spear",
    subType: "weapon",
    type: ITEM_CATEGORIES.equip.id,
  },
  sword: {
    description: "A sword.",
    id: "sword",
    img: temp_weapon_icon,
    label: "Sword",
    subType: "weapon",
    type: ITEM_CATEGORIES.equip.id,
  },
};

export const ITEMS: T_Items = {
  ...ITEMS_RESOURCES,
  ...ITEMS_MATERIALS,
  ...ITEMS_DROP,
  ...ITEMS_EQUIP,
};
