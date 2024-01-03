import { RECIPES } from "../../config/config";
import { ID_Recipe } from "../../config/config.d";
import { addItem, removeItem } from "../storage/storageSlice";
import { AppDispatch } from "../store";

export const craftItem =
  (itemId: ID_Recipe): any =>
  (dispatch: AppDispatch) => {
    const recipe = RECIPES[itemId];
    Object.entries(recipe.ingredients).forEach(
      ([ingredientId, igredientQuantity]) => {
        dispatch(
          removeItem({ itemId: ingredientId, quantity: igredientQuantity })
        );
      }
    );

    dispatch(addItem({ itemId, quantity: 1 }));
  };
