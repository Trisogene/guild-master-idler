import { Chip, Typography } from "@mui/joy";
import { useSelector } from "react-redux";
import { T_ReduxState } from "../../../../config/store.d";

const Clock = () => {
  const clock = useSelector((state: T_ReduxState) => state.timer.timers.clock);
  const hours = Math.floor(clock / 60);
  const minutes = clock % 60;
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  return (
    <Chip variant="soft" size="lg">
      <Typography fontSize="sm">{formattedTime}</Typography>
    </Chip>
  );
};

export default Clock;
