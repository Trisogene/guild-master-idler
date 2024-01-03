import {
  Avatar,
  Box,
  Card,
  Chip,
  Divider,
  Tooltip,
  Typography,
} from "@mui/joy";
import { CONTENTS, RACES } from "../../config/config";
import { T_Log_Reward } from "../../config/store.d";
import Item from "../Item/Item";

interface I_RewardLogProps {
  log: T_Log_Reward;
}
const RewardLog = ({ log }: I_RewardLogProps) => {
  return (
    <Card sx={{ gap: 0.25, p: 1 }}>
      <Box sx={{ display: "flex", gap: 0.5 }}>
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
        </Typography>

        <Divider orientation="vertical" sx={{ height: "100%" }} />

        <Tooltip
          disableInteractive
          arrow
          title={log.playerName}
          placement="top"
        >
          <Chip variant="outlined">
            <Avatar src={RACES[log.playerRace]?.img} />
          </Chip>
        </Tooltip>

        <Tooltip disableInteractive arrow title={log.contentId} placement="top">
          <Chip variant="outlined">
            <Avatar src={CONTENTS[log.contentId].icon} />
          </Chip>
        </Tooltip>

        <Item itemStack={log.reward} size="sm" />
      </Box>
    </Card>
  );
};

export default RewardLog;
