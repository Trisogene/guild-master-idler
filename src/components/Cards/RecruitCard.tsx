import { Avatar, Box, Button, Card, Divider, Typography } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import { RACES } from "../../config/RACES";
import { T_PlayerConfig } from "../../config/config";
import { setCurrentSelectedRecruit } from "../../lib/redux/recruit/recruit_slice";
import { recruitPlayer } from "../../lib/redux/recruit/recruit_thunks";
import { AppDispatch } from "../../lib/redux/store";
import { T_ReduxState } from "../../lib/redux/store.d";

interface I_RecruitCard {
  recruit: T_PlayerConfig;
  isSelected: boolean;
}

export default function RecruitCard({ recruit, isSelected }: I_RecruitCard) {
  const avaialablePicks = useSelector(
    (state: T_ReduxState) => state.recruit.avaialablePicks
  );
  const recruitRace = RACES[recruit.race];
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Card
      sx={{
        bgcolor: isSelected ? "background.level2" : "background.level1",
        alignItems: "center",
      }}
      onClick={() => {
        dispatch(setCurrentSelectedRecruit(recruit.id));
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Avatar className="PlayerCard-avatar" src={recruitRace.img} />

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
