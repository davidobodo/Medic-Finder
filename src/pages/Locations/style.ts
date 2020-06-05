import { makeStyles } from '@material-ui/core/styles';

export const useLocationsStyles = makeStyles({
    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
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
})