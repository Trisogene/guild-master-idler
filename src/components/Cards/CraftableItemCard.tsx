import { Avatar, Box, Card, CardContent, Chip, Divider } from "@mui/joy";
import { ITEMS, T_Item } from "../../config/ITEMS";
import { RECIPES, T_Recipe } from "../../config/RECIPES";

interface I_CraftableItemCard {
  item: string;
  isSelected: boolean;
}

const CraftableItemCard = ({ item, isSelected }: I_CraftableItemCard) => {
  const itemConfig: T_Item = ITEMS[item];
  const itemRecipe: T_Recipe = RECIPES[item];
  console.log(itemRecipe);

  return (
    <Card
      sx={{
        bgcolor: isSelected ? "background.level2" : "background.level1",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 1,
          width: "100%",
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
      <Divider orientation="horizontal" />
      <CardContent>
        {Object.entries(itemRecipe.ingredients).map(
          ([ingredientName, igredientQuantity]) => {
            return (
              <Chip
                size="sm"
                key={ingredientName}
                startDecorator={<Avatar src={ITEMS[ingredientName].img} />}
              >
                {igredientQuantity} {ingredientName}
              </Chip>
            );
          }
        )}
      </CardContent>
    </Card>
  );
};

export default CraftableItemCard;
