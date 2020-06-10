import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import Layout from '../../components/Layout';
import Table from '../../components/Table';
import Typography from '@material-ui/core/Typography';
import { firestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import Locations from '../../components/Locations';
import { useHistoryPageStyles } from './style';
import useParameters from '../../components/customHooks/useParameters';


const HistoryPage = () => {
    const classes = useHistoryPageStyles();
    const searches = useSelector(state => state.firestore.ordered.searches)
    const { latitude, longitude, radius, showMap, facility, requestDetails, handleGetHospitals, handleReturnToSearchPage } = useParameters();

    return (
        <Layout>
            <div className={classes.root}>
                <Typography variant="h3" component="h1" className={classes.header}>Past Searches</Typography>
                <Table rows={searches} onSearch={handleGetHospitals} />
                {showMap && <Locations requestDetails={requestDetails} latitude={latitude} longitude={longitude} radius={radius} facility={facility} onReturn={handleReturnToSearchPage} />}
            </div>
        </Layout>
    )
}

export default firestoreConnect(() => [{ collection: 'searches', orderBy: ['searchedAt', 'desc'] }])(HistoryPage);