import { Card, Divider, LinearProgress, Typography } from "@mui/joy";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import { useAnimate } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { CONTENTS } from "../../config/CONTENTS";
import { RACES } from "../../config/RACES";
import { T_PlayerConfig } from "../../config/config";
import { setCurrentlySelectedPlayer } from "../../lib/redux/player/players_slice";
import { AppDispatch } from "../../lib/redux/store";
import { T_ReduxState } from "../../lib/redux/store.d";
import { advancePlayerContent } from "../../lib/redux/timer/timer_thunks";

interface I_PlayerCard {
  player: T_PlayerConfig;
  isSelected: boolean;
}

const PlayerCard = ({ player, isSelected }: I_PlayerCard) => {
  const [progressRef, animate] = useAnimate();

  const playerTimer = useSelector(
    (state: T_ReduxState) => state.timer.timers.players[player.id]
  );
  const timerPerc =
    (playerTimer / CONTENTS[player.currentContent].timeToComplete) * 100;
  const playerRace = RACES[player.race];
  const dispatch = useDispatch<AppDispatch>();

  const handlePlayerClick = () => {
    if (!isSelected) {
      dispatch(setCurrentlySelectedPlayer(player.id));
      return;
    }
    dispatch(advancePlayerContent(player.id));
    animate(
      progressRef.current,
      {
        scale: [1, 1.025, 1],
        filter: ["brightness(1)", "brightness(2)", "brightness(1)"],
      },
      {
        duration: 0.8,
        ease: "easeOut",
      }
    );
  };

  return (
    <>
      <Card
        sx={{
          bgcolor: isSelected ? "background.level2" : "background.level1",
          alignItems: "center",
        }}
        onClick={handlePlayerClick}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Avatar className="PlayerCard-avatar" src={playerRace.img} />

          <Typography sx={{ height: 12, fontSize: 10 }}>
            {player.name}
          </Typography>
        </Box>

        <Divider
          orientation="horizontal"
          sx={{ width: "100%", alignSelf: "center" }}
        />

        <Box
          ref={progressRef}
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
            variant="solid"
            sx={{
              zIndex: -1,
              borderColor: "white",
              "--LinearProgress-radius": "4px",
              "--LinearProgress-progressThickness": "100%",
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
