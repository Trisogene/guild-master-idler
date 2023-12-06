import { Box, Typography } from "@mui/joy";
import { useDispatch } from "react-redux";
import { RACES } from "../../config/RACES";
import { AppDispatch } from "../../lib/redux/store";
import { T_PlayerConfig } from "../../types/types.d";

interface I_PlayerInfo {
  recruit: T_PlayerConfig;
}

const PlayerInfo = ({ recruit }: I_PlayerInfo) => {
  const dispatch = useDispatch<AppDispatch>();
  const recruitRace = RACES[recruit.race];
  return (
    <Box
      sx={{
        height: "100%",
        bgcolor: "background.level1",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
          bgcolor: "background.level2",
          p: 1,
        }}
      >
        <Typography fontSize="sm">[ {recruitRace.label} ]</Typography>
        <Typography
          fontSize="md"
          sx={{
            fontWeight: "bold",
          }}
        >
          {recruit.name}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "calc(100% - 40px)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          bgcolor: "background.level1",
        }}
      ></Box>
    </Box>
  );
};

export default PlayerInfo;
