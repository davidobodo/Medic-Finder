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
        height: '100%',
        borderRight: '1px solid #000',
        overflow: 'scroll'
    },
    rightColumn: {
        height: '100%'
    },
})