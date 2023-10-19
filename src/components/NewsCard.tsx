import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react';
import { NewsCardProps } from '../types/NewsCardProps';
import { ImageComponent } from './ImageComponent';


export function NewsCard(props: NewsCardProps): React.ReactElement<NewsCardProps> {
    const { title, subtitle, description, url, urlToImage } = props;

    return (
        <Card className="card" variant="outlined" >
            <CardContent>
                <ImageComponent source={urlToImage} />
                {
                    title ? <Typography variant="h5" color="text.secondary" gutterBottom>
                        {title}
                    </Typography> : <></>
                }
                {subtitle ?
                    <Typography component="div">
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
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '5vh'
            }}>
                <Button variant="contained" disableElevation href={url} target='_blank'>See more</Button>
            </CardActions>
        </Card >
    );
}