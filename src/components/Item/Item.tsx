import { Avatar, Box, Card, Tooltip, Typography } from "@mui/joy";
import { ITEMS } from "../../config/config";
import { T_Item_Stack } from "../../config/config.d";

interface I_ItemCard {
  itemStack: T_Item_Stack;
}

const Item: React.FC<I_ItemCard> = ({ itemStack }) => {
  const itemConfig = ITEMS[itemStack.id];

  return (
    <Tooltip disableInteractive title={itemConfig.label} placement="top">
      <Card
        sx={{
          position: "relative",
          height: 48,
          width: 48,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar size="md" className="PlayerCard-avatar" src={itemConfig.img} />
        <Box
          sx={{
            position: "absolute",
            bottom: -4,
            right: -4,
            bgcolor: "background.level2",
            borderRadius: (theme) => theme.vars.radius.sm,
            width: 20,
            height: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: (theme) => `1px solid ${theme.palette.background.level3}`,
            p: 0.5,
          }}
        >
          <Typography fontSize={10}>{itemStack.quantity}</Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: -4,
            left: -4,
            bgcolor: "background.level2",
            borderRadius: (theme) => theme.vars.radius.sm,
            width: 20,
            height: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: (theme) => `1px solid ${theme.palette.background.level3}`,
            p: 0.5,
          }}
        >
          <Typography fontSize={10}>T{ITEMS[itemStack.id].tier}</Typography>
        </Box>
      </Card>
    </Tooltip>
  );
};

export default Item;
