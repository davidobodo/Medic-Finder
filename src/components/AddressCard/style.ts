import { makeStyles } from '@material-ui/core/styles';

export const useAddressCardStyles = makeStyles({
    root: {
        minWidth: 275,
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        boxShadow: 'none',
        padding: '18px',
        paddingLeft: '60px',
        backgroundColor: '#F5F5F9',
        display: 'flex',
        alignItems: 'flex-start'
    },
    symbol: {
        width: '100px',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        color: '#fff',
        fontSize: '80px',
        marginRight: '20px',
        flexShrink: 0
    },
    rightColumn: {

    },
    name: {
        marginBottom: '10px',
        fontWeight: 500,
    },
    address: {
        marginBottom: '10px',
        fontSize: '18px'
    },
    phoneNumber: {
        marginBottom: '10px'
    }
});