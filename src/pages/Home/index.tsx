
import React, { useState, useEffect, useRef } from 'react'
import { Redirect, useHistory } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import { useHomeStyles } from './style';

import PlaceCard from '../../components/PlaceCard'
import Map from '../../components/Map'
import Locations from '../Locations'

import hospital from '../../assets/hospital.jpg'

export default function Home() {
  const inputRef = useRef();
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [radius, setRadius] = useState('')
  const history = useHistory();
  const classes = useHomeStyles();


  const handleSetGeoFencingRadius = (e) => {
    setRadius(e.target.value)
  }

  const handleGetHospitals = (e) => {
    e.preventDefault();
    history.push({
      pathname: '/locations',
      state: {
        longitude: longitude,
        latitude: latitude,
        radius: radius
      }
    })

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
        <form
          noValidate
          autoComplete="off"
          className={classes.formContainer}>
          <div className={classes.inputContainer}>
            <label className={classes.inputLabel}>Location</label>
            <input
              type="text"
              ref={inputRef}
              className={classes.bigInputField}
              placeholder="Enter a location" />
          </div>
          <div className={classes.inputContainer}>
            <label className={classes.inputLabel}>Geo-fencing Radius</label>
            <input
              type="text"
              onChange={handleSetGeoFencingRadius}
              className={classes.smallInputField}
              placeholder="Radius" />
          </div>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleGetHospitals}>
            Search
          </Button>
        </form>

      </Container>
      {/* <Locations
        ref={mapRef}
        hospitalsDescription={hospitalsDescription} /> */}
    </React.Fragment>
  );
}

