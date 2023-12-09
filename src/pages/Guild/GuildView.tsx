import { Box, Grid } from "@mui/joy";
import { useSelector } from "react-redux";
import PlayerCard from "../../components/Cards/PlayerCard";
import PlayerInfo from "../../components/Info/PlayerInfo/PlayerInfo";
import { PageBody, PageBottom, PageHeader } from "../../styles/PageStyles";
import { T_ReduxState } from "../../types/types.d";

const Guild = () => {
  const players = useSelector((state: T_ReduxState) => state.players.players);
  const currentlySelectedPlayer = useSelector(
    (state: T_ReduxState) => state.players.currentlySelectedPlayer
  );

  return (
    <Box
      className="Guild"
      sx={{ display: "flex", flexDirection: "column", height: "100%", gap: 1 }}
    >
      <PageHeader
        className="Guild-header"
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "background.level1",
          gap: 0.5,
        }}
      >
        <Box sx={{ textAlign: "center", fontSize: 12 }}></Box>
      </PageHeader>

      <PageBody
        className="Guild-body"
        sx={{
          bgcolor: "background.level1",
          p: 1,
        }}
      >
        <Grid container spacing={1}>
          {Object.values(players).map((player) => (
            <Grid xs={6}>
              <PlayerCard
                key={player.id}
                player={player}
                isSelected={player.id === currentlySelectedPlayer}
              />
            </Grid>
          ))}
        </Grid>
      </PageBody>

      <PageBottom
        className="Guild-bottom"
        sx={{
          bgcolor: "background.level1",
        }}
      >
        {currentlySelectedPlayer && (
          <PlayerInfo player={players[currentlySelectedPlayer]} />
        )}
      </PageBottom>
    </Box>
  );
};

export default Guild;
