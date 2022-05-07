import React from "react";
import { Provider } from "react-redux";
import store from "redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, MuiThemeProvider } from "@material-ui/core";
import "./App.scss";
import LikeListPage from "containers/likes/LikeListPage";
import MatchListPage from "containers/matches/MatchListPage";
import HomePage from "containers/home/HomePage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fe5858",
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <div className="AppContent">
            <BrowserRouter>
              <Routes>
                <Route path="/likes" element={<LikeListPage />} />
                <Route path="/matches" element={<MatchListPage />} />
                <Route path="/" element={<HomePage />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
