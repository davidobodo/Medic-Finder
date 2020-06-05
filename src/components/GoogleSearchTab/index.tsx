import React, { useState, useRef, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { useGoogleSearchTabStyles } from './style';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MainSelect from '../MainSelect';
import TextField from '@material-ui/core/TextField';


const GoogleSearchTab = (props) => {
    const classes = useGoogleSearchTabStyles();
    const inputRef = useRef(null);
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)
    const [geoFencingRadius, setGeoFencingRadius] = useState(null);

    const handleSetGeoFencingRadius = (rad: number) => {
        setGeoFencingRadius(rad)
    }


    const handleStartSearch = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        // inputRef.current.value = '';
        // setGeoFencingRadius('')
        if (!latitude || !longitude || !geoFencingRadius) alert('what the fuck')
        console.log(latitude, longitude)
        console.log(geoFencingRadius)
        props.onSubmit(latitude, longitude, geoFencingRadius)
    }

    useEffect(() => {
        const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
            types: ['geocode']
        })

        autocomplete.addListener('place_changed', function () {
            const place = autocomplete.getPlace();
            const lat = place.geometry.location.lat();
            const lng = place.geometry.location.lng();
            setLatitude(lat)
            setLongitude(lng)
        })

    }, [inputRef])

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <form
            noValidate
            autoComplete="off"
            className={classes.root}>
            {/* <div className={classes.inputContainer}>
                <label className={classes.inputLabel}>Location</label>
                <input
                    type="text"
                    ref={inputRef}
                    className={classes.bigInputField}
                    placeholder="Enter a location" />
            </div> */}
            {/* <div className={classes.inputContainer}>
                <label className={classes.inputLabel}>Geo-fencing Radius</label>
                <input
                    type="text"
                    value={geoFencingRadius}
                    onChange={handleSetGeoFencingRadius}
                    className={classes.smallInputField}
                    placeholder="Radius" />
            </div> */}
            <TextField
                id="standard-full-width"
                label="Location"
                placeholder="Enter a location"
                // helperText="Hello"
                fullWidth
                // margin="normal"
                type="text"
                inputRef={inputRef}
                // className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <MainSelect onSetRadius={(rad: number) => handleSetGeoFencingRadius(rad)} />
            <Button
                variant="contained"
                // className={classes.button}
                onClick={handleStartSearch}
            >
                Search
        </Button>
        </form>
    )
}

export default GoogleSearchTab