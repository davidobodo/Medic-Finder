import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


type SimpleTableProps = {
    rows: any,
    onSearch: any
}

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


const SimpleTable: React.FC<SimpleTableProps> = ({ rows, onSearch }) => {
    const classes = useStyles();

    const handleStartSearch = (coordinates, facility, rad, place) => {
        const { latitude, longitude } = coordinates;
        const requestDetails = {
            searchPlace: place,
            searchFacility: facility,
            searchRadius: rad,
            searchCoordinates: {
                latitude,
                longitude
            }
        }
        onSearch(latitude, longitude, rad, facility, requestDetails)
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Location</TableCell>
                        <TableCell align="right">Facility</TableCell>
                        <TableCell align="right">Geo-Fencing Radius</TableCell>
                        <TableCell align="right">Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows && rows.map((row) => {
                        const { searchPlace, searchFacility, searchRadius, searchCoordinates } = row
                        return <TableRow
                            key={row.searchPlace}
                            onClick={() => handleStartSearch(
                                searchCoordinates,
                                searchFacility,
                                searchRadius,
                                searchPlace
                            )}>
                            <TableCell component="th" scope="row">
                                {row.searchPlace}
                            </TableCell>
                            <TableCell align="right">{row.searchFacility}</TableCell>
                            <TableCell align="right">{row.searchRadius}</TableCell>
                            <TableCell align="right">Hello</TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default SimpleTable
