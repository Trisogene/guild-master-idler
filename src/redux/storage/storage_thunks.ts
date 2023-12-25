import { CONTENTS } from "../../config/config";
import { getReward } from "../../utils";
import { AppDispatch } from "../store";
import { addItem } from "./storage_slice";

export const giveContentReward =
  (contentId: string): any =>
  (dispatch: AppDispatch) => {
    const rewards = CONTENTS[contentId].rewards;
    const reward = getReward(rewards);
    if (reward) {
      const quantity = Math.floor(Math.random() * 10) + 1;
      dispatch(addItem({ itemId: reward.item, quantity: quantity }));
    }
  };
