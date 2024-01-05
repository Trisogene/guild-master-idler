import { Avatar, Badge, Box, Card, Tooltip } from "@mui/joy";
import { ITEMS } from "../../config/config";
import { ItemStack } from "../../config/config.d";

interface I_ItemCard {
  itemStack: ItemStack;
}

const Item: React.FC<I_ItemCard> = ({ itemStack }) => {
  const itemConfig = ITEMS[itemStack.id];

  const inset = "4px";

  return (
    <Box sx={{ p: "4px", maxWidth: 48, maxHeight: 48 }}>
      <Tooltip disableInteractive title={itemConfig.label} placement="top">
        <Badge
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          badgeContent={"T" + itemConfig.tier}
          badgeInset={inset}
          size="sm"
          variant="outlined"
          color="neutral"
          sx={{
            borderRadius: 0,
          }}
        >
          <Badge
            badgeContent={itemStack.quantity}
            badgeInset={inset}
            size="sm"
            variant="outlined"
            color="neutral"
          >
            <Card
              variant="soft"
              size="sm"
              sx={{
                position: "relative",
                alignItems: "center",
                justifyContent: "center",
                ":hover": {
                  cursor: "pointer",
                },
                p: 1,
                border: (theme) =>
                  `1px solid ${theme.palette.background.level2}`,
              }}
            >
              <Avatar src={itemConfig.img} sx={{}} />
            </Card>
          </Badge>
        </Badge>
      </Tooltip>
    </Box>
  );
};

export default Item;
