import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import {MuiThemeProvider} from '@material-ui/core'

//connexion à la base de données
// const connection = require("./helpers/db.js");

ReactDOM.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
