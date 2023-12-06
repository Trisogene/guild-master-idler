import armorProfeciency from "../assets/perks/armorProfeciency.svg";
import customPerk from "../assets/perks/customPerk.svg";
import gatheringProfeciency from "../assets/perks/gatheringProfeciency.svg";
import weaponProfeciency from "../assets/perks/weaponProfeciency.svg";
import { T_PerksConfig } from "../types/types.d";

export const PERKS: T_PerksConfig = {
  /* ---------------------------------- Armor --------------------------------- */
  clothArmorProfeciency: {
    id: "clothArmorProfeciency",
    label: "Cloth Armor Profeciency",
    description: "Cloth Armor EXP%",
    img: armorProfeciency,
  },
  leatherArmorProfeciency: {
    id: "leatherArmorProfeciency",
    label: "Leather Armor Profeciency",
    description: "Leather Armor EXP%",
    img: armorProfeciency,
  },
  heavyArmorProfeciency: {
    id: "heavyArmorProfeciency",
    label: "Heavy Armor Profeciency",
    description: "Heavy Armor EXP%",
    img: armorProfeciency,
  },
  /* ---------------------------------- Weapons --------------------------------- */
  swordProfeciency: {
    id: "swordProfeciency",
    label: "Sword Profeciency",
    description: "Swords EXP%",
    img: weaponProfeciency,
  },
  axeProfeciency: {
    id: "axeProfeciency",
    label: "Axe Profeciency",
    description: "Axes EXP%",
    img: weaponProfeciency,
  },
  maceProfeciency: {
    id: "maceProfeciency",
    label: "Mace Profeciency",
    description: "Maces EXP%",
    img: weaponProfeciency,
  },
  hammerProfeciency: {
    id: "hammerProfeciency",
    label: "Hammer Profeciency",
    description: "Hammers EXP%",
    img: weaponProfeciency,
  },
  bowProfeciency: {
    id: "bowProfeciency",
    label: "Bow Profeciency",
    description: "Bows EXP%",
    img: weaponProfeciency,
  },
  fireStaffProfeciency: {
    id: "fireStaffProfeciency",
    label: "Fire Staff Profeciency",
    description: "Fire staffs EXP%",
    img: weaponProfeciency,
  },
  arcaneStaffProfeciency: {
    id: "arcaneStaffProfeciency",
    label: "Arcane Staff Profeciency",
    description: "Arcane staffs EXP%",
    img: weaponProfeciency,
  },
  holyStaffProfeciency: {
    id: "holyStaffProfeciency",
    label: "Holy Staff Profeciency",
    description: "Holy staffs EXP%",
    img: weaponProfeciency,
  },
  /* ---------------------------------- Gathering --------------------------------- */
  miningProfeciency: {
    id: "miningProfeciency",
    label: "Mining Profeciency",
    description: "Mining EXP%",
    img: gatheringProfeciency,
  },
  woodcuttingProfeciency: {
    id: "woodcuttingProfeciency",
    label: "Woodcutting Profeciency",
    description: "Woodcutting EXP%",
    img: gatheringProfeciency,
  },
  fiberHarvestingProfeciency: {
    id: "fiberHarvestingProfeciency",
    label: "Fiber Harvesting Profeciency",
    description: "Harvesting fiber EXP%",
    img: gatheringProfeciency,
  },
  stoneHarvestingProfeciency: {
    id: "stoneHarvestingProfeciency",
    label: "Stone Harvesting Profeciency",
    description: "Harvesting stone EXP%",
    img: gatheringProfeciency,
  },
  fishingProfeciency: {
    id: "fishingProfeciency",
    label: "Fishing Profeciency",
    description: "Fishing EXP%",
    img: gatheringProfeciency,
  },
  hideHarvestingProfeciency: {
    id: "hideHarvestingProfeciency",
    label: "Hide Harvesting Profeciency",
    description: "Harvesting hide EXP%",
    img: gatheringProfeciency,
  },
  /* --------------------------------- Custom --------------------------------- */
  corruptedWeaponProfeciency: {
    id: "corruptedWeaponProfeciency",
    label: "Corrupted Weapon Profeciency",
    description: "Corrupted weapons EXP%",
    img: customPerk,
  },
};
