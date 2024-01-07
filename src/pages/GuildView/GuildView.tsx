import { Box, Card } from "@mui/joy";
import { useSelector } from "react-redux";
import { T_ReduxState } from "../../config/store.d";
import { Page } from "../../styles/PageStyles";
import Player from "./components/Player/Player";
import PlayerInfo from "./components/PlayerInfo/PlayerInfo";

const GuildView = () => {
  const players = useSelector((state: T_ReduxState) => state.players.players);
  const selectedPlayer = useSelector(
    (state: T_ReduxState) => state.ui.guild.selectedPlayer
  );

  return (
    <Page className="Guild">
      <Card
        size="sm"
        variant="soft"
        sx={{
          minWidth: 400,
          maxWidth: 400,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
            gap: 1,
            p: 0.5,
            overflowY: "auto",
            maxHeight: "100%",
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
        size="sm"
        variant="soft"
        sx={{
          flexGrow: 1,
        }}
      >
        {selectedPlayer && <PlayerInfo player={players[selectedPlayer]} />}
      </Card>
    </Page>
  );
};

export default GuildView;
