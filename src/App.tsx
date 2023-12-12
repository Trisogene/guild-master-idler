import { Box, Modal, ModalClose, ModalDialog, Typography } from "@mui/joy";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Navigator from "./components/Navigator/Navigator";
import Topbar from "./components/Topbar/Topbar";
import { LINKS } from "./config/LINKS";
import { updateRecruits } from "./lib/redux/recruit/recruit_slice";
import { AppDispatch } from "./lib/redux/store";
import { startTimers } from "./lib/redux/timer/timer_thunks";
import { T_ReduxState } from "./types/types.d";

function App() {
  const currentPage = useSelector(
    (state: T_ReduxState) => state.navigation.currentPage
  );
  const dispatch = useDispatch<AppDispatch>();
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    localStorage.clear();
    dispatch(startTimers());
    // const state = localStorage.getItem("state");
    // if (!state) {
    dispatch(updateRecruits());
    // }
  }, [dispatch]);

  return (
    <>
      <Box
        className="App"
        sx={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          className="App-Header"
          sx={{
            width: "100%",
            minHeight: 48,
            p: 1,
          }}
        >
          <Topbar />
        </Box>
        <Box
          className="App-Body"
          sx={{
            display: "flex",
            minHeight: "calc(100% - 48px)",
            maxHeight: "calc(100% - 48px)",
          }}
        >
          <Box
            className="App-Navigator"
            sx={{
              p: 1,
            }}
          >
            <Navigator currentPage={currentPage} />
          </Box>
          <Box
            className="App-Page"
            sx={{
              overflowY: "auto",
              p: 1,
              width: "100%",
              height: "100%",
            }}
          >
            {LINKS[currentPage].component}
          </Box>
        </Box>
      </Box>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalDialog>
          <ModalClose />
          <Box>
            <Typography fontSize="xl">Patch 0.04</Typography>
            <Typography fontSize="sm">- Add crafting System</Typography>
            <Typography fontSize="sm">- Navigator notifications</Typography>
            <Typography fontSize="sm">- Removed Persistent state</Typography>
          </Box>
          <Box>
            <Typography fontSize="xl">Patch 0.03</Typography>
            <Typography fontSize="sm">- Persistent state</Typography>
            <Typography fontSize="sm">- Max 2 recruits</Typography>
            <Typography fontSize="sm">- Minor fixes</Typography>
          </Box>

          <Box>
            <Typography fontSize="xl">Patch 0.02</Typography>
            <Typography fontSize="sm">- Storage & Crafting</Typography>
            <Typography fontSize="sm">- New UI</Typography>
            <Typography fontSize="sm">- Minor fixes</Typography>
          </Box>

          <Box>
            <Typography fontSize="xl">Patch 0.01</Typography>
            <Typography fontSize="sm">- Initial release</Typography>
          </Box>
        </ModalDialog>
      </Modal>
    </>
  );
}

export default App;
