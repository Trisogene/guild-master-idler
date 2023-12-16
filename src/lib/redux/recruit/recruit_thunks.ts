import { LINKS } from "../../../config/LINKS";
import { T_PlayerConfig } from "../../../config/config";
import { sendNotification } from "../navigation/navigation_slice";
import { addPlayer } from "../player/players_slice";
import { AppDispatch } from "../store";
import { initPlayerTimer } from "../timer/timer_slice";

import { decreaseAvailablePicks, removeRecruit } from "./recruit_slice";

export const recruitPlayer =
  (recruit: T_PlayerConfig): any =>
  (dispatch: AppDispatch) => {
    dispatch(sendNotification(LINKS.guild.id));
    dispatch(removeRecruit(recruit.id));
    dispatch(decreaseAvailablePicks());
    dispatch(addPlayer(recruit));
    dispatch(initPlayerTimer(recruit.id));
  };
