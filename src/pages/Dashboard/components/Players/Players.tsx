import { Box, Card, Divider, Typography } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import { Player } from "../../../../components";
import { T_ReduxState } from "../../../../config/store.d";
import PlayerSelector from "./components/PlayerSelector";

const Players = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(
    (state: T_ReduxState) => state.ui.players.currentFilter
  );
  const players = useSelector((state: T_ReduxState) => state.players.players);
  const selectedPlayer = useSelector(
    (state: T_ReduxState) => state.ui.guild.selectedPlayer
  );

  return (
    <Card
      size="sm"
      sx={{
        height: "100%",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: 1,
        }}
      >
        <Typography>Players</Typography>
        <Box sx={{ position: "absolute", right: 2, top: 2 }}>
          <PlayerSelector />
        </Box>
      </Box>

      <Divider />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          overflowY: "auto",
          gap: 1,
          p: 1,
        }}
      >
        {Object.values(players).map((player) => (
          <Player
            key={player.id}
            player={player}
            isSelected={player.id === selectedPlayer}
          />
        ))}
      </Box>
    </Card>
  );
};

export default Players;
