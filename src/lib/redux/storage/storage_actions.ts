import { PayloadAction } from "@reduxjs/toolkit";
import { T_StorageSlice } from "../../../types/types.d";

const setCurrentStorageFilter = (
  state: T_StorageSlice,
  { payload: filter }: PayloadAction<string>
) => {
  state.currentFilter = filter;
};

type T_AddItemReq = {
  itemId: string;
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
  setCurrentStorageFilter,
  addItem,
  removeItem,
};
