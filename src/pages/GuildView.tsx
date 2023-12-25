import { Grid } from "@mui/joy";
import { useSelector } from "react-redux";
import Player from "../components/Player/Player";
import PlayerInfo from "../components/PlayerInfo/PlayerInfo";
import { T_ReduxState } from "../config/store.d";
import { Page, PageBody, PageBottom, PageHeader } from "../styles/PageStyles";

const GuildView = () => {
  const players = useSelector((state: T_ReduxState) => state.players.players);
  const selectedPlayer = useSelector(
    (state: T_ReduxState) => state.ui.guild.selectedPlayer
  );

  return (
    <Page>
      <PageHeader />
      <PageBody>
        <Grid
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(128px, 1fr))",
            gap: 0.5,
          }}
        >
          {Object.values(players).map((player) => (
            <Player
              key={player.id}
              player={player}
              isSelected={player.id === selectedPlayer}
            />
          ))}
        </Grid>
      </PageBody>

      <PageBottom>
        {selectedPlayer && <PlayerInfo player={players[selectedPlayer]} />}
      </PageBottom>
    </Page>
  );
};

export default GuildView;
