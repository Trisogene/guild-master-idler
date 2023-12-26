import { Avatar, Box, Button, Typography } from "@mui/joy";
import { useWindowSize } from "@uidotdev/usehooks";
import { useDispatch } from "react-redux";
import { LINKS } from "../../config/config";
import { E_Link } from "../../config/config.d";
import { setPage } from "../../redux/navigation/navigationSlice";

interface I_NavigatorProps {
  currentPage: E_Link;
}

const Navigator = ({ currentPage }: I_NavigatorProps) => {
  const dispatch = useDispatch();

  const { width } = useWindowSize();
  const isDesktop = width && width > 600;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        gap: 1,
        p: 1,
        width: "100%",
        userSelect: "none",
      }}
    >
      {Object.entries(LINKS).map(([linkId, link]) => {
        return (
          <Button
            fullWidth
            variant="plain"
            onClick={() => dispatch(setPage(linkId as E_Link))}
            key={linkId}
            sx={{
              ">* ": {
                fontWeight: linkId === currentPage ? 800 : 200,
                transform: linkId === currentPage ? "scale(1.1)" : "scale(1)",
              },
              "&:hover": {
                background: "none",
              },
              "&:hover >*": {
                fontWeight: 800,
              },
            }}
          >
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Avatar
                src={link.icon}
                sx={{ transition: "all 0.2s ease-in-out" }}
              />
              {isDesktop && (
                <Typography sx={{ transition: "all 0.1s ease-in-out" }}>
                  {link.label}
                </Typography>
              )}
            </Box>
          </Button>
        );
      })}
    </Box>
  );
};

export default Navigator;
