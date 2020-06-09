import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import Layout from '../../components/Layout';
import Table from '../../components/Table';
import { createStyles, lighten, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { firestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { storeSearch } from '../../redux/actions';
import Locations from '../../components/Locations';

type HistoryPageProps = {

}

const useHistoryPageStyles = makeStyles(theme => ({
    root: {
        padding: '100px 10vw',
        [theme.breakpoints.down('sm')]: {
            padding: '100px 5vw'
        },
    },
    header: {
        marginBottom: '30px'
    }
}))

const HistoryPage: React.FC<HistoryPageProps> = () => {
    const classes = useHistoryPageStyles();
    const searches = useSelector(state => state.firestore.ordered.searches)

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
            <div className={classes.root}>
                <Typography variant="h3" component="h1" className={classes.header}>Past Searches</Typography>
                <Table rows={searches} onSearch={handleGetHospitals} />
                {showMap && <Locations latitude={latitude} longitude={longitude} radius={radius} facility={facility} onReturn={handleReturnToSearchPage} />}
            </div>
        </Layout>
    )
}

export default firestoreConnect(() => ['searches'])(HistoryPage);