import { Avatar, Box, Button, Divider, Typography } from "@mui/joy";
import { useState } from "react";
import { RACES } from "../../config/config";
import { T_Player } from "../../config/config.d";
import PlayerInfoLore from "./components/PlayerInfoLore";
import PlayerInfoRole from "./components/PlayerInfoRole";
import PlayerInfoStats from "./components/PlayerInfoStats";

enum E_TABS {
  equip = "equip",
  role = "role",
  lore = "lore",
}

type T_Tabs = Record<E_TABS, T_Tab>;

type T_Tab = {
  id: E_TABS;
  label: string;
  component: (props: any) => JSX.Element;
};

const tabs: T_Tabs = {
  equip: {
    id: E_TABS.equip,
    label: "Equip",
    component: (props: any) => <div>Equip</div>,
  },
  role: {
    id: E_TABS.role,
    label: "Role",
    component: (props: any) => <PlayerInfoRole {...props} />,
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
  const [currentTab, setCurrentTab] = useState(E_TABS.role);
  return (
    <Box
      className="PlayerInfo"
      sx={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          minHeight: 24,
        }}
      >
        <Avatar src={race.img} />
        <Typography>{player.name}</Typography>
      </Box>
      <Divider />
      <Box
        sx={{ display: "flex", flexGrow: 1, maxHeight: "calc(100% - 24px)" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            p: 0.5,
            minWidth: 100,
            maxWidth: 100,
          }}
        >
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
        <Box sx={{ flexGrow: 1, maxHeight: "100%", overflowY: "auto" }}>
          {tabs[currentTab].component({ player: player })}
        </Box>
        <Divider orientation="vertical" />

        <PlayerInfoStats stats={player.stats} />
      </Box>
    </Box>
  );
};

export default PlayerInfo;
