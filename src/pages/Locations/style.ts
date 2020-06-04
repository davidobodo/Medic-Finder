import { makeStyles } from '@material-ui/core/styles';

export const useHomeStyles = makeStyles({
    topContainer: {
        backgroundColor: '#F0F8FF',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./assets/hospital.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    title: {
        fontSize: '110px',
        color: '#fff',
        marginBottom: '100px'

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