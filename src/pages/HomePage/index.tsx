import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import GoogleSearchTab from '../../components/GoogleSearchTab';
import Locations from '../../components/Locations';
import Layout from '../../components/Layout';
import useParameters from '../../components/customHooks/useParameters';
import SpinnerWithBackdrop from '../../components/SpinnerWithBackdrop';

import { useHomeStyles } from './style';

const HomePage = () => {
	const classes = useHomeStyles();

	//the useParameter hook abstracts the functionality of retrieving certain details so that the details can be accessed easily in multiple components
	//this is also used in the HistoryPage component
	const {
		latitude,
		longitude,
		radius,
		showMap,
		facility,
		requestDetails,
		isLoading,
		handleGetHospitals,
		handleReturnToSearchPage,
		handleOnFinishLoading
	} = useParameters();

	return (
		<Layout>
			{isLoading && <SpinnerWithBackdrop />}
			<Container maxWidth={false} className={classes.container}>
				<div className={classes.leftColumn}>
					<Typography component="h1" className={classes.title}>
						Find <br />Health Facility
					</Typography>
					<GoogleSearchTab onSubmit={handleGetHospitals} />
				</div>
			</Container>
			{showMap && (
				<Locations
					requestDetails={requestDetails}
					latitude={latitude}
					longitude={longitude}
					radius={radius}
					facility={facility}
					onReturn={handleReturnToSearchPage}
					onFinishLoading={handleOnFinishLoading}
				/>
			)}
		</Layout>
	);
};

export default HomePage;
