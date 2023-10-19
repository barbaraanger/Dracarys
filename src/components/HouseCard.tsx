import { Card, CardContent } from '@mui/material';
import React from 'react';
import { HouseCardProps } from '../types';

export function HouseCard(props: HouseCardProps): React.ReactElement {
    const { ancestralWeapons, cadetBranches, coatOfArms, currentLord, diedOut, founded, founder, heir, name, overlord, region, seats, swornMembers, titles, url, words } = props;
    return (
        <Card className="card" variant="outlined" >
            <CardContent>

            </CardContent>
        </Card>
    );
}