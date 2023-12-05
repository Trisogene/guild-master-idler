import { Box, Chip } from "@mui/joy";
import { useSelector } from "react-redux";
import clockIcon from "../../assets/utils/clock.svg";
import silversIcon from "../../assets/utils/silvers.svg";
import { T_ReduxState } from "../../types/types.d";

const Topbar = () => {
  const clock = useSelector(
    (state: T_ReduxState) => state.gameManager.timers.clock
  );

  const hours = Math.floor(clock / 60);
  const minutes = clock % 60;
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: (theme) => theme.spacing(2),
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Chip
          variant="solid"
          startDecorator={
            <Box
              component={"img"}
              src={clockIcon}
              sx={{ width: 16, height: 16 }}
            />
          }
          sx={{ minWidth: 100 }}
        >
          {formattedTime}
        </Chip>
        <Chip
          variant="solid"
          startDecorator={
            <Box
              component={"img"}
              src={silversIcon}
              sx={{ width: 16, height: 16 }}
            />
          }
          sx={{ minWidth: 100 }}
        >
          0
        </Chip>
      </Box>
    </Box>
  );
};

export default Topbar;
