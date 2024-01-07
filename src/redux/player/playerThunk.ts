import { ID_Equip_Slot, ID_Item, T_Player } from "../../config/config.d";
import { T_ReduxState } from "../../config/store.d";
import { addItem, removeItem } from "../storage/storageSlice";
import { AppDispatch } from "../store";
import { setSelectedGuildPlayer } from "../ui/uiSlice";
import { addPlayer, setPlayerEquip } from "./playerSlice";

export const addPlayerThunk =
  (player: T_Player): any =>
  (dispatch: AppDispatch, getState: () => T_ReduxState) => {
    dispatch(addPlayer(player));

    const ui = getState().ui;
    if (!ui.guild.selectedPlayer) {
      dispatch(setSelectedGuildPlayer(player.id));
    }
  };

export const equipItemThunk =
  ({
    playerId,
    itemId,
    equipSlot,
  }: {
    playerId: string;
    itemId: ID_Item | null;
    equipSlot: ID_Equip_Slot;
  }): any =>
  (dispatch: AppDispatch, getState: () => T_ReduxState) => {
    const state = getState();
    const player = state.players.players[playerId];
    const storage = state.storage.storage;
    const currentEquip = player.equip[equipSlot];

    console.log({
      playerId,
      itemId,
      equipSlot,
      player,
      storage,
      currentEquip,
    });

    if (currentEquip === itemId) return;

    if (!itemId) {
      if (currentEquip) {
        dispatch(addItem({ itemId: currentEquip, quantity: 1 }));
      }
      dispatch(setPlayerEquip({ playerId, itemId, equipSlot }));
      return;
    }

    if (!currentEquip) {
      dispatch(setPlayerEquip({ playerId, itemId, equipSlot }));
      dispatch(removeItem({ itemId: itemId, quantity: 1 }));
      return;
    } else {
      dispatch(setPlayerEquip({ playerId, itemId, equipSlot }));
      dispatch(removeItem({ itemId: itemId, quantity: 1 }));
      dispatch(addItem({ itemId: currentEquip, quantity: 1 }));
    }

    console.log(player, storage);
  };
