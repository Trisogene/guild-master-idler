import { PayloadAction } from "@reduxjs/toolkit";
import { E_Content, T_Player } from "../../config/config.d";
import { T_PlayersSlice } from "../../config/store.d";

const addPlayer = (
  state: T_PlayersSlice,
  { payload: player }: PayloadAction<T_Player>
) => {
  state.players[player.id] = player;
  if (!state.currentlySelectedPlayer) {
    state.currentlySelectedPlayer = player.id;
  }
};

const changePlayerContent = (
  state: T_PlayersSlice,
  {
    payload: { playerId, contentId },
  }: PayloadAction<{ playerId: string; contentId: E_Content }>
) => {
  if (playerId in state.players) {
    state.players[playerId].currentContent = contentId;
  }
};

const setCurrentlySelectedPlayer = (
  state: T_PlayersSlice,
  { payload: playerId }: PayloadAction<string>
) => {
  state.currentlySelectedPlayer = playerId;
};

export const playerActions = {
  addPlayer,
  changePlayerContent,
  setCurrentlySelectedPlayer,
};
