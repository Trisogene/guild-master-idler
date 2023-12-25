import { T_Player } from "../../config/config.d";
import { addPlayerThunk } from "../player/playerThunk";
import { AppDispatch } from "../store";
import { initPlayerTimer } from "../timer/timer_slice";

import { decreaseAvailablePicks, removeRecruit } from "./recruitSlice";

export const recruitPlayerThunk =
  (recruit: T_Player): any =>
  (dispatch: AppDispatch) => {
    dispatch(removeRecruit(recruit.id));
    dispatch(decreaseAvailablePicks());
    dispatch(addPlayerThunk(recruit));
    dispatch(initPlayerTimer(recruit.id));
  };
