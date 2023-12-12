import { T_ContentsConfig } from "../types/types.d";
import { ITEMS_DROP, ITEMS_RESOURCES } from "./ITEMS";

export const CONTENTS: T_ContentsConfig = {
  sleeping: {
    id: "sleeping",
    label: "Sleeping",
    timeToComplete: 20,
    rewards: [],
  },
  gathering: {
    id: "gathering",
    label: "Gathering",
    timeToComplete: 10,
    rewards: [
      {
        item: ITEMS_RESOURCES.fiber.id,
        possibility: 0.2,
      },
      {
        item: ITEMS_RESOURCES.wood.id,
        possibility: 0.2,
      },
      {
        item: ITEMS_RESOURCES.stone.id,
        possibility: 0.2,
      },
      {
        item: ITEMS_RESOURCES.ore.id,
        possibility: 0.2,
      },
      {
        item: ITEMS_RESOURCES.hide.id,
        possibility: 0.2,
      },
    ],
  },
  dungeoning: {
    id: "dungeoning",
    label: "Dungeoning",
    timeToComplete: 15,
    rewards: [
      {
        item: ITEMS_DROP.rune.id,
        possibility: 0.5,
      },
      {
        item: ITEMS_DROP.soul.id,
        possibility: 0.25,
      },
      {
        item: ITEMS_DROP.relic.id,
        possibility: 0.125,
      },
      {
        item: ITEMS_DROP.artifact.id,
        possibility: 0.125,
      },
    ],
  },
};
