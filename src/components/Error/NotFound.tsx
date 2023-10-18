import { Grid } from '@mui/material';
import React from 'react';

export function NotFound(): React.ReactElement {
    return (
        <Grid container>
            <Grid item md={9}>Ops! Page not found</Grid>
        </Grid>
    );
}