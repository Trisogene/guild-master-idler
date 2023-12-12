import { LINKS } from "../../../config/LINKS";
import { RECIPES } from "../../../config/RECIPES";
import { sendNotification } from "../navigation/navigation_slice";
import { addItem, removeItem } from "../storage/storage_slice";
import { AppDispatch } from "../store";

export const craftItem =
  (itemId: string): any =>
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
    dispatch(sendNotification(LINKS.storage.id));
  };
