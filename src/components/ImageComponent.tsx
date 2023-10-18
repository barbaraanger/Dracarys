import { CardMedia, Typography } from '@mui/material';
import React, { useState } from 'react';

type ImageProps = {
    source: string
}

export function ImageComponent(props: ImageProps) {
    const { source } = props;
    const [isBroken, setIsBroken] = useState(false);

    const handleImageError = () => {
        setIsBroken(true);
    };

    return (
        <div>
            {}
            {isBroken ? (
                <Typography>Image is broken or cannot be loaded.</Typography>
            ) : (
                <CardMedia component="img" src={source} onError={handleImageError} /> 
            )}
        </div>
    );
}

