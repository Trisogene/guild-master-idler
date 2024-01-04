import { Box } from "@mui/joy";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";

import { Navigator } from "./components";
import { LINKS } from "./config/config";
import { T_ReduxState } from "./config/store.d";
import { AppDispatch } from "./redux/store";
import { startTimers } from "./redux/timer/timerThunks";

function App() {
  const currentPage = useSelector(
    (state: T_ReduxState) => state.navigation.currentPage
  );
  const dispatch: AppDispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(startTimers());
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
        <Navigator currentPage={currentPage} />
        <Box
          className="Body"
          sx={{
            display: "flex",
            flexGrow: 1,
            p: 1,
            gap: 1,

            height: "calc(100vh - 45px)",
          }}
        >
          <Sidebar />
          {LINKS[currentPage].component}
        </Box>
      </Box>
    </>
  );
}

export default App;
