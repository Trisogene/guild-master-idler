import { Box, Button, Card } from "@mui/joy";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RECIPES } from "../../../../config/config";
import { ID_Item, ID_Recipe, T_Recipe } from "../../../../config/config.d";
import { T_ReduxState } from "../../../../config/store.d";
import useSelectItemsFromStorage from "../../../../hooks/useSelectItemsFromStorage";
import { craftItem } from "../../../../redux/crafting/craftingThunk";

const RecipeDetail = () => {
  const currentSelectedItem =
    useSelector(
      (state: T_ReduxState) => state.ui.crafting.currentSelectedItem
    ) || RECIPES.bow.id;
  const recipe: T_Recipe = RECIPES[currentSelectedItem];
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
    <Card
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
    </Card>
  );
};

export default RecipeDetail;
