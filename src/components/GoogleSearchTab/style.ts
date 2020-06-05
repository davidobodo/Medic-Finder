import { makeStyles } from '@material-ui/core/styles';

export const useGoogleSearchTabStyles = makeStyles(theme => ({
    formContainer: {
        display: 'flex',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '100%'
        },
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            marginBottom: '20px',
            '&:nth-child(2)': {
                marginBottom: '40px',
            }
        },
    },
    inputLabel: {
        fontSize: '24px',
        paddingLeft: '18px',
        color: '#fff',
        fontWeight: 200,
        [theme.breakpoints.down('sm')]: {
            fontSize: '18px',
            marginBottom: '10px'
        },
    },
    bigInputField: {
        fontSize: '18px',
        padding: '20px',
        borderRadius: '10px',
        width: '600px',
        marginRight: '30px',
        border: '1px solid',
        [theme.breakpoints.down('md')]: {
            width: '80%',
            maxWidth: '600px'
        },
        [theme.breakpoints.down('sm')]: {
            padding: '12px',
            fontSize: '13px',
            width: '100%'
        },
    },
    smallInputField: {
        fontSize: '18px',
        padding: '20px',
        borderRadius: '10px',
        width: '300px',
        marginRight: '30px',
        border: '1px solid',
        [theme.breakpoints.down('md')]: {
            width: '80%',
            maxWidth: '300px'
        },
        [theme.breakpoints.down('sm')]: {
            padding: '12px',
            fontSize: '13px',
            width: '100%'
        },
    },
    button: {
        padding: '20px 40px',
        borderRadius: '10px',
        [theme.breakpoints.down('sm')]: {
            padding: '8px 40px',
            fontSize: '13px'
        },
    }
}))