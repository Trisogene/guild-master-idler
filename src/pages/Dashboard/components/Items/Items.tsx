import { Box, Card, Divider, Grid, Typography } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import { Item } from "../../../../components";
import { ITEMS } from "../../../../config/config";
import { ID_Item_Category } from "../../../../config/config.d";
import { T_ReduxState } from "../../../../config/store.d";
import useFilterStorageByType from "../../../../hooks/useFilterStorageByType";
import { equipItemThunk } from "../../../../redux/player/playerThunk";
import ItemsSelector from "./components/ItemsSelector";

const Items = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(
    (state: T_ReduxState) => state.ui.storage.currentFilter
  );
  const filteredItems = useFilterStorageByType({ filter: currentFilter });
  const selectedPlayer = useSelector(
    (state: T_ReduxState) => state.ui.guild.selectedPlayer
  );

  return (
    <Card
      size="sm"
      sx={{
        height: "100%",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: 1,
        }}
      >
        <Typography>Items</Typography>
        <Box sx={{ position: "absolute", right: 2, top: 2 }}>
          <ItemsSelector />
        </Box>
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
            <Box
              onClick={() => {
                const item = ITEMS[itemStack.id];
                if (
                  item.category === ID_Item_Category.equip &&
                  selectedPlayer
                ) {
                  dispatch(
                    equipItemThunk({
                      playerId: selectedPlayer,
                      equipSlot: item.slot,
                      itemId: item.id,
                    })
                  );
                }
                console.log(item, typeof item);
              }}
            >
              <Item key={itemStack.id} itemStack={itemStack} />
            </Box>
          ))}
        </Grid>
      </Box>
    </Card>
  );
};

export default Items;
