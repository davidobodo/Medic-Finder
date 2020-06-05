import { makeStyles } from '@material-ui/core/styles';

export const useHomeStyles = makeStyles(theme => ({
    container: {
        backgroundColor: '#F0F8FF',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1512677859289-868722942457?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.down('md')]: {
            paddingLeft: '100px',
            paddingRight: '100px'
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '24px',
            paddingRight: '24px'
        },
    },
    title: {
        fontSize: '110px',
        color: '#fff',
        marginBottom: '100px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '54px'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '42px'
        },
    },

}))

