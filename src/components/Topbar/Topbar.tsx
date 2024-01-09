import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Dropdown,
  Menu,
  MenuButton,
  MenuItem,
  Typography,
} from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import { LINKS } from "../../config/config";
import { ID_Link } from "../../config/config.d";
import { T_ReduxState } from "../../config/store.d";
import { setPage } from "../../redux/navigation/navigationSlice";
import { setModalIsOpen } from "../../redux/ui/uiSlice";
import Clock from "../Clock/Clock";
import alertIcon from "./../../assets/alert.svg";
import settingsIcon from "./../../assets/settings.svg";

interface I_NavigatorProps {
  currentPage: ID_Link;
}

const Topbar = ({ currentPage }: I_NavigatorProps) => {
  const dispatch = useDispatch();

  const notifications = useSelector(
    (state: T_ReduxState) => state.ui.notification.messages
  );

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
            variant={linkId === currentPage ? "solid" : "plain"}
            onClick={() => dispatch(setPage(linkId as ID_Link))}
            key={linkId}
          >
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Avatar size="sm" src={link.icon} />
              <Typography
                fontSize="sm"
                sx={{
                  display: {
                    xs: "none",
                    sm: "block",
                  },
                }}
              >
                {link.label}
              </Typography>
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
        <Dropdown>
          <Badge
            showZero={false}
            badgeContent={notifications.length}
            badgeInset={12}
            size="sm"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <MenuButton variant="soft">
              <Avatar src={alertIcon} />
            </MenuButton>
          </Badge>
          <Menu placement="bottom-end">
            {notifications.length > 0 ? (
              notifications.map((notification) => {
                return (
                  <MenuItem
                    sx={{ p: 2 }}
                    key={notification}
                    onClick={() => dispatch(setModalIsOpen(true))}
                  >
                    New recruits avaiable!
                  </MenuItem>
                );
              })
            ) : (
              <MenuItem disabled>No New Notification</MenuItem>
            )}
          </Menu>
        </Dropdown>

        <Button variant="soft">
          <Avatar src={settingsIcon} />
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
