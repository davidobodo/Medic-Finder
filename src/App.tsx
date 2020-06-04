
import React, { useState, useEffect, useRef } from 'react'

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import { useAppStyles } from './AppStyles';

import PlaceCard from './components/PlaceCard'
import Map from './components/Map'

import hospital from './assets/hospital.jpg'

export default function App() {
  const [hospitalsDescription, setHospitalsDescription] = useState([]);
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [radius, setRadius] = useState('')
  const inputRef = useRef();
  const mapRef = useRef();

  const defaultZoom = 18;

  const classes = useAppStyles();

  const place = new google.maps.LatLng(latitude, longitude);

  const handleSetHospitalsDescription = (places) => {
    setHospitalsDescription(places)
  }

  const handleGetHospitals = (e) => {
    e.preventDefault();
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
      if (results.length > 1) {
        handleSetHospitalsDescription(results)
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

  }

  useEffect(() => {
    const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
      types: ['geocode']
    })

    autocomplete.addListener('place_changed', function () {
      const place = autocomplete.getPlace();
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      setLatitude(lat)
      setLongitude(lng)
    })

  }, [inputRef])

  return (
    <React.Fragment>

      <Container
        maxWidth={false}
        className={classes.topContainer}
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${hospital})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>

        <Typography component="h1" className={classes.title}>Find Hospitals</Typography>
        <form noValidate autoComplete="off" className={classes.formContainer}>
          <div className={classes.inputContainer}>
            <label className={classes.inputLabel}>Location</label>
            <input type="text" ref={inputRef} className={classes.bigInputField} placeholder="Enter a location" />
          </div>
          <div className={classes.inputContainer}>
            <label className={classes.inputLabel}>Geo-fencing Radius</label>
            <input type="text" onChange={(e) => setRadius(e.target.value)} className={classes.smallInputField} placeholder="Radius" />
          </div>
          {/* <button onClick={handleGetHospitals}>Search</button> */}
          <Button variant="contained" color="primary" className={classes.button} onClick={handleGetHospitals}>
            Search
            </Button>
        </form>

      </Container>

      <Grid container spacing={0} className={classes.bottomContainer}>
        <Grid item xs={4} className={classes.leftColumn}>
          {hospitalsDescription.map((hospital) => {
            const { name } = hospital
            return <PlaceCard key={name} description={hospital} />
          })}
        </Grid>
        <Grid item xs={8} className={classes.rightColumn}>
          <React.Fragment>
            <Typography style={{ width: '100%', height: '100%' }} ref={mapRef} component="div"></Typography>
          </React.Fragment>
          {/* <Map center={place} radius={radius} zoom={16} onSetHospitalsDescription={handleSetHospitalsDescription} /> */}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

