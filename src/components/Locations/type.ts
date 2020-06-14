import React from 'react';

export type LocationProps = {
	hospitalsDescription?: [];
	ref?: React.RefObject<HTMLDivElement>;
	location?: any;
	latitude: number;
	longitude: number;
	radius: string;
	facility: string;
	requestDetails: any;
	onReturn: () => void;
	onFinishLoading: () => void;
};
