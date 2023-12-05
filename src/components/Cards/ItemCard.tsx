import { Box, Card, CardContent, Typography } from "@mui/joy";
import { ITEMS } from "../../config/ITEMS";
import { T_ItemStack } from "../../types/types.d";

interface I_ItemCard {
  item: T_ItemStack;
}
const ItemCard = ({ item }: I_ItemCard) => {
  const itemConfig = ITEMS[item.id];

  return (
    <Card size="sm" sx={{ bgcolor: "background.level1", p: 0, maxHeight: 60 }}>
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
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              width: "100%",
              placeItems: "center",
              p: 0.5,
            }}
          >
            <Box
              component="img"
              src={itemConfig.img}
              sx={{
                width: 24,
                height: 24,
              }}
            />
            <Box sx={{ flexGrow: 1 }}>x{item.quantity}</Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
