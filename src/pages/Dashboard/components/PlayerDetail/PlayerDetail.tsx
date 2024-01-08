import { Avatar, Box, Button, Card, Divider } from "@mui/joy";
import { useState } from "react";
import { useSelector } from "react-redux";
import placeholder_icon from "../../../../assets/race.svg";
import { T_ReduxState } from "../../../../config/store.d";
import PlayerInfoEquip from "../../../GuildView/components/PlayerInfo/components/PlayerInfoEquip";
import PlayerInfoLore from "../../../GuildView/components/PlayerInfo/components/PlayerInfoLore";
import PlayerInfoRole from "../../../GuildView/components/PlayerInfo/components/PlayerInfoRole";
import PlayerDetailEquip from "./components/PlayerDetailEquip";

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
    component: (props: any) => <PlayerInfoEquip {...props} />,
    icon: placeholder_icon,
  },
  role: {
    id: E_TABS.role,
    label: "Role",
    component: (props: any) => <PlayerInfoRole {...props} />,
    icon: placeholder_icon,
  },
  lore: {
    id: E_TABS.lore,
    label: "Lore",
    component: (props: any) => <PlayerInfoLore {...props} />,
    icon: placeholder_icon,
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
                flexDirection: "column",
                gap: 0,
                fontSize: 12,
                alignItems: "center",
              }}
            >
              <Avatar src={tab.icon} size="sm" />
              {tab.label}
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
            {currentTab === E_TABS.role && <PlayerInfoRole player={player} />}
            {currentTab === E_TABS.lore && <PlayerInfoLore player={player} />}
          </>
        ) : null}
      </Card>
    </Card>
  );
};

export default PlayerDetail;
