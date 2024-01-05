import { Avatar, Box, Button, Card, Chip, Divider, Typography } from "@mui/joy";
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

export default function Recruit({ recruit, isSelected }: I_RecruitCard) {
  const avaialablePicks = useSelector(
    (state: T_ReduxState) => state.recruit.avaialablePicks
  );
  const recruitRace = RACES[recruit.race];
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Card
      variant="soft"
      size="sm"
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
      onClick={() => {
        dispatch(setSelectedRecruitPlayer(recruit.id));
      }}
    >
      <Typography fontSize="xs" sx={{ color: "white" }}>
        {recruit.name}
      </Typography>

      <Divider />

      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
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
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Chip
              variant="soft"
              size="sm"
              startDecorator={<Avatar size="sm" />}
            >
              <Typography fontSize={10}>{recruitRace.label}</Typography>
            </Chip>
            <Chip
              variant="soft"
              size="sm"
              startDecorator={<Avatar size="sm" />}
            >
              <Typography fontSize={10}>{ROLES[recruit.role].label}</Typography>
            </Chip>
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
      </Box>
    </Card>
  );
}