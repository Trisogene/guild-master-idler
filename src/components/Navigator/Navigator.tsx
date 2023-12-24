import { Box, Button, Typography } from "@mui/joy";
import { useDispatch } from "react-redux";
import { LINKS } from "../../config/config";
import { E_Link } from "../../config/config.d";
import { setPage } from "../../redux/navigation/navigation_slice";

interface I_NavigatorProps {
  currentPage: E_Link;
}

const Navigator = ({ currentPage }: I_NavigatorProps) => {
  const dispatch = useDispatch();

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
              transition: "all 0.2s ease-in-out",
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
            <Typography
              sx={{
                transition: "all 0.2s ease-in-out",
                fontWeight: linkId === currentPage ? 800 : 200,
              }}
            >
              {link.label}
            </Typography>
          </Button>
        );
      })}
    </Box>
  );
};

export default Navigator;
