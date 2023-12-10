import temp_material_icon from "../assets/items/wood.svg";
import { ITEMS_RESOURCES } from "./ITEMS";

const RECIPES_MATERIALS = {
  cloth: {
    id: "cloth",
    name: "Cloth",
    description: "A piece of cloth",
    icon: temp_material_icon,
    require: {
      [ITEMS_RESOURCES.fiber.id]: 2,
    },
  },
  plank: {
    id: "plank",
    name: "Plank",
    description: "A piece of wood",
    icon: temp_material_icon,
    require: {
      [ITEMS_RESOURCES.wood.id]: 2,
    },
  },
  metal: {
    id: "metal",
    name: "Metal",
    description: "A piece of metal",
    icon: temp_material_icon,
    require: {
      [ITEMS_RESOURCES.ore.id]: 2,
    },
  },
  stoneBlock: {
    id: "stoneBlock",
    name: "Stone Block",
    description: "A block of stone",
    icon: temp_material_icon,
    require: {
      [ITEMS_RESOURCES.stone.id]: 2,
    },
  },
  leather: {
    id: "leather",
    name: "Leather",
    description: "A piece of leather",
    icon: temp_material_icon,
    require: {
      [ITEMS_RESOURCES.hide.id]: 2,
    },
  },
};

const RECIPES_EQUIPS = {
  sword: {
    id: "sword",
    name: "Sword",
    description: "A sword",
    icon: temp_material_icon,
    require: {
      [RECIPES_MATERIALS.metal.id]: 2,
    },
  },
  mace: {
    id: "mace",
    name: "Mace",
    description: "A mace",
    icon: temp_material_icon,
    require: {
      [RECIPES_MATERIALS.metal.id]: 2,
    },
  },
  hammer: {
    id: "hammer",
    name: "Hammer",
    description: "A hammer",
    icon: temp_material_icon,
    require: {
      [RECIPES_MATERIALS.metal.id]: 2,
    },
  },
  axe: {
    id: "axe",
    name: "Axe",
    description: "An axe",
    icon: temp_material_icon,
    require: {
      [RECIPES_MATERIALS.metal.id]: 2,
    },
  },
  bow: {
    id: "bow",
    name: "Bow",
    description: "A bow",
    icon: temp_material_icon,
    require: {
      [ITEMS_RESOURCES.wood.id]: 2,
    },
  },
  fireStaff: {
    id: "fireStaff",
    name: "Fire Staff",
    description: "A fire staff",
    icon: temp_material_icon,
    require: {
      [RECIPES_MATERIALS.metal.id]: 2,
    },
  },
};
