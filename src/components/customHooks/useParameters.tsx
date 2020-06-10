import { useState } from 'react';

const useParameters = () => {
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)
    const [radius, setRadius] = useState(null)
    const [showMap, setShowMap] = useState(false)
    const [facility, setFacility] = useState('')
    const [requestDetails, setRequestDetails] = useState()
    const [isLoading, setisLoading] = useState(false)

    const handleGetHospitals = (latitude: number, longitude: number, radius: number, facility: string, requestDetails: any) => {
        setLatitude(latitude)
        setLongitude(longitude)
        setRadius(radius)
        setFacility(facility)
        setShowMap(true)
        setRequestDetails(requestDetails)
        setisLoading(true)
    }

    const handleReturnToSearchPage = () => {
        setShowMap(false)
    }

    const handleOnFinishLoading = () => {
        setisLoading(false)
    }

    return { latitude, longitude, radius, showMap, facility, requestDetails, handleGetHospitals, handleReturnToSearchPage, isLoading, handleOnFinishLoading }

}

export default useParameters;