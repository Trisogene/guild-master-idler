import { Box, Grid, LinearProgress, Typography } from "@mui/joy";
import { T_Player } from "../../../config/config.d";

interface I_PlayerInfoStats {
  player: T_Player;
}
const PlayerInfoStats = ({ player }: I_PlayerInfoStats) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          p: 2,
          gap: 3,
        }}
      >
        <Grid
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
            gap: 1,
          }}
        >
          {Object.entries(player.stats).map(([statId, statValue]) => (
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  pl: 0.3,
                  pr: 0.3,
                  display: "flex",
                  justifyContent: "center",
                  minWidth: 40,
                  maxHeight: "24px",
                  background: (theme) => theme.palette.background.level2,
                  border: (theme) =>
                    `1px solid ${theme.palette.background.level3}`,
                  borderRight: "none",
                }}
              >
                <Typography fontWeight={500} fontSize="sm">
                  {statId.toUpperCase()}
                </Typography>
              </Box>
              <LinearProgress
                determinate
                value={statValue}
                color="neutral"
                sx={{
                  maxHeight: "24px",
                  "--LinearProgress-progressThickness": "100%",
                  borderRadius: "0px 0px 4px 0px",
                  border: (theme) =>
                    `1px solid ${theme.palette.background.level3}`,
                }}
              >
                <Typography
                  fontWeight={500}
                  fontSize="sm"
                  sx={{ zIndex: 1, minWidth: 25 }}
                >
                  {statValue}
                </Typography>
              </LinearProgress>
            </Box>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default PlayerInfoStats;
