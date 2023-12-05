import isEqual from "fast-deep-equal";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ITEMS } from "../../config/ITEMS";
import { T_ItemStack, T_ReduxState } from "../../types/types.d";

const useFilteredItems = () => {
  const storage = useSelector((state: T_ReduxState) => state.storage.storage);
  const currentFilter = useSelector(
    (state: T_ReduxState) => state.storage.currentFilter
  );

  const [filteredItems, setFilteredItems] = useState<T_ItemStack[]>([]);

  useEffect(() => {
    const newFilteredItems = Object.values(storage).filter(
      (item) => ITEMS[item.id].type === currentFilter
    );

    if (!isEqual(filteredItems, newFilteredItems)) {
      setFilteredItems(newFilteredItems);
    }
  }, [storage, currentFilter]);

  return filteredItems;
};

export default useFilteredItems;
