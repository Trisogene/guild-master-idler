import { Box, Card, Chip, Typography } from "@mui/joy";
import { T_Log_Recruit } from "../../config/store.d";

interface I_RecruitLogProps {
  log: T_Log_Recruit;
}
const RecruitLog = ({ log }: I_RecruitLogProps) => {
  return (
    <Card sx={{ gap: 0.5, p: 1 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography fontSize={12}>{log.playerName}</Typography>
        <Chip variant="solid" color="primary">
          <Typography fontSize={12} fontWeight="bold">
            {log.type}
          </Typography>
        </Chip>
      </Box>

      <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
        <Typography fontSize={14}>Joined the guild!</Typography>
      </Box>

      <Box
        sx={{
          position: "absolute",
          right: 4,
          bottom: 4,
          fontSize: 10,
          color: "grey",
        }}
      >
        <Typography fontSize={10}>
          {new Date(log.timestamp * 1000).toISOString().substr(14, 5)}
        </Typography>
      </Box>
    </Card>
  );
};

export default RecruitLog;
