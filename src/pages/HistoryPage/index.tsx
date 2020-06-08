import React from 'react';
import Layout from '../../components/Layout';
import Table from '../../components/Table';
import { createStyles, lighten, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useHistoryPageStyles = makeStyles(theme => ({
    root: {
        padding: '100px 10vw',
        [theme.breakpoints.down('sm')]: {
            padding: '100px 5vw'
        },
    },
    header: {
        marginBottom: '30px'
    }
}))

const HistoryPage = () => {
    const classes = useHistoryPageStyles();
    return (
        <Layout>
            <div className={classes.root}>
                <Typography variant="h3" component="h1" className={classes.header}>Past Searches</Typography>
                <Table />
            </div>
        </Layout>
    )
}

export default HistoryPage;