import { makeStyles } from '@material-ui/core/styles';

export const useLocationsStyles = makeStyles(theme => ({
    container: {
        height: 'calc(100vh - 80px);',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        top: '80px',
        width: '100%',
        backgroundColor: '#F5F5F9',
        animationName: `$myEffect`,
        animationDuration: '2s',
        animationDirection: 'normal',
        animationTimingFunction: 'ease-in-out',
        animationFillMode: 'forwards',
        // '@keyframes slideRight': {
        //     'from': { opacity: 0 },
        //     'to': { opacity: 1 }
        // },
        // '@keyframes myEffect': {
        //     '0%': {
        //         opacity: 0
        //     },
        //     '100%': {
        //         opacity: 1
        //     }
        // }
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
        borderRight: '1px solid rgba(0,0,0,0.1)',
        overflow: 'scroll',
        paddingTop: '30px'
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
}))