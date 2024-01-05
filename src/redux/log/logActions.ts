import { T_Log, T_LogSlice } from "../../config/store.d";

const addLog = (state: T_LogSlice, { payload: log }: { payload: T_Log }) => {
  state.logs.unshift(log);
  if (state.logs.length > 15) {
    state.logs.pop();
  }
};

export const logActions = {
  addLog,
};
