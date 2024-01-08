import { Avatar, Box, Button, Card, Divider, Grid } from "@mui/joy";
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
        }}
      >
        {Object.values(ITEM_CATEGORIES).map((category) => (
          <>
            <Button
              size="sm"
              fullWidth
              onClick={() => dispatch(setStorageFilter(category.id))}
              variant={currentFilter === category.id ? "solid" : "plain"}
              key={category.label}
              // startDecorator={<Avatar src={category.icon} size="sm" />}
              sx={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,

                  alignItems: "center",
                }}
              >
                <Avatar src={category.icon} size="sm" />
                {category.label}
              </Box>
            </Button>
          </>
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
