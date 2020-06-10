import { useState } from 'react';

const useParameters = () => {
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)
    const [radius, setRadius] = useState(null)
    const [showMap, setShowMap] = useState(false)
    const [facility, setFacility] = useState('')
    const [requestDetails, setRequestDetails] = useState()

    const handleGetHospitals = (latitude: number, longitude: number, radius: number, facility: string, requestDetails: any) => {
        setLatitude(latitude)
        setLongitude(longitude)
        setRadius(radius)
        setFacility(facility)
        setShowMap(true)
        setRequestDetails(requestDetails)
    }

    const handleReturnToSearchPage = () => {
        setShowMap(false)
    }

    return { latitude, longitude, radius, showMap, facility, requestDetails, handleGetHospitals, handleReturnToSearchPage }

}

export default useParameters;