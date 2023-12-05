import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CONTENTS } from "../../../config/CONTENTS";
import { ITEM_CATEGORIES } from "../../../config/ITEMS";
import { T_StorageSlice } from "../../../types/types.d";
import { getReward } from "../../utils";

const giveContentRewardHandler = (
  state: T_StorageSlice,
  { payload: contentId }: PayloadAction<string>
) => {
  const rewards = CONTENTS[contentId].rewards;
  const reward = getReward(rewards);
  if (reward) {
    if (state.storage[reward.item]) {
      state.storage[reward.item].quantity += 1;
    } else {
      state.storage[reward.item] = {
        id: reward.item,
        quantity: 1,
      };
    }
  }
};

const changeCurrentFilterHandler = (
  state: T_StorageSlice,
  { payload: filter }: PayloadAction<string>
) => {
  state.currentFilter = filter;
};

export const storage_slice = createSlice({
  name: "storage",
  initialState: {
    storage: {},
    currentFilter: ITEM_CATEGORIES.resource,
  },
  reducers: {
    giveContentReward: giveContentRewardHandler,
    changeCurrentFilter: changeCurrentFilterHandler,
  },
});

export const { giveContentReward, changeCurrentFilter } = storage_slice.actions;

export default storage_slice.reducer;
