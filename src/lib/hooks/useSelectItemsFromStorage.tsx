import { shallowEqual, useSelector } from "react-redux";
import { T_ItemStacks } from "../../config/config";
import { T_ReduxState } from "../../types/types.d";

const useSelectItemsFromStorage = (items: string[]) => {
  const itemsInStorage = useSelector((state: T_ReduxState) => {
    // Select only the items from storage that are in the items array
    return items.reduce((acc, item) => {
      acc[item] = state.storage.storage[item];
      return acc;
    }, {} as T_ItemStacks);
  }, shallowEqual);

  return itemsInStorage;
};

export default useSelectItemsFromStorage;
