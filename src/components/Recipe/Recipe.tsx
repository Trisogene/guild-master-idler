import { Avatar, Box, Card, CardContent, Chip, Divider } from "@mui/joy";
import { memo } from "react";

import { useDispatch } from "react-redux";
import { ITEMS, RECIPES } from "../../config/config";
import { E_Item, E_Recipe, T_Item, T_Recipe } from "../../config/config.d";
import useSelectItemsFromStorage from "../../hooks/useSelectItemsFromStorage";
import { setCurrentCraftingItem } from "../../redux/ui/uiSlice";

interface I_CraftableItemCard {
  item: E_Recipe;
  isSelected: boolean;
}

const Recipe = ({ item, isSelected }: I_CraftableItemCard) => {
  const dispatch = useDispatch();
  const itemConfig: T_Item = ITEMS[item];
  const itemRecipe: T_Recipe = RECIPES[item];
  const igredientsInStorage = useSelectItemsFromStorage(
    Object.keys(itemRecipe.ingredients) as E_Item[]
  );

  const isCraftable = Object.entries(itemRecipe.ingredients).every(
    ([ingredientName, igredientQuantity]) => {
      return (
        igredientsInStorage[ingredientName as E_Item]?.quantity >=
        igredientQuantity
      );
    }
  );

  return (
    <Card
      onClick={() => dispatch(setCurrentCraftingItem(item))}
      sx={{
        alignItems: "center",
        bgcolor: isSelected ? "background.level2" : "background.paper",
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
      <Divider
        orientation="horizontal"
        sx={{ width: "90%", alignSelf: "center" }}
      />
      <CardContent>
        {Object.entries(itemRecipe.ingredients).map(
          ([ingredientName, igredientQuantity]) => {
            return (
              <Chip
                sx={{ minWidth: "100%" }}
                variant="solid"
                color={isCraftable ? "success" : "neutral"}
                key={ingredientName}
                startDecorator={
                  <Avatar src={ITEMS[ingredientName as E_Item].img} />
                }
              >
                {igredientsInStorage[ingredientName as E_Item]?.quantity || 0} /{" "}
                {igredientQuantity}
              </Chip>
            );
          }
        )}
      </CardContent>
    </Card>
  );
};

export default memo(Recipe);
