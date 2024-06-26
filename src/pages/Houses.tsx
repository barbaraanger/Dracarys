import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchHouses } from '../client/houses';
import { HouseCard } from '../components';
import { HouseCardProps } from '../types';

export function Houses(): React.ReactElement {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        fetchHouses.then((response) => {
            console.log(response.data);
            setHouses(response.data);
        });
    }, []);
    return (
        <Grid>
            {houses.map((house: HouseCardProps) => {
                return <HouseCard {...house} key={house.name} />;
            })}
        </Grid>
    );
}
