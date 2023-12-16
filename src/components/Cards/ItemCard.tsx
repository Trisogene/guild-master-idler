import { Avatar, Box, Card, CardContent, Divider, Typography } from "@mui/joy";
import { ITEMS } from "../../config/ITEMS";
import { T_Item_Stack } from "../../config/config";

interface I_ItemCard {
  itemStack: T_Item_Stack;
}

const ItemCard = ({ itemStack }: I_ItemCard) => {
  const itemConfig = ITEMS[itemStack.id];

  return (
    <Card
      sx={{
        alignItems: "center",
        bgcolor: false ? "background.level2" : "background.level1",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Avatar className="PlayerCard-avatar" src={itemConfig.img} />

        <Typography fontSize="sm">{itemConfig.label}</Typography>
      </Box>

      <Divider
        orientation="horizontal"
        sx={{ width: "90%", alignSelf: "center" }}
      />

      <CardContent sx={{ alignItems: "center" }}>
        <Typography fontSize="sm">x{itemStack.quantity}</Typography>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
