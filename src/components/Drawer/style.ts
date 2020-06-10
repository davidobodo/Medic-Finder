import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    list: {
        width: 250,
        zIndex: 20,
        paddingTop: '30px'
    },
    fullList: {
        width: 'auto',
    },
    hamburger: {
        zIndex: 20,
        width: '25px',
        height: '3px',
        backgroundColor: '#012B69',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        right: '30px',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
        '&:before': {
            content: '""',
            width: '25px',
            height: '3px',
            backgroundColor: '#012B69',
            position: 'absolute',
            transform: 'translateY(-6px)',
        },
        '&:after': {
            content: '""',
            width: '25px',
            height: '3px',
            backgroundColor: '#012B69',
            position: 'absolute',
            transform: 'translateY(6px)'
        }
    },
    logo: {
        fontWeight: 600,
        fontSize: '24px',
        color: '#012B69',
        paddingBottom: '20px',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        marginBottom: '20px',
        paddingLeft: '20px',

        '& a': {
            color: 'inherit',
            textDecoration: 'none'
        },
    },
    linksContainer: {
        '& .MuiListItem-gutters': {
            padding: '0',
        },

        '& a': {
            padding: '20px 45px',
            textDecoration: 'none',
            color: '#000',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            width: '100%',

            '&:hover': {
                backgroundColor: '#f0f6ff'
            },

            '&.active': {
                borderLeft: '5px solid #1175f6',
                backgroundColor: '#f0f6ff',

            }
        }
    }
}));