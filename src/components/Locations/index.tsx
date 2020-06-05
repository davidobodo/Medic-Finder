import React, { useState, useEffect, useRef, forwardRef, Fragment } from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useLocationsStyles } from './style';
import AddressCard from '../AddressCard'
import { LocationProps } from './type'
import Link from '@material-ui/core/Link';


const Locations: React.FC<LocationProps> = (props) => {
    const { latitude, longitude, radius, onReturn } = props
    const classes = useLocationsStyles();
    const mapRef = useRef();
    const defaultZoom = 12;
    const [hospitalsDescription, setHospitalsDescription] = useState([] as []);
    const place = new google.maps.LatLng(latitude, longitude);

    const handleGoToSearchPage = () => {
        setHospitalsDescription([]);
        onReturn()
    }

    useEffect(() => {
        const map = new window.google.maps.Map(mapRef.current, {
            center: place,
            zoom: defaultZoom
        })

        const request: any = {
            location: place,
            radius: radius,
            type: ['hospital']
        };

        const service = new google.maps.places.PlacesService(map);

        const createMarker = (place: any): void => {
            console.log(place)
            new window.google.maps.Marker({
                position: place.geometry.location,
                map: map
            })
        }

        const callback = (results: [], status: string): void => {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                if (results.length > 1) {
                    setHospitalsDescription(results)
                }
                for (var i = 0; i < results.length; i++) {
                    createMarker(results[i]);
                }
            }
        }

        service.nearbySearch(request, callback);
    }, [])



    return (
        <div className={classes.container}>
            <Typography className={classes.link}>
                <Link href="#" onClick={handleGoToSearchPage}>
                    Return to search page
                </Link>
            </Typography>
            <Grid container spacing={0} className={classes.body}>
                <Grid item xs={12} sm={5} md={4} className={classes.leftColumn}>
                    {hospitalsDescription.map((hospital) => {
                        const { name } = hospital
                        return <AddressCard key={name} description={hospital} />
                    })}
                </Grid>
                <Grid item xs={1} sm={7} md={8} className={classes.rightColumn}>
                    <React.Fragment>
                        <Typography
                            style={{ width: '100%', height: '100%' }}
                            component="div"
                            ref={mapRef}></Typography>
                    </React.Fragment>
                </Grid>
            </Grid>
        </div>

    );
}

export default Locations

