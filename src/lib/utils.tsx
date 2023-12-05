import { T_ContentRewardConfig } from "../types/types.d";

import _ from "lodash";

export const getReward = (rewards: T_ContentRewardConfig[]) => {
  const random = _.random(0, 1, true);
  let cumulativeProbability = 0;
  return _.find(rewards, (reward) => {
    cumulativeProbability += reward.possibility;
    return random <= cumulativeProbability;
  });
};
