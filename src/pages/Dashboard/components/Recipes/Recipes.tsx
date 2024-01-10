import { Box, Card, Divider, Grid, Typography } from "@mui/joy";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ITEMS, RECIPES } from "../../../../config/config";
import { ID_Item, T_Recipes } from "../../../../config/config.d";
import { T_ReduxState } from "../../../../config/store.d";
import Recipe from "./components/Recipe";
import RecipeSelector from "./components/RecipeSelector";

const Recipes = () => {
  const dispatch = useDispatch();

  const craftingFilter = useSelector(
    (state: T_ReduxState) => state.ui.crafting.currentFilter
  );

  const filteredRecipes = useMemo(() => {
    let newFilteredRecipes: Partial<T_Recipes> = {};

    Object.values(RECIPES).forEach((recipe) => {
      if (craftingFilter[ITEMS[recipe.id].category]) {
        newFilteredRecipes[recipe.id] = recipe;
      }
    });

    return newFilteredRecipes;
  }, [craftingFilter]);

  const currentSelectedItem = useSelector(
    (state: T_ReduxState) => state.ui.crafting.currentSelectedItem
  );

  return (
    <Card
      size="sm"
      sx={{
        height: "100%",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: 1,
        }}
      >
        <Typography>Recipes</Typography>
        <Box sx={{ position: "absolute", right: 2, top: 2 }}>
          <RecipeSelector />
        </Box>
      </Box>

      <Divider />

      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
        }}
      >
        <Grid
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(128px, 1fr))",
            gap: 2,
          }}
        >
          {Object.values(filteredRecipes).map((item) => {
            const itemId = item.id as unknown as ID_Item;
            return (
              <Recipe
                key={item.id}
                itemId={itemId}
                isSelected={currentSelectedItem === item.id}
              />
            );
          })}
        </Grid>
      </Box>
    </Card>
  );
};

export default Recipes;
