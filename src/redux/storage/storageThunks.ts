import { CONTENTS } from "../../config/config";
import { ID_Content, ItemStack } from "../../config/config.d";
import { T_ReduxState } from "../../config/store.d";
import { getReward } from "../../utils";
import { AppDispatch } from "../store";
import { addItem } from "./storageSlice";

export const giveContentReward =
  (contentId: ID_Content): any =>
  (dispatch: AppDispatch, getState: () => T_ReduxState) => {
    const rewards = CONTENTS[contentId].rewards;
    const reward = getReward(rewards);
    const quantity = Math.floor(Math.random() * 10) + 1;

    if (reward) {
      dispatch(addItem({ itemId: reward.item, quantity: quantity }));
    }

    const result: ItemStack | null = reward
      ? { id: reward.item, quantity: quantity }
      : null;

    return result;
  };
