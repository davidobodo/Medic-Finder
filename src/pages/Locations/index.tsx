import React, { useState, useEffect, useRef, forwardRef } from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useLocationsStyles } from './style';
import PlaceCard from '../../components/PlaceCard'
import Map from '../../components/Map'
import { LocationProps } from './type'


const Locations: React.FC<LocationProps> = forwardRef((props, ref) => {
    const { hospitalsDescription } = props
    const classes = useLocationsStyles();

    return (
        <Grid container spacing={0} className={classes.bottomContainer}>
            <Grid item xs={4} className={classes.leftColumn}>
                {hospitalsDescription.map((hospital) => {
                    const { name } = hospital
                    return <PlaceCard key={name} description={hospital} />
                })}
            </Grid>
            <Grid item xs={8} className={classes.rightColumn}>
                <React.Fragment>
                    <Typography
                        style={{ width: '100%', height: '100%' }}
                        ref={ref} component="div"></Typography>
                </React.Fragment>
                {/* <Map center={place} radius={radius} zoom={16} onSetHospitalsDescription={handleSetHospitalsDescription} /> */}
            </Grid>
        </Grid>
    );
})

export default Locations

