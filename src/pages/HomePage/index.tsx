import React, { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useHomeStyles } from './style';
import GoogleSearchTab from '../../components/GoogleSearchTab';
import Locations from '../../components/Locations';
import Layout from '../../components/Layout';
import { storeSearch } from '../../redux/actions';



const HomePage = () => {
  const classes = useHomeStyles();
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [radius, setRadius] = useState(null)
  const [showMap, setShowMap] = useState(false)
  const [facility, setFacility] = useState('')
  const dispatch = useDispatch();

  const handleGetHospitals = (latitude: number, longitude: number, radius: number, facility: string, requestDetails: any) => {
    setLatitude(latitude)
    setLongitude(longitude)
    setRadius(radius)
    setFacility(facility)
    setShowMap(true)
    dispatch(storeSearch(requestDetails))
  }

  const handleReturnToSearchPage = () => {
    setShowMap(false)
  }

  return (
    <Layout>
      <Container maxWidth={false} className={classes.container}>
        <Typography component="h1" className={classes.title}>Find Hospitals</Typography>
        <GoogleSearchTab onSubmit={handleGetHospitals} />
      </Container>
      {showMap && <Locations latitude={latitude} longitude={longitude} radius={radius} facility={facility} onReturn={handleReturnToSearchPage} />}
    </Layout>
  );
}

export default HomePage

