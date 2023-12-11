import temp_material_icon from "../assets/items/wood.svg";
import { ITEMS_EQUIP, ITEMS_MATERIALS, ITEMS_RESOURCES } from "./ITEMS";

/* ---------------------------------- Types --------------------------------- */
export type T_Recipes = {
  [key: string]: T_Recipe;
};

export type T_RecipeIngredient = Record<string, number>;

export type T_Recipe = {
  description: string;
  icon: string;
  id: string;
  label: string;
  ingredients: T_RecipeIngredient;
};

/* -------------------------------- Materials ------------------------------- */
const RECIPES_MATERIAL = {
  [ITEMS_MATERIALS.cloth.id]: {
    description: "A piece of cloth",
    icon: temp_material_icon,
    id: "cloth",
    label: "Cloth",
    ingredients: {
      [ITEMS_RESOURCES.fiber.id]: 2,
    },
  },
  [ITEMS_MATERIALS.plank.id]: {
    description: "A piece of wood",
    icon: temp_material_icon,
    id: "plank",
    label: "Plank",
    ingredients: {
      [ITEMS_RESOURCES.wood.id]: 2,
    },
  },
  [ITEMS_MATERIALS.metalBar.id]: {
    description: "A piece of metal",
    icon: temp_material_icon,
    id: "metalBar",
    label: "Metal",
    ingredients: {
      [ITEMS_RESOURCES.ore.id]: 2,
    },
  },
  [ITEMS_MATERIALS.stoneBlock.id]: {
    description: "A block of stone",
    icon: temp_material_icon,
    id: "stoneBlock",
    label: "Stone Block",
    ingredients: {
      [ITEMS_RESOURCES.stone.id]: 2,
    },
  },
  [ITEMS_MATERIALS.leather.id]: {
    description: "A piece of leather",
    icon: temp_material_icon,
    id: "leather",
    label: "Leather",
    ingredients: {
      [ITEMS_RESOURCES.hide.id]: 2,
    },
  },
};

/* --------------------------------- Equipments ------------------------------ */
const RECIPE_EQUIPS = {
  [ITEMS_EQUIP.arcaneStaff.id]: {
    description: "A staff",
    icon: temp_material_icon,
    id: "arcaneStaff",
    label: "Arcane Staff",
    ingredients: {
      [ITEMS_MATERIALS.plank.id]: 2,
    },
  },
  [ITEMS_EQUIP.axe.id]: {
    description: "An axe",
    icon: temp_material_icon,
    id: "axe",
    label: "Axe",
    ingredients: {
      [RECIPES_MATERIAL.metalBar.id]: 2,
    },
  },
  [ITEMS_EQUIP.bow.id]: {
    description: "A bow",
    icon: temp_material_icon,
    id: "bow",
    label: "Bow",
    ingredients: {
      [RECIPES_MATERIAL.plank.id]: 2,
    },
  },
  [ITEMS_EQUIP.fireStaff.id]: {
    description: "A staff",
    icon: temp_material_icon,
    id: "fireStaff",
    label: "Fire Staff",
    ingredients: {
      [RECIPES_MATERIAL.metalBar.id]: 2,
    },
  },
  [ITEMS_EQUIP.hammer.id]: {
    description: "A hammer",
    icon: temp_material_icon,
    id: "hammer",
    label: "Hammer",
    ingredients: {
      [RECIPES_MATERIAL.metalBar.id]: 2,
    },
  },
  [ITEMS_EQUIP.holyStaff.id]: {
    description: "A staff",
    icon: temp_material_icon,
    id: "holyStaff",
    label: "Holy Staff",
    ingredients: {
      [RECIPES_MATERIAL.plank.id]: 2,
    },
  },
  [ITEMS_EQUIP.mace.id]: {
    description: "A mace",
    icon: temp_material_icon,
    id: "mace",
    label: "Mace",
    ingredients: {
      [RECIPES_MATERIAL.metalBar.id]: 2,
    },
  },
  [ITEMS_EQUIP.spear.id]: {
    description: "A spear",
    icon: temp_material_icon,
    id: "spear",
    label: "Spear",
    ingredients: {
      [RECIPES_MATERIAL.metalBar.id]: 2,
    },
  },
  [ITEMS_EQUIP.sword.id]: {
    description: "A sword",
    icon: temp_material_icon,
    id: "sword",
    label: "Sword",
    ingredients: {
      [RECIPES_MATERIAL.metalBar.id]: 2,
    },
  },
  [ITEMS_EQUIP.clothHelmet.id]: {
    description: "A helmet",
    icon: temp_material_icon,
    id: "clothHelmet",
    label: "Cloth Helmet",
    ingredients: {
      [RECIPES_MATERIAL.cloth.id]: 2,
    },
  },
  [ITEMS_EQUIP.clothChest.id]: {
    description: "A chest",
    icon: temp_material_icon,
    id: "clothChest",
    label: "Cloth Chest",
    ingredients: {
      [RECIPES_MATERIAL.cloth.id]: 2,
    },
  },
  [ITEMS_EQUIP.clothBoots.id]: {
    description: "A boots",
    icon: temp_material_icon,
    id: "clothBoots",
    label: "Cloth Boots",
    ingredients: {
      [RECIPES_MATERIAL.cloth.id]: 2,
    },
  },
  [ITEMS_EQUIP.leatherHelmet.id]: {
    description: "A helmet",
    icon: temp_material_icon,
    id: "leatherHelmet",
    label: "Leather Helmet",
    ingredients: {
      [RECIPES_MATERIAL.leather.id]: 2,
    },
  },
  [ITEMS_EQUIP.leatherChest.id]: {
    description: "A chest",
    icon: temp_material_icon,
    id: "leatherChest",
    label: "Leather Chest",
    ingredients: {
      [RECIPES_MATERIAL.leather.id]: 2,
    },
  },
  [ITEMS_EQUIP.leatherBoots.id]: {
    description: "A boots",
    icon: temp_material_icon,
    id: "leatherBoots",
    label: "Leather Boots",
    ingredients: {
      [RECIPES_MATERIAL.leather.id]: 2,
    },
  },
  [ITEMS_EQUIP.ironHelmet.id]: {
    description: "A helmet",
    icon: temp_material_icon,
    id: "ironHelmet",
    label: "Iron Helmet",
    ingredients: {
      [RECIPES_MATERIAL.metalBar.id]: 2,
    },
  },
  [ITEMS_EQUIP.ironChest.id]: {
    description: "A chest",
    icon: temp_material_icon,
    id: "ironChest",
    label: "Iron Chest",
    ingredients: {
      [RECIPES_MATERIAL.metalBar.id]: 2,
    },
  },
  [ITEMS_EQUIP.ironBoots.id]: {
    description: "A boots",
    icon: temp_material_icon,
    id: "ironBoots",
    label: "Iron Boots",
    ingredients: {
      [RECIPES_MATERIAL.metalBar.id]: 2,
    },
  },
  [ITEMS_EQUIP.shield.id]: {
    description: "A shield",
    icon: temp_material_icon,
    id: "shield",
    label: "Shield",
    ingredients: {
      [RECIPES_MATERIAL.metalBar.id]: 2,
    },
  },
};

export const RECIPES: T_Recipes = {
  ...RECIPES_MATERIAL,
  ...RECIPE_EQUIPS,
};
