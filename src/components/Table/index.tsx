import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(location: string, facility: string, geoFencingRadius: string, date: string) {
    return { location, facility, geoFencingRadius, date };
}

const rows = [
    createData('ogba', 'hospital', '500', '22-07-95'),
    createData('ogba', 'hospital', '500', '22-07-95'),
    createData('ogba', 'hospital', '500', '22-07-95'),
    createData('ogba', 'hospital', '500', '22-07-95'),
    createData('ogba', 'hospital', '500', '22-07-95'),
];

export default function SimpleTable() {
    const classes = useStyles();

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
                    {rows.map((row) => (
                        <TableRow key={row.location}>
                            <TableCell component="th" scope="row">
                                {row.location}
                            </TableCell>
                            <TableCell align="right">{row.facility}</TableCell>
                            <TableCell align="right">{row.geoFencingRadius}</TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
