import { makeStyles } from '@material-ui/core/styles';

export const useAppStyles = makeStyles({
    topContainer: {
        backgroundColor: '#F0F8FF',
        height: '100vh',
        display: 'flex',
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
        backgroundColor: 'red',
        height: '100%'
    },
    rightColumn: {
        backgroundColor: 'blue',
        height: '100%'
    },
})