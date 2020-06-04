
import React, { useState, useEffect, useRef } from 'react'

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { useAppStyles } from './AppStyles';

import PlaceCard from './components/PlaceCard'
import Map from './components/Map'

export default function App() {
  const [hospitalsDescription, setHospitalsDescription] = useState([]);
  const inputRef = useRef();

  const classes = useAppStyles();

  const place = new google.maps.LatLng(6.800581499999999, 3.4447778);

  const handleSetHospitalsDescription = (places) => {
    setHospitalsDescription(places)

  }

  useEffect(() => {
    const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
      types: ['geocode']
    })

    autocomplete.addListener('place_changed', function () {
      const place = autocomplete.getPlace();
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      console.log(lat, lng)
    })

  }, [inputRef])



  return (
    <React.Fragment>
      <Container maxWidth={false} className={classes.topContainer}>
        <form noValidate autoComplete="off">
          <Typography component="h1" className={classes.title}>Find Hospitals</Typography>
          {/* <TextField ref={inputRef} id="outlined-basic" label="Enter your location" variant="outlined" /> */}
          <input type="text" ref={inputRef} className={classes.inputField} placeholder="Enter a location" />
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
          <Map center={place} zoom={16} onSetHospitalsDescription={handleSetHospitalsDescription} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

