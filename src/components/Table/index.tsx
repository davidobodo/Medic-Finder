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
        backgroundColor: '#1175f6',
        '& .MuiTableCell-head': {
            color: '#fff',
            backgroundColor: '#1175f6',
            fontWeight: '600',
            fontSize: '18px'
        },
        '& .MuiTableCell-body': {
            fontSize: '18px'
        },
        '& .MuiTableRow-root': {
            '&:nth-child(2n)': {
                backgroundColor: '#f0f6ff'
            },
            '&:nth-child(2n+1)': {
                backgroundColor: '#fff'
            }
        },
        '& .MuiTableCell-root': {
            padding: '24px',
            paddingLeft: '50px',

        },
        '& tbody tr.MuiTableRow-root': {
            cursor: 'pointer',
            transition: 'transform 0.2s ease-in-out',

            '&:hover': {
                transform: 'translateX(15px)'
            }
        },
    },

    head: {
    },
    bullet: {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        backgroundColor: '#dadce0',
        display: 'inline-block',
        transform: 'translateX(-25px)'
    }
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
                    <TableRow className={classes.head}>
                        <TableCell>Location</TableCell>
                        <TableCell align="left">Facility</TableCell>
                        <TableCell align="left">Geo-Fencing Radius</TableCell>
                        <TableCell align="left">Date</TableCell>
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
                                <div className={classes.bullet}></div>
                                {row.searchPlace}
                            </TableCell>
                            <TableCell align="left">{row.searchFacility}</TableCell>
                            <TableCell align="left">{row.searchRadius}</TableCell>
                            <TableCell align="left">Hello</TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default SimpleTable
