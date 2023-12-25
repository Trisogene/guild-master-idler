import _ from "lodash";

import { CONTENTS, TIMERS } from "../../config/config";
import { E_Content } from "../../config/config.d";
import { T_ReduxState } from "../../config/store.d";
import { changePlayerContent } from "../player/playerSlice";
import { updateRecruits } from "../recruit/recruitSlice";
import { giveContentReward } from "../storage/storage_thunks";
import { AppDispatch } from "../store";
import { reset, tick } from "./timer_slice";

export const startTimers =
  () => (dispatch: AppDispatch, getState: () => T_ReduxState) => {
    setInterval(() => {
      const state = getState();

      /* ------------------------------- clockTimer ------------------------------- */
      if (state.timer.timers.clock < TIMERS.clock.duration) {
        dispatch(tick({ timerName: "clock" }));
      } else {
        dispatch(reset({ timerName: "clock" }));
      }

      /* ----------------------------- recruitsTimers ----------------------------- */
      if (state.timer.timers.recruit < TIMERS.recruit.duration) {
        dispatch(tick({ timerName: "recruit" }));
      } else {
        dispatch(updateRecruits());
        dispatch(reset({ timerName: "recruit" }));
      }

      /* ------------------------------ playersTimers ----------------------------- */
      Object.values(state.players.players).forEach((player) => {
        const playerContent = CONTENTS[player.currentContent];
        const playerTimer = state.timer.timers.players[player.id];
        const isContentComplete = playerTimer >= playerContent.timeToComplete;

        if (isContentComplete) {
          completeContent(player.id, player.currentContent, dispatch);
        } else {
          dispatch(tick({ timerName: "players", timerId: player.id }));
        }
      });
    }, 1000);
  };

export const advancePlayerContent =
  (playerId: string) =>
  (dispatch: AppDispatch, getState: () => T_ReduxState) => {
    const state = getState();
    const player = state.players.players[playerId];
    const playerContent = CONTENTS[player.currentContent];
    const playerTimer = state.timer.timers.players[playerId];
    const isContentComplete = playerTimer >= playerContent.timeToComplete;

    if (isContentComplete) {
      completeContent(playerId, player.currentContent, dispatch);
    } else {
      dispatch(tick({ timerName: "players", timerId: playerId }));
    }
  };

/* ------------------------------ SubFunctions ------------------------------ */
const completeContent = (
  playerId: string,
  contentId: string,
  dispatch: AppDispatch
) => {
  dispatch(reset({ timerName: "players", timerId: playerId }));
  dispatch(giveContentReward(contentId));
  dispatch(
    changePlayerContent({
      playerId,
      contentId:
        (_.sample(Object.keys(CONTENTS)) as E_Content) || E_Content.sleeping,
    })
  );
};
