import { Box, Chip, Tooltip, Typography } from "@mui/joy";
import { useSelector } from "react-redux";
import { T_ReduxState } from "../../config/store.d";

const Clock = () => {
  const clock = useSelector((state: T_ReduxState) => state.timer.timers.clock);
  const hours = Math.floor(clock / 60);
  const minutes = clock % 60;
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  return (
    <Tooltip
      placement="right-end"
      arrow
      title={
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography>New recruit everyday at</Typography>
          <Typography fontSize="xl">00:00</Typography>
        </Box>
      }
    >
      <Chip size="lg" sx={{ minWidth: 100, textAlign: "center" }}>
        <Typography fontSize="sm">{formattedTime}</Typography>
      </Chip>
    </Tooltip>
  );
};

export default Clock;
