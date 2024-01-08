import { Box } from "@mui/joy";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import Topbar from "./components/Topbar/Topbar";
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
    console.log(currentPage);
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
          p: 1,
          gap: 1,
        }}
      >
        <Topbar currentPage={currentPage} />
        <Box
          className="Body"
          sx={{
            flexGrow: 1,
            gap: 1,
            height: "calc(100vh - 85px)",
          }}
        >
          {LINKS[currentPage].component}
        </Box>
      </Box>
    </>
  );
}

export default App;
