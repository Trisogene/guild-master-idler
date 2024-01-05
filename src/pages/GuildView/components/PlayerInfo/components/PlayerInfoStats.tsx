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
        p: 1,
        minWidth: 100,
        maxWidth: 100,
        gap: 1,
      }}
    >
      {Object.entries(stats).map(([statId, statValue]) => (
        <Chip
          // variant="soft"
          startDecorator={
            <>
              <Typography
                fontSize="sm"
                sx={{ minWidth: 35, textAlign: "center" }}
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

            minWidth: "100%",
            bgcolor: "background.level2",
          }}
        >
          <Typography fontSize="sm">{statValue}</Typography>
        </Chip>
      ))}
    </Box>
  );
};

export default PlayerInfoStats;
