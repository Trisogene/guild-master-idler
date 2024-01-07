import { Box, Card, Divider } from "@mui/joy";
import { useDispatch } from "react-redux";
import Item from "../../../../../components/Item/Item";
import { ITEMS } from "../../../../../config/config";
import {
  Equip,
  ID_Equip_Slot,
  ID_Item,
  ID_Item_Category,
  T_Player,
} from "../../../../../config/config.d";
import useFilterStorageByType from "../../../../../hooks/useFilterStorageByType";
import { equipItemThunk } from "../../../../../redux/player/playerThunk";
import PlayerInfoStats from "./PlayerInfoStats";

interface PlayerInfoEquipProps {
  player: T_Player;
}

const PlayerInfoEquip = ({ player }: PlayerInfoEquipProps) => {
  const dispatch = useDispatch();
  const equips = useFilterStorageByType({ filter: ID_Item_Category.equip });

  const handleEquipItem = (itemId: ID_Item) => {
    const equipSlot = (ITEMS[itemId] as Equip).slot;
    dispatch(
      equipItemThunk({
        playerId: player.id,
        itemId: itemId,
        equipSlot: equipSlot,
      })
    );
  };

  const handleUnequipItem = (equipSlot: ID_Equip_Slot) => {
    dispatch(
      equipItemThunk({
        playerId: player.id,
        itemId: null,
        equipSlot: equipSlot,
      })
    );
  };

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
            onClick={() => handleUnequipItem(ID_Equip_Slot.head)}
            sx={{
              gridColumn: "2",
              gridRow: "1",
              width: 48,
              height: 48,
              p: 0,
            }}
          >
            {player.equip.head ? (
              <Item itemStack={{ id: player.equip.head, quantity: 1 }} />
            ) : null}
          </Card>
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
            onClick={() => handleUnequipItem(ID_Equip_Slot.chest)}
            sx={{
              gridColumn: "2",
              gridRow: "2",
              width: 48,
              height: 48,
              p: 0,
            }}
          >
            {player.equip.chest ? (
              <Item itemStack={{ id: player.equip.chest, quantity: 1 }} />
            ) : null}
          </Card>
          <Card
            className="WeaponSlot"
            onClick={() => handleUnequipItem(ID_Equip_Slot.weapon)}
            sx={{
              gridColumn: "3",
              gridRow: "2",
              width: 48,
              height: 48,
              p: 0,
            }}
          >
            {player.equip.weapon ? (
              <Item itemStack={{ id: player.equip.weapon, quantity: 1 }} />
            ) : null}
          </Card>
          <Card
            className="LegsSlot"
            onClick={() => handleUnequipItem(ID_Equip_Slot.boots)}
            sx={{
              gridColumn: "2",
              gridRow: "3",
              width: 48,
              height: 48,
              p: 0,
            }}
          >
            {player.equip.boots ? (
              <Item itemStack={{ id: player.equip.boots, quantity: 1 }} />
            ) : null}
          </Card>
        </Box>

        <PlayerInfoStats stats={player.stats} />
      </Box>

      <Divider orientation="vertical" />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          gridTemplateColumns: "repeat(auto-fill, minmax(56px, 1fr))",
          gap: 1,
          height: "max-content",
        }}
      >
        {Object.values(equips).map((itemStack) => (
          <Box onClick={() => handleEquipItem(itemStack.id)} key={itemStack.id}>
            <Item itemStack={itemStack} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PlayerInfoEquip;
