import { Box } from "@mui/joy";
import Logs from "./components/Logs/Logs";

const Sidebar = () => {
  return (
    <Box
      className="Sidebar"
      sx={{
        maxHeight: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        minWidth: 130,
        maxWidth: 130,
        flexGrow: 1,
      }}
    >
      <Logs />
    </Box>
  );
};

export default Sidebar;
