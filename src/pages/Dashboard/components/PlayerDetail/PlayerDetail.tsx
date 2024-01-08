import { Box, Button, Card } from "@mui/joy";
import { useState } from "react";
import { useSelector } from "react-redux";
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
};

const tabs: T_Tabs = {
  equip: {
    id: E_TABS.equip,
    label: "Equip",
    component: (props: any) => <PlayerInfoEquip {...props} />,
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

const PlayerDetail = () => {
  const selectedPlayerId = useSelector(
    (state: T_ReduxState) => state.ui.guild.selectedPlayer
  );
  const player = useSelector(
    (state: T_ReduxState) => state.players.players?.[selectedPlayerId ?? ""]
  );

  const [currentTab, setCurrentTab] = useState(E_TABS.equip);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", height: "100%", gap: 1 }}
    >
      <Card
        size="sm"
        sx={{
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
            {tab.label}
          </Button>
        ))}
      </Card>

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
    </Box>
  );
};

export default PlayerDetail;
