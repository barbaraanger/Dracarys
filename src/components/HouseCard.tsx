import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { HouseCardProps } from '../types';

export function HouseCard(props: HouseCardProps): React.ReactElement {
    const {
        ancestralWeapons,
        cadetBranches,
        coatOfArms,
        currentLord,
        diedOut,
        founded,
        founder,
        heir,
        name,
        overlord,
        region,
        seats,
        swornMembers,
        titles,
        url,
        words,
    } = props;
    return (
        <Card className="card" variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                    {ancestralWeapons}
                </Typography>
                <Typography variant="h5" component="h2">
                    {cadetBranches}
                </Typography>
                <Typography variant="h5" component="h2">
                    {coatOfArms}
                </Typography>
                <Typography variant="h5" component="h2">
                    {currentLord}
                </Typography>
                <Typography variant="h5" component="h2">
                    {diedOut}
                </Typography>
                <Typography variant="h5" component="h2">
                    {founded}
                </Typography>
                <Typography variant="h5" component="h2">
                    {founder}
                </Typography>
                <Typography variant="h5" component="h2">
                    {heir}
                </Typography>
                <Typography variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography variant="h5" component="h2">
                    {overlord}
                </Typography>
                <Typography variant="h5" component="h2">
                    {region}
                </Typography>
                <Typography variant="h5" component="h2">
                    {seats}
                </Typography>
                <Typography variant="h5" component="h2">
                    {swornMembers}
                </Typography>
                <Typography variant="h5" component="h2">
                    {titles}
                </Typography>
                <Typography variant="h5" component="h2">
                    {url}
                </Typography>
                <Typography variant="h5" component="h2">
                    {words}
                </Typography>
            </CardContent>
        </Card>
    );
}
