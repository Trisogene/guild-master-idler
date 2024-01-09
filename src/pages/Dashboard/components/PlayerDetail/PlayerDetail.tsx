import { Avatar, Box, Button, Card, Divider, Typography } from "@mui/joy";
import { useState } from "react";
import { useSelector } from "react-redux";
import equipIcon from "../../../../assets/equip.svg";
import loreIcon from "../../../../assets/lore.svg";
import roleIcon from "../../../../assets/role.svg";
import { T_ReduxState } from "../../../../config/store.d";

import PlayerDetailEquip from "./components/PlayerDetailEquip";
import PlayerDetailLore from "./components/PlayerDetailLore";
import PlayerDetailRole from "./components/PlayerDetailRole";

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
  icon: string;
};

const tabs: T_Tabs = {
  equip: {
    id: E_TABS.equip,
    label: "Equip",
    component: (props: any) => <PlayerDetailEquip {...props} />,
    icon: equipIcon,
  },
  role: {
    id: E_TABS.role,
    label: "Role",
    component: (props: any) => <PlayerDetailRole {...props} />,
    icon: roleIcon,
  },
  lore: {
    id: E_TABS.lore,
    label: "Lore",
    component: (props: any) => <PlayerDetailLore {...props} />,
    icon: loreIcon,
  },
};

const PlayerDetail = () => {
  const selectedPlayerId = useSelector(
    (state: T_ReduxState) => state.ui.guild.selectedPlayer
  );
  const player = useSelector(
    (state: T_ReduxState) => state.players.players?.[selectedPlayerId ?? ""]
  );

  const [currentTab, setCurrentTab] = useState(E_TABS.equip);

  return (
    <Card
      sx={{
        height: "100%",
        gap: 0.5,
        p: 0.5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: 1,
        }}
      >
        {Object.values(tabs).map((tab) => (
          <Button
            size="sm"
            fullWidth
            key={tab.id}
            onClick={() => setCurrentTab(tab.id)}
            variant={currentTab === tab.id ? "solid" : "plain"}
            color="neutral"
          >
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
              }}
            >
              <Avatar src={tab.icon} />
              <Typography
                sx={{
                  display: {
                    xs: "none",
                    xl: "block",
                  },
                }}
              >
                {tab.label}
              </Typography>
            </Box>
          </Button>
        ))}
      </Box>

      <Divider />

      <Card
        className="PlayerInfo"
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          gap: 1,
          overflow: "auto",
        }}
      >
        {player ? (
          <>
            {currentTab === E_TABS.equip && (
              <PlayerDetailEquip player={player} />
            )}
            {currentTab === E_TABS.role && <PlayerDetailRole player={player} />}
            {currentTab === E_TABS.lore && <PlayerDetailLore player={player} />}
          </>
        ) : null}
      </Card>
    </Card>
  );
};

export default PlayerDetail;
