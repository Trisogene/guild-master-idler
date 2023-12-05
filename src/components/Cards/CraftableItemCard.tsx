import { Box, Card, CardContent, Typography } from "@mui/joy";
import { ITEMS } from "../../config/ITEMS";
import { T_Item } from "../../types/types.d";

interface I_CraftableItemCard {
  item: string;
}

const CraftableItemCard = ({ item }: I_CraftableItemCard) => {
  const itemConfig: T_Item = ITEMS[item];

  return (
    <Card size="sm" sx={{ bgcolor: "background.level1", p: 0 }}>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            fontSize={10}
            component={"div"}
            sx={{
              textAlign: "center",
              width: "100%",
              bgcolor: "background.level2",

              p: 0.5,
            }}
          >
            {itemConfig.label}
          </Typography>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              placeItems: "center",
              p: 1,
              gap: 1,
            }}
          >
            <Box
              component="img"
              src={itemConfig.img}
              sx={{
                width: 16,
                height: 16,
              }}
            />
            <Box sx={{ flexGrow: 1, fontSize: 12 }}>Cant be crafted</Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CraftableItemCard;
