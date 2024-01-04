import { T_Log, T_LogSlice } from "../../config/store.d";

const addLog = (state: T_LogSlice, { payload: log }: { payload: T_Log }) => {
  state.logs.push(log);
  if (state.logs.length > 15) {
    state.logs.splice(0, 1);
  }
};

export const logActions = {
  addLog,
};
