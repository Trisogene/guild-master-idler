import { Avatar, Box, Chip, Typography } from "@mui/joy";
import { useDispatch } from "react-redux";
import { ROLES } from "../../../config/config";
import { T_Player } from "../../../config/config.d";
import { setPlayerRole } from "../../../redux/player/playerSlice";

interface I_PlayerInfoRole {
  player: T_Player;
}
const PlayerInfoRole = ({ player }: I_PlayerInfoRole) => {
  const dispatch = useDispatch();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",

          height: "100%",
          p: 1,
          gap: 0.5,
        }}
      >
        {Object.values(ROLES).map((role) => (
          <Box key={role.id} sx={{ display: "flex", gap: 1 }}>
            <Chip
              size="sm"
              variant={player.role === role.id ? "solid" : "soft"}
              // color="success"
              sx={{ minWidth: 150 }}
              startDecorator={
                <Avatar
                  src={role.icon}
                  sx={{ width: 16, height: 16, m: 0.5 }}
                />
              }
              onClick={() =>
                dispatch(setPlayerRole({ playerId: player.id, role: role.id }))
              }
            >
              <Typography fontSize="sm">{role.label}</Typography>
            </Chip>

            <Typography fontSize="sm">{role.description}</Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default PlayerInfoRole;
