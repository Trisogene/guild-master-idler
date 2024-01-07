import { Avatar, Box, Button, Card, Typography } from "@mui/joy";
import { useDispatch } from "react-redux";
import { LINKS } from "../../config/config";
import { ID_Link } from "../../config/config.d";
import { setPage } from "../../redux/navigation/navigationSlice";
import Clock from "../Sidebar/components/Clock/Clock";
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
      variant="soft"
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
        <Button variant="plain">
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
