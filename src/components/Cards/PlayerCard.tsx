import { I_PlayerCard } from "../../types/types.d";

import { Chip, LinearProgress } from "@mui/joy";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import { useSelector } from "react-redux";
import { CONTENTS } from "../../config/CONTENTS";
import { RACES } from "../../config/RACES";

const PlayerCard = ({ player }: I_PlayerCard) => {
  const playerTimer = useSelector(
    (state: any) => state.gameManager.timers.players[player.id]
  );
  const timerPerc =
    (playerTimer / CONTENTS[player.currentContent].timeToComplete) * 100;
  const playerRace = RACES[player.race];
  return (
    <>
      <Card size="sm" sx={{ bgcolor: "background.level1", width: "100%" }}>
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
