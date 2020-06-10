import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        backdrop: {
            position: 'fixed',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            top: '0',
            zIndex: 10000,
        },
        spinner: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        },
    }),
);

const SpinnerWithBackdrop = () => {
    const classes = useStyles();

    return (
        <div className={classes.backdrop}>
            <div className={classes.spinner}>
                <CircularProgress color="inherit" />
            </div>
        </div>
    );
}

export default SpinnerWithBackdrop