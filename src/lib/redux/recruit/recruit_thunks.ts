import { T_PlayerConfig } from "../../../types/types.d";
import { addPlayer } from "../player/players_slice";
import { AppDispatch } from "../store";
import { initPlayerTimer } from "../timer/timer_slice";

import { decreaseAvailablePicks, removeRecruit } from "./recruit_slice";

export const recruitPlayer =
  (recruit: T_PlayerConfig): any =>
  (dispatch: AppDispatch) => {
    dispatch(removeRecruit(recruit.id));
    dispatch(decreaseAvailablePicks());
    dispatch(addPlayer(recruit));
    dispatch(initPlayerTimer(recruit.id));
  };
