import { Avatar, Box, Button, Card, Typography } from "@mui/joy";
import { useDispatch } from "react-redux";
import { ITEMS, LINKS } from "../../config/config";
import { ID_Link } from "../../config/config.d";
import { setPage } from "../../redux/navigation/navigationSlice";
import { addItem } from "../../redux/storage/storageSlice";
import Clock from "../Sidebar/components/Clock/Clock";
import infoIcon from "./../../assets/info.svg";
import settingsIcon from "./../../assets/settings.svg";

interface I_NavigatorProps {
  currentPage: ID_Link;
}

const Topbar = ({ currentPage }: I_NavigatorProps) => {
  const dispatch = useDispatch();

  return (
    <Card
      className="Topbar"
      size="sm"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: 1,

        position: "relative",
        userSelect: "none",
      }}
    >
      {Object.entries(LINKS).map(([linkId, link]) => {
        return (
          <Button
            variant={linkId === currentPage ? "solid" : "soft"}
            onClick={() => dispatch(setPage(linkId as ID_Link))}
            key={linkId}
          >
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Avatar size="sm" src={link.icon} />

              <Typography fontSize="sm">{link.label}</Typography>
            </Box>
          </Button>
        );
      })}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 16,
          display: "flex",
          height: "100%",
          alignItems: "center",
        }}
      >
        <Button
          variant="plain"
          onClick={() => {
            // //FIXME  FOR TESTING ONLY
            // dispatch(addItem({ itemId: ITEMS.bow.id, quantity: 1 }));
            // dispatch(addItem({ itemId: ITEMS.mace.id, quantity: 2 }));
            // dispatch(addItem({ itemId: ITEMS.clothChest.id, quantity: 1 }));
            // dispatch(addItem({ itemId: ITEMS.ironHelmet.id, quantity: 1 }));
            // dispatch(addItem({ itemId: ITEMS.ironBoots.id, quantity: 1 }));
          }}
        >
          <Avatar size="sm" src={infoIcon} />
        </Button>
        <Button
          variant="plain"
          onClick={() => {
            // //FIXME  FOR TESTING ONLY
            dispatch(addItem({ itemId: ITEMS.bow.id, quantity: 1 }));
            dispatch(addItem({ itemId: ITEMS.mace.id, quantity: 2 }));
            dispatch(addItem({ itemId: ITEMS.clothChest.id, quantity: 1 }));
            dispatch(addItem({ itemId: ITEMS.ironHelmet.id, quantity: 1 }));
            dispatch(addItem({ itemId: ITEMS.ironBoots.id, quantity: 1 }));
          }}
        >
          <Avatar size="sm" src={settingsIcon} />
        </Button>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 16,
          display: "flex",
          height: "100%",
          alignItems: "center",
        }}
      >
        <Clock />
      </Box>
    </Card>
  );
};

export default Topbar;
