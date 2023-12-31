import { Box, Card } from "@mui/joy";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { E_Log_Type, T_Log, T_ReduxState } from "../../config/store.d";
import RecruitLog from "../Log/RecruitLog";
import RewardLog from "../Log/RewardLog";
import Clock from "./components/Clock";

const logToComponent = (log: T_Log) => {
  switch (log.type) {
    case E_Log_Type.recruit:
      return <RecruitLog log={log} />;
    case E_Log_Type.reward:
      return <RewardLog log={log} />;
    default:
      return null;
  }
};

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
        minWidth: 160,
        maxWidth: 160,
        flexGrow: 1,
      }}
    >
      <Clock />

      <Card
        variant="soft"
        sx={{
          maxHeight: "100%",
          overflowY: "auto",
          overflowX: "hidden",
          flexGrow: 1,
          border: (theme) => `1px solid ${theme.palette.background.level2}`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column-reverse",
            gap: 0.5,
          }}
        >
          <AnimatePresence>
            {logs.map((log) => {
              return (
                <motion.div
                  key={log.id}
                  initial={{ x: 50, opacity: 0, filter: "brightness(2)" }}
                  animate={{ x: 0, opacity: 1, filter: "brightness(1)" }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  {logToComponent(log)}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </Box>
      </Card>
    </Box>
  );
};

export default Sidebar;
