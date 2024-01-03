import { PayloadAction } from "@reduxjs/toolkit";
import { ID_Content, ID_Role, T_Player } from "../../config/config.d";
import { T_PlayersSlice } from "../../config/store.d";

const addPlayer = (
  state: T_PlayersSlice,
  { payload: player }: PayloadAction<T_Player>
) => {
  state.players[player.id] = player;
};

const changePlayerContent = (
  state: T_PlayersSlice,
  {
    payload: { playerId, contentId },
  }: PayloadAction<{ playerId: string; contentId: ID_Content }>
) => {
  if (playerId in state.players) {
    state.players[playerId].currentContent = contentId;
  }
};

const setPlayerRole = (
  state: T_PlayersSlice,
  {
    payload: { playerId, role },
  }: PayloadAction<{ playerId: string; role: ID_Role }>
) => {
  state.players[playerId].role = role;
};

export const playerActions = {
  addPlayer,
  changePlayerContent,
  setPlayerRole,
};
