import { T_LogSlice } from "../../config/store.d";

const addLog = (state: T_LogSlice, { payload: log }: { payload: string }) => {
  state.logs.push(log);
  if (state.logs.length > 5) {
    state.logs.splice(0, 1);
  }
};

export const logActions = {
  addLog,
};
