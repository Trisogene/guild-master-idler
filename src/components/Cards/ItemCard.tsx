import { Avatar, Box, Card, CardContent, Divider } from "@mui/joy";
import { ITEMS } from "../../config/ITEMS";
import { T_ItemStack } from "../../config/config";

interface I_ItemCard {
  itemStack: T_ItemStack;
}

const ItemCard = ({ itemStack }: I_ItemCard) => {
  const itemConfig = ITEMS[itemStack.id];

  return (
    <Card>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          width: "100%",
        }}
      >
        <Avatar className="PlayerCard-avatar" src={itemConfig.img} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
            width: "100%",
          }}
        >
          <Box sx={{ height: 12, fontSize: 10 }}>{itemConfig.label}</Box>
        </Box>
      </Box>

      <Divider orientation="horizontal" />
      <CardContent sx={{ alignItems: "center" }}>
        <Box sx={{ flexGrow: 1 }}>x{itemStack.quantity}</Box>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
