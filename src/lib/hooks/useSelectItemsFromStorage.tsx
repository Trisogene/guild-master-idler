import { shallowEqual, useSelector } from "react-redux";
import { T_Item_Stacks } from "../../config/config";
import { T_ReduxState } from "../../types/types.d";

const useSelectItemsFromStorage = (items: string[]) => {
  const itemsInStorage = useSelector((state: T_ReduxState) => {
    return items.reduce((acc, item) => {
      acc[item] = state.storage.storage[item];
      return acc;
    }, {} as T_Item_Stacks);
  }, shallowEqual);

  return itemsInStorage;
};

export default useSelectItemsFromStorage;
