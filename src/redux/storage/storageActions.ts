import { PayloadAction } from "@reduxjs/toolkit";
import { ID_Item } from "../../config/config.d";
import { T_StorageSlice } from "../../config/store.d";

/* --------------------------------- AddItem -------------------------------- */
type T_AddItemReq = {
  itemId: ID_Item;
  quantity: number;
};
const addItem = (
  state: T_StorageSlice,
  { payload }: PayloadAction<T_AddItemReq>
) => {
  const { itemId, quantity } = payload;
  if (state.storage[itemId]) {
    state.storage[itemId].quantity += quantity;
  } else {
    state.storage[itemId] = {
      id: itemId,
      quantity,
    };
  }
};

/* ------------------------------- RemoveItem ------------------------------- */
type T_RemoveItemReq = {
  itemId: string;
  quantity: number;
};
const removeItem = (
  state: T_StorageSlice,
  { payload }: PayloadAction<T_RemoveItemReq>
) => {
  const { itemId, quantity } = payload;
  if (state.storage[itemId]) {
    state.storage[itemId].quantity -= quantity;
    if (state.storage[itemId].quantity <= 0) {
      delete state.storage[itemId];
    }
  }
};

export const storageActions = {
  addItem,
  removeItem,
};
