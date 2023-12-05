import { Box } from "@mui/joy";
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
      // variant="solid"
      color="neutral"
      thickness={10}
      value={timerPerc}
      sx={{
        "&::before": {
          transition: "width 0.2s ease-in-out",
        },
        "--LinearProgress-radius": "0px",
        "--LinearProgress-progressThickness": "64px",
        // boxShadow: "sm",
        borderColor: "neutral.500",
      }}
    >
      <Box sx={{ mixBlendMode: "difference", fontWeight: 600, fontSize: 16 }}>
        NEW RECRUITS IN {TIMERS[timerId].duration - timeToFinish}
      </Box>
    </LinearProgress>
  );
}
