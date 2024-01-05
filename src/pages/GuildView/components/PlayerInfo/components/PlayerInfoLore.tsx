import { Box } from "@mui/joy";
import { T_Player } from "../../../../../config/config.d";
interface I_PlayerInfoLoreProps {
  player: T_Player;
}
const PlayerInfoLore = ({ player }: I_PlayerInfoLoreProps) => {
  return (
    <Box sx={{ overflowY: "auto", flexGrow: 1, gap: 1, p: 1 }}>
      {player.lore}
    </Box>
  );
};

export default PlayerInfoLore;
