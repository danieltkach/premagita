import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import "./index.css";
import App from "./App";
import {SongsContextProvider} from "./context/SongsContext";

ReactDOM.render(
  <SongsContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SongsContextProvider>,
  document.getElementById("root")
);
