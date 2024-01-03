import { Avatar, Box, Card, Tooltip, Typography } from "@mui/joy";
import { ITEMS } from "../../config/config";
import { ItemStack } from "../../config/config.d";

interface I_ItemCard {
  itemStack: ItemStack;
  size?: "sm" | "md" | "lg";
}

const Item = ({ itemStack, size = "md" }: I_ItemCard) => {
  const itemConfig = ITEMS[itemStack.id];

  const sizeMap = {
    sm: 24,
    md: 48,
    lg: 64,
  };

  return (
    <Tooltip disableInteractive title={itemConfig.label} placement="top">
      <Card
        sx={{
          position: "relative",
          height: sizeMap[size],
          width: sizeMap[size],
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Avatar
          size={size}
          className="PlayerCard-avatar"
          src={itemConfig.img}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -4,
            right: -4,
            bgcolor: "background.level2",
            borderRadius: (theme) => theme.vars.radius.sm,
            width: sizeMap[size] / 3,
            height: sizeMap[size] / 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: (theme) => `1px solid ${theme.palette.background.level3}`,
            p: 0.75,
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
            width: sizeMap[size] / 3,
            height: sizeMap[size] / 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: (theme) => `1px solid ${theme.palette.background.level3}`,
            p: 0.75,
          }}
        >
          <Typography fontSize={10}>T{ITEMS[itemStack.id].tier}</Typography>
        </Box>
      </Card>
    </Tooltip>
  );
};

export default Item;
