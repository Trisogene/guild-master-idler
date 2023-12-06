import { I_PlayerCard } from "../../types/types.d";

import { Chip, LinearProgress } from "@mui/joy";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import { useDispatch, useSelector } from "react-redux";
import { CONTENTS } from "../../config/CONTENTS";
import { RACES } from "../../config/RACES";
import { setCurrentlySelectedPlayer } from "../../lib/redux/slices/players_slice";
import { AppDispatch } from "../../lib/redux/store";

const PlayerCard = ({ player, isSelected }: I_PlayerCard) => {
  const playerTimer = useSelector(
    (state: any) => state.gameManager.timers.players[player.id]
  );
  const timerPerc =
    (playerTimer / CONTENTS[player.currentContent].timeToComplete) * 100;
  const playerRace = RACES[player.race];
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <Card
        size="sm"
        sx={{
          bgcolor: "background.level1",
          width: "100%",
          boxShadow: isSelected ? "0px 0px 2px 1px #fff" : "none",
          filter: isSelected ? "brightness(1)" : "brightness(0.5)",
          ":hover": {
            cursor: "pointer",
            filter: isSelected ? "brightness(1)" : "brightness(0.75)",
          },
        }}
        onClick={() => {
          dispatch(setCurrentlySelectedPlayer(player.id));
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
          >
            <Avatar src={playerRace.img} size="sm" />
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Box sx={{ height: 12, fontSize: 10 }}>{player.name}</Box>
              <Chip size="sm" variant="solid">
                {player.currentContent}
              </Chip>
            </Box>
          </Box>
        </CardContent>
        <Box>
          <LinearProgress
            determinate
            value={timerPerc}
            thickness={8}
            sx={{
              borderColor: "white",
              "&::before": {
                transition: "width 0.2s ease-in-out",
              },
            }}
          />
        </Box>
      </Card>
    </>
  );
};

export default PlayerCard;
