import { CardActions } from "@mui/joy";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { useDispatch } from "react-redux";
import { PERKS } from "../../config/PERKS";
import { RACES } from "../../config/RACES";
import { recruitPlayer } from "../../lib/redux/slices/recruit_slice";
import { AppDispatch } from "../../lib/redux/store";
import { I_RecruitCard } from "../../types/types.d";
import PerkIcon from "../Icons/PerkIcon";

export default function PlayerCard({ player }: I_RecruitCard) {
  const playerRace = RACES[player.race];
  const dispatch = useDispatch<AppDispatch>();

  const clickRecruitHandler = () => {
    dispatch(recruitPlayer(player));
  };
  return (
    <Card sx={{ bgcolor: "background.level1" }}>
      <CardContent sx={{ gap: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography fontSize="xl" fontWeight="lg">
              {player.name}
            </Typography>
            <Typography
              level="body-sm"
              fontWeight="lg"
              textColor="text.tertiary"
            >
              {playerRace.label}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "background.level2",
              borderRadius: "50%",
              width: 32,
              height: 32,
              p: 0.5,
            }}
          >
            <Box
              component={"img"}
              loading="lazy"
              alt=""
              src={playerRace.img}
              sx={{
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            gap: 1,
            display: "flex",
          }}
        >
          {playerRace.perks.map((perkId) => {
            const perk = PERKS[perkId];
            return <PerkIcon key={perk.id} perk={perk} />;
          })}
        </Box>
      </CardContent>
      <CardActions buttonFlex={1}>
        <Button variant="outlined" color="neutral">
          Info
        </Button>
        <Button variant="solid" color="primary" onClick={clickRecruitHandler}>
          Recruit
        </Button>
      </CardActions>
    </Card>
  );
}
