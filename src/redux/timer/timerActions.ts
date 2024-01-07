import { PayloadAction } from "@reduxjs/toolkit";
import { T_TimerSlice } from "../../config/store.d";

type T_TimerAction = {
  timerName: string;
  timerId?: string;
  tickValue?: number;
};
const tick = (
  state: T_TimerSlice,
  {
    payload: { timerName, timerId, tickValue = 1 },
  }: PayloadAction<T_TimerAction>
) => {
  if (timerName in state.timers) {
    const key = timerName as keyof typeof state.timers;

    switch (key) {
      case "players":
        if (timerId) {
          state.timers[key][timerId] += tickValue;
        }
        break;
      default:
        state.timers[key] += 1;
        break;
    }
  }
};

const reset = (
  state: T_TimerSlice,
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

const initPlayerTimer = (
  state: T_TimerSlice,
  { payload: playerId }: PayloadAction<string>
) => {
  state.timers.players[playerId] = 0;
};

export const timerActions = {
  tick,
  reset,
  initPlayerTimer,
};
