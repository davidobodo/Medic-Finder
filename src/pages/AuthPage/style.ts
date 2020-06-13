import { makeStyles } from '@material-ui/core/styles';

export const useAuthPageStyles = makeStyles(theme => ({
    authPageContainer: {
        display: 'flex',
        height: '100vh',
        minHeight: '900px'
    },
    leftColumn: {
        // backgroundImage: 'linear-gradient(to right, #1175f6, #f0f6ff )',
        // backgroundColor: '#1175f6',
        backgroundColor: '#012B69',
        flex: 1,
        flexBasis: '60%'
    },
    rightColumn: {
        flex: 1,
        padding: '100px',
        flexBasis: '40%',
        display: 'flex',
        alignItems: 'center'

    }

}))