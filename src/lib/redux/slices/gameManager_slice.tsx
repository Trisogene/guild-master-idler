import { Dispatch, PayloadAction, createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { CONTENTS } from "../../../config/CONTENTS";
import { TIMERS } from "../../../config/TIMERS";
import { T_GameManager, T_ReduxState } from "../../../types/types.d";
import { changePlayerContent } from "./players_slice";
import { updateRecruits } from "./recruit_slice";
import { giveContentReward } from "./storage_slice";

type T_TimerAction = {
  timerName: string;
  timerId?: string;
};
const tickHandler = (
  state: T_GameManager,
  { payload }: PayloadAction<T_TimerAction>
) => {
  const { timerName, timerId } = payload;
  if (timerName in state.timers) {
    const key = timerName as keyof typeof state.timers;

    switch (key) {
      case "players":
        if (timerId) {
          state.timers[key][timerId] += 1;
        }
        break;
      default:
        state.timers[key] += 1;
        break;
    }
  }
};

const resetHandler = (
  state: T_GameManager,
  { payload }: PayloadAction<T_TimerAction>
) => {
  const { timerName, timerId } = payload;
  if (timerName in state.timers) {
    const key = timerName as keyof typeof state.timers;

    switch (key) {
      case "players":
        if (timerId) {
          state.timers[key][timerId] = 0;
        }
        break;
      default:
        state.timers[key] = 0;
        break;
    }
  }
};

const initPlayerTimerHandler = (
  state: T_GameManager,
  { payload: playerId }: PayloadAction<string>
) => {
  state.timers.players[playerId] = 0;
};

export const gameManager_slice = createSlice({
  name: "gameManager",
  initialState: {
    timers: {
      clock: 0,
      recruit: 0,
      players: {},
    },
  },
  reducers: {
    tick: tickHandler,
    reset: resetHandler,
    initPlayerTimer: initPlayerTimerHandler,
  },
});

export default gameManager_slice.reducer;
export const { tick, reset, initPlayerTimer } = gameManager_slice.actions;

export const startGameManager =
  () => (dispatch: Dispatch, getState: () => T_ReduxState) => {
    setInterval(() => {
      const state = getState();

      /* ------------------------------- clockTimer ------------------------------- */
      if (state.gameManager.timers.clock <= TIMERS.clock.duration) {
        dispatch(tick({ timerName: "clock" }));
      } else {
        dispatch(reset({ timerName: "clock" }));
      }

      /* ----------------------------- recruitsTimers ----------------------------- */
      if (state.gameManager.timers.recruit <= TIMERS.recruit.duration) {
        dispatch(tick({ timerName: "recruit" }));
      } else {
        dispatch(updateRecruits());
        dispatch(reset({ timerName: "recruit" }));
      }

      /* ------------------------------ playersTimers ----------------------------- */
      Object.values(state.players.players).forEach((player) => {
        const playerContent = CONTENTS[player.currentContent];
        const playerTimer = state.gameManager.timers.players[player.id];
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
