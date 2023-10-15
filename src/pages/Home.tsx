import { Grid } from "@mui/material";
import React from "react";
import BasicCard from "../components/BasicCard";

const teste = {
  title: 'teste',
  subtitle: 'teste',
  description: 'teste',
  link: 'teste'
}

export function Home(): React.ReactElement {
  return (
    <Grid container style={{margin: '1vh'}}>
      <Grid item md={3} style={{margin: '1vh', maxWidth: '445px'}}>
        <BasicCard {...teste} />
      </Grid>
    </Grid>
  );
}
