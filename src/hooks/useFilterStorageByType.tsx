import isEqual from "fast-deep-equal";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { ITEMS } from "../config/config";
import { E_Item_Category, T_Items_Stack } from "../config/config.d";
import { T_ReduxState } from "../config/store.d";

interface I_UseFilterStorageByType {
  filter: E_Item_Category;
}

const useFilterStorageByType = ({ filter }: I_UseFilterStorageByType) => {
  const storage = useSelector((state: T_ReduxState) => state.storage.storage);

  const [filteredItems, setFilteredItems] = useState<Partial<T_Items_Stack>>(
    {}
  );

  useEffect(() => {
    const newFilteredItems: Partial<T_Items_Stack> = {};

    Object.values(storage).forEach((itemStack) => {
      if (ITEMS[itemStack.id].category === filter) {
        newFilteredItems[itemStack.id] = {
          id: itemStack.id,
          quantity: itemStack.quantity,
        };
      }
    });

    if (!isEqual(filteredItems, newFilteredItems)) {
      setFilteredItems(newFilteredItems);
    }
  }, [storage, filter]);

  return filteredItems;
};

export default useFilterStorageByType;
