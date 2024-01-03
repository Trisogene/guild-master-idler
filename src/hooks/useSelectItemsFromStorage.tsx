import { shallowEqual, useSelector } from "react-redux";
import { ID_Item, ItemStacks } from "../config/config.d";
import { T_ReduxState } from "../config/store.d";

const useSelectItemsFromStorage = (items: ID_Item[]) => {
  const itemsInStorage = useSelector((state: T_ReduxState) => {
    return items.reduce((acc, item) => {
      acc[item] = state.storage.storage[item];
      return acc;
    }, {} as ItemStacks);
  }, shallowEqual);

  return itemsInStorage;
};

export default useSelectItemsFromStorage;
