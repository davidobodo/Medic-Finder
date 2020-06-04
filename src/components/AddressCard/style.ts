import { makeStyles } from '@material-ui/core/styles';

export const useAddressCardStyles = makeStyles({
    root: {
        minWidth: 275,
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