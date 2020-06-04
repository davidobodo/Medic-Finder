import { makeStyles } from '@material-ui/core/styles';

export const useGoogleSearchTabStyles = makeStyles({
    formContainer: {
        display: 'flex',
        alignItems: 'flex-end'
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    inputLabel: {
        fontSize: '24px',
        paddingLeft: '18px',
        color: '#fff',
        fontWeight: 200
    },
    bigInputField: {
        fontSize: '18px',
        padding: '20px',
        borderRadius: '10px',
        width: '600px',
        marginRight: '30px',
        border: '1px solid'
    },
    smallInputField: {
        fontSize: '18px',
        padding: '20px',
        borderRadius: '10px',
        width: '300px',
        marginRight: '30px',
        border: '1px solid'
    },
    button: {
        padding: '20px 40px',
        borderRadius: '10px'
    }
})