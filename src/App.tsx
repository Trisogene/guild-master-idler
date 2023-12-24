import { Box, Divider } from "@mui/joy";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";

import { Navigator } from "./components";
import { LINKS } from "./config/config";
import { T_ReduxState } from "./config/store.d";
import { AppDispatch } from "./redux/store";
import { startTimers } from "./redux/timer/timer_thunks";
import { StyledApp } from "./styles/AppStyles";

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
      <StyledApp className="App">
        <Box
          sx={{
            display: "flex",
            minHeight: "calc(100vh - 49px)",
            maxHeight: "calc(100vh - 49px)",
            p: 1,
            gap: 1,
          }}
        >
          <Sidebar />
          {LINKS[currentPage].component}
        </Box>
        <Divider />
        <Navigator currentPage={currentPage} />
      </StyledApp>
    </>
  );
}

export default App;
