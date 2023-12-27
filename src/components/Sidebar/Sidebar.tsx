import { Avatar, Box, Card } from "@mui/joy";
import { useSelector } from "react-redux";
import clockIcon from "../../assets/utils/clock.svg";
import { E_Log_Type, T_ReduxState } from "../../config/store.d";
import RecruitLog from "../Log/RecruitLog";
import RewardLog from "../Log/RewardLog";

const Sidebar = () => {
  const clock = useSelector((state: T_ReduxState) => state.timer.timers.clock);
  const hours = Math.floor(clock / 60);
  const minutes = clock % 60;
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  const logs = useSelector((state: T_ReduxState) => state.log.logs);

  return (
    <Box
      sx={{
        maxHeight: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        minWidth: 150,
        maxWidth: 150,
        flexGrow: 1,
        // overflowY: "overlay",
      }}
    >
      <Card
        variant="soft"
        sx={{
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          border: (theme) => `1px solid ${theme.palette.background.level2}`,
        }}
      >
        <Avatar src={clockIcon} />
        {formattedTime}
      </Card>

      <Card
        variant="soft"
        sx={{
          maxHeight: "100%",
          overflowY: "auto",
          flexGrow: 1,
          border: (theme) => `1px solid ${theme.palette.background.level2}`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column-reverse",
            gap: 0.5,
          }}
        >
          {logs.map((log, index) => {
            switch (log.type) {
              case E_Log_Type.recruit:
                return <RecruitLog key={log.timestamp + index} log={log} />;
              case E_Log_Type.reward:
                return <RewardLog key={log.timestamp + index} log={log} />;
              default:
                return null;
            }
          })}
        </Box>
      </Card>
    </Box>
  );
};

export default Sidebar;
