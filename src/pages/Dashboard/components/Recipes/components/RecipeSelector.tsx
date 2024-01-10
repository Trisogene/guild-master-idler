import { Avatar, Box, Button, Tooltip } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import { ITEM_CATEGORIES } from "../../../../../config/config";
import { T_ReduxState } from "../../../../../config/store.d";
import { setCraftingFilter } from "../../../../../redux/ui/uiSlice";

const RecipeSelector = () => {
  const dispatch = useDispatch();
  const filters = useSelector(
    (state: T_ReduxState) => state.ui.crafting.currentFilter
  );

  return (
    <Box sx={{ display: "flex", gap: 0.5, p: 0.5 }}>
      {Object.values(ITEM_CATEGORIES).map((category) => {
        return category.craftable ? (
          <Tooltip key={category.id} title={category.label} placement="top">
            <Button
              sx={{ p: 0, m: 0 }}
              size="sm"
              fullWidth
              onClick={() =>
                dispatch(
                  setCraftingFilter({
                    filterId: category.id,
                    value: !filters[category.id],
                  })
                )
              }
              variant="plain"
              key={category.label}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <Avatar
                  src={category.icon}
                  sx={{
                    opacity: filters[category.id] ? 1 : 0.25,
                  }}
                />
              </Box>
            </Button>
          </Tooltip>
        ) : null;
      })}
    </Box>
  );
};

export default RecipeSelector;
