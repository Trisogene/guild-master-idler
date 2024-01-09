import { Avatar, Box, Button, Card, Divider, Typography } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import { Player } from "../../../../components";
import { JOBS } from "../../../../config/config";
import { T_ReduxState } from "../../../../config/store.d";
import { setPlayersFilter } from "../../../../redux/ui/uiSlice";

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
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        gap: 0.5,
        p: 0.5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: 1,
        }}
      >
        {Object.values(JOBS).map((job) => (
          <Button
            size="sm"
            fullWidth
            onClick={() => dispatch(setPlayersFilter(job.id))}
            variant={currentFilter === job.id ? "solid" : "plain"}
            key={job.label}
          >
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
              }}
            >
              <Avatar src={job.icon} />
              <Typography
                sx={{
                  display: {
                    xs: "none",
                    xl: "block",
                  },
                }}
              >
                {job.label}
              </Typography>
            </Box>
          </Button>
        ))}
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
