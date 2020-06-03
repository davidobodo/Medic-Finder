import React, { useRef, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    mapContainer: {
        width: '100%',
        height: '100%'
    }
})

export default function Map(props) {
    const mapRef = useRef();
    const classes = useStyles();

    const { center, zoom } = props


    useEffect(() => {
        const map = new window.google.maps.Map(mapRef.current, {
            center: center,
            zoom: zoom
        })

        new window.google.maps.Marker({
            position: center,
            map: map
        })
    }, [center, zoom])
    return (
        <React.Fragment>
            <Typography className={classes.mapContainer} ref={mapRef} component="div"></Typography>
        </React.Fragment>
    )
}