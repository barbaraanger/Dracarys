import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { ArticleProps } from "../types";
import { ImageComponent } from "./ImageComponent";

export function NewsCard(
  props: ArticleProps
): React.ReactElement<ArticleProps> {
  const { title, description, source, urlToImage } = props;

  return (
    <Card className="card" variant="outlined">
      <CardContent>
        <ImageComponent source={urlToImage} style={{ maxHeight: "200" }} />
        {title ? (
          <Typography
            variant="h5"
            color="text.secondary"
            marginTop={5}
            display="inline-flex"
            gutterBottom
          >
            {title}
          </Typography>
        ) : (
          <></>
        )}
        {description ? (
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {description}
          </Typography>
        ) : (
          <></>
        )}
      </CardContent>
      {source ? (
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Website: <span style={{ fontWeight: 700 }}>{source.name}</span>
        </Typography>
      ) : (
        <></>
      )}
    </Card>
  );
}
