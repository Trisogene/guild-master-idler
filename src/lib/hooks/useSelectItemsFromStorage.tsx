import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { T_ItemIngredients } from "../../config/config";
import { T_ReduxState } from "../../types/types.d";

const selectStorage = (state: T_ReduxState) => state.storage.storage;

const makeSelectItemsInStorage = () =>
  createSelector(
    [selectStorage, (_, items: string[]) => items],
    (storage, items) => {
      let result: T_ItemIngredients = {};
      items.forEach((item) => {
        result[item] = storage[item]?.quantity || 0;
      });
      return result;
    }
  );

const useSelectItemsFromStorage = (items: string[]) => {
  const selectItemsInStorage = makeSelectItemsInStorage();
  const itemsInStorage = useSelector((state) =>
    selectItemsInStorage(state, items)
  );
  return itemsInStorage;
};

export default useSelectItemsFromStorage;
