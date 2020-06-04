import { makeStyles } from '@material-ui/core/styles';

export const useAppStyles = makeStyles({
    topContainer: {
        backgroundColor: '#F0F8FF',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: '36px'
    },
    bottomContainer: {
        height: '100vh',
    },
    leftColumn: {
        height: '100%',
        borderRight: '1px solid #000',
        overflow: 'scroll'
    },
    rightColumn: {
        height: '100%'
    },
    formContainer: {
        display: 'flex',
        alignItems: 'flex-end'
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    bigInputField: {
        fontSize: '24px',
        padding: '20px',
        borderRadius: '10px',
        width: '600px',
        marginRight: '30px'
    },
    smallInputField: {
        fontSize: '24px',
        padding: '20px',
        borderRadius: '10px',
        width: '300px',
        marginRight: '30px'
    },
    button: {
        padding: '24px 40px',
        borderRadius: '10px'
    }
})