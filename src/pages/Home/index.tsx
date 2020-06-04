
import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { useHomeStyles } from './style';
import hospital from '../../assets/hospital.jpg';
import GoogleSearchTab from '../../components/GoogleSearchTab';


export default function Home() {
  const history = useHistory();
  const classes = useHomeStyles();

  const handleGetHospitals = (latitude, longitude, radius) => {
    history.push({
      pathname: '/locations',
      state: {
        longitude: longitude,
        latitude: latitude,
        radius: radius
      }
    })

  }

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
        <GoogleSearchTab onSubmit={handleGetHospitals} />
      </Container>
    </React.Fragment>
  );
}

