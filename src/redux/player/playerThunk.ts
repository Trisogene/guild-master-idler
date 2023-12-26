import { T_Player } from "../../config/config.d";
import { T_ReduxState } from "../../config/store.d";
import { AppDispatch } from "../store";
import { setSelectedGuildPlayer } from "../ui/uiSlice";
import { addPlayer } from "./playerSlice";

export const addPlayerThunk =
  (player: T_Player): any =>
  (dispatch: AppDispatch, getState: () => T_ReduxState) => {
    dispatch(addPlayer(player));

    const ui = getState().ui;
    if (!ui.guild.selectedPlayer) {
      dispatch(setSelectedGuildPlayer(player.id));
    }
  };
