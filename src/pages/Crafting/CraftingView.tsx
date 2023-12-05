import { Box, Chip, Grid } from "@mui/joy";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CraftableItemCard from "../../components/Cards/CraftableItemCard";
import { CRAFTABLE_CATEGORIES, ITEMS_EQUIP } from "../../config/ITEMS";
import { changeCurrentFilter } from "../../lib/redux/slices/crafting_slice";
import { T_ReduxState } from "../../types/types.d";

const CraftingView = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(
    (state: T_ReduxState) => state.crafting.currentFilter
  );
  const [selectedItem, setSelectedItem] = useState<string>("");

  const filteredCraftables = useMemo(() => {
    return Object.values(ITEMS_EQUIP).filter(
      (item) => item.subType === currentFilter
    );
  }, [currentFilter]);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", height: "100%", gap: 1 }}
    >
      <Box
        sx={{ height: "60%", display: "flex", flexDirection: "column", gap: 1 }}
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
          {Object.values(CRAFTABLE_CATEGORIES).map((filter) => (
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
            overflowY: "auto",
            height: "100%",
            border: (theme) => `1px solid ${theme.palette.background.level2}`,
            borderRadius: (theme) => theme.spacing(1),
            p: 1,
            bgcolor: "background.level1",
          }}
        >
          <Grid container spacing={1} sx={{}}>
            {Object.values(filteredCraftables).map((item) => (
              <Grid
                xs={6}
                onClick={() => setSelectedItem(item.id)}
                sx={{
                  ":hover": {
                    bgcolor: "background.level3",
                    cursor: "pointer",
                    userSelect: "none",
                  },
                }}
              >
                <CraftableItemCard key={item.id} item={item.id} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          height: "40%",
          bgcolor: "background.level1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {selectedItem} craft info
      </Box>
    </Box>
  );
};

export default CraftingView;
