import { Avatar, Box, Button, Typography } from "@mui/joy";
import { useDispatch } from "react-redux";
import { LINKS } from "../../config/config";
import { ID_Link } from "../../config/config.d";
import { setPage } from "../../redux/navigation/navigationSlice";
import settingsIcon from "./../../assets/settings.svg";

interface I_NavigatorProps {
  currentPage: ID_Link;
}

const Navigator = ({ currentPage }: I_NavigatorProps) => {
  const dispatch = useDispatch();

  return (
    <>
      <Box
        className="Topbar"
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          gap: 1,
          p: 1,
          width: "100%",
          userSelect: "none",
          minHeight: 45,
        }}
      >
        {Object.entries(LINKS).map(([linkId, link]) => {
          return (
            <Button
              variant={linkId === currentPage ? "soft" : "plain"}
              onClick={() => dispatch(setPage(linkId as ID_Link))}
              key={linkId}
            >
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <Avatar
                  size="sm"
                  src={link.icon}
                  sx={{ transition: "all 0.2s ease-in-out" }}
                />

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
          <Button variant="soft">
            <Avatar src={settingsIcon} />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Navigator;
