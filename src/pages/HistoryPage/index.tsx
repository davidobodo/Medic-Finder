import React from 'react';
import Layout from '../../components/Layout';
import Table from '../../components/Table';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import Locations from '../../components/Locations';
import { useHistoryPageStyles } from './style';
import useParameters from '../../components/customHooks/useParameters';
import SpinnerWithBackdrop from '../../components/SpinnerWithBackdrop';


const HistoryPage = () => {
    const classes = useHistoryPageStyles();
    const { latitude, longitude, radius, showMap, facility, requestDetails, handleGetHospitals, handleReturnToSearchPage, isLoading, handleOnFinishLoading } = useParameters();
    return (
        <Layout>
            {isLoading && <SpinnerWithBackdrop />}
            <div className={classes.root}>
                <Typography variant="h3" component="h1" className={classes.header}>Past Searches</Typography>
                <Table rows='' onSearch={handleGetHospitals} />
                {showMap && <Locations
                    requestDetails={requestDetails}
                    latitude={latitude}
                    longitude={longitude}
                    radius={radius}
                    facility={facility}
                    onReturn={handleReturnToSearchPage}
                    onFinishLoading={handleOnFinishLoading} />}
            </div>
        </Layout>
    )
}

export default HistoryPage;