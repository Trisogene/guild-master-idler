import { Box, Card } from "@mui/joy";
import { useSelector } from "react-redux";
import Player from "../components/Player/Player";
import PlayerInfo from "../components/PlayerInfo/PlayerInfo";
import { T_ReduxState } from "../config/store.d";
import { Page } from "../styles/PageStyles";

const GuildView = () => {
  const players = useSelector((state: T_ReduxState) => state.players.players);
  const selectedPlayer = useSelector(
    (state: T_ReduxState) => state.ui.guild.selectedPlayer
  );

  return (
    <Page className="Guild">
      <Card
        sx={{
          height: "50%",
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 1,
            p: 0.5,
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

      <Card
        sx={{
          height: "50%",
          overflowY: "hidden",
        }}
      >
        {selectedPlayer && <PlayerInfo player={players[selectedPlayer]} />}
      </Card>
    </Page>
  );
};

export default GuildView;
