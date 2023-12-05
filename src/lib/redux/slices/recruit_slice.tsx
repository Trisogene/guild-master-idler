import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getRandomCharacter } from "../../../config/RECRUITS";
import { T_PlayerConfig, T_RecruitSlice } from "../../../types/types.d";
import { AppDispatch } from "../store";
import { initPlayerTimer } from "./gameManager_slice";
import { addPlayer } from "./players_slice";

const updateRecruitsHandler = (state: T_RecruitSlice) => {
  state.recruits = Array.from({ length: 5 }, () => getRandomCharacter());
};

const removeRecruitHandler = (
  state: T_RecruitSlice,
  { payload: recruitId }: PayloadAction<string>
) => {
  state.recruits = state.recruits.filter((recruit) => recruit.id !== recruitId);
};

export const recruit_slice = createSlice({
  name: "recruit",
  initialState: {
    recruits: Array.from({ length: 5 }, () => getRandomCharacter()),
  },
  reducers: {
    updateRecruits: updateRecruitsHandler,
    removeRecruit: removeRecruitHandler,
  },
});

export default recruit_slice.reducer;
export const { updateRecruits, removeRecruit } = recruit_slice.actions;

export const recruitPlayer =
  (player: T_PlayerConfig): any =>
  (dispatch: AppDispatch) => {
    dispatch(removeRecruit(player.id));
    dispatch(addPlayer(player));
    dispatch(initPlayerTimer(player.id));
  };
