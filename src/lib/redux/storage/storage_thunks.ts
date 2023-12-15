import { CONTENTS } from "../../../config/CONTENTS";
import { LINKS } from "../../../config/LINKS";
import { getReward } from "../../utils";
import { sendNotification } from "../navigation/navigation_slice";
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
      dispatch(sendNotification(LINKS.storage.id));
    }
  };
