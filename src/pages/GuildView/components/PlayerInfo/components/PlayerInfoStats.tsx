import { Box, Chip, Divider, Typography } from "@mui/joy";
import { ID_Stat } from "../../../../../config/config.d";

interface PlayerInfoStatsProps {
  stats: Record<ID_Stat, number>;
}

const PlayerInfoStats = ({ stats }: PlayerInfoStatsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        p: 1,
        gap: 1,
        minWidth: "80%",
      }}
    >
      {Object.entries(stats).map(([statId, statValue]) => (
        <Chip
          startDecorator={
            <>
              <Typography
                fontSize="sm"
                sx={{ minWidth: 50, maxWidth: "none", textAlign: "center" }}
              >
                {statId.toUpperCase()}
              </Typography>
              <Divider orientation="vertical" sx={{ mr: 1 }} />
            </>
          }
          key={statId}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "none",
            minWidth: "100%",
            bgcolor: "background.level2",
          }}
        >
          <Typography fontSize="sm" sx={{ textAlign: "center" }}>
            {statValue}
          </Typography>
        </Chip>
      ))}
    </Box>
  );
};

export default PlayerInfoStats;
