import { Box } from "@mui/joy";
import { useSelector } from "react-redux";
import PlayerCard from "../../components/Cards/PlayerCard";
import { T_ReduxState } from "../../types/types.d";

const Guild = () => {
  const players = useSelector((state: T_ReduxState) => state.players.players);
  return (
    <Box
      sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1 }}
    >
      {Object.values(players).map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </Box>
  );
};

export default Guild;
