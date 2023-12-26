import { Avatar, Box, Card, Chip, Tooltip, Typography } from "@mui/joy";
import { ITEMS } from "../../config/config";
import { T_Log_Reward } from "../../config/store.d";

interface I_RewardLogProps {
  log: T_Log_Reward;
}
const RewardLog = ({ log }: I_RewardLogProps) => {
  return (
    <Card sx={{ gap: 0.5 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography fontSize={12}>{log.playerName}</Typography>
        <Chip variant="solid" color="success">
          <Typography fontSize={12} fontWeight="bold">
            {log.type}
          </Typography>
        </Chip>
      </Box>

      <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
        <Tooltip disableInteractive arrow title={log.reward.id} placement="top">
          <Avatar size="md" src={ITEMS[log.reward.id].img} />
        </Tooltip>
        <Typography fontSize={14}>{log.reward.quantity}</Typography>
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

export default RewardLog;
