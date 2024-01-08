import { Box, Card, Divider } from "@mui/joy";
import { useDispatch } from "react-redux";
import { Item } from "../../../../../components";
import { ID_Equip_Slot, T_Player } from "../../../../../config/config.d";
import { equipItemThunk } from "../../../../../redux/player/playerThunk";
import PlayerInfoStats from "../../../../GuildView/components/PlayerInfo/components/PlayerInfoStats";

interface PlayerDetailEquipProps {
  player: T_Player;
}

const PlayerDetailEquip = ({ player }: PlayerDetailEquipProps) => {
  const dispatch = useDispatch();

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
      sx={{
        display: "flex",

        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
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
          variant="outlined"
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
          variant="outlined"
          className="OffHandSlot"
          sx={{
            gridColumn: "1",
            gridRow: "2",
            width: 48,
            height: 48,
          }}
        ></Card>
        <Card
          variant="outlined"
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
          variant="outlined"
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
          variant="outlined"
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

      <Divider orientation="vertical" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          gap: 1,
        }}
      >
        <PlayerInfoStats stats={player.stats} />
      </Box>
    </Box>
  );
};

export default PlayerDetailEquip;
