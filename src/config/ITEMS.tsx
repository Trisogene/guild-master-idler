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
import { T_Items } from "../types/types.d";

export const ITEM_CATEGORIES = {
  resource: "resource",
  drop: "drop",
};

export const CRAFTABLE_CATEGORIES = {
  weapon: "weapon",
  armor: "armor",
};

export const ITEMS_RESOURCES = {
  fiber: {
    id: "fiber",
    label: "Fiber",
    description: "A bundle of fiber.",
    type: "resource",
    subType: "",
    img: fiber_icon,
  },
  wood: {
    id: "wood",
    label: "Wood",
    description: "A bundle of wood.",
    type: "resource",
    subType: "",
    img: wood_icon,
  },
  stone: {
    id: "stone",
    label: "Stone",
    description: "A bundle of stone.",
    type: "resource",
    subType: "",
    img: stone_icon,
  },
  ore: {
    id: "ore",
    label: "Ore",
    description: "A bundle of ore.",
    type: "resource",
    subType: "",
    img: ore_icon,
  },
  hide: {
    id: "hide",
    label: "Hide",
    description: "A bundle of hide.",
    type: "resource",
    subType: "",
    img: hide_icon,
  },
};

export const ITEMS_MATERIALS = {
  cloth: {
    id: "cloth",
    label: "Cloth",
    description: "A bundle of cloth.",
    type: "material",
    subType: "",
    img: fiber_icon,
  },
};

export const ITEMS_DROP = {
  rune: {
    id: "rune",
    label: "Rune",
    description: "A rune.",
    type: "drop",
    subType: "",
    img: rune_icon,
  },
  soul: {
    id: "soul",
    label: "Soul",
    description: "A soul.",
    type: "drop",
    subType: "",
    img: soul_icon,
  },
  relic: {
    id: "relic",
    label: "Relic",
    description: "A relic.",
    type: "drop",
    subType: "",
    img: relic_icon,
  },
  artifact: {
    id: "artifact",
    label: "Artifact",
    description: "An artifact.",
    type: "drop",
    subType: "",
    img: artifact_icon,
  },
};

export const ITEMS_EQUIP = {
  sword: {
    id: "sword",
    label: "Sword",
    description: "A sword.",
    type: "equip",
    subType: "weapon",
    img: temp_weapon_icon,
  },
  mace: {
    id: "mace",
    label: "Mace",
    description: "A mace.",
    type: "equip",
    subType: "weapon",
    img: temp_weapon_icon,
  },
  hammer: {
    id: "hammer",
    label: "Hammer",
    description: "A hammer.",
    type: "equip",
    subType: "weapon",
    img: temp_weapon_icon,
  },
  axe: {
    id: "axe",
    label: "Axe",
    description: "An axe.",
    type: "equip",
    subType: "weapon",
    img: temp_weapon_icon,
  },
  bow: {
    id: "bow",
    label: "Bow",
    description: "A bow.",
    type: "equip",
    subType: "weapon",
    img: temp_weapon_icon,
  },
  fireStaff: {
    id: "fireStaff",
    label: "Fire Staff",
    description: "A fire staff.",
    type: "equip",
    subType: "weapon",
    img: temp_weapon_icon,
  },
  holyStaff: {
    id: "holyStaff",
    label: "Holy Staff",
    description: "A holy staff.",
    type: "equip",
    subType: "weapon",
    img: temp_weapon_icon,
  },
  arcaneStaff: {
    id: "arcaneStaff",
    label: "Arcane Staff",
    description: "An arcane staff.",
    type: "equip",
    subType: "weapon",
    img: temp_weapon_icon,
  },
  spear: {
    id: "spear",
    label: "Spear",
    description: "A spear.",
    type: "equip",
    subType: "weapon",
    img: temp_weapon_icon,
  },
  shield: {
    id: "shield",
    label: "Shield",
    description: "A shield.",
    type: "equip",
    subType: "armor",
    img: temp_armor_icon,
  },
  ironHelmet: {
    id: "ironHelmet",
    label: "Iron Helmet",
    description: "An iron helmet.",
    type: "equip",
    subType: "armor",
    img: temp_armor_icon,
  },
  ironChest: {
    id: "ironChest",
    label: "Iron Chest",
    description: "An iron chest.",
    type: "equip",
    subType: "armor",
    img: temp_armor_icon,
  },
  ironBoots: {
    id: "ironBoots",
    label: "Iron Boots",
    description: "Iron boots.",
    type: "equip",
    subType: "armor",
    img: temp_armor_icon,
  },
  leatherHelmet: {
    id: "leatherHelmet",
    label: "Leather Helmet",
    description: "A leather helmet.",
    type: "equip",
    subType: "armor",
    img: temp_armor_icon,
  },
  leatherChest: {
    id: "leatherChest",
    label: "Leather Chest",
    description: "A leather chest.",
    type: "equip",
    subType: "armor",
    img: temp_armor_icon,
  },
  leatherBoots: {
    id: "leatherBoots",
    label: "Leather Boots",
    description: "Leather boots.",
    type: "equip",
    subType: "armor",
    img: temp_armor_icon,
  },
  clothHelmet: {
    id: "clothHelmet",
    label: "Cloth Helmet",
    description: "A cloth helmet.",
    type: "equip",
    subType: "armor",
    img: temp_armor_icon,
  },
  clothChest: {
    id: "clothChest",
    label: "Cloth Chest",
    description: "A cloth chest.",
    type: "equip",
    subType: "armor",
    img: temp_armor_icon,
  },
  clothBoots: {
    id: "clothBoots",
    label: "Cloth Boots",
    description: "Cloth boots.",
    type: "equip",
    subType: "armor",
    img: temp_armor_icon,
  },
};

export const ITEMS: T_Items = {
  ...ITEMS_RESOURCES,
  ...ITEMS_DROP,
  ...ITEMS_EQUIP,
};
