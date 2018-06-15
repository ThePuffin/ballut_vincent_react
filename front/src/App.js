import React, { Component } from "react";
import logo from "./homer.png";
import "./App.css";
import SignUp from "./components/SignUp";
import { Grid, Paper } from "@material-ui/core";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to odyssey's quest</h1>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Paper>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
              <img
                src="https://vignette.wikia.nocookie.net/lossimpson/images/b/b8/Moe_Szyslak_2.png/revision/latest?cb=20110719231658&path-prefix=es"
                alt="simpson"
              />
              {/* <img src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" /> */}
            </Grid>
            <Grid item xs={12} sm={6} style={{ textAlign : "center" }}>
              <SignUp />
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default App;
