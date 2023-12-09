import { T_PlayerConfig, T_PlayersSlice } from "../../../types/types.d";

import { PayloadAction } from "@reduxjs/toolkit";

const addPlayer = (
  state: T_PlayersSlice,
  { payload: player }: PayloadAction<T_PlayerConfig>
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
  }: PayloadAction<{ playerId: string; contentId: string }>
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
