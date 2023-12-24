import { Avatar, Button, Grid } from "@mui/joy";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Recipe, RecipeInfo } from "../../components";
import { ITEMS, ITEM_CATEGORIES, RECIPES } from "../../config/config";
import { T_Recipes } from "../../config/config.d";
import { T_ReduxState } from "../../config/store.d";
import { setCurrentFilter } from "../../redux/crafting/crafting_slice";
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
    let newFilteredRecipes: Partial<T_Recipes> = {};

    Object.values(RECIPES).forEach((recipe) => {
      if (ITEMS[recipe.id].category === currentFilter) {
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
          p: 1,
        }}
      >
        <Grid
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(128px, 1fr))",
            gap: 1,
          }}
        >
          {Object.values(filteredRecipes).map((item) => (
            <Recipe
              key={item.id}
              item={item.id}
              isSelected={currentSelectedItem === item.id}
            />
          ))}
        </Grid>
      </PageBody>

      <PageBottom>
        {currentSelectedItem && <RecipeInfo itemId={currentSelectedItem} />}
      </PageBottom>
    </Page>
  );
};

export default CraftingView;
