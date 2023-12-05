import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { RACES } from "../../config/RACES";
import { I_RecruitCard } from "../../types/types.d";

export default function RecruitCard({
  recruit,
  onCardClickHandler,
  isSelected,
}: I_RecruitCard) {
  const recruitRace = RACES[recruit.race];

  return (
    <Card
      size="sm"
      sx={{
        p: 0.5,
        bgcolor: isSelected ? "background.level2" : "background.level1",
        ":hover": { cursor: "pointer", bgcolor: "background.level2" },
      }}
      onClick={() => onCardClickHandler(recruit.id)}
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
