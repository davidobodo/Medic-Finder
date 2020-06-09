import React, { useState, useRef, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { useGoogleSearchTabStyles } from './style';
import MainSelect from '../MainSelect';
import TextField from '@material-ui/core/TextField';

const distances = [
    {
        displayValue: 'Choose radius',
        actualValue: ''
    },
    {
        displayValue: '5km',
        actualValue: 5000
    },
    {
        displayValue: '10km',
        actualValue: 10000
    },
    {
        displayValue: '20km',
        actualValue: 20000
    },
    {
        displayValue: '30km',
        actualValue: 30000
    },
    {
        displayValue: '40km',
        actualValue: 40000
    },
    {
        displayValue: '50km',
        actualValue: 50000
    },
]

const facilities = [
    {
        displayValue: 'Choose facility',
        actualValue: ''
    },
    {
        displayValue: 'Hospitals',
        actualValue: 'Hospitals'
    },
    {
        displayValue: 'Pharmacy',
        actualValue: 'Pharmacy'
    },
    {
        displayValue: 'Clinics',
        actualValue: 'Clinics'
    },
    {
        displayValue: 'Medical Offices',
        actualValue: 'Medical Offices'
    },
]


const GoogleSearchTab = (props) => {
    const classes = useGoogleSearchTabStyles();
    const inputRef = useRef(null);
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)
    const [geoFencingRadius, setGeoFencingRadius] = useState(null);
    const [errSelect, setErrSelect] = useState(false)
    const [errInput, setErrInput] = useState(false)
    const [facility, setFacility] = useState('')

    const handleSetGeoFencingRadius = (rad: number) => {
        setGeoFencingRadius(rad)
        setErrSelect(false)
    }

    const handleSetFacility = (facility: string) => {
        setFacility(facility)
    }

    const handleValidateInputs = () => {
        let hasErr = false;
        if (!geoFencingRadius) {
            hasErr = true;
            setErrSelect(true);
        }
        if (!latitude || !longitude) {
            hasErr = true
            setErrInput(true)
        }
        return hasErr
    }

    const handleStartSearch = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const requestDetails = {
            currentLocation: inputRef.current.value,
            radius: geoFencingRadius
        }
        const err = handleValidateInputs();
        if (err) return
        props.onSubmit(latitude, longitude, geoFencingRadius, facility, requestDetails)
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
            setErrInput(false)
        })

    }, [inputRef])

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <form noValidate autoComplete="off" className={classes.root}>
            <TextField
                id="standard-full-width"
                label="Location"
                placeholder="Enter a location"
                error={errInput}
                helperText={errInput ? 'Please enter a valid location' : ''}
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
                onSetValue={(rad: number) => handleSetGeoFencingRadius(rad)} />
            <MainSelect
                label="Facility"
                choices={facilities}
                error={errSelect}
                errMessage="What type of facility should we search?"
                onSetValue={(facility: string) => handleSetFacility(facility)} />
            <Button variant="contained" onClick={handleStartSearch}>Search</Button>
        </form>
    )
}

export default GoogleSearchTab