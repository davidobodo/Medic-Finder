
import React from 'react'

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { useAppStyles } from './AppStyles';

import PlaceCard from './components/PlaceCard'
import Map from './components/Map'

export default function App() {

  const classes = useAppStyles();

  const place = { lat: -34.397, lng: 150.644 };


  return (
    <React.Fragment>
      <Container maxWidth={false} className={classes.topContainer}>
        <form noValidate autoComplete="off">
          <Typography component="h1" className={classes.title}>Find Hospitals</Typography>
          <TextField id="outlined-basic" label="Enter your location" variant="outlined" />
        </form>
      </Container>
      <Grid container spacing={0} className={classes.bottomContainer}>
        <Grid item xs={4} className={classes.leftColumn}>
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
        </Grid>
        <Grid item xs={8} className={classes.rightColumn}>
          <Map center={place} zoom={16} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

