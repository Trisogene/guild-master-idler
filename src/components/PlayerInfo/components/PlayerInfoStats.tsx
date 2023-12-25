import {
  Avatar,
  Box,
  Button,
  Grid,
  LinearProgress,
  Tooltip,
  Typography,
} from "@mui/joy";
import { useDispatch } from "react-redux";
import { ROLES } from "../../../config/config";
import { T_Player } from "../../../config/config.d";
import { setPlayerRole } from "../../../redux/player/playerSlice";

interface I_PlayerInfoStats {
  player: T_Player;
}
const PlayerInfoStats = ({ player }: I_PlayerInfoStats) => {
  const dispatch = useDispatch();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          p: 0.5,
          gap: 3,
        }}
      >
        {/* Role */}
        <Grid
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(32px, 1fr))",
            gap: 1,
          }}
        >
          {Object.values(ROLES).map((role) => (
            <Tooltip
              key={role.id}
              placement="top"
              disableInteractive
              title={<Box sx={{ userSelect: "none" }}>{role.label}</Box>}
            >
              <Button
                key={role.id}
                onClick={() =>
                  dispatch(
                    setPlayerRole({ playerId: player.id, role: role.id })
                  )
                }
                color="success"
                sx={{
                  borderRadius: 4,
                  background: (theme) =>
                    player.role === role.id
                      ? theme.palette.success.mainChannel
                      : theme.palette.background.level2,
                  border: (theme) =>
                    `1px solid ${theme.palette.background.level3}`,
                }}
              >
                <Avatar src={role.icon} sx={{ width: 16, height: 16 }} />
              </Button>
            </Tooltip>
          ))}
        </Grid>

        {/* Stats */}
        <Grid
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
            gap: 1,
          }}
        >
          {Object.entries(player.stats).map(([statId, statValue]) => (
            <Box sx={{ display: "flex" }} key={statId}>
              <Box
                sx={{
                  pl: 0.3,
                  pr: 0.3,
                  display: "flex",
                  justifyContent: "center",
                  minWidth: 40,
                  maxHeight: "24px",
                  background: (theme) => theme.palette.background.level2,
                  border: (theme) =>
                    `1px solid ${theme.palette.background.level3}`,
                  borderRight: "none",
                }}
              >
                <Typography fontWeight={500} fontSize="sm">
                  {statId.toUpperCase()}
                </Typography>
              </Box>
              <LinearProgress
                determinate
                value={statValue}
                color="neutral"
                sx={{
                  maxHeight: "24px",
                  "--LinearProgress-progressThickness": "100%",
                  borderRadius: "0px 0px 4px 0px",
                  border: (theme) =>
                    `1px solid ${theme.palette.background.level3}`,
                }}
              >
                <Typography
                  fontWeight={500}
                  fontSize="sm"
                  sx={{ zIndex: 1, minWidth: 25 }}
                >
                  {statValue}
                </Typography>
              </LinearProgress>
            </Box>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default PlayerInfoStats;
