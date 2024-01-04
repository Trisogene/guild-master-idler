import { Box } from "@mui/joy";
import { T_Player } from "../../../config/config.d";
interface I_PlayerInfoLoreProps {
  player: T_Player;
}
const PlayerInfoLore = ({ player }: I_PlayerInfoLoreProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, p: 1 }}>
      {player.lore}
    </Box>
  );
};

export default PlayerInfoLore;
