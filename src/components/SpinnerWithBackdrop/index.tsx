import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import { useStyles } from './style';

const SpinnerWithBackdrop = () => {
	const classes = useStyles();

	return (
		<div className={classes.backdrop}>
			<div className={classes.spinner}>
				<CircularProgress color="inherit" />
			</div>
		</div>
	);
};

export default SpinnerWithBackdrop;
