import { Box, Chip, Grid } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "../../components/Cards/ItemCard";
import { ITEM_CATEGORIES } from "../../config/ITEMS";
import useFilteredItems from "../../lib/hooks/useFilteredItems";

import { setCurrentStorageFilter } from "../../lib/redux/storage/storage_slice";
import { PageBody, PageBottom, PageHeader } from "../../styles/PageStyles";
import { T_ReduxState } from "../../types/types.d";

const StorageView = () => {
  const dispatch = useDispatch();
  const filteredItems = useFilteredItems();
  const currentFilter = useSelector(
    (state: T_ReduxState) => state.storage.currentFilter
  );

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 1, height: "100%" }}
    >
      <PageHeader
        sx={{
          display: "flex",
          gap: 0.5,
          border: (theme) => `1px solid ${theme.palette.background.level2}`,
          borderRadius: (theme) => theme.spacing(1),
          p: 1,
          bgcolor: "background.level1",
        }}
      >
        {Object.values(ITEM_CATEGORIES).map((filter) => (
          <Chip
            key={filter}
            variant={currentFilter === filter ? "solid" : "plain"}
            onClick={() => dispatch(setCurrentStorageFilter(filter))}
            sx={{
              textAlign: "center",
              height: 16,
              textTransform: "uppercase",
              fontSize: 12,
            }}
          >
            {filter}
          </Chip>
        ))}
      </PageHeader>

      <PageBody
        sx={{
          border: (theme) => `1px solid ${theme.palette.background.level2}`,
          borderRadius: (theme) => theme.spacing(1),
          p: 1,
          bgcolor: "background.level1",
        }}
      >
        <Grid container spacing={1}>
          {Object.values(filteredItems).map((itemStack) => (
            <Grid key={itemStack.id} xs={6}>
              <ItemCard key={itemStack.id} itemStack={itemStack} />
            </Grid>
          ))}
        </Grid>
      </PageBody>

      <PageBottom sx={{ bgcolor: "background.level1" }}></PageBottom>
    </Box>
  );
};

export default StorageView;
