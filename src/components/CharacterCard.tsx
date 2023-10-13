import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";

export function CharacterCard(character: any): React.ReactElement {
  const { firstName, lastName, fullName, title, family, image, imageUrl } =
    character.character;

  return (
    <Grid item md={2} style={{marginLeft: '5vh'}}>
      <Card
        sx={{
          maxWidth: 345,
          minWidth: 296,
          marginTop: "1vh",
          display: "inline-block",
          marginLeft: "10px",
          align: 'center'
        }}
      >
        <CardHeader />
        <CardMedia component="img" height="215" image={imageUrl}/>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {fullName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
