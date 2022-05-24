import React from "react";
import {useDispatch} from "react-redux";
import Typography from "@material-ui/core/Typography";

import Layout from "../../components/Layout";
import Table from "../../components/Table";
import Locations from "../../components/Locations";
import useParameters from "../../components/customHooks/useParameters";
import SpinnerWithBackdrop from "../../components/SpinnerWithBackdrop";
import {getSearchResults} from "../../redux/actions/searchesActions";
import {useHistoryPageStyles} from "./style";

const HistoryPage = () => {
	const classes = useHistoryPageStyles();
	const dispatch = useDispatch();
	//the useParameter hook abstracts the functionality of retrieving certain details so that the details can be accessed easily in multiple components
	//this is also used in the HomePage component
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
		handleOnFinishLoading,
	} = useParameters();

	const onReturnToResults = () => {
		dispatch(getSearchResults("12"));
		handleReturnToSearchPage();
	};

	return (
		<Layout>
			{isLoading && <SpinnerWithBackdrop />}
			<div className={classes.root}>
				<Typography variant="h3" component="h1" className={classes.header}>
					Past Searches
				</Typography>
				<Table onSearch={handleGetHospitals} />
				{showMap && (
					<Locations
						requestDetails={requestDetails}
						latitude={latitude}
						longitude={longitude}
						radius={radius}
						facility={facility}
						onReturn={onReturnToResults}
						onFinishLoading={handleOnFinishLoading}
					/>
				)}
			</div>
		</Layout>
	);
};

export default HistoryPage;
