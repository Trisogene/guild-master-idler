import { Avatar, Box, Button, Card, Grid } from "@mui/joy";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Recipe } from "../../../../components";
import { ITEMS, ITEM_CATEGORIES, RECIPES } from "../../../../config/config";
import { ID_Item, T_Recipes } from "../../../../config/config.d";
import { T_ReduxState } from "../../../../config/store.d";
import { setCraftingFilter } from "../../../../redux/ui/uiSlice";

const Recipes = () => {
  const dispatch = useDispatch();

  const craftingFilter = useSelector(
    (state: T_ReduxState) => state.ui.crafting.currentFilter
  );

  const filteredRecipes = useMemo(() => {
    let newFilteredRecipes: Partial<T_Recipes> = {};

    Object.values(RECIPES).forEach((recipe) => {
      if (ITEMS[recipe.id].category === craftingFilter) {
        newFilteredRecipes[recipe.id] = recipe;
      }
    });

    return newFilteredRecipes;
  }, [craftingFilter]);

  const currentSelectedItem = useSelector(
    (state: T_ReduxState) => state.ui.crafting.currentSelectedItem
  );

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", height: "100%", gap: 1 }}
    >
      <Card
        size="sm"
        sx={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {Object.values(ITEM_CATEGORIES).map((category) => {
          return category.craftable ? (
            <Button
              size="sm"
              fullWidth
              onClick={() => dispatch(setCraftingFilter(category.id))}
              variant={craftingFilter === category.id ? "solid" : "plain"}
              key={category.label}
              startDecorator={<Avatar src={category.icon} size="sm" />}
            >
              {/* {category.label} */}
            </Button>
          ) : null;
        })}
      </Card>

      <Card
        sx={{
          p: 1,
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
      </Card>
    </Box>
  );
};

export default Recipes;
