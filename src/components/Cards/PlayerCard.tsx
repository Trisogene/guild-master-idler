import { I_PlayerCard, T_ReduxState } from "../../types/types.d";

import { LinearProgress, Typography } from "@mui/joy";
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
      <Box
        className="PlayerCard"
        sx={{
          userSelect: "none",
          minHeight: 64,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          overflow: "hidden",
          borderRadius: (theme) => theme.spacing(1),
          bgcolor: "background.level1",
          width: "100%",
          boxShadow: isSelected ? "0px 0px 2px 1px #fff" : "none",
          filter: isSelected ? "brightness(1)" : "brightness(1) ",
          border: (theme) => `1px solid ${theme.palette.background.level2}`,
        }}
        onClick={() => {
          dispatch(setCurrentlySelectedPlayer(player.id));
        }}
      >
        <Box
          className="PlayerCard-info"
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItem: "center",
            gap: 1,
            p: 0.5,
          }}
        >
          <Avatar
            className="PlayerCard-avatar"
            src={playerRace.img}
            size="sm"
          />

          <Box
            className="PlayerCard-info"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1,
              width: "100%",
            }}
          >
            <Typography fontSize="sm">{player.name}</Typography>
          </Box>
        </Box>

        <Box
          className="PlayerCard-timer"
          sx={{
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
      </Box>
    </>
  );
};

export default PlayerCard;
