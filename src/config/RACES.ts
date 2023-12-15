import demonSvg from "./../assets/characters/demon.svg";
import dwarfSvg from "./../assets/characters/dwarf.svg";
import elfSvg from "./../assets/characters/elf.svg";
import fairySvg from "./../assets/characters/fairy.svg";
import giantSvg from "./../assets/characters/giant.svg";
import gnomeSvg from "./../assets/characters/gnome.svg";
import humanSvg from "./../assets/characters/human.svg";
import vikingSvg from "./../assets/characters/viking.svg";
import { T_RacesConfig } from "./config";

export const RACES: T_RacesConfig = {
  giant: {
    id: "giant",
    label: "Giant",
    perks: [],
    img: giantSvg,
  },
  human: {
    id: "human",
    label: "Human",
    perks: [],
    img: humanSvg,
  },
  elf: {
    id: "elf",
    label: "Elf",
    perks: [],
    img: elfSvg,
  },
  dwarf: {
    id: "dwarf",
    label: "Dwarf",
    perks: [],
    img: dwarfSvg,
  },
  gnome: {
    id: "gnome",
    label: "Gnome",
    perks: [],
    img: gnomeSvg,
  },
  fairy: {
    id: "fairy",
    label: "Fairy",
    perks: [],
    img: fairySvg,
  },
  demon: {
    id: "demon",
    label: "Demon",
    perks: [],
    img: demonSvg,
  },
  viking: {
    id: "viking",
    label: "Viking",
    perks: [],
    img: vikingSvg,
  },
};
