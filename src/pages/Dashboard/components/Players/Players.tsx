import { Box, Card } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import { Player } from "../../../../components";
import { T_ReduxState } from "../../../../config/store.d";

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        gap: 1,
      }}
    >
      <Card
        size="sm"
        sx={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      ></Card>
      <Card sx={{ height: "100%" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
            overflowY: "auto",
            gap: 1,
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
    </Box>
  );
};

export default Players;
