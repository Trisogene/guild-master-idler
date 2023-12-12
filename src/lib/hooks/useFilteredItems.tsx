import isEqual from "fast-deep-equal";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ITEMS } from "../../config/ITEMS";
import { T_ItemStacks } from "../../config/config";
import { T_ReduxState } from "../../types/types.d";

const useFilteredItems = () => {
  const storage = useSelector((state: T_ReduxState) => state.storage.storage);
  const currentFilter = useSelector(
    (state: T_ReduxState) => state.storage.currentFilter
  );

  const [filteredItems, setFilteredItems] = useState<T_ItemStacks>({});

  useEffect(() => {
    const newFilteredItems: T_ItemStacks = {};

    Object.values(storage).forEach((itemStack) => {
      if (ITEMS[itemStack.id].type === currentFilter) {
        newFilteredItems[itemStack.id] = {
          id: itemStack.id,
          quantity: itemStack.quantity,
        };
      }
    });

    if (!isEqual(filteredItems, newFilteredItems)) {
      setFilteredItems(newFilteredItems);
    }
  }, [storage, currentFilter]);

  return filteredItems;
};

export default useFilteredItems;
