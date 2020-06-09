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
    rows: any
}

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


const SimpleTable: React.FC<SimpleTableProps> = ({ rows }) => {
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
                    {rows && rows.map((row) => (
                        <TableRow key={row.currentLocation}>
                            <TableCell component="th" scope="row">
                                {row.currentLocation}
                            </TableCell>
                            <TableCell align="right">Hi</TableCell>
                            <TableCell align="right">{row.radius}</TableCell>
                            <TableCell align="right">Hello</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default SimpleTable
