import React, { useRef, useEffect, memo } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    mapContainer: {
        width: '100%',
        height: '100%'
    }
})
const Map = (props) => {
    const mapRef = useRef();
    const classes = useStyles();

    const { center, zoom, onSetHospitalsDescription } = props


    useEffect(() => {
        const map = new window.google.maps.Map(mapRef.current, {
            center: center,
            zoom: zoom
        })

        const request: any = {
            location: center,
            radius: '500',
            type: ['hospital']
        };

        const service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);


        function callback(results, status) {
            if (results.length > 1) {
                onSetHospitalsDescription(results)
            }
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    createMarker(results[i]);
                }
            }
        }

        function createMarker(place) {
            new window.google.maps.Marker({
                position: place.geometry.location,
                map: map
            })
        }


    }, [])
    return (
        <React.Fragment>
            <Typography className={classes.mapContainer} ref={mapRef} component="div"></Typography>
        </React.Fragment>
    )
}

export default memo(Map)