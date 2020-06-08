import React, { useState, Fragment } from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useHomeStyles } from './style';
import GoogleSearchTab from '../../components/GoogleSearchTab';
import Locations from '../../components/Locations';
import Header from '../../components/Header';


const HomePage = () => {
  const classes = useHomeStyles();
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [radius, setRadius] = useState(null)
  const [showMap, setShowMap] = useState(false)

  const handleGetHospitals = (latitude: number, longitude: number, radius: number) => {
    setLatitude(latitude)
    setLongitude(longitude)
    setRadius(radius)
    setShowMap(true)
  }

  const handleReturnToSearchPage = () => {
    setShowMap(false)
  }

  return (
    <Fragment>
      <Header />
      <Container maxWidth={false} className={classes.container}>
        <Typography component="h1" className={classes.title}>Find Hospitals</Typography>
        <GoogleSearchTab onSubmit={handleGetHospitals} />
      </Container>
      {showMap && <Locations latitude={latitude} longitude={longitude} radius={radius} onReturn={handleReturnToSearchPage} />}
    </Fragment>
  );
}

export default HomePage

