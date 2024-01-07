import { Box, Card, Divider, Grid } from "@mui/joy";
import Item from "../../../../../components/Item/Item";
import { ID_Item_Category, T_Player } from "../../../../../config/config.d";
import useFilterStorageByType from "../../../../../hooks/useFilterStorageByType";
import PlayerInfoStats from "./PlayerInfoStats";

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
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Box
          sx={{
            display: "grid",
            width: "fit-content",
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

        <PlayerInfoStats stats={player.stats} />
      </Box>

      <Divider orientation="vertical" />

      <Grid
        sx={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: "repeat(auto-fill, minmax(48px, 1fr))",

          p: 1,
          height: "max-content",
        }}
        spacing={1}
      >
        {Object.values(equips).map((itemStack) => (
          <Box
            onClick={() => console.log("equip", itemStack)}
            key={itemStack.id}
          >
            <Item itemStack={itemStack} />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default PlayerInfoEquip;
