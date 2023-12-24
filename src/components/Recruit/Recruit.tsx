import { Avatar, Box, Button, Card, Divider, Typography } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import { RACES } from "../../config/config";
import { T_Player } from "../../config/config.d";
import { T_ReduxState } from "../../config/store.d";
import { setCurrentSelectedRecruit } from "../../redux/recruit/recruit_slice";
import { recruitPlayer } from "../../redux/recruit/recruit_thunks";
import { AppDispatch } from "../../redux/store";

interface I_RecruitCard {
  recruit: T_Player;
  isSelected: boolean;
}

export default function Recruit({ recruit, isSelected }: I_RecruitCard) {
  const avaialablePicks = useSelector(
    (state: T_ReduxState) => state.recruit.avaialablePicks
  );
  const recruitRace = RACES[recruit.race];
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Card
      sx={{
        bgcolor: isSelected ? "background.level2" : "background.paper",
        alignItems: "center",
      }}
      onClick={() => {
        dispatch(setCurrentSelectedRecruit(recruit.id));
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Avatar className="PlayerCard-avatar" src={recruitRace?.img} />

        <Typography sx={{ height: 12, fontSize: 10 }}>
          {recruit.name}
        </Typography>
      </Box>

      <Divider
        orientation="horizontal"
        sx={{ width: "100%", alignSelf: "center" }}
      />

      <Button
        fullWidth
        disabled={!isSelected || avaialablePicks === 0}
        color="neutral"
        size="sm"
        variant="solid"
        onClick={(e) => {
          e.stopPropagation();
          dispatch(recruitPlayer(recruit));
        }}
      >
        RECRUIT ({avaialablePicks}/2)
      </Button>
    </Card>
  );
}
