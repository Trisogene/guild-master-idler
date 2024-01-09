import _ from "lodash";

import { toast } from "react-toastify";
import uuid from "react-uuid";
import ToastRecruitsUpdated from "../../components/ToastRecruitsUpdated/ToastRecruitsUpdated";
import { CONTENTS, TIMERS } from "../../config/config";
import { ID_Content, ID_Notification, ItemStack } from "../../config/config.d";
import { E_Log_Type, T_ReduxState } from "../../config/store.d";
import { addLog } from "../log/logSlice";
import { changePlayerContent } from "../player/playerSlice";
import { updateRecruits } from "../recruit/recruitSlice";
import { giveContentReward } from "../storage/storageThunks";
import { AppDispatch } from "../store";
import { addNotification } from "../ui/uiSlice";
import { reset, tick } from "./timerSlice";

export const startTimers =
  () => (dispatch: AppDispatch, getState: () => T_ReduxState) => {
    setInterval(() => {
      const state = getState();

      /* ----------------------------- UpdateRecruits ----------------------------- */

      if (state.timer.timers.clock / 60 === 0) {
        dispatch(updateRecruits());
        if (state.ui.notification.messages.length === 0) {
          dispatch(addNotification(ID_Notification.avaialablePicks));
        }
        toast(<ToastRecruitsUpdated />, {
          toastId: "recruitsUpdated",
        });
      }

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
          completeContent(player.id, player.currentContent, dispatch, state);
        } else {
          dispatch(tick({ timerName: "players", timerId: player.id }));
        }
      });
    }, 1000);
  };

export const advancePlayerContent =
  (playerId: string) =>
  (dispatch: AppDispatch, getState: () => T_ReduxState) => {
    console.log("advancePlayerContent");
    const state = getState();
    const player = state.players.players[playerId];
    const playerContent = CONTENTS[player.currentContent];
    const playerTimer = state.timer.timers.players[playerId];
    const isContentComplete = playerTimer >= playerContent.timeToComplete;

    if (isContentComplete) {
      completeContent(playerId, player.currentContent, dispatch, state);
    } else {
      dispatch(
        tick({ timerName: "players", timerId: playerId, tickValue: 10 })
      );
    }
  };

/* ------------------------------ SubFunctions ------------------------------ */
const completeContent = (
  playerId: string,
  contentId: ID_Content,
  dispatch: AppDispatch,
  state: T_ReduxState
) => {
  dispatch(reset({ timerName: "players", timerId: playerId }));
  const reward: ItemStack = dispatch(giveContentReward(contentId));
  const newContent = _.sample(Object.keys(CONTENTS)) as ID_Content;
  const player = state.players.players[playerId];
  dispatch(
    changePlayerContent({
      playerId,
      contentId: newContent,
    })
  );

  if (reward?.quantity && reward.quantity > 0) {
    dispatch(
      addLog({
        id: uuid(),
        type: E_Log_Type.reward,
        timestamp: state.timer.timers.clock,
        playerName: player.name,
        playerRace: player.race,
        contentId: contentId,
        reward: reward,
      })
    );
  }
};
