import { makeStyles } from '@material-ui/core/styles';

export const useLocationsStyles = makeStyles({
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
})