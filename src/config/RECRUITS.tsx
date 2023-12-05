import uuid from "react-uuid";
import { T_RecruitsConfig } from "../types/types.d";
import { CONTENTS } from "./CONTENTS";
import { RACES } from "./RACES";

export const RECRUITS: T_RecruitsConfig = {
  giantito: {
    name: "Giantito",
    race: RACES.giant.id,
  },
  umanito: {
    name: "Umanito",
    race: RACES.human.id,
  },
  elfito: {
    name: "Elfito",
    race: RACES.elf.id,
  },
  dwarfito: {
    name: "Dwarfito",
    race: RACES.dwarf.id,
  },
  gnomito: {
    name: "Gnomito",
    race: RACES.gnome.id,
  },
  fairyto: {
    name: "Fairyto",
    race: RACES.fairy.id,
  },
  demonito: {
    name: "Demonito",
    race: RACES.demon.id,
  },
  vikingito: {
    name: "Vikingito",
    race: RACES.viking.id,
  },
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
