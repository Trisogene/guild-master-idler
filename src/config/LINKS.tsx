import CraftingView from "../pages/Crafting/CraftingView";
import Guild from "../pages/Guild/GuildView";
import Recruit from "../pages/Recruit/RecruitView";
import Storage from "../pages/Storage/StorageView";
import { T_LinksConfig } from "../types/types.d";

export const LINKS: T_LinksConfig = {
  recruit: {
    id: "recruit",
    label: "Recruit",
    component: <Recruit />,
  },
  guild: {
    id: "guild",
    label: "Guild",
    component: <Guild />,
  },
  storage: {
    id: "storage",
    label: "Storage",
    component: <Storage />,
  },
  crafting: {
    id: "crafting",
    label: "Crafting",
    component: <CraftingView />,
  },
};
