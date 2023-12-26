import { T_Player } from "../../config/config.d";
import { E_Log_Type, T_ReduxState } from "../../config/store.d";
import { addLog } from "../log/logSlice";
import { addPlayerThunk } from "../player/playerThunk";
import { AppDispatch } from "../store";
import { initPlayerTimer } from "../timer/timerSlice";
import { setSelectedRecruitPlayer } from "../ui/uiSlice";

import { removeRecruit } from "./recruitSlice";

export const recruitPlayerThunk =
  (recruit: T_Player): any =>
  (dispatch: AppDispatch, getState: () => T_ReduxState) => {
    const state = getState();
    dispatch(removeRecruit(recruit.id));
    if (state.ui.recruit.selectedPlayer === recruit.id) {
      dispatch(setSelectedRecruitPlayer(null));
    }
    dispatch(addPlayerThunk(recruit));
    dispatch(initPlayerTimer(recruit.id));
    dispatch(
      addLog({
        type: E_Log_Type.recruit,
        timestamp: state.timer.timers.clock,
        playerName: recruit.name,
      })
    );
  };
