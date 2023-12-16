import { Avatar, Button, Grid } from "@mui/joy";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import CraftableItemCard from "../../components/Cards/CraftableItemCard";
import CraftingInfo from "../../components/Info/CraftingInfo/CraftingInfo";
import { ITEMS, ITEM_CATEGORIES } from "../../config/ITEMS";
import { RECIPES } from "../../config/RECIPES";
import { T_Recipes } from "../../config/config";
import {
  setCurrentFilter,
  setCurrentSelectedCraft,
} from "../../lib/redux/crafting/crafting_slice";
import { T_ReduxState } from "../../lib/redux/store.d";
import {
  Page,
  PageBody,
  PageBottom,
  PageHeader,
} from "../../styles/PageStyles";

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
    <Page>
      <PageHeader
        sx={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {Object.values(ITEM_CATEGORIES).map((category) => {
          return category.craftable ? (
            <Button
              fullWidth
              onClick={() => dispatch(setCurrentFilter(category.id))}
              variant={currentFilter === category.id ? "solid" : "plain"}
              color="neutral"
              key={category.label}
              startDecorator={<Avatar src={category.icon} />}
            />
          ) : null;
        })}
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
              sm={4}
              md={3}
              lg={2}
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
    </Page>
  );
};

export default CraftingView;
