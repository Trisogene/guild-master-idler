import { Avatar, Button, Card, CardContent, Divider } from "@mui/joy";
import Box from "@mui/joy/Box";
import { useDispatch, useSelector } from "react-redux";
import { RACES } from "../../config/RACES";
import { setCurrentSelectedRecruit } from "../../lib/redux/recruit/recruit_slice";
import { recruitPlayer } from "../../lib/redux/recruit/recruit_thunks";
import { AppDispatch } from "../../lib/redux/store";
import { I_RecruitCard, T_ReduxState } from "../../types/types.d";

export default function RecruitCard({ recruit, isSelected }: I_RecruitCard) {
  const avaialablePicks = useSelector(
    (state: T_ReduxState) => state.recruit.avaialablePicks
  );
  const recruitRace = RACES[recruit.race];
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Card
      className="RecruitCard"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        bgcolor: isSelected ? "background.level2" : "background.level1",
      }}
      onClick={() => {
        dispatch(setCurrentSelectedRecruit(recruit.id));
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 1,
          width: "100%",
        }}
      >
        <Avatar className="PlayerCard-avatar" src={recruitRace.img} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
            width: "100%",
          }}
        >
          <Box sx={{ height: 12, fontSize: 10 }}>{recruit.name}</Box>
        </Box>
      </Box>

      <Divider orientation="horizontal" />

      <CardContent>
        <Button
          disabled={avaialablePicks === 0}
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
      </CardContent>
    </Card>
  );
}
