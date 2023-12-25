import { Avatar, Box, Button, Typography } from "@mui/joy";
import { useMemo } from "react";
import { useDispatch } from "react-redux";

import { ITEMS, RECIPES } from "../../config/config";
import { E_Item, E_Recipe, T_Recipe } from "../../config/config.d";
import useSelectItemsFromStorage from "../../hooks/useSelectItemsFromStorage";
import { craftItem } from "../../redux/crafting/craftingThunk";

interface I_CraftingInfo {
  itemId: E_Recipe;
}

const RecipeInfo = ({ itemId }: I_CraftingInfo) => {
  const recipe: T_Recipe = RECIPES[itemId];
  const dispatch = useDispatch();

  const ingredientsInStorage = useSelectItemsFromStorage(
    Object.keys(recipe.ingredients) as E_Item[]
  );
  const canBeCrafted = useMemo(() => {
    return Object.entries(recipe.ingredients).every(
      ([ingredientName, igredientQuantity]) => {
        return (
          ingredientsInStorage[ingredientName as E_Recipe]?.quantity >=
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
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Box
        className="CraftingInfo-header"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 0.5,

          width: "100%",
          gap: 1,
        }}
      >
        <Avatar
          className="PlayerCard-avatar"
          src={ITEMS[recipe.id].img}
          size="sm"
        />
        <Typography
          sx={{
            fontWeight: "bold",
          }}
        >
          {recipe.label}
        </Typography>
      </Box>

      <Box className="CraftingInfo-body" sx={{ width: "100%", p: 1 }}></Box>

      <Box
        className="CraftingInfo-footer"
        sx={{ position: "absolute", bottom: 0, width: "100%", p: 0.5 }}
      >
        <Button
          variant="solid"
          color="success"
          fullWidth
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
