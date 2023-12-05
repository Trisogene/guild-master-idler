import LinearProgress from "@mui/joy/LinearProgress";
import { useSelector } from "react-redux";
import { TIMERS } from "../../config/TIMERS";
import { I_LinearProgressWithLabel, T_ReduxState } from "../../types/types.d";

export default function LinearProgressWithLabel({
  timerId,
}: I_LinearProgressWithLabel) {
  const timeToFinish = useSelector(
    (state: T_ReduxState) => state.gameManager.timers.recruit
  );
  const timerPerc = (timeToFinish / TIMERS[timerId].duration) * 100;

  return (
    <LinearProgress
      determinate
      // variant="outlined"
      // variant="solid"
      color="neutral"
      // thickness={10}
      value={timerPerc}
      sx={{
        // borderColor: "neutral.500",
        "&::before": {
          transition: "width 0.2s ease-in-out",
        },
      }}
    ></LinearProgress>
  );
}
