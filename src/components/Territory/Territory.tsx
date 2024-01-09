import { Box, Card, CardCover, Chip, Typography } from "@mui/joy";

import { T_Territory } from "../../config/config";

interface I_TerritoryProps {
  territory: T_Territory;
}

const Territory = ({ territory }: I_TerritoryProps) => {
  return (
    <Card sx={{ p: 1, opacity: territory.unlocked ? 1 : 0.5 }}>
      <Typography fontWeight="bold" sx={{ zIndex: 1 }}>
        {territory.id.toUpperCase()}
      </Typography>
      <Box sx={{ display: "flex", gap: 1, zIndex: 1 }}>
        <Chip>
          <Typography fontSize={14}>
            Defenders: {territory.defenders.min}-{territory.defenders.max}
          </Typography>
        </Chip>
      </Box>
      <Box sx={{ position: "absolute", top: 0, right: 0, zIndex: 1 }}>
        <Chip sx={{ gap: 1, alignItems: "center", alignContent: "center" }}>
          <Typography fontSize={14}>
            {new Date(territory.vulnerable * 1000).toISOString().substr(14, 5)}
          </Typography>
        </Chip>
      </Box>
      <CardCover>
        <Box
          component="img"
          src={territory.img}
          alt={territory.id}
          sx={{ opacity: territory.unlocked ? 0.5 : 0.25 }}
        />
      </CardCover>
    </Card>
  );
};

export default Territory;
