import { Grid } from "@mui/joy";
import { RACES } from "../../../../config/RACES";
import { T_PlayerConfig } from "../../../../types/types.d";

interface I_RecruitInfoPerk {
  recruit: T_PlayerConfig;
}

const RecruitInfoPerk = ({ recruit }: I_RecruitInfoPerk) => {
  const recruitRace = RACES[recruit.race];
  return (
    <Grid
      container
      spacing={1}
      sx={{
        bgcolor: "background.level1",
        p: 1,
        overflowY: "auto",
      }}
    ></Grid>
  );
};

export default RecruitInfoPerk;
