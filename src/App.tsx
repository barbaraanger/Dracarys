import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import "./App.css";
import { appStyles } from "./styles";

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar style={appStyles}>
          <Typography variant="h6">Dracarys</Typography>
        </Toolbar>
      </AppBar>
      <div>
        <CharactersList />
      </div>
    </div>
  );
}

export default App;
