import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getRandomCharacter } from "../../../config/RECRUITS";
import {
  T_PlayerConfig,
  T_PlayersConfig,
  T_RecruitSlice,
} from "../../../types/types.d";
import { AppDispatch } from "../store";
import { initPlayerTimer } from "./gameManager_slice";
import { addPlayer } from "./players_slice";

const updateRecruitsHandler = (state: T_RecruitSlice) => {
  const randomRecruits: T_PlayersConfig = {};
  for (let i = 0; i < 5; i++) {
    const randomRecruit = getRandomCharacter();
    randomRecruits[randomRecruit.id] = randomRecruit;
  }
  state.currentlySelectedRecruit = null;
  state.recruits = randomRecruits;
};

const removeRecruitHandler = (
  state: T_RecruitSlice,
  { payload: recruitId }: PayloadAction<string>
) => {
  state.recruits = Object.fromEntries(
    Object.entries(state.recruits).filter(([key, value]) => key !== recruitId)
  );
  if (state.currentlySelectedRecruit === recruitId) {
    state.currentlySelectedRecruit = null;
  }
};

const setCurrentSelectedRecruitHandler = (
  state: T_RecruitSlice,
  { payload: recruitId }: PayloadAction<string>
) => {
  state.currentlySelectedRecruit = recruitId;
};

export const recruit_slice = createSlice({
  name: "recruit",
  initialState: {
    recruits: {},
    currentlySelectedRecruit: null,
  },
  reducers: {
    updateRecruits: updateRecruitsHandler,
    removeRecruit: removeRecruitHandler,
    setCurrentSelectedRecruit: setCurrentSelectedRecruitHandler,
  },
});

export default recruit_slice.reducer;
export const { updateRecruits, removeRecruit, setCurrentSelectedRecruit } =
  recruit_slice.actions;

export const recruitPlayer =
  (recruit: T_PlayerConfig): any =>
  (dispatch: AppDispatch) => {
    dispatch(removeRecruit(recruit.id));
    dispatch(addPlayer(recruit));
    dispatch(initPlayerTimer(recruit.id));
  };
