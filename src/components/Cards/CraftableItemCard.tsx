import { Avatar, Box, Card, CardContent, Chip, Divider } from "@mui/joy";
import { memo } from "react";
import { ITEMS } from "../../config/ITEMS";
import { RECIPES } from "../../config/RECIPES";
import { T_Item, T_Recipe } from "../../config/config";
import useSelectItemsFromStorage from "../../lib/hooks/useSelectItemsFromStorage";

interface I_CraftableItemCard {
  item: string;
  isSelected: boolean;
}

const CraftableItemCard = ({ item, isSelected }: I_CraftableItemCard) => {
  const itemConfig: T_Item = ITEMS[item];
  const itemRecipe: T_Recipe = RECIPES[item];
  const igredientsInStorage = useSelectItemsFromStorage(
    Object.keys(itemRecipe.ingredients)
  );

  const isCraftable = Object.entries(itemRecipe.ingredients).every(
    ([ingredientName, igredientQuantity]) => {
      return igredientsInStorage[ingredientName]?.quantity >= igredientQuantity;
    }
  );

  return (
    <Card
      sx={{
        alignItems: "center",
        bgcolor: isSelected ? "background.level2" : "background.level1",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 1,
        }}
      >
        <Avatar className="PlayerCard-avatar" src={itemConfig.img} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
            width: "100%",
          }}
        >
          <Box sx={{ height: 12, fontSize: 10 }}>{itemConfig.label}</Box>
        </Box>
      </Box>
      <Divider
        orientation="horizontal"
        sx={{ width: "90%", alignSelf: "center" }}
      />
      <CardContent>
        {Object.entries(itemRecipe.ingredients).map(
          ([ingredientName, igredientQuantity]) => {
            return (
              <Chip
                sx={{ minWidth: "100%" }}
                variant="solid"
                color={isCraftable ? "success" : "neutral"}
                key={ingredientName}
                startDecorator={<Avatar src={ITEMS[ingredientName].img} />}
              >
                {igredientsInStorage[ingredientName]?.quantity || 0} /{" "}
                {igredientQuantity}
              </Chip>
            );
          }
        )}
      </CardContent>
    </Card>
  );
};

export default memo(CraftableItemCard);
