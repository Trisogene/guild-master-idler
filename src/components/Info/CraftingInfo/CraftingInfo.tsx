import { Avatar, Box, Button, Typography } from "@mui/joy";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { ITEMS } from "../../../config/ITEMS";
import { RECIPES } from "../../../config/RECIPES";
import { T_Recipe } from "../../../config/config";
import useSelectItemsFromStorage from "../../../lib/hooks/useSelectItemsFromStorage";
import { craftItem } from "../../../lib/redux/crafting/crafting_thunks";

interface I_CraftingInfo {
  itemId: string;
}

const CraftingInfo = ({ itemId }: I_CraftingInfo) => {
  const recipe: T_Recipe = RECIPES[itemId];
  const dispatch = useDispatch();

  const ingredientsInStorage = useSelectItemsFromStorage(
    Object.keys(recipe.ingredients)
  );
  const canBeCrafted = useMemo(() => {
    return Object.entries(recipe.ingredients).every(
      ([ingredientName, igredientQuantity]) => {
        return (
          ingredientsInStorage[ingredientName]?.quantity >= igredientQuantity
        );
      }
    );
  }, [ingredientsInStorage, recipe.ingredients]);

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

      <Box className="CraftingInfo-body" sx={{ width: "100%", p: 1 }}></Box>

      <Box
        className="CraftingInfo-footer"
        sx={{ position: "absolute", bottom: 0, width: "100%", p: 0.5 }}
      >
        <Button
          variant="solid"
          color="success"
          fullWidth
          disabled={!canBeCrafted}
          sx={{ height: "100%" }}
          onClick={() => dispatch(craftItem(recipe.id))}
        >
          Craft
        </Button>
      </Box>
    </Box>
  );
};

export default CraftingInfo;
