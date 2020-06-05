import { makeStyles } from '@material-ui/core/styles';

export const useLocationsStyles = makeStyles({
    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        top: '80px',
        width: '100%',
        backgroundColor: '#F5F5F9'
    },
    header: {
        backgroundColor: 'rgba(0,0,0,1)',
        padding: '50px',
        paddingBottom: '60px',
        display: 'flex',
        justifyContent: 'center'
    },
    body: {
        flex: '1',
        overflow: 'scroll'
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
    link: {
        position: 'fixed',
        zIndex: 100,
        right: '10vw',
        top: '10px',
        padding: '20px 40px',
        borderRadius: '10px',
    }
})