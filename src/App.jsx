import "./App.css";
import { AppBar, ListItem, Toolbar, Typography } from "@mui/material";
import { appStyles } from "./styles";
import { fetchAllCharacters } from "./client/fetchCharacters";

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar style={appStyles}>
          <Typography variant="h6">Dracarys</Typography>
        </Toolbar>
      </AppBar>
      <div>
        <List>
          {fetchAllCharacters.forEach((element) => {
            <ListItem>{element}</ListItem>
          })}
        </List>
      </div>
    </div>
  );
}

export default App;
