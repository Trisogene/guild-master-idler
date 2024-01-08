import { PayloadAction } from "@reduxjs/toolkit";
import {
  ID_Content,
  ID_Equip_Slot,
  ID_Item,
  ID_Player_FightClass,
  T_Player,
} from "../../config/config.d";
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
  }: PayloadAction<{ playerId: string; role: ID_Player_FightClass }>
) => {
  state.players[playerId].class = role;
};

const setPlayerEquip = (
  state: T_PlayersSlice,
  {
    payload: { playerId, itemId, equipSlot },
  }: PayloadAction<{
    playerId: string;
    itemId: ID_Item | null;
    equipSlot: ID_Equip_Slot;
  }>
) => {
  state.players[playerId].equip[equipSlot] = itemId;
};

export const playerActions = {
  addPlayer,
  changePlayerContent,
  setPlayerRole,
  setPlayerEquip,
};
