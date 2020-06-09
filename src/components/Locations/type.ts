import React from 'react'

export type LocationProps = {
    hospitalsDescription?: [],
    ref?: React.RefObject<HTMLDivElement>,
    location?: any,
    latitude: number,
    longitude: number,
    radius: string,
    onReturn: () => void,
    facility: string
}