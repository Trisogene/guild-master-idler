import { Avatar, Box, Button, Divider, Typography } from "@mui/joy";
import { useMemo } from "react";
import { useDispatch } from "react-redux";

import { ITEMS, RECIPES } from "../../config/config";
import { ID_Item, ID_Recipe, T_Recipe } from "../../config/config.d";
import useSelectItemsFromStorage from "../../hooks/useSelectItemsFromStorage";
import { craftItem } from "../../redux/crafting/craftingThunk";

interface I_CraftingInfo {
  itemId: ID_Recipe;
}

const RecipeInfo = ({ itemId }: I_CraftingInfo) => {
  const recipe: T_Recipe = RECIPES[itemId];
  const dispatch = useDispatch();

  const ingredientsInStorage = useSelectItemsFromStorage(
    Object.keys(recipe.ingredients) as ID_Item[]
  );
  const canBeCrafted = useMemo(() => {
    return Object.entries(recipe.ingredients).every(
      ([ingredientName, igredientQuantity]) => {
        return (
          ingredientsInStorage[ingredientName as ID_Recipe]?.quantity >=
          igredientQuantity
        );
      }
    );
  }, [ingredientsInStorage, recipe.ingredients]);

  return (
    <Box
      className="CraftingInfo"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 1,

        height: "100%",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          width: "100%",
          gap: 1,
        }}
      >
        <Avatar src={ITEMS[recipe.id].img} size="sm" />
        <Typography
          sx={{
            fontWeight: "bold",
          }}
        >
          {recipe.label}
        </Typography>
      </Box>

      <Divider />

      <Box>
        <Button
          variant="solid"
          color="success"
          disabled={!canBeCrafted}
          sx={{ height: "100%" }}
          onClick={() => dispatch(craftItem(recipe.id))}
        >
          Craft
        </Button>
      </Box>
    </Box>
  );
};

export default RecipeInfo;
