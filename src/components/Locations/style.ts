import { makeStyles } from '@material-ui/core/styles';

export const useLocationsStyles = makeStyles(theme => ({
    '@keyframes myEffect': {
        '0%': {
            opacity: 0
        },
        '100%': {
            opacity: 1
        }
    },
    container: {
        height: 'calc(100vh - 60px);',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        top: '60px',
        width: '100%',
        backgroundColor: '#F5F5F9',
        animationName: `$myEffect`,
        animationDuration: '1s',
        animationDirection: 'normal',
        animationTimingFunction: 'ease-in-out',
        animationFillMode: 'forwards',
    },
    linkContainer: {
        position: 'fixed',
        zIndex: 100,
        right: '10vw',
        top: '0px',
        padding: '20px 40px',
        borderRadius: '10px',
    },
    link: {
        color: '#330E4E',
        fontSize: '12px'
    },
    body: {
        flex: '1',
        overflow: 'scroll'
    },
    leftColumn: {
        height: '100%',
        borderRight: '1px solid rgba(0,0,0,0.1)',
        overflow: 'scroll',
    },
    rightColumn: {
        height: '100%',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    }
}))