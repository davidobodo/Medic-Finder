import { makeStyles } from '@material-ui/core/styles';

export const useAuthPageStyles = makeStyles(theme => ({
    authPageContainer: {
        display: 'flex',
        height: '100vh',
        minHeight: '900px'
    },
    leftColumn: {
        backgroundImage: 'linear-gradient(to right, #1175f6, #f0f6ff )',
        flex: 1
    },
    rightColumn: {
        flex: 1

    }

}))