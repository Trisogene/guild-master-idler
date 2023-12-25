import { RECIPES } from "../../config/config";
import { E_Recipe } from "../../config/config.d";
import { addItem, removeItem } from "../storage/storage_slice";
import { AppDispatch } from "../store";

export const craftItem =
  (itemId: E_Recipe): any =>
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
