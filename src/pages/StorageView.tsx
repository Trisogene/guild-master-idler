import { Avatar, Box, Button, Card, Grid } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import Item from "../components/Item/Item";
import useFilterStorageByType from "../hooks/useFilterStorageByType";

import { ITEM_CATEGORIES } from "../config/config";
import { T_ReduxState } from "../config/store.d";
import { setStorageFilter } from "../redux/ui/uiSlice";
import { Page } from "../styles/PageStyles";

const StorageView = () => {
  const currentFilter = useSelector(
    (state: T_ReduxState) => state.ui.storage.currentFilter
  );
  const dispatch = useDispatch();
  const filteredItems = useFilterStorageByType({ filter: currentFilter });

  return (
    <Page>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          minWidth: 400,
        }}
      >
        <Card
          variant="soft"
          size="sm"
          sx={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {Object.values(ITEM_CATEGORIES).map((category) => (
            <Button
              size="sm"
              fullWidth
              onClick={() => dispatch(setStorageFilter(category.id))}
              variant={currentFilter === category.id ? "solid" : "plain"}
              key={category.label}
              startDecorator={<Avatar src={category.icon} size="sm" />}
            >
              {category.label}
            </Button>
          ))}
        </Card>

        <Card
          variant="soft"
          sx={{
            p: 1,
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
        </Card>
      </Box>
      <Card
        variant="soft"
        sx={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexGrow: 1,
        }}
      ></Card>
    </Page>
  );
};

export default StorageView;
