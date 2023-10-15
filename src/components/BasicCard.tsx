import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
export interface BasicCardProps {
  title: string,
  subtitle: string,
  description: string,
  link: string
}
export default function BasicCard(props: BasicCardProps): React.ReactElement<BasicCardProps> {
  const { title, subtitle, description, link } = props;

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {
          title ? <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {title}
          </Typography> : <></>
        }
        {subtitle ?
          <Typography variant="h5" component="div">
            {subtitle}
          </Typography> : <></>
        }
        {description ?
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {description}
          </Typography> : <></>
        }
      </CardContent>
      <CardActions style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "5vh"
      }}>
        <Button variant="contained" disableElevation>{link}</Button>
      </CardActions>
    </Card>


  );
}