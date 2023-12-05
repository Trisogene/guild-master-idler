import { Box } from "@mui/joy";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Navigator from "./components/Navigator/Navigator";
import Topbar from "./components/Topbar/Topbar";
import { LINKS } from "./config/LINKS";
import { startGameManager } from "./lib/redux/slices/gameManager_slice";
import { updateRecruits } from "./lib/redux/slices/recruit_slice";
import { AppDispatch } from "./lib/redux/store";
import { T_ReduxState } from "./types/types.d";

function App() {
  const currentPage = useSelector(
    (state: T_ReduxState) => state.navigation.currentPage
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(startGameManager());
    dispatch(updateRecruits());
  }, [dispatch]);

  return (
    <>
      <Box
        id="App"
        sx={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          id="App-Header"
          sx={{
            width: "100%",
            minHeight: 48,
            p: 1,
          }}
        >
          <Topbar />
        </Box>
        <Box
          id="App-Body"
          sx={{
            display: "flex",
            minHeight: "calc(100% - 48px)",
            maxHeight: "calc(100% - 48px)",
          }}
        >
          <Box
            id="App-Navigator"
            sx={{
              p: 1,
            }}
          >
            <Navigator />
          </Box>
          <Box
            id="App-Page"
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
