import React, {useState, useRef, useEffect} from "react";
import {useSelector} from "react-redux";
import {v4 as uuidv4} from "uuid";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import MainSelect from "../MainSelect";

import {useGoogleSearchTabStyles} from "./style";
import {distances, facilities} from "./constants";

const GoogleSearchTab = ({onSubmit}) => {
	const classes = useGoogleSearchTabStyles();
	const inputRef = useRef(null);
	const [latitude, setLatitude] = useState(null);
	const [longitude, setLongitude] = useState(null);
	const [geoFencingRadius, setGeoFencingRadius] = useState(null);
	const [errSelect, setErrSelect] = useState(false);
	const [errInput, setErrInput] = useState(false);
	const [facility, setFacility] = useState("");
	const userId = useSelector((state) => state.auth.userId);

	const handleSetGeoFencingRadius = (rad: number) => {
		setGeoFencingRadius(rad);
		setErrSelect(false);
	};

	const handleSetFacility = (facility: string) => {
		setFacility(facility);
	};

	const handleValidateInputs = () => {
		let hasErr = false;
		if (!geoFencingRadius) {
			hasErr = true;
			setErrSelect(true);
		}
		if (!latitude || !longitude) {
			hasErr = true;
			setErrInput(true);
		}
		return hasErr;
	};

	const handleStartSearch = (e: {preventDefault: () => void}) => {
		e.preventDefault();
		const searchId = uuidv4();
		const requestDetails = {
			searchPlace: inputRef.current.value,
			searchFacility: facility,
			searchRadius: geoFencingRadius,
			searchCoordinates: {
				latitude,
				longitude,
			},
			searchAt: new Date(),
			searchId: searchId,
			userId: userId,
		};
		const err = handleValidateInputs();
		if (err) return;
		onSubmit(latitude, longitude, geoFencingRadius, facility, requestDetails);
	};

	//responsible for showing the google autocomplete dropdown
	useEffect(() => {
		const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
			types: ["geocode"],
		});

		console.log(autocomplete);

		autocomplete.addListener("place_changed", function () {
			const place = autocomplete.getPlace();
			const lat = place.geometry.location.lat();
			const lng = place.geometry.location.lng();
			setLatitude(lat);
			setLongitude(lng);
			setErrInput(false);
		});
	}, [inputRef]);

	//responsible for making the input focused immediately component mounts DOM
	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<form noValidate autoComplete="off" className={classes.root}>
			<TextField
				id="standard-full-width"
				label="Location"
				placeholder="Enter a location"
				error={errInput}
				helperText={errInput ? "Please enter a valid location" : ""}
				fullWidth
				type="text"
				inputRef={inputRef}
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<MainSelect
				label="Geo-fencing radius"
				choices={distances}
				error={errSelect}
				errMessage="How far should your search span?"
				onSetValue={(rad: number) => handleSetGeoFencingRadius(rad)}
			/>
			<MainSelect
				label="Facility"
				choices={facilities}
				error={errSelect}
				errMessage="What type of facility should we search?"
				onSetValue={(facility: string) => handleSetFacility(facility)}
			/>
			<Button variant="contained" onClick={handleStartSearch} type="submit">
				Search
			</Button>
		</form>
	);
};

GoogleSearchTab.propTypes = {
	onSubmit: PropTypes.func,
};

export default GoogleSearchTab;
