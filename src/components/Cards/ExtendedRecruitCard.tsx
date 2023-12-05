import { Box, Button, Grid } from "@mui/joy";
import { useDispatch } from "react-redux";
import { PERKS } from "../../config/PERKS";
import { RACES } from "../../config/RACES";
import { recruitPlayer } from "../../lib/redux/slices/recruit_slice";
import { AppDispatch } from "../../lib/redux/store";
import { T_PlayerConfig } from "../../types/types.d";

interface I_ExtendedRecruitCard {
  recruit: T_PlayerConfig;
}

const ExtendedRecruitCard = ({ recruit }: I_ExtendedRecruitCard) => {
  const dispatch = useDispatch<AppDispatch>();
  const recruitRace = RACES[recruit.race];
  return (
    <Box
      sx={{
        height: "100%",
        bgcolor: "background.level1",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "background.level2",
          p: 1,
        }}
      >
        <Box
          sx={{
            fontWeight: "bold",
          }}
        >
          {recruit.name}
        </Box>
        <Button
          sx={{ position: "absolute", top: 0, right: 0, m: 0.5 }}
          size="sm"
          onClick={() => {
            console.log(recruit.id);
            dispatch(recruitPlayer(recruit));
          }}
        >
          RECRUIT
        </Button>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "calc(100% - 40px)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          bgcolor: "background.level1",
        }}
      >
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
            <Grid xs={6} key={PERKS[perk].id}>
              <Box
                sx={{
                  p: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontSize: 12,
                  borderRadius: (theme) => theme.spacing(1),
                  border: (theme) =>
                    `1px solid ${theme.palette.background.level2}`,
                }}
              >
                <Box
                  component="img"
                  src={PERKS[perk].img}
                  sx={{ width: 16, height: 16 }}
                />
                <Box>{PERKS[perk].label}</Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ExtendedRecruitCard;
