import { Grid } from "@mui/joy";
import { useSelector } from "react-redux";
import PlayerCard from "../../components/Cards/PlayerCard";
import PlayerInfo from "../../components/Info/PlayerInfo/PlayerInfo";
import {
  Page,
  PageBody,
  PageBottom,
  PageHeader,
} from "../../styles/PageStyles";
import { T_ReduxState } from "../../types/types.d";

const GuildView = () => {
  const players = useSelector((state: T_ReduxState) => state.players.players);
  const currentlySelectedPlayer = useSelector(
    (state: T_ReduxState) => state.players.currentlySelectedPlayer
  );

  return (
    <Page className="Guild">
      <PageHeader className="Guild-header" />

      <PageBody
        className="Guild-body"
        sx={{
          bgcolor: "background.level1",
          p: 1,
        }}
      >
        <Grid container spacing={1}>
          {Object.values(players).map((player) => (
            <Grid key={player.id} xs={6}>
              <PlayerCard
                key={player.id}
                player={player}
                isSelected={player.id === currentlySelectedPlayer}
              />
            </Grid>
          ))}
        </Grid>
      </PageBody>

      <PageBottom className="Guild-bottom">
        {currentlySelectedPlayer && (
          <PlayerInfo player={players[currentlySelectedPlayer]} />
        )}
      </PageBottom>
    </Page>
  );
};

export default GuildView;
