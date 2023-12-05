import { Box } from "@mui/joy";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Navigator from "./components/Navigator/Navigator";
import Topbar from "./components/Topbar/Topbar";
import { LINKS } from "./config/LINKS";
import { startGameManager } from "./lib/redux/slices/gameManager_slice";
import { AppDispatch } from "./lib/redux/store";
import { T_ReduxState } from "./types/types.d";

function App() {
  const currentPage = useSelector(
    (state: T_ReduxState) => state.navigation.currentPage
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(startGameManager());
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
            minHeight: 60,
            p: 1,
          }}
        >
          <Topbar />
        </Box>
        <Box
          id="App-Page"
          sx={{
            overflowY: "auto",
            flexGrow: 1,
            p: 1,
            width: "100%",
          }}
        >
          {LINKS[currentPage].component}
        </Box>
        <Box
          id="App-Navigator"
          sx={{
            width: "100%",
            p: 1,
            minHeight: 60,
          }}
        >
          <Navigator />
        </Box>
      </Box>
    </>
  );
}

export default App;
