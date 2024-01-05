import { Box } from "@mui/joy";
import { useSelector } from "react-redux";
import { T_ReduxState } from "../../config/store.d";
import Logs from "./components/Logs/Logs";

const Sidebar = () => {
  const logs = useSelector((state: T_ReduxState) => state.log.logs);

  return (
    <Box
      className="Sidebar"
      sx={{
        maxHeight: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        minWidth: 180,
        maxWidth: 180,
        flexGrow: 1,
      }}
    >
      <Logs />
    </Box>
  );
};

export default Sidebar;
