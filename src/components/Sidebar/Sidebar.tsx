import { Avatar, Box, Card } from "@mui/joy";
import { useSelector } from "react-redux";
import clockIcon from "../../assets/utils/clock.svg";
import { T_ReduxState } from "../../config/store.d";

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
        display: "flex",
        flexDirection: "column",
        gap: 1,
        overflowY: "overlay",
        minWidth: 80,
        maxWidth: 200,
        flexGrow: 1,
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
          flexGrow: 1,
          border: (theme) => `1px solid ${theme.palette.background.level2}`,
        }}
      ></Card>
    </Box>
  );
};

export default Sidebar;
