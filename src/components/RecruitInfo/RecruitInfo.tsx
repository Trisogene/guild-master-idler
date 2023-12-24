import { Box } from "@mui/joy";
import { useState } from "react";
import { RACES } from "../../config/config";
import { T_Player } from "../../config/config.d";
import RecruitInfoInfo from "./components/RecruitInfoInfo";
import RecruitInfoLore from "./components/RecruitInfoLore";

interface I_RecruitInfo {
  recruit: T_Player;
}

const tabs = [
  {
    label: "Info",
    component: (props: any) => <RecruitInfoInfo {...props} />,
  },
  {
    label: "Perks",
    component: (props: any) => <div {...props} />,
  },
  {
    label: "Lore",
    component: (props: any) => <RecruitInfoLore {...props} />,
  },
];

const RecruitInfo = ({ recruit }: I_RecruitInfo) => {
  const recruitRace = RACES[recruit.race];
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <Box
      className="RecruitInfo"
      sx={{
        height: "100%",
        position: "relative",
      }}
    >
      {tabs[currentTab].component({ recruit: recruit })}
    </Box>
  );
};

export default RecruitInfo;
