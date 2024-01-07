import { Avatar, Box, Card, Chip, Typography } from "@mui/joy";
import { memo } from "react";

import { useDispatch } from "react-redux";
import { ITEMS, RECIPES } from "../../config/config";
import { ID_Item, ID_Recipe, Item, T_Recipe } from "../../config/config.d";
import useSelectItemsFromStorage from "../../hooks/useSelectItemsFromStorage";
import { setCurrentCraftingItem } from "../../redux/ui/uiSlice";

interface I_CraftableItemCard {
  itemId: ID_Item;
  isSelected: boolean;
}

const Recipe = ({ itemId, isSelected }: I_CraftableItemCard) => {
  const dispatch = useDispatch();
  const itemConfig: Item = ITEMS[itemId];
  const itemRecipe: T_Recipe = RECIPES[itemId as unknown as ID_Recipe];
  const igredientsInStorage = useSelectItemsFromStorage(
    Object.keys(itemRecipe.ingredients) as ID_Item[]
  );

  const isCraftable = Object.entries(itemRecipe.ingredients).every(
    ([ingredientName, igredientQuantity]) => {
      return (
        igredientsInStorage[ingredientName as ID_Item]?.quantity >=
        igredientQuantity
      );
    }
  );

  return (
    <Card
      size="sm"
      variant="soft"
      onClick={() => dispatch(setCurrentCraftingItem(itemRecipe.id))}
      sx={{
        border: (theme) =>
          isSelected
            ? `1px solid white`
            : `1px solid ${theme.palette.background.level2}`,
        ":hover": {
          cursor: "pointer",
          border: (theme) =>
            isSelected
              ? `1px solid white`
              : `1px solid ${theme.palette.background.level3}`,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 1,
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

      {Object.entries(itemRecipe.ingredients).map(
        ([ingredientName, igredientQuantity]) => {
          return (
            <Chip
              color={isCraftable ? "success" : "neutral"}
              variant={isCraftable ? "solid" : "soft"}
              key={ingredientName}
              sx={{}}
              startDecorator={
                <Avatar size="sm" src={ITEMS[ingredientName as ID_Item].img} />
              }
            >
              <Typography fontSize="sm">
                {ITEMS[ingredientName as ID_Item].label}{" "}
                {igredientsInStorage[ingredientName as ID_Item]?.quantity || 0}{" "}
                / {igredientQuantity}
              </Typography>
            </Chip>
          );
        }
      )}
    </Card>
  );
};

export default memo(Recipe);
