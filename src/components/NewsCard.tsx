import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react';
import { ImageComponent } from './ImageComponent';
export interface BasicCardProps {
    title?: string,
    subtitle?: string,
    description?: string,
    url?: string,
    urlToImage: string
}
export function NewsCard(props: BasicCardProps): React.ReactElement<BasicCardProps> {
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