import isEqual from "fast-deep-equal";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { ITEMS } from "../config/config";
import { ID_Item_Category, ItemStacks } from "../config/config.d";
import { T_ReduxState } from "../config/store.d";

interface I_UseFilterStorageByType {
  filter: Record<ID_Item_Category, boolean>;
}

const useFilterStorageByType = ({ filter }: I_UseFilterStorageByType) => {
  const storage = useSelector((state: T_ReduxState) => state.storage.storage);

  const [filteredItems, setFilteredItems] = useState<Partial<ItemStacks>>({});

  useEffect(() => {
    const newFilteredItems: Partial<ItemStacks> = {};
    Object.values(storage).forEach((itemStack) => {
      if (filter[ITEMS[itemStack.id].category]) {
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
