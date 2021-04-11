import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import "./index.css";
import App from "./App";
import {SongsContextProvider} from "./context/SongsContext";
import {ThemeContextProvider, THEMELIST} from "./context/ThemeContext";

ReactDOM.render(
  <ThemeContextProvider startingTheme={THEMELIST.DARK}>
    <SongsContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SongsContextProvider>
  </ThemeContextProvider>,
  document.getElementById("root")
);
