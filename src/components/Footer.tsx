import { Copyright, GitHub } from "@mui/icons-material";
import { Grid, Link, Toolbar, Typography } from "@mui/material";
import React from "react";

const CopyRight =
  " All Rights Reserved. This app was developed using different APIs to get data.";

const toolbarStyles = {
  background: "black",
  textAlign: "center",
  color: "white",
  "& a": {
    color: "white",
  },
} as React.CSSProperties;
export function Footer(): React.ReactElement {
  return (
    <Toolbar style={toolbarStyles}>
      <GitHub />
      <Link
        style={{ marginLeft: "1vh", color: 'white' }}
        href="https://github.com/barbaraanger/"
      >
        /barbaraanger
      </Link>
      <Grid container md={10}>
        <Grid item md={4}></Grid>
        <Grid
          item
          md={5}
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            marginLeft: "1vh",
          }}
        >
          <Copyright />
          <Typography style={{ marginLeft: "1vh" }}>{CopyRight}</Typography>
        </Grid>
      </Grid>
    </Toolbar>
  );
}
