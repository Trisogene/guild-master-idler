import { Box, Card, Chip } from "@mui/joy";
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
        maxWidth: 80,
      }}
    >
      <Chip
        variant="solid"
        startDecorator={
          <Box
            component={"img"}
            src={clockIcon}
            sx={{ width: 24, height: 32 }}
          />
        }
        sx={{ minWidth: 80 }}
      >
        {formattedTime}
      </Chip>

      <Card variant="soft" sx={{ flexGrow: 1 }}></Card>
    </Box>
  );
};

export default Sidebar;
