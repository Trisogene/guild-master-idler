import { Avatar, Box, Card, Chip, Tooltip, Typography } from "@mui/joy";
import { CONTENTS, RACES } from "../../config/config";
import { T_Log_Reward } from "../../config/store.d";
import Item from "../Item/Item";

interface I_RewardLogProps {
  log: T_Log_Reward;
}
const RewardLog = ({ log }: I_RewardLogProps) => {
  return (
    <Card sx={{ p: 1 }}>
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
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
          </Typography>
        </Chip>

        <Tooltip
          disableInteractive
          arrow
          title={log.playerName}
          placement="top"
        >
          <Avatar
            src={RACES[log.playerRace]?.img}
            sx={{ width: 16, height: 16 }}
          />
        </Tooltip>

        <Tooltip disableInteractive arrow title={log.contentId} placement="top">
          <Avatar
            src={CONTENTS[log.contentId].icon}
            sx={{ width: 16, height: 16 }}
          />
        </Tooltip>

        <Item itemStack={log.reward} size="sm" />
      </Box>
    </Card>
  );
};

export default RewardLog;
