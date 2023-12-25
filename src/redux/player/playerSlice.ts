import { createSlice } from "@reduxjs/toolkit";
import { playerActions } from "./playerActions";

export const playerSlice = createSlice({
  name: "players",
  initialState: {
    players: {},
  },
  reducers: playerActions,
});

export const { addPlayer, changePlayerContent, setPlayerRole } =
  playerSlice.actions;
export default playerSlice.reducer;
