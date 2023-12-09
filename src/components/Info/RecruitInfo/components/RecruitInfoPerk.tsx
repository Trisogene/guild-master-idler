import { Box, Grid, Typography } from "@mui/joy";
import { PERKS } from "../../../../config/PERKS";
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
    >
      {Object.values(recruitRace.perks).map((perk) => (
        <Grid xs={12} key={PERKS[perk].id} sx={{}}>
          <Box
            sx={{
              height: "100%",
              p: 1,
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: 12,
              borderRadius: (theme) => theme.spacing(1),
              border: (theme) => `1px solid ${theme.palette.background.level2}`,
            }}
          >
            <Box
              component="img"
              src={PERKS[perk].img}
              sx={{
                width: 16,
                height: 16,
              }}
            />
            <Typography>{PERKS[perk].description}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default RecruitInfoPerk;
