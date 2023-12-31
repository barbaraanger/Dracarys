import {
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    CardMedia,
    Typography
} from '@mui/material';
import React from 'react';
import { CharacterProps } from '../../types';
import { cardStyles } from './cardStyles';

export function CharacterCard(character: CharacterProps): React.ReactElement {
    const { fullName, title, family, imageUrl } =
        character;

    return (
        <Card
            sx={cardStyles}
            id=''
        >
            <CardHeader />
            <CardMedia component="img" height="215" image={imageUrl} />
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color={'#652a52'}>
                        {fullName}
                    </Typography>
                    <Typography variant="body2" style={{ color: 'rgb(181 51 51)' }} fontFamily={'Segoe UI Symbol'}>
                        {title}
                    </Typography>
                    <Typography style={{ color: '#9f2160', fontWeight: '700' }}>{family}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
