import { T_ContentRewardConfig, T_ReduxState } from "../types/types.d";

import _ from "lodash";

export const getReward = (rewards: T_ContentRewardConfig[]) => {
  const random = _.random(0, 1, true);
  let cumulativeProbability = 0;
  return _.find(rewards, (reward) => {
    cumulativeProbability += reward.possibility;
    return random <= cumulativeProbability;
  });
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: T_ReduxState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {
    // ignore write errors
  }
};
