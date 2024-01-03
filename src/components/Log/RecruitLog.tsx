import { Card, Chip, Typography } from "@mui/joy";
import { T_Log_Recruit } from "../../config/store.d";

interface I_RecruitLogProps {
  log: T_Log_Recruit;
}
const RecruitLog = ({ log }: I_RecruitLogProps) => {
  return (
    <Card
      sx={{
        p: 1,
        minHeight: 38,
        flexDirection: "row",
        gap: 1,
        alignItems: "center",
      }}
    >
      <Chip variant="outlined">
        <Typography
          fontSize={12}
          sx={{
            minWidth: 35,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {new Date(log.timestamp * 1000).toISOString().substr(14, 5)}
        </Typography>{" "}
      </Chip>

      <Typography fontSize={10} sx={{ minWidth: 80 }}>
        {log.playerName} Recruited
      </Typography>
    </Card>
  );
};

export default RecruitLog;
