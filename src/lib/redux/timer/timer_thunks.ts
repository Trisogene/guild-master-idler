import { Dispatch } from "@reduxjs/toolkit";
import _ from "lodash";
import { CONTENTS } from "../../../config/CONTENTS";
import { TIMERS } from "../../../config/TIMERS";
import { T_ReduxState } from "../../../types/types.d";
import { changePlayerContent } from "../player/players_slice";
import { updateRecruits } from "../recruit/recruit_slice";
import { giveContentReward } from "../storage/storage_slice";
import { reset, tick } from "./timer_slice";

export const startTimers =
  () => (dispatch: Dispatch, getState: () => T_ReduxState) => {
    setInterval(() => {
      const state = getState();

      /* ------------------------------- clockTimer ------------------------------- */
      if (state.timer.timers.clock <= TIMERS.clock.duration) {
        dispatch(tick({ timerName: "clock" }));
      } else {
        dispatch(reset({ timerName: "clock" }));
      }

      /* ----------------------------- recruitsTimers ----------------------------- */
      if (state.timer.timers.recruit <= TIMERS.recruit.duration) {
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
          dispatch(reset({ timerName: "players", timerId: player.id }));
          dispatch(giveContentReward(player.currentContent));
          dispatch(
            changePlayerContent({
              playerId: player.id,
              contentId: _.sample(Object.keys(CONTENTS)) || "idle",
            })
          );
        } else {
          dispatch(tick({ timerName: "players", timerId: player.id }));
        }
      });
    }, 1000);
  };
