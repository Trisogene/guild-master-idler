import { I_PlayerCard, T_ReduxState } from "../../types/types.d";

import { Card, Divider, LinearProgress, Typography } from "@mui/joy";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import { useDispatch, useSelector } from "react-redux";
import { CONTENTS } from "../../config/CONTENTS";
import { RACES } from "../../config/RACES";
import { setCurrentlySelectedPlayer } from "../../lib/redux/player/players_slice";
import { AppDispatch } from "../../lib/redux/store";

const PlayerCard = ({ player, isSelected }: I_PlayerCard) => {
  const playerTimer = useSelector(
    (state: T_ReduxState) => state.timer.timers.players[player.id]
  );
  const timerPerc =
    (playerTimer / CONTENTS[player.currentContent].timeToComplete) * 100;
  const playerRace = RACES[player.race];
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <Card
        className="PlayerCard"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          bgcolor: isSelected ? "background.level2" : "background.level1",
        }}
        onClick={() => {
          dispatch(setCurrentlySelectedPlayer(player.id));
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
            width: "100%",
          }}
        >
          <Avatar className="PlayerCard-avatar" src={playerRace.img} />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1,
              width: "100%",
            }}
          >
            <Box sx={{ height: 12, fontSize: 10 }}>{playerRace.label}</Box>
          </Box>
        </Box>

        <Divider orientation="horizontal" />

        <Box
          className="PlayerCard-timer"
          sx={{
            zIndex: 1,
            width: "100%",
            height: 18,
          }}
        >
          <LinearProgress
            determinate
            value={timerPerc}
            thickness={18}
            variant="solid"
            sx={{
              zIndex: -1,
              borderColor: "white",
              "--LinearProgress-radius": "0px",
              "&::before": {
                transition: "width 0.2s ease-in-out",
              },
            }}
          >
            <Typography fontSize="xs" sx={{ color: "white", zIndex: 1 }}>
              {player.currentContent}
            </Typography>
          </LinearProgress>
        </Box>
      </Card>
    </>
  );
};

export default PlayerCard;
