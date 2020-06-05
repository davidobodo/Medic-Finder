import React, { useState, useEffect, useRef } from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useHomeStyles } from './style';
import hospital from '../../assets/hospital.jpg';
import GoogleSearchTab from '../../components/GoogleSearchTab';
import Locations from '../../components/Locations';
import Header from '../../components/Header';


const Home = () => {
  const classes = useHomeStyles();

  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [radius, setRadius] = useState(null)
  const [showMap, setShowMap] = useState(false)

  const handleGetHospitals = (latitude, longitude, radius) => {
    setLatitude(latitude)
    setLongitude(longitude)
    setRadius(radius)
    setShowMap(true)
  }

  const handleReturnToSearchPage = () => {
    // setLatitude(prevState => {
    //   return null
    // }),
    //   setLongitude(null)
    // setRadius(null)
    setShowMap(false)
  }

  return (
    <React.Fragment>
      <Header />
      <Container
        maxWidth={false}
        className={classes.container}
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${hospital})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>

        <Typography component="h1" className={classes.title}>Find Hospitals</Typography>
        <GoogleSearchTab onSubmit={handleGetHospitals} />
      </Container>
      {showMap && <Locations latitude={latitude} longitude={longitude} radius={radius} onReturn={handleReturnToSearchPage} />}
    </React.Fragment>
  );
}

export default Home

