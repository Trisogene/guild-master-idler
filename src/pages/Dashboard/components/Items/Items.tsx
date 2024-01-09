import { Avatar, Box, Button, Card, Divider, Grid, Typography } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import { Item } from "../../../../components";
import { ITEM_CATEGORIES } from "../../../../config/config";
import { T_ReduxState } from "../../../../config/store.d";
import useFilterStorageByType from "../../../../hooks/useFilterStorageByType";
import { setStorageFilter } from "../../../../redux/ui/uiSlice";

const Items = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(
    (state: T_ReduxState) => state.ui.storage.currentFilter
  );
  const filteredItems = useFilterStorageByType({ filter: currentFilter });

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        gap: 0.5,
        p: 0.5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: 1,
        }}
      >
        {Object.values(ITEM_CATEGORIES).map((category) => (
          <Button
            key={category.id}
            size="sm"
            fullWidth
            onClick={() => dispatch(setStorageFilter(category.id))}
            variant={currentFilter === category.id ? "solid" : "plain"}
          >
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
              }}
            >
              <Avatar src={category.icon} />
              <Typography
                sx={{
                  display: {
                    xs: "none",
                    xl: "block",
                  },
                }}
              >
                {category.label}
              </Typography>
            </Box>
          </Button>
        ))}
      </Box>

      <Divider />

      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Grid
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(48px, 1fr))",
            gap: 1,
          }}
        >
          {Object.values(filteredItems).map((itemStack) => (
            <Item key={itemStack.id} itemStack={itemStack} />
          ))}
        </Grid>
      </Box>
    </Card>
  );
};

export default Items;
