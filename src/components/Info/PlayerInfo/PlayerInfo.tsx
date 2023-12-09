import { Avatar, Box, Tab, TabList, Tabs, Typography } from "@mui/joy";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { RACES } from "../../../config/RACES";
import { AppDispatch } from "../../../lib/redux/store";
import { T_PlayerConfig } from "../../../types/types.d";

const tabs = [
  {
    label: "Equip",
    component: (props: any) => null,
  },
  {
    label: "Stats",
    component: (props: any) => null,
  },
  {
    label: "Orders",
    component: (props: any) => null,
  },
  {
    label: "Info",
    component: (props: any) => null,
  },
];

interface I_PlayerInfo {
  player: T_PlayerConfig;
}

const PlayerInfo = ({ player }: I_PlayerInfo) => {
  const dispatch = useDispatch<AppDispatch>();
  const playerRace = RACES[player.race];
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <Box
      className="PlayerInfo"
      sx={{
        height: "100%",
        bgcolor: "background.level1",
        position: "relative",
      }}
    >
      <Box
        className="PlayerInfo-header"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "background.level2",
        }}
      >
        <Box
          className="PlayerInfo-header-info"
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            minHeight: 40,
            p: 0.5,
          }}
        >
          <Avatar
            className="PlayerCard-avatar"
            src={playerRace.img}
            size="sm"
          />
          <Typography
            sx={{
              fontWeight: "bold",
            }}
          >
            {player.name}
          </Typography>
        </Box>
        <Box className="RecruitInfo-header-tabs" sx={{ width: "100%" }}>
          <Tabs
            value={currentTab}
            sx={{ bgcolor: "transparent" }}
            onChange={(_, value) => {
              if (typeof value === "number") {
                setCurrentTab(value);
              }
            }}
          >
            <TabList
              tabFlex={1}
              disableUnderline
              size="sm"
              sx={{
                p: 0.5,
                gap: 0.5,
                bgcolor: "background.level1",
              }}
            >
              {tabs.map((tab) => (
                <Tab
                  key={tab.label}
                  disableIndicator
                  sx={{
                    borderRadius: 8,
                    bgcolor: "background.level2",
                    "&.Mui-selected": { bgcolor: "background.level3" },
                  }}
                >
                  {tab.label}
                </Tab>
              ))}
            </TabList>
          </Tabs>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "calc(100% - 80px)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          bgcolor: "background.level1",
        }}
      ></Box>
    </Box>
  );
};

export default PlayerInfo;
