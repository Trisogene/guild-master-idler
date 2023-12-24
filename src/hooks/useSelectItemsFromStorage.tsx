import { shallowEqual, useSelector } from "react-redux";
import { E_Item, T_Items_Stack } from "../config/config.d";
import { T_ReduxState } from "../config/store.d";

const useSelectItemsFromStorage = (items: E_Item[]) => {
  const itemsInStorage = useSelector((state: T_ReduxState) => {
    return items.reduce((acc, item) => {
      acc[item] = state.storage.storage[item];
      return acc;
    }, {} as T_Items_Stack);
  }, shallowEqual);

  return itemsInStorage;
};

export default useSelectItemsFromStorage;
