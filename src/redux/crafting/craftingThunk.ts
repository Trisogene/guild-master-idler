import { RECIPES } from "../../config/config";
import { ID_Item, ID_Recipe } from "../../config/config.d";
import { addItem, removeItem } from "../storage/storageSlice";
import { AppDispatch } from "../store";

export const craftItem =
  (recipeId: ID_Recipe): any =>
  (dispatch: AppDispatch) => {
    const recipe = RECIPES[recipeId];
    Object.entries(recipe.ingredients).forEach(
      ([ingredientId, igredientQuantity]) => {
        dispatch(
          removeItem({ itemId: ingredientId, quantity: igredientQuantity })
        );
      }
    );

    const itemId = recipeId as unknown as ID_Item;

    dispatch(addItem({ itemId: itemId, quantity: 1 }));
  };
