import { Box, Chip, Grid } from "@mui/joy";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import CraftableItemCard from "../../components/Cards/CraftableItemCard";
import CraftingInfo from "../../components/Info/CraftingInfo/CraftingInfo";
import { CRAFTABLE_CATEGORIES, ITEMS } from "../../config/ITEMS";
import { RECIPES } from "../../config/RECIPES";
import { T_Recipes } from "../../config/config";
import {
  setCurrentFilter,
  setCurrentSelectedCraft,
} from "../../lib/redux/crafting/crafting_slice";
import { PageBody, PageBottom, PageHeader } from "../../styles/PageStyles";
import { T_ReduxState } from "../../types/types.d";

const CraftingView = () => {
  const dispatch = useDispatch();

  const currentFilter = useSelector(
    (state: T_ReduxState) => state.crafting.currentFilter
  );

  const filteredRecipes = useMemo(() => {
    let newFilteredRecipes: T_Recipes = {};

    Object.values(RECIPES).forEach((recipe) => {
      if (ITEMS[recipe.id].type === currentFilter) {
        newFilteredRecipes[recipe.id] = recipe;
      }
    });

    return newFilteredRecipes;
  }, [currentFilter]);

  const currentSelectedItem = useSelector(
    (state: T_ReduxState) => state.crafting.currentSelectedCraft
  );

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", height: "100%", gap: 1 }}
    >
      <PageHeader
        sx={{
          display: "flex",
          gap: 1,
          p: 1,
        }}
      >
        {Object.values(CRAFTABLE_CATEGORIES).map((filter) => (
          <Chip
            key={filter}
            variant={currentFilter === filter ? "solid" : "plain"}
            onClick={() => dispatch(setCurrentFilter(filter))}
            sx={{
              minWidth: 80,
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
          {Object.values(filteredRecipes).map((item) => (
            <Grid
              key={item.id}
              xs={6}
              onClick={() => dispatch(setCurrentSelectedCraft(item.id))}
            >
              <CraftableItemCard
                key={item.id}
                item={item.id}
                isSelected={currentSelectedItem === item.id}
              />
            </Grid>
          ))}
        </Grid>
      </PageBody>

      <PageBottom
        sx={{
          bgcolor: "background.level1",
        }}
      >
        {currentSelectedItem && <CraftingInfo itemId={currentSelectedItem} />}
      </PageBottom>
    </Box>
  );
};

export default CraftingView;
