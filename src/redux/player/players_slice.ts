import { createSlice } from "@reduxjs/toolkit";
import { playerActions } from "./player_actions";

export const player_slice = createSlice({
  name: "players",
  initialState: {
    players: {},
    currentlySelectedPlayer: null,
  },
  reducers: playerActions,
});

export const { addPlayer, changePlayerContent, setCurrentlySelectedPlayer } =
  player_slice.actions;
export default player_slice.reducer;
