import { Avatar, Box, Button, Divider, Typography } from "@mui/joy";
import { useState } from "react";
import { RACES } from "../../config/config";
import { T_Player } from "../../config/config.d";
import PlayerInfoLore from "./components/PlayerInfoLore";
import PlayerInfoStats from "./components/PlayerInfoStats";

enum E_TABS {
  stats = "stats",
  lore = "lore",
}

type T_Tabs = Record<E_TABS, T_Tab>;

type T_Tab = {
  id: E_TABS;
  label: string;
  component: (props: any) => JSX.Element;
};

const tabs: T_Tabs = {
  stats: {
    id: E_TABS.stats,
    label: "Stats",
    component: (props: any) => <PlayerInfoStats {...props} />,
  },
  lore: {
    id: E_TABS.lore,
    label: "Lore",
    component: (props: any) => <PlayerInfoLore {...props} />,
  },
};

interface I_PlayerInfo {
  player: T_Player;
}

const PlayerInfo = ({ player }: I_PlayerInfo) => {
  const race = RACES[player.race];
  const [currentTab, setCurrentTab] = useState(E_TABS.stats);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          p: 0.5,
        }}
      >
        <Avatar src={race.img} />
        <Typography>{player.name}</Typography>
      </Box>
      <Divider />
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, p: 0.5 }}>
          {Object.values(tabs).map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setCurrentTab(tab.id)}
              variant={currentTab === tab.id ? "solid" : "plain"}
              color="neutral"
            >
              {tab.label}
            </Button>
          ))}
        </Box>
        <Divider orientation="vertical" />
        {tabs[currentTab].component({ player: player })}
      </Box>
    </Box>
  );
};

export default PlayerInfo;
