import { Avatar, Button, Grid } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "../../components/Cards/ItemCard";
import useFilteredItems from "../../lib/hooks/useFilteredItems";

import { ITEM_CATEGORIES } from "../../config/ITEMS";
import { setCurrentStorageFilter } from "../../lib/redux/storage/storage_slice";
import { T_ReduxState } from "../../lib/redux/store.d";
import {
  Page,
  PageBody,
  PageBottom,
  PageHeader,
} from "../../styles/PageStyles";

const StorageView = () => {
  const dispatch = useDispatch();
  const filteredItems = useFilteredItems();
  const currentFilter = useSelector(
    (state: T_ReduxState) => state.storage.currentFilter
  );

  return (
    <Page>
      <PageHeader
        sx={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {Object.values(ITEM_CATEGORIES).map((category) => (
          <Button
            fullWidth
            onClick={() => dispatch(setCurrentStorageFilter(category.id))}
            variant={currentFilter === category.id ? "solid" : "plain"}
            color="neutral"
            key={category.label}
            startDecorator={<Avatar src={category.icon} />}
          />
        ))}
      </PageHeader>

      <PageBody
        sx={{
          p: 1,
        }}
      >
        <Grid container spacing={1}>
          {Object.values(filteredItems).map((itemStack) => (
            <Grid key={itemStack.id} xs={6} sm={4} md={3} lg={2}>
              <ItemCard key={itemStack.id} itemStack={itemStack} />
            </Grid>
          ))}
        </Grid>
      </PageBody>

      <PageBottom sx={{ bgcolor: "background.level1" }}></PageBottom>
    </Page>
  );
};

export default StorageView;
