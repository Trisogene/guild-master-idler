import { Avatar, Button, Grid } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import Item from "../../components/Item/Item";
import useFilterStorageByType from "../../hooks/useFilterStorageByType";

import { ITEM_CATEGORIES } from "../../config/config";
import { T_ReduxState } from "../../config/store.d";
import { setCurrentStorageFilter } from "../../redux/storage/storage_slice";
import {
  Page,
  PageBody,
  PageBottom,
  PageHeader,
} from "../../styles/PageStyles";

const StorageView = () => {
  const currentFilter = useSelector(
    (state: T_ReduxState) => state.storage.currentFilter
  );
  const dispatch = useDispatch();
  const filteredItems = useFilterStorageByType({ filter: currentFilter });

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
        <Grid
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(128px, 1fr))",
            gap: 1,
          }}
        >
          {Object.values(filteredItems).map((itemStack) => (
            <Item key={itemStack.id} itemStack={itemStack} />
          ))}
        </Grid>
      </PageBody>

      <PageBottom sx={{ bgcolor: "background.level1" }}></PageBottom>
    </Page>
  );
};

export default StorageView;
