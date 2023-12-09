import { Avatar, Button, Typography } from "@mui/joy";
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
    <Box
      className="RecruitCard"
      sx={{
        userSelect: "none",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        gap: 1,
        p: 0.5,
        borderRadius: (theme) => theme.spacing(1),
        bgcolor: "background.level1",
        width: "100%",
        boxShadow: isSelected ? "0px 0px 2px 1px #fff" : "none",
        filter: isSelected ? "brightness(1)" : "brightness(0.7) ",
      }}
      onClick={() => {
        dispatch(setCurrentSelectedRecruit(recruit.id));
      }}
    >
      <Avatar className="PlayerCard-avatar" src={recruitRace.img} size="sm" />
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
        <Box sx={{ height: 12, fontSize: 10 }}>{recruit.name}</Box>
        <Button
          disabled={avaialablePicks === 0}
          color="neutral"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(recruitPlayer(recruit));
          }}
        >
          {" "}
          <Typography fontSize="sm">RECRUIT ({avaialablePicks}/2)</Typography>
        </Button>
      </Box>
    </Box>
  );
}
