import { Box, Chip, Grid } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "../../components/Cards/ItemCard";
import { ITEM_CATEGORIES } from "../../config/ITEMS";
import useFilteredItems from "../../lib/hooks/useFilteredItems";
import { changeCurrentFilter } from "../../lib/redux/slices/storage_slice";
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
      <Box
        sx={{
          display: "flex",
          gap: 1,
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
            onClick={() => dispatch(changeCurrentFilter(filter))}
            sx={{
              minWidth: 80,
              textAlign: "center",
              p: 0.5,
              minHeight: 35,
              textTransform: "uppercase",
              fontSize: 12,
            }}
          >
            {filter}
          </Chip>
        ))}
      </Box>

      <Box
        sx={{
          height: "100%",
          border: (theme) => `1px solid ${theme.palette.background.level2}`,
          borderRadius: (theme) => theme.spacing(1),
          p: 1,
          bgcolor: "background.level1",
        }}
      >
        <Grid container spacing={1} sx={{}}>
          {Object.values(filteredItems).map((item) => (
            <Grid xs={3}>
              <ItemCard key={item.id} item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default StorageView;
