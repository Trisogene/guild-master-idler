import { Avatar, Box, Tab, TabList, Tabs, Typography } from "@mui/joy";
import { useState } from "react";
import { RACES } from "../../../config/RACES";
import { T_PlayerConfig } from "../../../types/types.d";
import RecruitInfoInfo from "./components/RecruitInfoInfo";
import RecruitInfoLore from "./components/RecruitInfoLore";
import RecruitInfoPerk from "./components/RecruitInfoPerk";

interface I_RecruitInfo {
  recruit: T_PlayerConfig;
}

const tabs = [
  {
    label: "Info",
    component: (props: any) => <RecruitInfoInfo {...props} />,
  },
  {
    label: "Perks",
    component: (props: any) => <RecruitInfoPerk {...props} />,
  },
  {
    label: "Lore",
    component: (props: any) => <RecruitInfoLore {...props} />,
  },
];

const RecruitInfo = ({ recruit }: I_RecruitInfo) => {
  const recruitRace = RACES?.[recruit.race];
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <Box
      className="RecruitInfo"
      sx={{
        height: "100%",
        bgcolor: "background.level1",
        position: "relative",
      }}
    >
      <Box
        className="RecruitInfo-header"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "background.level2",
        }}
      >
        <Box
          className="RecruitInfo-header-info"
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
            src={recruitRace.img}
            size="sm"
          />

          <Typography
            sx={{
              fontWeight: "bold",
            }}
          >
            {recruit.name}
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
        className="RecruitInfo-body"
        sx={{
          width: "100%",
          height: "calc(100% - 80px)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          bgcolor: "background.level1",
        }}
      >
        {tabs[currentTab].component({ recruit: recruit })}
      </Box>
    </Box>
  );
};

export default RecruitInfo;
