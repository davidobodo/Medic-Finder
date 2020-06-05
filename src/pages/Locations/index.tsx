import React, { useState, useEffect, useRef, forwardRef, Fragment } from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useLocationsStyles } from './style';
import AddressCard from '../../components/AddressCard'
import Map from '../../components/Map'
import { LocationProps } from './type'
import GoogleSearchTab from '../../components/GoogleSearchTab'


const Locations: React.FC<LocationProps> = (props) => {
    const { latitude, longitude, radius } = props
    // console.log(lng, lat, rad)
    // const [_lat, setLatitude] = useState()
    // const [_lng, setLongitude] = useState()
    // const [_rad, setRadius] = useState()
    // let { lng: longitude, lat: latitude, rad: radius } = props.location.state
    console.log(latitude, longitude, radius)
    const classes = useLocationsStyles();
    const mapRef = useRef();
    const defaultZoom = 18;
    const [hospitalsDescription, setHospitalsDescription] = useState([] as []);

    // const latitude = lat || _lat;
    // const longitude = lng || _lng;
    // const radius = rad || _rad

    const handleGetHospitals = (lat, lng, rad) => {
        // setLongitude(lng)
        // setLatitude(lat)
        // setRadius(rad)
    }

    const place = new google.maps.LatLng(latitude, longitude);

    useEffect(() => {

        console.log(place)
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
        service.nearbySearch(request, callback);


        function callback(results, status) {
            console.log(results)
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                if (results.length > 1) {
                    setHospitalsDescription(results)
                }
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
        <div className={classes.container}>
            {/* <header className={classes.header}>
                <GoogleSearchTab onSubmit={handleGetHospitals} />
            </header> */}
            <Grid container spacing={0} className={classes.body}>
                <Grid item xs={12} sm={4} md={3} className={classes.leftColumn}>
                    {hospitalsDescription.map((hospital) => {
                        const { name } = hospital
                        return <AddressCard key={name} description={hospital} />
                    })}
                </Grid>
                <Grid item xs={1} sm={8} md={9} className={classes.rightColumn}>
                    <React.Fragment>
                        <Typography
                            style={{ width: '100%', height: '100%' }}
                            component="div"
                            ref={mapRef}></Typography>
                    </React.Fragment>
                    {/* <Map center={place} radius={radius} zoom={16} onSetHospitalsDescription={handleSetHospitalsDescription} /> */}
                </Grid>
            </Grid>
        </div>

    );
}

export default Locations

