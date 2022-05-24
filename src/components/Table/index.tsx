import React, {useEffect} from "react";
import moment from "moment";
import {v4 as uuidv4} from "uuid";
import {useSelector, useDispatch} from "react-redux";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import LinearProgress from "@material-ui/core/LinearProgress";

import {useStyles} from "./style";
import {SimpleTableProps} from "./type";
import {getSearchResults} from "../../redux/actions/searchesActions";
import {convertTimeStampToDate} from "../../utils";

const SimpleTable: React.FC<SimpleTableProps> = ({onSearch}) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const userId = useSelector((state) => state.auth.userId);
	const searches = useSelector((state) => state.searches.data);

	const handleStartSearch = (coordinates, facility, rad, place) => {
		const searchId = uuidv4();
		const {latitude, longitude} = coordinates;
		const requestDetails = {
			searchPlace: place,
			searchFacility: facility,
			searchRadius: rad,
			searchCoordinates: {
				latitude,
				longitude,
			},
			searchAt: new Date(),
			searchId: searchId,
			userId: userId,
		};
		onSearch(latitude, longitude, rad, facility, requestDetails);
	};

	const dateToNumber = (val) => {
		return new Date(val).getTime();
	};

	const renderSearchFacility = (val) => {
		switch (val) {
			case "Hospitals":
				return "Hospital";
			case "Pharmacy":
				return "Pharmacy";
			case "Medical Offices":
				return "Medical Office";
			case "Clinics":
				return "Clinic";
			default:
				return val;
		}
	};

	const renderSearchResults = () => {
		if (searches?.getSearchResults?.length !== 0) {
			const sorted = searches?.getSearchResults?.sort((a, b) => {
				return dateToNumber(b.searchAt) - dateToNumber(a.searchAt);
			});
			// return searches.getSearchResults.map((row) => {
			return sorted?.map((row) => {
				const {searchPlace, searchFacility, searchRadius, searchCoordinates, searchAt, searchId} = row;

				// const formattedTime = convertTimeStampToDate(searchAt._seconds, searchAt._nanoseconds);
				const newTime = moment(searchAt).format("MMMM Do YYYY, h:mm:ss a");
				return (
					<TableRow key={searchId} onClick={() => handleStartSearch(searchCoordinates, searchFacility, searchRadius, searchPlace)}>
						<TableCell component="th" scope="row">
							<div className={classes.bullet} />
							{row.searchPlace}
						</TableCell>
						<TableCell align="left">{renderSearchFacility(row.searchFacility)}</TableCell>
						<TableCell align="left">{row.searchRadius / 1000}</TableCell>
						{/* <TableCell align="left">{moment(formattedTime).calendar()}</TableCell> */}
						<TableCell align="left">{newTime}</TableCell>
					</TableRow>
				);
			});
		} else {
			return (
				<TableRow>
					<TableCell className={classes.notice}>No searches</TableCell>
					<TableCell />
					<TableCell />
					<TableCell />
				</TableRow>
			);
		}
	};

	useEffect(() => {
		dispatch(getSearchResults(userId));
	}, []);

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow className={classes.head}>
						<TableCell>Location</TableCell>
						<TableCell align="left">Facility</TableCell>
						<TableCell align="left">Geo-Fencing Radius(km)</TableCell>
						<TableCell align="left">Time</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{renderSearchResults()}
					{/* {searches ? (
						renderSearchResults()
					) : (
						<TableRow>
							<TableCell>
								<div className={classes.linearLoader}>
									<LinearProgress />
								</div>
							</TableCell>
							<TableCell />
							<TableCell />
							<TableCell />
						</TableRow>
					)} */}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default SimpleTable;
