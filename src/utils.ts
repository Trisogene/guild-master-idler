import uuid from "react-uuid";

import _ from "lodash";
import { version } from "../package.json";
import { RECRUITS } from "./config/config";
import { T_ContentReward } from "./config/config.d";
import { T_ReduxState } from "./config/store.d";

export const getReward = (rewards: T_ContentReward[]) => {
  const random = _.random(0, 1, true);
  let cumulativeProbability = 0;
  return _.find(rewards, (reward) => {
    cumulativeProbability += reward.possibility;
    return random <= cumulativeProbability;
  });
};

export const loadState = () => {
  if (localStorage.getItem("version") !== version) {
    localStorage.clear();
    localStorage.setItem("version", version);
  } else {
    try {
      const serializedState = localStorage.getItem("state");
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
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
    ...RECRUITS[recruitConfigs[randomIndex]],
    id: uuid(),
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
