import { Typography } from "@mui/joy";
import LinearProgress from "@mui/joy/LinearProgress";
import { useSelector } from "react-redux";
import { TIMERS } from "../../config/TIMERS";
import { T_ReduxState } from "../../types/types.d";

interface I_RecruitTimerProps {}

export default function RecruitTimer({}: I_RecruitTimerProps) {
  const timeToFinish = useSelector(
    (state: T_ReduxState) => state.timer.timers.recruit
  );
  const timerPerc = (timeToFinish / TIMERS["recruit"].duration) * 100;

  return (
    <LinearProgress
      determinate
      variant="solid"
      color="neutral"
      value={timerPerc}
      sx={{
        "&::before": {
          transition: "width 0.2s ease-in-out",
        },
        "--LinearProgress-progressThickness": "100%",
        borderColor: "neutral.500",
      }}
    >
      <Typography
        fontSize={12}
        sx={{
          mixBlendMode: "color-dodge",
        }}
      >
        NEW RECRUITS IN {TIMERS["recruit"].duration - timeToFinish}
      </Typography>
    </LinearProgress>
  );
}
