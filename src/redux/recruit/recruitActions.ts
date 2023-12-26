import { PayloadAction } from "@reduxjs/toolkit";
import { T_Players } from "../../config/config.d";
import { T_RecruitSlice } from "../../config/store.d";
import { getRandomCharacter } from "../../utils";

const updateRecruits = (state: T_RecruitSlice) => {
  const randomRecruits: T_Players = {};
  for (let i = 0; i < 5; i++) {
    const randomRecruit = getRandomCharacter();
    randomRecruits[randomRecruit.id] = randomRecruit;
  }
  state.avaialablePicks = 2;
  // state.currentlySelectedRecruit = Object.keys(randomRecruits)[0];
  state.recruits = randomRecruits;
};

const removeRecruit = (
  state: T_RecruitSlice,
  { payload: recruitId }: PayloadAction<string>
) => {
  state.recruits = Object.fromEntries(
    Object.entries(state.recruits).filter(([key, value]) => key !== recruitId)
  );
  state.avaialablePicks--;
};

export const recruitActions = {
  updateRecruits,
  removeRecruit,
};
