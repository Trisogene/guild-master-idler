export type T_ItemStacks = {
  [key: string]: T_ItemStack;
};

export type T_ItemStack = {
  id: string;
  quantity: number;
};

export type T_ItemIngredients = {
  [key: string]: number;
};
