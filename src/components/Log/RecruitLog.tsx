import { Box, Card, Divider, Typography } from "@mui/joy";
import { T_Log_Recruit } from "../../config/store.d";

interface I_RecruitLogProps {
  log: T_Log_Recruit;
}
const RecruitLog = ({ log }: I_RecruitLogProps) => {
  return (
    <Card sx={{ gap: 0.5, p: 0.5 }}>
      <Box sx={{ display: "flex", gap: 1 }}>
        <Typography fontSize={12} sx={{ minWidth: 35 }}>
          {new Date(log.timestamp * 1000).toISOString().substr(14, 5)}
        </Typography>

        <Divider orientation="vertical" sx={{ height: "100%" }} />

        <Typography fontSize={12} sx={{ minWidth: 80 }}>
          {log.playerName} Recruited
        </Typography>
      </Box>
    </Card>
  );
};

export default RecruitLog;
