import { Avatar, Box, Button, Card, Chip, Typography } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import { RACES, ROLES } from "../../../config/config";
import { T_Player } from "../../../config/config.d";
import { T_ReduxState } from "../../../config/store.d";
import { recruitPlayerThunk } from "../../../redux/recruit/recruitThunk";
import { AppDispatch } from "../../../redux/store";
import { setSelectedRecruitPlayer } from "../../../redux/ui/uiSlice";

interface I_RecruitCard {
  recruit: T_Player;
  isSelected: boolean;
}

const Recruit = ({ recruit, isSelected }: I_RecruitCard) => {
  const avaialablePicks = useSelector(
    (state: T_ReduxState) => state.recruit.avaialablePicks
  );
  const recruitRace = RACES[recruit.race];
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Card
      size="sm"
      variant="soft"
      orientation="horizontal"
      sx={{
        alignItems: "center",
        p: 1,
        border: (theme) =>
          isSelected
            ? `1px solid ${theme.palette.primary[500]}`
            : `1px solid ${theme.palette.background.level2}`,
        ":hover": {
          cursor: "pointer",
          border: (theme) =>
            isSelected
              ? `1px solid ${theme.palette.primary[400]}`
              : `1px solid ${theme.palette.primary[500]}`,
        },
      }}
      onClick={() => {
        dispatch(setSelectedRecruitPlayer(recruit.id));
      }}
    >
      <Avatar
        src={recruit.img}
        size="lg"
        sx={{
          border: (theme) => `4px solid ${theme.palette.neutral.solidBg}`,
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
            justifyContent: "space-between",
            gap: 0.5,
            flexGrow: 1,
          }}
        >
          <Chip startDecorator={<Avatar size="sm" src={recruitRace.img} />}>
            <Typography fontSize="xs" sx={{ color: "white" }}>
              {recruit.name}
            </Typography>
          </Chip>
          <Avatar size="sm" src={ROLES[recruit.role].icon} />
        </Box>
        <Button
          fullWidth
          disabled={avaialablePicks === 0}
          size="sm"
          variant="solid"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(recruitPlayerThunk(recruit));
          }}
        >
          RECRUIT ({avaialablePicks}/2)
        </Button>
      </Box>
    </Card>
  );
};

export default Recruit;
