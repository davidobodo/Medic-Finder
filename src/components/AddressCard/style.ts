import { makeStyles } from '@material-ui/core/styles';

export const useAddressCardStyles = makeStyles({
    root: {
        minWidth: 275,
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        boxShadow: 'none',
        padding: '18px',
        backgroundColor: '#F5F5F9'
    },

    name: {
        marginBottom: '10px'
    },
    address: {
        marginBottom: '10px',
        fontSize: '20px'
    },
    phoneNumber: {
        marginBottom: '10px'
    }
});