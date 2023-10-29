import { CardMedia, Typography } from '@mui/material';
import React, { useState } from 'react';

type ImageProps = {
    source: string,
    style?: React.CSSProperties
}

export function ImageComponent(props: ImageProps) {
    const { source, style } = props;
    const [isBroken, setIsBroken] = useState(false);

    const handleImageError = () => {
        setIsBroken(true);
    };

    return (
        <div>
            { }
            {isBroken ? (
                <Typography>Image is broken or cannot be loaded.</Typography>
            ) : (
                <CardMedia style={style} component="img" src={source} onError={handleImageError} />
            )}
        </div>
    );
}

