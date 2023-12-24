import { Avatar, Box, Card, CardContent, Divider, Typography } from "@mui/joy";
import { ITEMS } from "../../config/config";
import { T_Item_Stack } from "../../config/config.d";

interface I_ItemCard {
  itemStack: T_Item_Stack;
}

const Item: React.FC<I_ItemCard> = ({ itemStack }) => {
  const itemConfig = ITEMS[itemStack.id];

  return (
    <Card
      sx={{
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          p: 0.5,
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

export default Item;
