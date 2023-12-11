import { Avatar, Box, Button, Grid, Typography } from "@mui/joy";
import { ITEMS } from "../../../config/ITEMS";
import { T_Recipe } from "../../../config/RECIPES";
import useSelectItemsFromStorage from "../../../lib/hooks/useSelectItemsFromStorage";

interface I_CraftingInfo {
  recipe: T_Recipe;
}

const CraftingInfo = ({ recipe }: I_CraftingInfo) => {
  const ingredientsInStorage = useSelectItemsFromStorage(
    Object.keys(recipe.ingredients)
  );
  const canBeCrafted = Object.entries(recipe.ingredients).every(
    ([ingredientId, requiredQuantity]) =>
      ingredientsInStorage[ingredientId] >= requiredQuantity
  );

  return (
    <Box
      className="CraftingInfo"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Box
        className="CraftingInfo-header"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 0.5,
          bgcolor: "background.level2",
          width: "100%",
          gap: 1,
        }}
      >
        <Avatar
          className="PlayerCard-avatar"
          src={ITEMS[recipe.id].img}
          size="sm"
        />
        <Typography
          sx={{
            fontWeight: "bold",
          }}
        >
          {recipe.label}
        </Typography>
      </Box>

      <Box className="CraftingInfo-body" sx={{ width: "100%", p: 1 }}>
        <Grid container spacing={1} sx={{ width: "100%" }}>
          {Object.entries(recipe.ingredients).map(
            ([ingredientId, requiredQuantity]) => {
              const ingredientItem = ITEMS[ingredientId];
              return (
                <Grid
                  key={ingredientItem.id}
                  xs={6}
                  sx={{
                    display: "flex",
                    gap: 0,
                    borderRadius: (theme) => theme.spacing(1),
                    alignItems: "center",
                    border: "1px solid",
                    p: 0.5,
                  }}
                >
                  {/* TODO - create the recipe required item icon */}
                  <Avatar src={ingredientItem.img} size="sm" />
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography>{ingredientItem.label}</Typography>
                    <Typography fontSize="sm">
                      {" "}
                      {ingredientsInStorage[ingredientId]}/{requiredQuantity}
                    </Typography>
                  </Box>
                </Grid>
              );
            }
          )}
        </Grid>
      </Box>

      <Box
        className="CraftingInfo-footer"
        sx={{ position: "absolute", bottom: 0, width: "100%", p: 0.5 }}
      >
        <Button
          variant="solid"
          fullWidth
          disabled={!canBeCrafted}
          sx={{ height: "100%" }}
        >
          Craft
        </Button>
      </Box>
    </Box>
  );
};

export default CraftingInfo;
