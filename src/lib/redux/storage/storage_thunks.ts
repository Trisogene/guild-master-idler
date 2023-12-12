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
      dispatch(addItem({ itemId: reward.item, quantity: 1 }));
      dispatch(sendNotification(LINKS.storage.id));
    }
  };
