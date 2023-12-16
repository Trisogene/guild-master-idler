import { PayloadAction } from "@reduxjs/toolkit";
import { T_PlayersConfigs } from "../../../config/config";
import { getRandomCharacter } from "../../utils";
import { T_RecruitSlice } from "../store.d";

const updateRecruits = (state: T_RecruitSlice) => {
  const randomRecruits: T_PlayersConfigs = {};
  for (let i = 0; i < 5; i++) {
    const randomRecruit = getRandomCharacter();
    randomRecruits[randomRecruit.id] = randomRecruit;
  }
  state.avaialablePicks = 2;
  state.currentlySelectedRecruit = Object.keys(randomRecruits)[0];
  state.recruits = randomRecruits;
};

const removeRecruit = (
  state: T_RecruitSlice,
  { payload: recruitId }: PayloadAction<string>
) => {
  state.recruits = Object.fromEntries(
    Object.entries(state.recruits).filter(([key, value]) => key !== recruitId)
  );
  if (state.currentlySelectedRecruit === recruitId) {
    if (Object.entries(state.recruits).length > 0) {
      state.currentlySelectedRecruit = Object.keys(state.recruits)[0];
    } else {
      state.currentlySelectedRecruit = null;
    }
  }
};

const decreaseAvailablePicks = (state: T_RecruitSlice) => {
  state.avaialablePicks--;
};

const setCurrentSelectedRecruit = (
  state: T_RecruitSlice,
  { payload: recruitId }: PayloadAction<string>
) => {
  state.currentlySelectedRecruit = recruitId;
};

export const recruitActions = {
  updateRecruits,
  removeRecruit,
  setCurrentSelectedRecruit,
  decreaseAvailablePicks,
};
