import { Box } from "@mui/joy";
import { useSelector } from "react-redux";
import PlayerCard from "../../components/Cards/PlayerCard";
import { PageBody, PageBottom, PageHeader } from "../../styles/PageStyles";
import { T_ReduxState } from "../../types/types.d";

const Guild = () => {
  const players = useSelector((state: T_ReduxState) => state.players.players);
  return (
    <Box
      id="Guild"
      sx={{ display: "flex", flexDirection: "column", height: "100%", gap: 1 }}
    >
      <PageHeader
        id="Guild-header"
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
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          bgcolor: "background.level1",
          p: 1,
        }}
      >
        {Object.values(players).map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </PageBody>

      <PageBottom
        id="Guild-bottom"
        sx={{
          bgcolor: "background.level1",
        }}
      ></PageBottom>
    </Box>
  );
};

export default Guild;
