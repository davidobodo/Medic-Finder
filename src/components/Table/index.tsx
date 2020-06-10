import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { useStyles } from './style';
import LinearProgress from '@material-ui/core/LinearProgress';


type SimpleTableProps = {
    rows: any,
    onSearch: any
}


const SimpleTable: React.FC<SimpleTableProps> = ({ rows, onSearch }) => {
    const classes = useStyles();

    const handleStartSearch = (coordinates, facility, rad, place) => {
        const searchId = uuidv4();
        const { latitude, longitude } = coordinates;
        const requestDetails = {
            searchPlace: place,
            searchFacility: facility,
            searchRadius: rad,
            searchCoordinates: {
                latitude,
                longitude
            },
            searchedAt: new Date(),
            searchId: searchId
        }
        onSearch(latitude, longitude, rad, facility, requestDetails)
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow className={classes.head}>
                        <TableCell>Location</TableCell>
                        <TableCell align="left">Facility</TableCell>
                        <TableCell align="left">Geo-Fencing Radius(km)</TableCell>
                        <TableCell align="left">Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows
                        ? rows.map((row) => {
                            const { searchPlace, searchFacility, searchRadius, searchCoordinates, searchedAt, searchId } = row;
                            return <TableRow
                                key={searchId}
                                onClick={() => handleStartSearch(
                                    searchCoordinates,
                                    searchFacility,
                                    searchRadius,
                                    searchPlace,
                                )}>
                                <TableCell component="th" scope="row">
                                    <div className={classes.bullet}></div>
                                    {row.searchPlace}
                                </TableCell>
                                <TableCell align="left">{row.searchFacility}</TableCell>
                                <TableCell align="left">{row.searchRadius / 1000}</TableCell>
                                <TableCell align="left">{moment(searchedAt.toDate()).calendar()}</TableCell>
                            </TableRow>
                        })
                        : (<TableRow>
                            <TableCell>
                                <div className={classes.linearLoader} >
                                    <LinearProgress />
                                </div>
                            </TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>)
                    }
                </TableBody>

            </Table>
        </TableContainer>
    );
}

export default SimpleTable
