import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { useDispatch } from "react-redux";
import { RACES } from "../../config/RACES";
import { setCurrentSelectedRecruit } from "../../lib/redux/slices/recruit_slice";
import { AppDispatch } from "../../lib/redux/store";
import { I_RecruitCard } from "../../types/types.d";

export default function RecruitCard({ recruit, isSelected }: I_RecruitCard) {
  const recruitRace = RACES[recruit.race];
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Card
      size="sm"
      sx={{
        p: 0.5,
        bgcolor: "background.level1",
        ":hover": { cursor: "pointer", bgcolor: "background.level2" },
        boxShadow: isSelected ? "0px 0px 2px 1px #fff" : "none",
        filter: isSelected ? "brightness(1)" : "brightness(0.5)",
      }}
      onClick={() => {
        dispatch(setCurrentSelectedRecruit(recruit.id));
      }}
    >
      <CardContent sx={{ gap: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography fontSize="xl" fontWeight="lg">
              {recruit.name}
            </Typography>
            <Typography
              level="body-sm"
              fontWeight="lg"
              textColor="text.tertiary"
            >
              {recruitRace.label}
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
              src={recruitRace.img}
              sx={{
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
