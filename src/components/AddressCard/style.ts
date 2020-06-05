import { makeStyles } from '@material-ui/core/styles';

export const useAddressCardStyles = makeStyles(theme => ({
    root: {
        minWidth: 275,
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        boxShadow: 'none',
        padding: '18px',
        paddingLeft: '60px',
        backgroundColor: '#F5F5F9',
        display: 'flex',
        alignItems: 'flex-start',
        [theme.breakpoints.down('md')]: {
            paddingLeft: '18px'
        },
    },
    symbol: {
        width: '100px',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2E3F8',
        color: '#fff',
        fontSize: '80px',
        marginRight: '20px',
        flexShrink: 0,
        [theme.breakpoints.down('md')]: {
            width: '80px',
            height: '80px',
            fontSize: '60px',
        },
    },
    name: {
        marginBottom: '10px',
        fontWeight: 500,
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
        },
    },
    address: {
        marginBottom: '10px',
        fontSize: '18px',
        [theme.breakpoints.down('md')]: {
            fontSize: '12px',
        },
    }
}));