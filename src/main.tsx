import { CssBaseline, CssVarsProvider, GlobalStyles } from "@mui/joy";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./lib/redux/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <CssVarsProvider defaultMode="dark">
      <CssBaseline />
      <Provider store={store}>
        <GlobalStyles
          styles={{
            "*::-webkit-scrollbar": {
              width: "2px",
            },
            "*::-webkit-scrollbar-track": {
              background: "#222",
            },
            "*::-webkit-scrollbar-thumb": {
              background: "#888",
            },
            "*::-webkit-scrollbar-thumb:hover": {
              background: "#555",
            },
          }}
        />
        <App />
      </Provider>
    </CssVarsProvider>
  </>
);