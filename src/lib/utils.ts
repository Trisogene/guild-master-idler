import uuid from "react-uuid";
import { RECRUITS } from "../config/RECRUITS";
import { T_ContentRewardConfig, T_ReduxState } from "../types/types.d";

import _ from "lodash";
import { CONTENTS } from "../config/CONTENTS";

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

export const getRandomCharacter = () => {
  const recruitConfigs = Object.keys(RECRUITS);
  const randomIndex = Math.floor(Math.random() * recruitConfigs.length);
  const randomCharacter = {
    id: uuid(),
    ...RECRUITS[recruitConfigs[randomIndex]],
    currentContent: CONTENTS.gathering.id,
  };
  return randomCharacter;
};

export const pickKeys = (obj: Record<string, any>, keys: string[]) => {
  return keys.reduce((newObj, key) => {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
    return newObj;
  }, {} as Record<string, any>);
};
