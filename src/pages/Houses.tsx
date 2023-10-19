import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchHouses } from '../client/houses';
import { HouseCard } from '../components';

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
            {houses.map((house) => {
                return <HouseCard {...house} key={house.name} />;
            })}
        </Grid>
    );
}