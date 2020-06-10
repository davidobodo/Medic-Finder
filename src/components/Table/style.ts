import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 650,
        backgroundColor: '#012B69',
        '& .MuiTableCell-head': {
            color: '#fff',
            backgroundColor: '#012B69',
            fontWeight: '600',
            fontSize: '18px'
        },
        '& .MuiTableCell-body': {
            fontSize: '18px',
            [theme.breakpoints.down('md')]: {
                fontSize: '14px',
                whiteSpace: 'nowrap'
            }
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
            paddingLeft: '30px',
            [theme.breakpoints.down('md')]: {
                padding: '16px',
                fontSize: '14px'
            }

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
        marginRight: '20px'
    }
}));