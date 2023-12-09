import { PayloadAction } from "@reduxjs/toolkit";
import { CONTENTS } from "../../../config/CONTENTS";
import { T_StorageSlice } from "../../../types/types.d";
import { getReward } from "../../utils";

const giveContentReward = (
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

const changeCurrentFilter = (
  state: T_StorageSlice,
  { payload: filter }: PayloadAction<string>
) => {
  state.currentFilter = filter;
};

export const storageActions = {
  giveContentReward,
  changeCurrentFilter,
};
