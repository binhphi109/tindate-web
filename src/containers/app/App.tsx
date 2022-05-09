import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, MuiThemeProvider } from "@material-ui/core";
import "./App.scss";
import LikeListPage from "containers/likes/LikeListPage";
import MatchListPage from "containers/matches/MatchListPage";
import HomePage from "containers/home/HomePage";
import { login } from "redux/auth";
import { SnackbarProvider } from "notistack";
import Snackbar, { SnackbarConfigurator } from "common/Snackbar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fe5858",
    },
  },
});

function App() {
  // get random user as login
  useEffect(() => {
    store
      .dispatch(login())
      .unwrap()
      .catch((error) => {
        Snackbar.error(error.message);
      });
  }, []);

  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={3}
          autoHideDuration={2000}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <SnackbarConfigurator />

          <div className="app">
            <div className="appContent">
              <BrowserRouter>
                <Routes>
                  <Route path="/likes" element={<LikeListPage />} />
                  <Route path="/matches" element={<MatchListPage />} />
                  <Route path="/" element={<HomePage />} />
                </Routes>
              </BrowserRouter>
            </div>
          </div>
        </SnackbarProvider>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
