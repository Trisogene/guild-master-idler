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
    description: "Gain more exp when wearing cloth armor",
    img: armorProfeciency,
  },
  leatherArmorProfeciency: {
    id: "leatherArmorProfeciency",
    label: "Leather Armor Profeciency",
    description: "Gain more exp when wearing leather armor",
    img: armorProfeciency,
  },
  heavyArmorProfeciency: {
    id: "heavyArmorProfeciency",
    label: "Heavy Armor Profeciency",
    description: "Gain more exp when wearing heavy armor",
    img: armorProfeciency,
  },
  /* ---------------------------------- Weapons --------------------------------- */
  swordProfeciency: {
    id: "swordProfeciency",
    label: "Sword Profeciency",
    description: "Gain more exp when using swords",
    img: weaponProfeciency,
  },
  axeProfeciency: {
    id: "axeProfeciency",
    label: "Axe Profeciency",
    description: "Gain more exp when using axes",
    img: weaponProfeciency,
  },
  maceProfeciency: {
    id: "maceProfeciency",
    label: "Mace Profeciency",
    description: "Gain more exp when using maces",
    img: weaponProfeciency,
  },
  hammerProfeciency: {
    id: "hammerProfeciency",
    label: "Hammer Profeciency",
    description: "Gain more exp when using hammers",
    img: weaponProfeciency,
  },
  bowProfeciency: {
    id: "bowProfeciency",
    label: "Bow Profeciency",
    description: "Gain more exp when using bows",
    img: weaponProfeciency,
  },
  fireStaffProfeciency: {
    id: "fireStaffProfeciency",
    label: "Fire Staff Profeciency",
    description: "Gain more exp when using fire staffs",
    img: weaponProfeciency,
  },
  arcaneStaffProfeciency: {
    id: "arcaneStaffProfeciency",
    label: "Arcane Staff Profeciency",
    description: "Gain more exp when using arcane staffs",
    img: weaponProfeciency,
  },
  holyStaffProfeciency: {
    id: "holyStaffProfeciency",
    label: "Holy Staff Profeciency",
    description: "Gain more exp when using holy staffs",
    img: weaponProfeciency,
  },
  /* ---------------------------------- Gathering --------------------------------- */
  miningProfeciency: {
    id: "miningProfeciency",
    label: "Mining Profeciency",
    description: "Gain more exp when mining",
    img: gatheringProfeciency,
  },
  woodcuttingProfeciency: {
    id: "woodcuttingProfeciency",
    label: "Woodcutting Profeciency",
    description: "Gain more exp when woodcutting",
    img: gatheringProfeciency,
  },
  fiberHarvestingProfeciency: {
    id: "fiberHarvestingProfeciency",
    label: "Fiber Harvesting Profeciency",
    description: "Gain more exp when harvesting fiber",
    img: gatheringProfeciency,
  },
  stoneHarvestingProfeciency: {
    id: "stoneHarvestingProfeciency",
    label: "Stone Harvesting Profeciency",
    description: "Gain more exp when harvesting stone",
    img: gatheringProfeciency,
  },
  fishingProfeciency: {
    id: "fishingProfeciency",
    label: "Fishing Profeciency",
    description: "Gain more exp when fishing",
    img: gatheringProfeciency,
  },
  hideHarvestingProfeciency: {
    id: "hideHarvestingProfeciency",
    label: "Hide Harvesting Profeciency",
    description: "Gain more exp when harvesting hide",
    img: gatheringProfeciency,
  },
  /* --------------------------------- Custom --------------------------------- */
  corruptedWeaponProfeciency: {
    id: "corruptedWeaponProfeciency",
    label: "Corrupted Weapon Profeciency",
    description: "Gain more exp when using corrupted weapons",
    img: customPerk,
  },
};
