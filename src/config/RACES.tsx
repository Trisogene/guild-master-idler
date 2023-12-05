import { T_RacesConfig } from "../types/types.d";
import demonSvg from "./../assets/characters/demon.svg";
import dwarfSvg from "./../assets/characters/dwarf.svg";
import elfSvg from "./../assets/characters/elf.svg";
import fairySvg from "./../assets/characters/fairy.svg";
import giantSvg from "./../assets/characters/giant.svg";
import gnomeSvg from "./../assets/characters/gnome.svg";
import humanSvg from "./../assets/characters/human.svg";
import vikingSvg from "./../assets/characters/viking.svg";
import { COLORS } from "./COLOR";
import { PERKS } from "./PERKS";

export const RACES: T_RacesConfig = {
  giant: {
    id: "giant",
    label: "Giant",
    perks: [
      PERKS.heavyArmorProfeciency.id,
      PERKS.maceProfeciency.id,
      PERKS.hammerProfeciency.id,
    ],
    color: COLORS.giant,
    img: giantSvg,
  },
  human: {
    id: "human",
    label: "Human",
    perks: [PERKS.leatherArmorProfeciency.id, PERKS.swordProfeciency.id],
    color: COLORS.human,
    img: humanSvg,
  },
  elf: {
    id: "elf",
    label: "Elf",
    perks: [PERKS.leatherArmorProfeciency.id, PERKS.bowProfeciency.id],
    color: COLORS.elf,
    img: elfSvg,
  },
  dwarf: {
    id: "dwarf",
    label: "Dwarf",
    perks: [PERKS.heavyArmorProfeciency.id, PERKS.axeProfeciency.id],
    color: COLORS.dwarf,
    img: dwarfSvg,
  },
  gnome: {
    id: "gnome",
    label: "Gnome",
    perks: [PERKS.clothArmorProfeciency.id, PERKS.fireStaffProfeciency.id],
    color: COLORS.gnome,
    img: gnomeSvg,
  },
  fairy: {
    id: "fairy",
    label: "Fairy",
    perks: [PERKS.clothArmorProfeciency.id, PERKS.holyStaffProfeciency.id],
    color: COLORS.fairy,
    img: fairySvg,
  },
  demon: {
    id: "demon",
    label: "Demon",
    perks: [PERKS.corruptedWeaponProfeciency.id],
    img: demonSvg,
    color: COLORS.demon,
  },
  viking: {
    id: "viking",
    label: "Viking",
    perks: [PERKS.heavyArmorProfeciency.id, PERKS.arcaneStaffProfeciency.id],
    color: COLORS.viking,
    img: vikingSvg,
  },
};
