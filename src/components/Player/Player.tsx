import { Card, Chip, LinearProgress, Typography } from "@mui/joy";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import { useAnimate } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import { CONTENTS, RACES, ROLES } from "../../config/config";
import { T_Player } from "../../config/config.d";
import { T_ReduxState } from "../../config/store.d";
import { AppDispatch } from "../../redux/store";
import { advancePlayerContent } from "../../redux/timer/timerThunks";
import { setSelectedGuildPlayer } from "../../redux/ui/uiSlice";

interface I_PlayerCard {
  player: T_Player;
  isSelected: boolean;
}

const Player = ({ player, isSelected }: I_PlayerCard) => {
  const [progressRef, animate] = useAnimate();

  const playerTimer = useSelector(
    (state: T_ReduxState) => state.timer.timers.players[player.id]
  );
  const timerPerc =
    (playerTimer / CONTENTS[player.currentContent].timeToComplete) * 100;
  const playerRace = RACES[player.race];
  const dispatch: AppDispatch = useDispatch<AppDispatch>();

  const handlePlayerClick = () => {
    if (!isSelected) {
      dispatch(setSelectedGuildPlayer(player.id));
      return;
    }
    dispatch(advancePlayerContent(player.id));
    animate(
      progressRef.current,
      {
        filter: [
          "brightness(1)",
          "brightness(2)",
          "brightness(2)",
          "brightness(1)",
        ],
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
          p: 1,
          border: (theme) =>
            isSelected
              ? `1px solid white`
              : `1px solid ${theme.palette.background.level2}`,
          ":hover": {
            cursor: "pointer",
            border: (theme) =>
              isSelected
                ? `1px solid white`
                : `1px solid ${theme.palette.background.level3}`,
          },
        }}
        onClick={handlePlayerClick}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar
            src={player.img}
            size="lg"
            sx={{
              border: (theme) => `4px solid ${theme.palette.success.solidBg}`,
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 0.5,
                flexGrow: 1,
              }}
            >
              <Box>
                <Typography fontSize="sm">{player.name}</Typography>
              </Box>

              <Chip startDecorator={<Avatar />} variant="outlined">
                <Typography fontSize={10}>{playerRace.label}</Typography>
              </Chip>
              <Chip startDecorator={<Avatar />} variant="outlined">
                <Typography fontSize={10}>
                  {ROLES[player.role].label}
                </Typography>
              </Chip>
            </Box>

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
                color="neutral"
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
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default Player;
