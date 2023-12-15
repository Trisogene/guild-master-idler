import { Box } from "@mui/joy";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { version } from "../package.json";
import "./App.css";
import Navigator from "./components/Navigator/Navigator";
import Topbar from "./components/Topbar/Topbar";

import { LINKS } from "./config/LINKS";
import { updateRecruits } from "./lib/redux/recruit/recruit_slice";
import { AppDispatch } from "./lib/redux/store";
import { T_ReduxState } from "./lib/redux/store.d";
import { startTimers } from "./lib/redux/timer/timer_thunks";

function App() {
  const currentPage = useSelector(
    (state: T_ReduxState) => state.navigation.currentPage
  );
  const dispatch = useDispatch<AppDispatch>();
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    handlePersistance();
  }, [dispatch]);

  const handlePersistance = () => {
    dispatch(startTimers());
    const localStorageVersion = localStorage.getItem("version");
    if (!localStorageVersion || localStorageVersion !== version) {
      localStorage.clear();
      localStorage.setItem("version", version);
      dispatch(updateRecruits());
    } else {
      const state = localStorage.getItem("state");
    }
  };

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
    </>
  );
}

export default App;
