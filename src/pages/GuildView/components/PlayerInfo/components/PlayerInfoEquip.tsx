import { Box, Card, Divider, Grid } from "@mui/joy";
import Item from "../../../../../components/Item/Item";
import { ID_Item_Category, T_Player } from "../../../../../config/config.d";
import useFilterStorageByType from "../../../../../hooks/useFilterStorageByType";

interface PlayerInfoEquipProps {
  player: T_Player;
}

const PlayerInfoEquip = ({ player }: PlayerInfoEquipProps) => {
  const equips = useFilterStorageByType({ filter: ID_Item_Category.equip });

  return (
    <Box
      className="PlayerInfoEquip"
      sx={{
        display: "flex",
        p: 1,
        gap: 1,
        flexGrow: 1,
        height: "100%",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            display: "grid",
            maxHeight: 250,
            gap: 1,
            p: 1,
          }}
        >
          <Card
            className="HeadSlot"
            sx={{
              gridColumn: "2",
              gridRow: "1",
              width: 48,
              height: 48,
            }}
          ></Card>
          <Card
            className="OffHandSlot"
            sx={{
              gridColumn: "1",
              gridRow: "2",
              width: 48,
              height: 48,
            }}
          ></Card>
          <Card
            className="BodySlot"
            sx={{
              gridColumn: "2",
              gridRow: "2",
              width: 48,
              height: 48,
            }}
          ></Card>
          <Card
            className="WeaponSlot"
            sx={{
              gridColumn: "3",
              gridRow: "2",
              width: 48,
              height: 48,
            }}
          ></Card>
          <Card
            className="LegsSlot"
            sx={{
              gridColumn: "2",
              gridRow: "3",
              width: 48,
              height: 48,
            }}
          ></Card>
        </Box>
      </Box>
      <Divider orientation="vertical" />

      <Grid
        sx={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: "repeat(auto-fill, minmax(48px, 1fr))",
          gap: 1,
          p: 1,
          height: "max-content",
        }}
      >
        {Object.values(equips).map((itemStack) => (
          <Item itemStack={itemStack} key={itemStack.id} />
        ))}
      </Grid>
    </Box>
  );
};

export default PlayerInfoEquip;
