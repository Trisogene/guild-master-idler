import { createSlice } from "@reduxjs/toolkit";
import { T_PlayerConfig, T_PlayersSlice } from "../../../types/types.d";

import { PayloadAction } from "@reduxjs/toolkit";

const addPlayerHandler = (
  state: T_PlayersSlice,
  { payload: player }: PayloadAction<T_PlayerConfig>
) => {
  state.players[player.id] = player;
};

const changePlayerContentHandler = (
  state: T_PlayersSlice,
  {
    payload: { playerId, contentId },
  }: PayloadAction<{ playerId: string; contentId: string }>
) => {
  if (playerId in state.players) {
    state.players[playerId].currentContent = contentId;
  }
};

export const player_slice = createSlice({
  name: "players",
  initialState: {
    players: {},
  },
  reducers: {
    addPlayer: addPlayerHandler,
    changePlayerContent: changePlayerContentHandler,
  },
});

export const { addPlayer, changePlayerContent } = player_slice.actions;
export default player_slice.reducer;
