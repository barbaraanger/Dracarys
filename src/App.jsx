import { Grid } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}></Grid>
      <Grid item xs={12} md={6}></Grid>
    </Grid>
  );
}

export default App;
